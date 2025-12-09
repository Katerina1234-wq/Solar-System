import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three";
import Planet from "../components/Planet";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";

// Background component that always stays behind everything
function Background({ url }) {
  const texture = useLoader(TextureLoader, url);
  const { camera, viewport } = useThree();
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      // Make the plane follow the camera so it’s always behind
      meshRef.current.position.copy(camera.position);
      meshRef.current.position.z -= 55; // slightly behind camera
    }
  });

  return (
    <mesh ref={meshRef} renderOrder={-1}>
      <planeGeometry args={[viewport.width * 1, viewport.height * 1]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

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

  const [hoverMenu, setHoverMenu] = useState(false);
  const [hoverExpeditions, setHoverExpeditions] = useState(false);
  const [hoverAliens, setHoverAliens] = useState(false);

  return (
    <>
      <Canvas
        style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 1 }}
        camera={{ position: [0, 12, 35], fov: 48 }}
      >
        {/* Background that stays always visible */}
        <Background url="/images/backgroundd.jpg" />

        {/* Lights */}
        <ambientLight intensity={0.6} />
        <pointLight position={[0, 0, 0]} intensity={4} />

        {/* Sun */}
        <Planet url="/models/sun.glb" distance={0} size={0.1} speed={0.14} name="Sun" />

        {/* Planets */}
        {planets.map((p, i) => (
          <Planet key={i} {...p} />
        ))}

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>

      {/* UI overlay */}
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
        <Link to="/home">
          <img
            src="/images/logo.png"
            style={{ position: "absolute", top: "20px", left: "20px", width: "110px", cursor: "pointer", pointerEvents: "auto" }}
          />
        </Link>

        <Link to="/menu">
          <div
            onMouseEnter={() => setHoverMenu(true)}
            onMouseLeave={() => setHoverMenu(false)}
            style={{
              position: "absolute",
              top: "25px",
              right: "35px",
              fontSize: "35px",
              color: hoverMenu ? "#8ADBD5" : "white",
              letterSpacing: "1px",
              cursor: "pointer",
              pointerEvents: "auto",
              transition: "color 0.2s ease"
            }}
          >
            Menu
          </div>
        </Link>

        <Link to="/expeditions">
          <div
            onMouseEnter={() => setHoverExpeditions(true)}
            onMouseLeave={() => setHoverExpeditions(false)}
            style={{
              position: "absolute",
              bottom: "50px",
              left: "35px",
              fontSize: "35px",
              fontWeight: 400,
              color: hoverExpeditions ? "#8ADBD5" : "white",
              cursor: "pointer",
              pointerEvents: "auto",
              transition: "color 0.2s ease"
            }}
          >
            Expeditions
          </div>
        </Link>

        <Link to="/aliens">
          <div
            onMouseEnter={() => setHoverAliens(true)}
            onMouseLeave={() => setHoverAliens(false)}
            style={{
              position: "absolute",
              bottom: "50px",
              right: "35px",
              fontSize: "35px",
              fontWeight: 400,
              color: hoverAliens ? "#8ADBD5" : "white",
              cursor: "pointer",
              pointerEvents: "auto",
              transition: "color 0.2s ease"
            }}
          >
            Aliens
          </div>
        </Link>
      </div>
    </>
  );
}
