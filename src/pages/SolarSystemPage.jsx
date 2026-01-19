import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three";
import Planet from "../components/Planet";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

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
      <MenuLink label="Instructions" to="/instructions" closeMenu={closeMenu} />
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
        onMouseEnter={(e) => (e.target.style.color = "#8E91CF")}
        onMouseLeave={(e) => (e.target.style.color = "white")}
      >
        {label}
      </div>
    </Link>
  );
}

/* -------------------- PLANET DESCRIPTIONS -------------------- */
const planetDescriptions = { Mercury: "Mercury is the first planet from the Sun and the smallest in the Solar System. It is a rocky planet with a trace atmosphere and a surface gravity slightly higher than that of Mars. The surface of Mercury is similar to Earth's Moon, being heavily cratered, with an expansive rupes system generated from thrust faults, and bright ray systems, formed by ejecta. Its largest crater, Caloris Planitia, has a diameter of 1,550 km (960 mi), which is about one-third the diameter of the planet (4,880 km or 3,030 mi). Being the most inferior orbiting planet, it always appears close to the sun in Earth's sky, either as a 'morning star' or an 'evening star'. It is the planet with the highest delta-v required for travel from Earth, as well as to and from the other planets in the Solar System.", 
   Venus: "Venus is the second planet from the Sun. It is often called Earth's 'twin' or 'sister' among the planets of the Solar System for its orbit being the closest to Earth's, both being rocky planets, and having the most similar and nearly equal size, mass, and surface gravity. Venus, though, is significantly different, especially as it has no liquid water, and its atmosphere is far thicker and denser than that of any other rocky body in the Solar System. The atmosphere is composed mostly of carbon dioxide and has a thick cloud layer of sulfuric acid that spans the whole planet. At the mean surface level, the atmosphere reaches a temperature of 737 K (464 °C; 867 °F) and a pressure 92 times greater than Earth's at sea level, turning the lowest layer of the atmosphere into a supercritical fluid.",
   Earth: "Earth is the third planet from the Sun and the only astronomical object known to harbor life. This is enabled by Earth being an ocean world, the only one in the Solar System sustaining liquid surface water. Almost all of Earth's water is contained in its global ocean, covering 70.8% of Earth’s crust. The remaining 29.2% of Earth's crust is land, most of which is located in the form of continental landmasses within Earth's land hemisphere. Most of Earth's land is at least somewhat humid and covered by vegetation, while large ice sheets at Earth's polar deserts retain more water than Earth's groundwater, lakes, rivers, and atmospheric water combined. Earth's crust consists of slowly moving tectonic plates, which interact to produce mountain ranges, volcanoes, and earthquakes. ", 
   Mars: "Mars is the fourth planet from the Sun. It is also known as the 'Red Planet', for its orange-red appearance. Mars is a desert-like rocky planet with a tenuous atmosphere that is primarily carbon dioxide. At the average surface level the atmospheric pressure is a few thousandths of Earth’s, atmospheric temperature ranges from −153 to 20 °C, and cosmic radiation is high. Mars retains some water, in the ground as well as thinly in the atmosphere, forming cirrus clouds, fog, frost, larger polar regions of permafrost and ice caps (with seasonal CO2 snow), but no bodies of liquid surface water. Its surface gravity is roughly a third of Earth's or double that of the Moon. Its diameter, 6,779 km (4,212 mi), is about half the Earth's, or twice the Moon's, and its surface area is the size of all the dry land of Earth.", 
   Jupiter: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass nearly 2.5 times that of all the other planets in the Solar System combined and slightly less than one-thousandth the mass of the Sun. Its diameter is 11 times that of Earth and a tenth that of the Sun. Jupiter orbits the Sun at a distance of 5.20 AU (778.5 Gm), with an orbital period of 11.86 years. It is the third-brightest natural object in the Earth's night sky, after the Moon and Venus, and has been observed since prehistoric times. Its name derives from that of Jupiter, the chief deity of ancient Roman religion.", Saturn: "Saturn is the sixth planet from the Sun and the second largest in the Solar System, after Jupiter. It is a gas giant, with an average radius of about 9 times that of Earth. It has an eighth of the average density of Earth, but is over 95 times more massive. Even though Saturn is almost as big as Jupiter, Saturn has less than a third of its mass. Saturn orbits the Sun at a distance of 9.59 AU (1,434 million km), with an orbital period of 29.45 years.", 
   Uranus: "Uranus is the seventh planet from the Sun. It is a gaseous cyan-coloured ice giant. Most of the planet is made of water, ammonia, and methane in a supercritical phase of matter, which astronomy calls 'ice' or volatiles. The planet's atmosphere has a complex layered cloud structure and has the lowest minimum temperature (49 K) of all the Solar System's planets. It has a marked axial tilt of 82.23° with a retrograde rotation period of 17 hours and 14 minutes. This means that in an 84-Earth-year orbital period around the Sun, its poles get around 42 years of continuous sunlight, followed by 42 years of continuous darkness.", 
   Neptune: "Neptune is the eighth and farthest known planet orbiting the Sun. It is the fourth-largest planet in the Solar System by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth. Compared to Uranus, its neighbouring ice giant, Neptune is slightly smaller, but more massive and denser. Being composed primarily of gases and liquids, it has no well-defined solid surface. Neptune orbits the Sun once every 164.8 years at an orbital distance of 30.1 astronomical units (4.5 billion kilometres; 2.8 billion miles). It is named after the Roman god of the sea and has the astronomical symbol ♆, representing Neptune's trident.", 
   Sun: "The Sun is the star at the center of the Solar System. It is composed mostly of hydrogen and helium and provides the light and heat necessary for life on Earth." };
   



