import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Html } from "@react-three/drei";
import OrbitPath from "./OrbitPath";

export default function Planet({ url, distance, size, speed, name }) {
  const { scene } = useGLTF(url);
  const planetRef = useRef();
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += speed * delta;
    if (planetRef.current) planetRef.current.rotation.y += 0.5 * delta;
  });

  return (
    <group ref={groupRef}>
      <OrbitPath radius={distance} />

      <mesh
        ref={planetRef}
        position={[distance, 0, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <primitive object={scene} scale={size} />
      </mesh>

      {hovered && (
        <Html distanceFactor={12} position={[distance, size + 1.1, 0]}>
          <div
            style={{
              padding: "4px 8px",
              color: "white",
              background: "rgba(0,0,0,0.5)",
              borderRadius: "6px",
              fontSize: "14px",
              fontWeight: "bold",
              textShadow: "0 0 4px black"
            }}
          >
            {name}
          </div>
        </Html>
      )}
    </group>
  );
}
