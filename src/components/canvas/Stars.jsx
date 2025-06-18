import { useRef, Suspense, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as THREE from 'three';

const Stars = () => {
  const ref = useRef();
  const [positions] = useState(() => {
    const positions = new Float32Array(12000); // Increased star count
    const radius = 6.4; // Slightly larger sphere
    for (let i = 0; i < positions.length; i += 3) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = Math.cbrt(Math.random()) * radius;
      positions[i] = r * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = r * Math.cos(phi);
    }
    return positions;
  });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 12;
    ref.current.rotation.y -= delta / 18;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#f272c8"
        size={0.015} 
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        alphaTest={0.01}
      />
    </Points>
  );
};

const StarsCanvas = () => {
  return (
    <div className="absolute inset-0 z-0 h-full w-full">
      <Canvas 
        camera={{ position: [0, 0, 1], fov: 50 }}
        gl={{ alpha: true }}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;