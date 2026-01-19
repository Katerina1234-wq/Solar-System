import { Link } from "react-router-dom";

export default function Instructions() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #0a0f2c, #000)",
        color: "white",
        padding: "100px 12%",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <h1 style={{ fontSize: "53px", marginBottom: "25px" }}>
        Solar System Exploration Guide
      </h1>

      <p style={{ fontSize: "18px", lineHeight: "1.9", opacity: 0.9 }}>
        Welcome to the Solar System Exploration experience. This website was created
        as a creative and educational project designed to help users explore space,
        learn about planets, and discover concepts related to space missions and
        extraterrestrial life.
      </p>

      <hr style={{ margin: "40px 0", opacity: 0.3 }} />

      <h2 style={{ fontSize: "32px", marginBottom: "10px" }}>
        Exploring the Solar System
      </h2>

      <p style={{ lineHeight: "1.8" }}>
        When you enter the website, you are placed inside a 3D visualization of the
        solar system. The planets orbit the Sun in real time, creating an immersive
        space environment.
      </p>

      <p style={{ lineHeight: "1.8" }}>
        By hovering over a planet, the animation pauses and an information panel
        appears on the left side of the screen. This panel contains scientific and
        educational information about the selected planet, including its structure,
        atmosphere, and position in the solar system.
      </p>

      <h2 style={{ fontSize: "32px", marginTop: "40px", marginBottom: "10px" }}>
        Expeditions Section
      </h2>

      <p style={{ lineHeight: "1.8" }}>
        The Expeditions page provides information about different types of space
        missions. These include exploration missions, research-based expeditions,
        and long-term space travel concepts.
      </p>

      <p style={{ lineHeight: "1.8" }}>
        Each expedition focuses on its purpose, duration, and scientific goal,
        giving users insight into how real-world space missions are planned and
        executed.
      </p>

      <h2 style={{ fontSize: "32px", marginTop: "40px", marginBottom: "10px" }}>
        Aliens and Extraterrestrial Life
      </h2>

      <p style={{ lineHeight: "1.8" }}>
        The Aliens section explores theories and ideas surrounding extraterrestrial
        life. It presents scientific hypotheses, space research concepts, and
        speculative ideas based on modern astronomy and astrobiology.
      </p>

      <p style={{ lineHeight: "1.8" }}>
        This section is designed to encourage curiosity and imagination while still
        remaining grounded in scientific thinking.
      </p>

      <h2 style={{ fontSize: "32px", marginTop: "40px", marginBottom: "10px" }}>
        Immersive Experience
      </h2>

      <p style={{ lineHeight: "1.8" }}>
        Background visuals and sound design are used to create a calm and immersive
        atmosphere. The goal is to make exploration feel engaging, cinematic, and
        educational at the same time.
      </p>

      <h2 style={{ fontSize: "32px", marginTop: "40px", marginBottom: "10px" }}>
        Purpose of the Project
      </h2>

      <p style={{ lineHeight: "1.8" }}>
        This project was created for learning and creative exploration. It combines
        modern web technologies with educational content to demonstrate how
        interactive experiences can be used to present scientific topics in an
        engaging way.
      </p>

      <Link to="/">
        <button
          style={{
            marginTop: "50px",
            padding: "14px 30px",
            fontSize: "18px",
            background: "#8E91CF",
            border: "none",
            borderRadius: "7px",
            cursor: "pointer",
            color: "black"
          }}
        >
          Return to Solar System
        </button>
      </Link>
    </div>
  );
}
