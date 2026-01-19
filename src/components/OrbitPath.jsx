export default function OrbitPath({ radius }) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <ringGeometry args={[radius - 0.1, radius + 0.1, 128]} />
      <meshBasicMaterial color="white" transparent opacity={0.28} />
    </mesh>
  );
}
