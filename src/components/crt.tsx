import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef, type JSX } from 'react';
import * as THREE from 'three';
import { Mesh, ShaderMaterial, Texture, WebGLRenderTarget } from 'three';

// We need to import or declare the Shader type
// THREE.ShaderMaterial with uniforms property is what we need
type ShaderWithUniforms = {
    uniforms: {
        [name: string]: { value: Texture | number | null };
    };
    vertexShader: string;
    fragmentShader: string;
};

// Define shader uniform types
interface CRTShaderUniforms {
    tDiffuse: { value: Texture | null };
    time: { value: number };
    distortion: { value: number };
    scanlineIntensity: { value: number };
    scanlineCount: { value: number };
    noiseIntensity: { value: number };
    curvature: { value: number };
    vignette: { value: number };
    brightness: { value: number };
    staticNoise: { value: number };
}

// Custom shader for CRT effect
const CRTShader: {
    uniforms: CRTShaderUniforms;
    vertexShader: string;
    fragmentShader: string;
} = {
    uniforms: {
        tDiffuse: { value: null },
        time: { value: 0.0 },
        distortion: { value: 0.1 },
        scanlineIntensity: { value: 0.5 },
        scanlineCount: { value: 800.0 },
        noiseIntensity: { value: 0.05 },
        curvature: { value: 6.0 },
        vignette: { value: 0.3 },
        brightness: { value: 1.2 },
        staticNoise: { value: 0.1 },
    },
    vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
    fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float time;
    uniform float distortion;
    uniform float scanlineIntensity;
    uniform float scanlineCount;
    uniform float noiseIntensity;
    uniform float curvature;
    uniform float vignette;
    uniform float brightness;
    uniform float staticNoise;
    
    varying vec2 vUv;
    
    float random(vec2 co) {
      return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
    }
    
    void main() {
      // Apply barrel distortion
      vec2 uv = vUv;
      vec2 center = vec2(0.5, 0.5);
      vec2 dist = uv - center;
      float distance = length(dist);
      float distPow = pow(distance, curvature);
      vec2 distUv = uv + (dist / distance) * distPow * distortion;
      
      // Out of bounds check
      if (distUv.x < 0.0 || distUv.x > 1.0 || distUv.y < 0.0 || distUv.y > 1.0) {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        return;
      }
      
      // Base texture
      vec4 texel = texture2D(tDiffuse, distUv);
      
      // Scanlines
      float scanline = sin(distUv.y * scanlineCount * 3.14159) * 0.5 + 0.5;
      scanline = pow(scanline, 1.0) * scanlineIntensity;
      texel.rgb -= scanline;
      
      // Flickering effect
      float flicker = random(vec2(time, 0.0)) * 0.04;
      texel.rgb += flicker;
      
      // Static noise
      float noise = random(distUv * time) * staticNoise;
      texel.rgb += noise;
      
      // Horizontal distortion (occasional)
      float horizontalOffset = sin(time * 10.0 + distUv.y * 30.0) * 0.001;
      if (random(vec2(time, distUv.y)) > 0.99) {
        horizontalOffset *= 10.0;
      }
      texel += texture2D(tDiffuse, vec2(distUv.x + horizontalOffset, distUv.y)) * 0.1;
      
      // Vignette effect
      float vig = distance * vignette;
      texel.rgb *= 1.0 - vig;
      
      // Brightness adjustment
      texel.rgb *= brightness;
      
      // RGB shifting (chromatic aberration)
      float rOffset = 0.001 + sin(time) * 0.0005;
      float gOffset = 0.000;
      float bOffset = -0.001 + sin(time + 1.0) * 0.0005;
      texel.r += texture2D(tDiffuse, distUv + vec2(rOffset, 0.0)).r * 0.1;
      texel.b += texture2D(tDiffuse, distUv + vec2(bOffset, 0.0)).b * 0.1;
      
      gl_FragColor = texel;
    }
  `
};

// TV screen component with CRT shader
function TVScreen(): JSX.Element {
    const meshRef = useRef<Mesh>(null);
    const materialRef = useRef<ShaderWithUniforms | null>(null);
    const time = useRef<number>(0);

    // Create render target for shader
    const renderTarget = useMemo<WebGLRenderTarget>(() => new THREE.WebGLRenderTarget(
        window.innerWidth,
        window.innerHeight,
        { format: THREE.RGBAFormat }
    ), []);

    // Create shader material
    const shaderMaterial = useMemo<ShaderMaterial>(() => {
        return new THREE.ShaderMaterial({
            uniforms: {
                ...CRTShader.uniforms,
                tDiffuse: { value: renderTarget.texture }
            },
            vertexShader: CRTShader.vertexShader,
            fragmentShader: CRTShader.fragmentShader,
        });
    }, [renderTarget]);

    // Update shader uniforms on each frame
    useFrame((state, delta: number) => {
        if (materialRef.current) {
            time.current += delta;
            materialRef.current.uniforms.time.value = time.current;
        }

        // Slight wobble animation for the TV
        if (meshRef.current) {
            meshRef.current.rotation.x = Math.sin(time.current * 0.5) * 0.03;
            meshRef.current.rotation.y = Math.sin(time.current * 0.3) * 0.05 + 0.1;
        }
    });

    return (
        <group>
            {/* TV case */}
            <mesh position={[0, 0, -0.6]}>
                <boxGeometry args={[4.4, 3.4, 2]} />
                <meshStandardMaterial color="#383838" roughness={0.5} />
            </mesh>

            {/* TV screen bezel */}
            <mesh position={[0, 0, 0.05]}>
                <boxGeometry args={[4.2, 3.2, 0.2]} />
                <meshStandardMaterial color="#111111" />
            </mesh>

            {/* TV screen */}
            <mesh ref={meshRef} position={[0, 0, 0.16]}>
                <planeGeometry args={[4, 3]} />
                <meshBasicMaterial
                    ref={materialRef}
                    color="#88ff88"
                    map={new THREE.CanvasTexture(createCanvasTexture())}
                    onBeforeCompile={(shader) => {
                        shader.uniforms = {
                            ...shader.uniforms,
                            ...shaderMaterial.uniforms
                        };
                        shader.fragmentShader = CRTShader.fragmentShader;
                        shader.vertexShader = CRTShader.vertexShader;
                        materialRef.current = shader;
                    }}
                />
            </mesh>

            {/* TV controls/knobs */}
            <mesh position={[1.8, -1.8, 0.6]}>
                <cylinderGeometry args={[0.2, 0.2, 0.1, 16]} />
                <meshStandardMaterial color="#222222" />
            </mesh>
            <mesh position={[1.4, -1.8, 0.6]}>
                <cylinderGeometry args={[0.2, 0.2, 0.1, 16]} />
                <meshStandardMaterial color="#222222" />
            </mesh>
        </group>
    );
}

// Create a canvas texture for the TV
function createCanvasTexture(): HTMLCanvasElement {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 384;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
        throw new Error('Could not get 2D context from canvas');
    }

    // Background
    ctx.fillStyle = '#001100';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add some text
    ctx.fillStyle = '#88ff88';
    ctx.font = '40px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('RETRO CRT TV', canvas.width / 2, canvas.height / 2 - 20);
    ctx.font = '20px monospace';
    ctx.fillText('scanlines and warping effect', canvas.width / 2, canvas.height / 2 + 30);

    return canvas;
}

// Scene lighting
function Lighting(): JSX.Element {
    return (
        <>
            <ambientLight intensity={0.4} />
            <directionalLight position={[10, 10, 5]} intensity={0.8} />
            <directionalLight position={[-10, -10, -5]} intensity={0.2} color="#ffaa00" />
        </>
    );
}

// Main component
export default function RetroCRTTV(): JSX.Element {
    return (
        <div className="">
            <div className="">

                <div className="">
                    <Canvas>
                        <PerspectiveCamera makeDefault position={[0, 0, 6]} />
                        <Lighting />
                        <TVScreen />
                        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
                    </Canvas>
                </div>
            </div>
        </div>
    );
}