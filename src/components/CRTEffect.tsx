// import type { ReactNode } from 'react';
// import React, { useEffect, useState } from 'react';
// import CRTGlass from './CRTGlass';

// interface CRTEffectProps {
//   children: ReactNode;
//   // Adding props to control the glass distortion
//   distortionAmount?: number;
//   distortionRadius?: number;
//   vignette?: number;
//   reflectionStrength?: number;
// }

// const CRTEffect: React.FC<CRTEffectProps> = ({ 
//   children, 
//   distortionAmount = 1.2,  // Controls bulging at screen edges (0.5-2.0 recommended)
//   distortionRadius = 1.2,  // Controls where distortion begins (0.8-1.5 recommended)
//   vignette = 0.5,          // Controls edge darkening (0.3-0.8 recommended)
//   reflectionStrength = 0.4 // Controls glass reflections (0.2-0.6 recommended)
// }) => {
//   // Add state to allow user to adjust parameters in development
//   const [params, setParams] = useState({
//     distortionAmount,
//     distortionRadius,
//     vignette,
//     reflectionStrength
//   });

//   // Update params when props change
//   useEffect(() => {
//     setParams({
//       distortionAmount,
//       distortionRadius,
//       vignette,
//       reflectionStrength
//     });
//   }, [distortionAmount, distortionRadius, vignette, reflectionStrength]);

//   // Define min and max values for each parameter
//   const paramRanges = {
//     distortionAmount: { min: 0, max: 3, step: 0.1 },
//     distortionRadius: { min: 0.5, max: 3, step: 0.1 },
//     vignette: { min: 0, max: 1, step: 0.1 },
//     reflectionStrength: { min: 0, max: 1, step: 0.1 }
//   };

//   // Handle parameter changes
//   const handleParamChange = (param: string, value: number) => {
//     setParams(prev => ({
//       ...prev,
//       [param]: value
//     }));
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-zinc-800 p-5 font-mono">
//       <div className="relative w-[90vw] max-w-4xl bg-zinc-900 rounded-2xl shadow-[0_0_50px_rgba(0,255,0,0.1)] p-8 overflow-hidden">
//         <div className="relative bg-zinc-900 rounded-lg overflow-hidden aspect-[4/3] shadow-[inset_0_0_10px_rgba(0,0,0,0.8)]">
//           {/* Wrap all content with the CRT glass effect */}
//           <CRTGlass
//             distortionAmount={params.distortionAmount}
//             distortionRadius={params.distortionRadius}
//             vignette={params.vignette}
//             reflectionStrength={params.reflectionStrength}
//             className="z-100"
//           >
//             {/* Actual content */}
//             <div className="relative p-5 text-[#33ff33] min-h-[60vh] overflow-y-auto shadow-[0_0_5px_rgba(51,255,51,0.7)] z-10">
//               {children}
//             </div>
            
//             {/* Scanlines and other 2D effects */}
//             <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_50%,rgba(0,0,0,0.3)_50%)] bg-[length:100%_4px] pointer-events-none animate-scanlines z-20"></div>
//             <div className="absolute top-0 left-0 w-full h-full opacity-15 bg-white pointer-events-none animate-flicker z-20"></div>
//           </CRTGlass>
//         </div>
        
//         {/* TV Controls */}
//         <div className="flex justify-between px-5 py-3">
//           <div className="w-5 h-5 bg-red-700 rounded-full border-2 border-zinc-800"></div>
//           <div className="flex gap-3">
//             <div className="w-4 h-4 bg-zinc-700 rounded-full border-2 border-zinc-800"></div>
//             <div className="w-4 h-4 bg-zinc-700 rounded-full border-2 border-zinc-800"></div>
//           </div>
//         </div>
        
//         {/* Parameter controls */}
//         <div className="mt-4 p-3 bg-black text-green-500 rounded border border-green-500">
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block mb-1">Distortion Amount: {params.distortionAmount.toFixed(1)}</label>
//               <input 
//                 type="range" 
//                 min={paramRanges.distortionAmount.min} 
//                 max={paramRanges.distortionAmount.max} 
//                 step={paramRanges.distortionAmount.step} 
//                 value={params.distortionAmount} 
//                 onChange={e => handleParamChange('distortionAmount', parseFloat(e.target.value))}
//                 className="w-full accent-green-500 bg-zinc-800"
//               />
//             </div>
//             <div>
//               <label className="block mb-1">Distortion Radius: {params.distortionRadius.toFixed(1)}</label>
//               <input 
//                 type="range" 
//                 min={paramRanges.distortionRadius.min} 
//                 max={paramRanges.distortionRadius.max} 
//                 step={paramRanges.distortionRadius.step} 
//                 value={params.distortionRadius} 
//                 onChange={e => handleParamChange('distortionRadius', parseFloat(e.target.value))}
//                 className="w-full accent-green-500 bg-zinc-800"
//               />
//             </div>
//             <div>
//               <label className="block mb-1">Vignette: {params.vignette.toFixed(1)}</label>
//               <input 
//                 type="range" 
//                 min={paramRanges.vignette.min} 
//                 max={paramRanges.vignette.max} 
//                 step={paramRanges.vignette.step} 
//                 value={params.vignette} 
//                 onChange={e => handleParamChange('vignette', parseFloat(e.target.value))}
//                 className="w-full accent-green-500 bg-zinc-800"
//               />
//             </div>
//             <div>
//               <label className="block mb-1">Reflection: {params.reflectionStrength.toFixed(1)}</label>
//               <input 
//                 type="range" 
//                 min={paramRanges.reflectionStrength.min} 
//                 max={paramRanges.reflectionStrength.max} 
//                 step={paramRanges.reflectionStrength.step} 
//                 value={params.reflectionStrength} 
//                 onChange={e => handleParamChange('reflectionStrength', parseFloat(e.target.value))}
//                 className="w-full accent-green-500 bg-zinc-800"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CRTEffect;