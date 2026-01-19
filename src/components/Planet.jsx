import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import OrbitPath from "./OrbitPath";

export default function Planet({ url, distance, size, speed, name, paused, setHoveredPlanet }) {
  const { scene } = useGLTF(url);
  const planetRef = useRef();
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (!paused) {
      if (groupRef.current) groupRef.current.rotation.y += speed * delta;
      if (planetRef.current) planetRef.current.rotation.y += 0.5 * delta;
    }
  });

  return (
    <group ref={groupRef}>
      <OrbitPath radius={distance} />

      <mesh
        ref={planetRef}
        position={[distance, 0, 0]}
        scale={[size, size, size]}
        onPointerOver={() => {
          setHoveredPlanet(name);           
          document.body.style.cursor = "pointer"; 
        }}
        onPointerOut={() => {
          setHoveredPlanet(null);           
          document.body.style.cursor = "default"; 
        }}
      >
        <primitive object={scene} />
      </mesh>
    </group>
  );
}

