// import { PerspectiveCamera } from '@react-three/drei';
// import { Canvas, useFrame, useThree } from '@react-three/fiber';
// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';

// interface CRTGlassProps {
//   children: React.ReactNode;
//   // Optional props to control the effect
//   distortionAmount?: number;
//   distortionRadius?: number;
//   vignette?: number;
//   reflectionStrength?: number;
//   className?: string;
// }

// // This component creates the curved glass effect
// function CurvedScreenGlass({
//   distortionAmount = 0.8,
//   vignette = 0.5,
//   reflectionStrength = 0.3
// }) {
//   const meshRef = useRef<THREE.Mesh>(null);
  
//   useFrame((state) => {
//     if (meshRef.current) {
//       // Animate subtle glass movement
//       meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.03;
//       meshRef.current.rotation.x = Math.cos(state.clock.getElapsedTime() * 0.1) * 0.03;
//     }
//   });

//   // Make the curve more pronounced
//   const curveDepth = 0.7 * distortionAmount;

//   return (
//     <mesh ref={meshRef} position={[0, 0, 0.15]} scale={[1.1, 0.85, curveDepth]}>
//       {/* More pronounced curvature for visible effect */}
//       <sphereGeometry args={[1.8, 64, 64, 0, Math.PI * 2, 0, Math.PI * 0.4]} />
//       <meshPhysicalMaterial
//         color="#111111"
//         metalness={0.2}
//         roughness={0.2}
//         clearcoat={1.0}
//         clearcoatRoughness={0.1}
//         transmission={0.9}
//         thickness={1.5}
//         reflectivity={0.2 + reflectionStrength * 0.6}
//         ior={1.45}
//         transparent={true}
//         opacity={0.25} // Increased opacity to make effect more visible
//         side={THREE.BackSide}
//         depthWrite={false}
//       />
//     </mesh>
//   );
// }

// // Enhanced vignette and edge distortion effect
// function EdgeEffect({ distortionAmount = 0.8 }) {
//   const meshRef = useRef<THREE.Mesh>(null);
  
//   useFrame((state) => {
//     if (meshRef.current) {
//       // More pronounced movement at the edges
//       meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.05;
//       meshRef.current.rotation.x = Math.cos(state.clock.getElapsedTime() * 0.1) * 0.05;
      
//       // Scale breathing effect to enhance the bulge
//       const scale = 1.05 + Math.sin(state.clock.getElapsedTime() * 0.2) * 0.01 * distortionAmount;
//       meshRef.current.scale.set(scale, scale * 0.8, 0.5);
//     }
//   });
  
//   return (
//     <mesh ref={meshRef} position={[0, 0, 0]} rotation={[0, 0, 0]}>
//       <sphereGeometry args={[2.05, 64, 64, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
//       <meshBasicMaterial 
//         color="#000000" 
//         transparent={true} 
//         opacity={0.25 * distortionAmount} // Increased opacity
//         side={THREE.BackSide}
//         depthWrite={false}
//       />
//     </mesh>
//   );
// }

// // Light reflections that move across the glass
// function GlassReflection({ reflectionStrength = 0.3 }) {
//   const lightRef1 = useRef<THREE.Mesh>(null);
//   const lightRef2 = useRef<THREE.Mesh>(null);
  
//   useFrame((state) => {
//     if (lightRef1.current && lightRef2.current) {
//       // Primary highlight
//       lightRef1.current.position.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 1.5;
//       lightRef1.current.position.y = Math.cos(state.clock.getElapsedTime() * 0.08) * 0.6;
      
//       // Secondary subtle highlight
//       lightRef2.current.position.x = Math.cos(state.clock.getElapsedTime() * 0.12) * 1.2;
//       lightRef2.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.4;
//     }
//   });
  
//   // Higher opacity for more visible effect
//   const opacity = 0.15 * reflectionStrength;
  
//   return (
//     <>
//       <mesh ref={lightRef1} position={[0, 0, 0.2]} rotation={[0, 0, Math.PI * 0.25]}>
//         <planeGeometry args={[1.5, 0.3]} />
//         <meshBasicMaterial 
//           color="#ffffff" 
//           transparent={true} 
//           opacity={opacity}
//           blending={THREE.AdditiveBlending} 
//           depthWrite={false}
//         />
//       </mesh>
      
