import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface TargetProps {
  position: [number, number, number];
  onHit: () => void;
  speed?: number;
}

const Target: React.FC<TargetProps> = ({ position, onHit, speed = 0.02 }) => {
  const meshRef = useRef<Mesh>(null);
  const [isHit, setIsHit] = useState(false);
  const [bobOffset] = useState(Math.random() * Math.PI * 2);

  useFrame((state) => {
    if (meshRef.current && !isHit) {
      // Floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2 + bobOffset) * 0.5;
      // Rotation animation
      meshRef.current.rotation.y += speed;
    }
  });

  const handleClick = () => {
    if (!isHit) {
      setIsHit(true);
      onHit();
      // Animate target destruction
      if (meshRef.current) {
        meshRef.current.scale.setScalar(0);
      }
    }
  };

  if (isHit) return null;

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={handleClick}
      onPointerOver={() => document.body.style.cursor = 'crosshair'}
      onPointerOut={() => document.body.style.cursor = 'default'}
    >
      {/* Target rings */}
      <cylinderGeometry args={[2, 2, 0.2, 32]} />
      <meshStandardMaterial color="#ff4444" />
      
      {/* Inner ring */}
      <mesh position={[0, 0, 0.11]}>
        <cylinderGeometry args={[1.2, 1.2, 0.05, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      
      {/* Bull's eye */}
      <mesh position={[0, 0, 0.16]}>
        <cylinderGeometry args={[0.6, 0.6, 0.05, 32]} />
        <meshStandardMaterial color="#ff0000" />
      </mesh>
      
      {/* Center dot */}
      <mesh position={[0, 0, 0.21]}>
        <cylinderGeometry args={[0.2, 0.2, 0.05, 16]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
    </mesh>
  );
};

export default Target;