import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three";
import Planet from "../components/Planet";
import { Link } from "react-router-dom";
import { useState } from "react";

/* -------------------- BACKGROUND -------------------- */
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

/* -------------------- SPACE MENU -------------------- */
function SpaceMenu({ open, closeMenu }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: open ? 0 : "-340px",
        width: "340px",
        height: "100vh",
        background: "rgba(15, 20, 40, 0.55)",
        backdropFilter: "blur(14px)",
        borderLeft: "1px solid rgba(255,255,255,0.15)",
        transition: "right 0.45s ease",
        zIndex: 20,
        padding: "90px 40px",
        color: "white",
        boxShadow: "-10px 0px 40px rgba(0,0,0,0.45)",
        pointerEvents: "auto"
      }}
    >
      <div
        onClick={closeMenu}
        style={{
          position: "absolute",
          top: 25,
          right: 28,
          fontSize: 26,
          cursor: "pointer",
          opacity: 0.85
        }}
      >
        ✕
      </div>

      <MenuLink label="Planets" to="/home" closeMenu={closeMenu} />
      <MenuLink label="Expeditions" to="/expeditions" closeMenu={closeMenu} />
      <MenuLink label="Aliens" to="/aliens" closeMenu={closeMenu} />
    </div>
  );
}

function MenuLink({ label, to, closeMenu }) {
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <div
        onClick={closeMenu}
        style={{
          fontSize: "28px",
          marginBottom: "38px",
          letterSpacing: "2px",
          color: "white",
          transition: "0.25s",
          cursor: "pointer"
        }}
        onMouseEnter={e => (e.target.style.color = "#8E91CF")}
        onMouseLeave={e => (e.target.style.color = "white")}
      >
        {label}
      </div>
    </Link>
  );
}

/* -------------------- MAIN PAGE -------------------- */
export default function SolarSystemPage() {
  const planets = [
    { name: "Mercury", url: "/models/mercury.glb", distance: 3.5, size: 0.4, speed: 1.1 },
    { name: "Venus", url: "/models/venus.glb", distance: 5, size: 0.5, speed: 1 },
    { name: "Earth", url: "/models/earth.glb", distance: 6.2, size: 0.005, speed: 0.8 },
    { name: "Mars", url: "/models/mars.glb", distance: 7.8, size: 0.3, speed: 0.6 },
    { name: "Jupiter", url: "/models/jupiter.glb", distance: 10.5, size: 1.2, speed: 0.45 },
    { name: "Saturn", url: "/models/saturn.glb", distance: 13, size: 1, speed: 0.35 },
    { name: "Uranus", url: "/models/uranus.glb", distance: 15.5, size: 0.7, speed: 0.3 },
    { name: "Neptune", url: "/models/neptune.glb", distance: 18, size: 0.08, speed: 0.25 }
  ];

  const [hoverMenu, setHoverMenu] = useState(false);
  const [hoverExpeditions, setHoverExpeditions] = useState(false);
  const [hoverAliens, setHoverAliens] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // New state for hovered planet
  const [hoveredPlanet, setHoveredPlanet] = useState(null);

  return (
    <>
      {/* -------------------- 3D CANVAS -------------------- */}
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 1,
          pointerEvents: "auto"
        }}
        camera={{ position: [0, 12, 35], fov: 48 }}
        gl={{ alpha: false }}
        onCreated={({ gl }) => gl.setClearColor("black")}
      >
        <Background url="/images/backgroundd.jpg" />

        <ambientLight intensity={1.8} />
        <pointLight position={[0, 0, 0]} intensity={6} />

        <Planet
          url="/models/sun.glb"
          distance={0}
          size={0.1}
          speed={0.14}
          name="Sun"
          onPointerOver={() => setHoveredPlanet("Sun")}
          onPointerOut={() => setHoveredPlanet(null)}
        />

        {planets.map((p, i) => (
          <Planet
            key={i}
            {...p}
            onPointerOver={() => setHoveredPlanet(p.name)}
            onPointerOut={() => setHoveredPlanet(null)}
          />
        ))}

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>

      {/* -------------------- UI OVERLAY -------------------- */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 2,
          pointerEvents: "none"
        }}
      >
        {/* Title */}
        <div
          style={{
            position: "absolute",
            top: "23px",
            left: "50%",
            transform: "translateX(-50%)",
            color: "white",
            fontSize: "48px",
            letterSpacing: "2px"
          }}
        >
          Explore the Solar System
        </div>

        {/* Logo */}
        <Link to="/home">
          <img
            src="/images/logo.png"
            style={{
              position: "absolute",
              top: "20px",
              left: "20px",
              width: "110px",
              cursor: "pointer",
              pointerEvents: "auto"
            }}
          />
        </Link>

        {/* Menu */}
        <div
          onClick={() => setMenuOpen(true)}
          onMouseEnter={() => setHoverMenu(true)}
          onMouseLeave={() => setHoverMenu(false)}
          style={{
            position: "absolute",
            top: "25px",
            right: "35px",
            fontSize: "35px",
            color: hoverMenu ? "#8E91CF" : "white",
            cursor: "pointer",
            pointerEvents: "auto"
          }}
        >
          Menu
        </div>

        {/* Expeditions */}
        <Link to="/expeditions">
          <div
            onMouseEnter={() => setHoverExpeditions(true)}
            onMouseLeave={() => setHoverExpeditions(false)}
            style={{
              position: "absolute",
              bottom: "50px",
              left: "35px",
              fontSize: "35px",
              color: hoverExpeditions ? "#8E91CF" : "white",
              cursor: "pointer",
              pointerEvents: "auto"
            }}
          >
            Expeditions
          </div>
        </Link>

        {/* Aliens */}
        <Link to="/aliens">
          <div
            onMouseEnter={() => setHoverAliens(true)}
            onMouseLeave={() => setHoverAliens(false)}
            style={{
              position: "absolute",
              bottom: "50px",
              right: "35px",
              fontSize: "35px",
              color: hoverAliens ? "#8E91CF" : "white",
              cursor: "pointer",
              pointerEvents: "auto"
            }}
          >
            Aliens
          </div>
        </Link>

        {/* -------------------- Hovered Planet Name -------------------- */}
        {hoveredPlanet && (
          <div
            style={{
              position: "absolute",
              bottom: "120px",
              left: "50%",
              transform: "translateX(-50%)",
              color: "white",
              fontSize: "36px",
              letterSpacing: "1.5px",
              pointerEvents: "none",
              textShadow: "0 0 10px black"
            }}
          >
            {hoveredPlanet}
          </div>
        )}
      </div>

      {/* -------------------- SPACE MENU -------------------- */}
      <SpaceMenu open={menuOpen} closeMenu={() => setMenuOpen(false)} />
    </>
  );
}