//       <mesh ref={lightRef2} position={[0, 0, 0.2]} rotation={[0, 0, -Math.PI * 0.15]}>
//         <planeGeometry args={[0.8, 0.2]} />
//         <meshBasicMaterial 
//           color="#ffffff" 
//           transparent={true} 
//           opacity={opacity * 0.7}
//           blending={THREE.AdditiveBlending} 
//           depthWrite={false}
//         />
//       </mesh>
//     </>
//   );
// }

// // Bulge effect at the screen edges - more visible
// function ScreenBulge({ distortionAmount = 0.8, distortionRadius = 1.2 }) {
//   const meshRef = useRef<THREE.Mesh>(null);
  
//   // Calculate torus radius based on distortion parameters
//   const torusRadius = 1.9;
//   const tubeRadius = 0.4 * distortionAmount; // Increased tube radius
  
//   // Fix the position type by explicitly providing a tuple of 3 numbers
//   const position: [number, number, number] = [0, 0, 0.1 * distortionRadius];
  
//   return (
//     <mesh ref={meshRef} position={position} scale={[1.05, 0.8, distortionAmount * 0.6]}>
//       <torusGeometry args={[torusRadius, tubeRadius, 16, 100]} />
//       <meshBasicMaterial 
//         color="#111111" 
//         transparent={true} 
//         opacity={0.25 * distortionAmount} // Increased opacity
//         side={THREE.FrontSide}
//         depthWrite={false}
//       />
//     </mesh>
//   );
// }

// // Add a simplified corner darkening effect
// function CornerVignette({ vignette = 0.5 }) {
//   // Use positions to create multiple layers of darkening at the corners
//   const positions: Array<[number, number, number]> = [
//     [0, 0, 0.3],
//     [0, 0, 0.29],
//   ];
  
//   return (
//     <>
//       {positions.map((pos, index) => (
//         <mesh key={index} position={pos}>
//           <planeGeometry args={[4, 3]} />
//           <meshBasicMaterial 
//             color="#000000"
//             transparent={true}
//             opacity={0.1 * vignette * (index + 1)}
//             depthWrite={false}
//           />
//         </mesh>
//       ))}
//     </>
//   );
// }

// // Custom renderer setup
// function CustomRenderer() {
//   const { gl } = useThree();
  
//   useEffect(() => {
//     if (gl) {
//       // Configure renderer for glass effect
//       gl.setClearColor(0x000000, 0);
//       gl.outputColorSpace = THREE.SRGBColorSpace;
      
//       if ('toneMapping' in gl) {
//         // @ts-ignore - Property exists in runtime but not in types
//         gl.toneMapping = THREE.ACESFilmicToneMapping;
//         // @ts-ignore
//         gl.toneMappingExposure = 1.2; // Increased exposure
//       }
//     }
//   }, [gl]);
  
//   return null;
// }

// // Main component
// export default function CRTGlass({ 
//   children,
//   distortionAmount = 0.8,
//   distortionRadius = 1.2,
//   vignette = 0.5,
//   reflectionStrength = 0.3,
//   className = ''
// }: CRTGlassProps) {
//   return (
//     <div className="">
//       {/* Content first */}
//       <div className="absolute inset-0">
//         {children}
//       </div>
      
//       {/* Glass effect on top */}
//       <div className=" inset-0 pointer-events-none">
//         <div>
//         <Canvas 
//           dpr={[1, 2]} 
//           camera={{ position: [0, 0, 4], fov: 25 }} 
//           gl={{ 
//             alpha: true, 
//             antialias: true,
//             preserveDrawingBuffer: false,
//             premultipliedAlpha: false,
//           }}
//           style={{ 
//             background: 'transparent',
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             zIndex: className
//           }}
//         >
//           <CustomRenderer />
          
//           {/* Lighting */}
//           <ambientLight intensity={0.5} />
//           <directionalLight position={[5, 5, 5]} intensity={0.4} />
//           <directionalLight position={[-5, -5, 5]} intensity={0.3} />
          
//           {/* Multiple effects for more pronounced visual impact */}
//           <EdgeEffect distortionAmount={distortionAmount} />
//           <CornerVignette vignette={vignette} />
//           <CurvedScreenGlass 
//             distortionAmount={distortionAmount} 
//             vignette={vignette}
//             reflectionStrength={reflectionStrength}
//           />
//           <ScreenBulge 
//             distortionAmount={distortionAmount} 
//             distortionRadius={distortionRadius}
//           />
//           <GlassReflection reflectionStrength={reflectionStrength} />
          
//           <PerspectiveCamera makeDefault position={[0, 0, 4]} />
//         </Canvas>
//         </div>
//       </div>
//     </div>
//   );
// } 