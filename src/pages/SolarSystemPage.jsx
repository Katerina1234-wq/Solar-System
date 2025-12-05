import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three";
import Planet from "../components/Planet";
import { Link } from "react-router-dom";

export default function SolarSystemPage() {
  const planets = [
    { name: "Mercury", url: "/models/mercury.glb", distance: 3.5, size: 0.22, speed: 1.2 },
    { name: "Venus", url: "/models/venus.glb", distance: 5, size: 0.3, speed: 1.0 },
    { name: "Earth", url: "/models/earth.glb", distance: 6.2, size: 0.34, speed: 0.8 },
    { name: "Mars", url: "/models/mars.glb", distance: 7.8, size: 0.3, speed: 0.6 },
    { name: "Jupiter", url: "/models/jupiter.glb", distance: 10.5, size: 0.9, speed: 0.45 },
    { name: "Saturn", url: "/models/saturn.glb", distance: 13, size: 0.8, speed: 0.35 },
    { name: "Uranus", url: "/models/uranus.glb", distance: 15.5, size: 0.7, speed: 0.3 },
    { name: "Neptune", url: "/models/neptune.glb", distance: 18, size: 0.65, speed: 0.25 }
  ];

  // Load the background texture
  const bgTexture = useLoader(TextureLoader, "/images/background.jpg");

  return (
    <>
      {/* 3D Canvas */}
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 1
        }}
        camera={{ position: [0, 12, 35], fov: 48 }}
      >
        {/* Sky Sphere */}
        <mesh>
          <sphereGeometry args={[150, 32, 32]} />
          <meshBasicMaterial map={bgTexture} side={2} />
        </mesh>

        <ambientLight intensity={0.6} />
        <pointLight intensity={4} position={[0, 0, 0]} />

        {/* Sun */}
        <Planet url="/models/sun.glb" distance={0} size={0.1} speed={0.14} name="Sun" />

        {/* Other planets */}
        {planets.map((p, index) => (
          <Planet key={index} {...p} />
        ))}

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>

      {/* UI OVERLAY */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 2,
          pointerEvents: "none"
        }}
      >
        {/* LOGO TOP LEFT */}
        <Link to="/home">
          <img
            src="/images/logo.png"
            style={{
              position: "absolute",
              top: "20px",
              left: "20px",
              width: "130px",
              cursor: "pointer",
              pointerEvents: "auto"
            }}
          />
        </Link>

        {/* MENU TOP RIGHT */}
        <Link to="/menu">
          <div
            style={{
              position: "absolute",
              top: "25px",
              right: "35px",
              fontSize: "28px",
              color: "white",
              letterSpacing: "1px",
              cursor: "pointer",
              pointerEvents: "auto"
            }}
          >
            Menu
          </div>
        </Link>

        {/* EXPEDITIONS BOTTOM LEFT */}
        <Link to="/expeditions">
          <div
            style={{
              position: "absolute",
              bottom: "50px",
              left: "35px",
              fontSize: "42px",
              fontWeight: 300,
              color: "white",
              cursor: "pointer",
              pointerEvents: "auto"
            }}
          >
            Expeditions
          </div>
        </Link>

        {/* ALIENS BOTTOM RIGHT */}
        <Link to="/aliens">
          <div
            style={{
              position: "absolute",
              bottom: "50px",
              right: "35px",
              fontSize: "42px",
              fontWeight: 300,
              color: "white",
              cursor: "pointer",
              pointerEvents: "auto"
            }}
          >
            Aliens
          </div>
        </Link>
      </div>
    </>
  );
}
