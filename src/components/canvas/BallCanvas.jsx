import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";

const Ball = (props) => {
  const [decal] = useTexture([props.imageUrl]);
  
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={props.hovered ? 3.0 : 2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#ffffff'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, name }) => {
  const [hovered, setHover] = useState(false);

  if (!icon) {
    console.error("No icon prop provided to BallCanvas");
    return null;
  }

  return (
    <div className="relative w-28 h-28 group">
      <Canvas
        frameloop="demand"
        gl={{ preserveDrawingBuffer: true }}
        className="cursor-pointer"
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} />
          <Ball imageUrl={icon} hovered={hovered} />
          <Preload all />
        </Suspense>
      </Canvas>
      
      {/* Hover Tooltip */}
      <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {name}
      </div>
    </div>
  );
};

export default BallCanvas;