/* -------------------- SOLAR SYSTEM PAGE -------------------- */
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredPlanet, setHoveredPlanet] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulate loading for 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "black",
          color: "white",
          flexDirection: "column"
        }}
      >
        <div
          style={{
            border: "5px solid rgba(255,255,255,0.2)",
            borderTop: "5px solid #8E91CF",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            animation: "spin 1s linear infinite",
            marginBottom: "15px"
          }}
        />
        Loading...
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

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
        gl={{ alpha: false }}
        onCreated={({ gl }) => gl.setClearColor("black")}
      >
        <Background url="/images/backgroundd.jpg" />

        <ambientLight intensity={1.8} />
        <pointLight position={[0, 0, 0]} intensity={6} />

        {/* Sun */}
        <Planet
          url="/models/sun.glb"
          distance={0}
          size={0.1}
          speed={0.14}
          paused={hoveredPlanet === "Sun"}
          name="Sun"
          setHoveredPlanet={setHoveredPlanet}
        />

        {/* Other planets */}
        {planets.map((p, i) => (
          <Planet
            key={i}
            {...p}
            paused={hoveredPlanet === p.name}
            setHoveredPlanet={setHoveredPlanet}
          />
        ))}

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>

      {/* Info Panel */}
      {hoveredPlanet && (
        <div
          style={{
            position: "fixed",
            top: "120px",
            left: "40px",
            width: "400px",
            height: "75vh",
            background: "rgba(15,20,40,0.45)",
            backdropFilter: "blur(18px)",
            borderRadius: "20px",
            padding: "30px",
            color: "white",
            boxShadow: "0 0 35px rgba(0,0,0,0.5)",
            overflowY: "auto",
            zIndex: 5
          }}
        >
          <div style={{ fontSize: "44px", fontWeight: "bold", marginBottom: "20px" }}>
            {hoveredPlanet}
          </div>
          <div style={{ fontSize: "13px", lineHeight: "1.5" }}>
            {planetDescriptions[hoveredPlanet]}
          </div>
        </div>
      )}

      {/* Overlay (Nav/Menu/Logo) */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 10,
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
            letterSpacing: "2px"
          }}
        >
          Explore the Solar System
        </div>

        <Link to="/">
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
      </div>

      <SpaceMenu open={menuOpen} closeMenu={() => setMenuOpen(false)} />
    </>
  );
}
