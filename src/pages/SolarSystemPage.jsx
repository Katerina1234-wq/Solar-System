import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three";
import Planet from "../components/Planet";
import { Link } from "react-router-dom";
import { useState } from "react";

// background 
function Background({ url }) {
  const texture = useLoader(TextureLoader, url);
  const { viewport } = useThree();

  return (
    <mesh position={[0, 0, -50]} renderOrder={-1}>
      <planeGeometry args={[viewport.width * 3, viewport.height * 4.5]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

export default function SolarSystemPage() {
  const planets = [
    { name: "Mercury", url: "/models/mercury.glb", distance: 3.5, size: 0.40, speed: 1.1 },
    { name: "Venus", url: "/models/venus.glb", distance: 5, size: 0.50, speed: 1.0 },
    { name: "Earth", url: "/models/earth.glb", distance: 6.2, size: 0.005, speed: 0.8 },
    { name: "Mars", url: "/models/mars.glb", distance: 7.8, size: 0.30, speed: 0.6 },
    { name: "Jupiter", url: "/models/jupiter.glb", distance: 10.5, size: 1.2, speed: 0.45 },
    { name: "Saturn", url: "/models/saturn.glb", distance: 13, size: 1, speed: 0.35 },
    { name: "Uranus", url: "/models/uranus.glb", distance: 15.5, size: 0.70, speed: 0.3 },
    { name: "Neptune", url: "/models/neptune.glb", distance: 18, size: 0.08, speed: 0.25 }
  ];

  const [hoverMenu, setHoverMenu] = useState(false);
  const [hoverExpeditions, setHoverExpeditions] = useState(false);
  const [hoverAliens, setHoverAliens] = useState(false);

  return (
    <>
      <Canvas
        style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 1 }}
        camera={{ position: [0, 12, 35], fov: 48 }}
        gl={{ alpha: false }}
        onCreated={({ gl }) => {
          gl.setClearColor("black");
        }}
      >
        {/*  background */}
        <Background url="/images/backgroundd.jpg" />

        {/* lights */}
        <ambientLight intensity={1.8} />
        <pointLight position={[0, 0, 0]} intensity={6} />

        {/* sun */}
        <Planet url="/models/sun.glb" distance={0} size={0.1} speed={0.14} name="Sun" />

        {/* planets */}
        {planets.map((p, i) => (
          <Planet key={i} {...p} />
        ))}

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>

      {/* ---------- UI OVERLAY ---------- */}
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

        <div
          style={{
            position: "absolute",
            top: "23px",
            left: "50%",
            transform: "translateX(-50%)",
            color: "white",
            fontSize: "48px",
            fontWeight: 390,
            letterSpacing: "2px",
            textShadow: "0px 0px 10px rgba(0,0,0,0.5)",
            pointerEvents: "none",
          }}
        >
          Explore the Solar System
        </div>

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
              color: hoverMenu ? "#8E91CF" : "white",
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
              color: hoverExpeditions ? "#8E91CF" : "white",
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
              color: hoverAliens ? "#8E91CF" : "white",
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
