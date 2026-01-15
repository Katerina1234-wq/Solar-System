import React, { useRef, useState } from "react";

export default function AliensPage() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (playing) audioRef.current.pause();
    else audioRef.current.play();
    setPlaying(!playing);
  };

  return (
    <div className="min-h-screen bg-[url('/images/backgroundalien.jpg')] bg-cover bg-center text-white animate-fade-in">

      {/* MUSIC BUTTON */}
      <div className="fixed top-20 left-6 z-50 animate-fade-up delay-2">
        <button
          onClick={toggleMusic}
          className="bg-black/60 backdrop-blur-lg border border-purple-400/40 rounded-full px-4 py-2 text-sm font-semibold tracking-wider hover:bg-purple-500/30 transition shadow-xl"
        >
          {playing ? "⏸ Pause Music" : "▶ Play Music"}
        </button>

        <audio ref={audioRef} loop>
          <source src="/audio/alien-theme.mp3" type="audio/mpeg" />
        </audio>
      </div>

      {/* NAV BAR */}
      <nav className="w-full bg-black/40 backdrop-blur-md py-4 px-10 flex items-center justify-between shadow-xl fixed top-0 z-40 animate-fade-up delay-1">
        <img src="/images/logo.png" alt="Logo" className="w-14" />
        <ul className="flex gap-10 text-lg font-serif tracking-wide">
          <li className="hover:text-purple-300 cursor-pointer">Menu</li>
          <li className="hover:text-purple-300 cursor-pointer">Aliens</li>
          <li className="hover:text-purple-300 cursor-pointer underline">Expeditions</li>
        </ul>
      </nav>

      <div className="pt-28 max-w-6xl mx-auto px-6 space-y-36 pb-36">

        {/* HERO */}
        <section className="text-center space-y-10 animate-fade-up">

          <h1 className="text-7xl font-serif font-bold drop-shadow-[0_0_25px_rgba(150,100,255,0.6)] animate-fade-up delay-1">
            Aliens
          </h1>

          <p className="text-gray-200 text-xl font-medium animate-fade-up delay-2">
            Alien Civilizations — Theories Exploring Intelligent Life Beyond Earth
          </p>

          <img
            src="/images/alien1.png"
            className="rounded-2xl shadow-2xl mx-auto hover:scale-105 transition duration-500 animate-fade-up delay-3"
            alt="Alien City"
          />

          <p className="text-gray-200 text-lg font-medium leading-relaxed max-w-4xl mx-auto animate-fade-up delay-4">
            For centuries, humans have looked up at the night sky and wondered: Are we alone in the universe? Modern astronomy and astrobiology suggest that intelligent alien civilizations may not only be possible—but perhaps inevitable. This article explores the leading scientific and theoretical ideas about alien civilizations, separating evidence-based reasoning from speculation.
          </p>
        </section>

        {/* SECTION 2 */}
        <SectionWithSideImage
          title="The Scale of the Universe: Why Alien Civilizations Are Possible"
          text={[
            "The observable universe contains over 200 billion galaxies, each with billions of stars and planets.",
            "With thousands of exoplanets already confirmed—many in habitable zones—the possibility of life beyond Earth has shifted from philosophy to science.",
            "Given these numbers, many scientists believe that intelligent civilizations could arise elsewhere, even if the probability per planet is small."
          ]}
          image="/images/alien2.png"
        />

        {/* SECTIONS 3–6 */}
        <SectionWithImageTop
          title="The Drake Equation: Estimating Alien Civilizations"
          text={[
            "Proposed by astronomer Frank Drake in 1961, the Drake Equation estimates the number of technologically advanced civilizations in our galaxy capable of communication.",
            "It considers factors such as:",
            "• Rate of star formation",
            "• Number of planets per star",
            "• Fraction of planets that develop life",
            "• Likelihood of intelligent life",
            "• Lifespan of technological civilizations",
            "While the equation does not provide a single answer, it helps scientists frame the question scientifically. Estimates range from zero to millions of civilizations in the Milky Way."
          ]}
          image="/images/alien3.png"
        />

        <SectionWithImageTop
          title="The Fermi Paradox: 'Where Is Everybody?'"
          text={[
            "If intelligent civilizations are common, why haven't we detected them?",
            "This contradiction is known as the Fermi Paradox.",
            "Proposed explanations include:",
            "• Intelligent life is extremely rare",
            "• Civilizations self-destruct",
            "• Aliens avoid contact",
            "• We lack detection technology",
            "• Advanced beings no longer use radio",
            "The Fermi Paradox remains one of the most profound questions in science."
          ]}
          image="/images/alien4.png"
        />

        <SectionWithImageTop
          title="The Great Filter Theory: A Cosmic Barrier"
          text={[
            "The Great Filter suggests there is a critical stage in evolution that is extremely difficult to pass. This filter could lie:",
            "• Behind us (life is rare).",
            "• Ahead of us (technological civilizations collapse)",
            "If the filter is ahead, it may explain why the universe appears silent—and serve as a warning for humanity’s future."
          ]}
          image="/images/alien5.png"
        />

        <SectionWithImageTop
          title="The Dark Forest Theory: A Dangerous Universe"
          text={[
            "Popularized by science fiction, the Dark Forest Theory suggests that civilizations remain silent because revealing their location could invite destruction from others.",
            "In this view, the universe is a hostile environment where survival depends on secrecy.",
            "The universe may be hostile where survival depends on secrecy."
          ]}
          image="/images/alien6.png"
        />

        {/* EXTRA SECTION */}
        <section className="text-center space-y-6 animate-fade-up">
          <h2 className="text-4xl font-extrabold text-white-300">Could Alien Civilizations Be Non-Biological?</h2>
          <p className="text-gray-200 text-lg font-medium leading-relaxed max-w-4xl mx-auto">
            Advanced civilizations may not remain biological forever. Some theories propose that aliens could:
            <li>Upload consciousness into machines</li>
            <li>Exist as artificial intelligence</li>
            <li>Function as energy-based or digital entities</li>
            Such civilizations might be harder to detect using traditional methods.
          </p>
        </section>

        {/* CONCLUSION */}
        <section className="text-center space-y-6 animate-fade-up">
          <h2 className="text-4xl font-extrabold text-white-300">Conclusion: Are We Alone?</h2>
          <p className="text-gray-200 text-lg font-medium leading-relaxed max-w-4xl mx-auto">
            There is no confirmed evidence of alien civilizations yet. However, the universe is vast, life’s building blocks are common and Habitable environments are widespread.
            The question may not be if alien civilizations exist—but how and when we will discover them.
            As technology advances, humanity stands at the edge of one of the greatest discoveries in history.
          </p>
        </section>

      </div>
    </div>
  );
}

/* SECTION 3–6 */
function SectionWithImageTop({ title, text, image }) {
  return (
    <section className="flex flex-col items-center space-y-10 animate-fade-up">

      <div className="max-w-4xl text-left space-y-4 animate-fade-up delay-1">
        <h2 className="text-3xl font-extrabold text-white-300 text-center animate-fade-up delay-2">
          {title}
        </h2>

        <div className="text-gray-200 text-lg font-medium leading-relaxed space-y-2 animate-fade-up delay-3">
          {text.map((line, i) => (
            <p key={i} className={line.startsWith("•") ? "ml-6" : ""}>
              {line}
            </p>
          ))}
        </div>
      </div>

      <img
        src={image}
        className="w-4/6 rounded-2xl shadow-2xl hover:scale-105 transition duration-500 animate-fade-up delay-4"
        alt={title}
      />
    </section>
  );
}

/* SECTION 2 */
function SectionWithSideImage({ title, text, image }) {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-20 animate-fade-up">

      <div className="lg:w-1/2 space-y-6 animate-fade-up delay-1">
        <h2 className="text-3xl font-extrabold text-white-300 animate-fade-up delay-2">
          {title}
        </h2>

        <div className="text-gray-200 text-lg font-medium leading-relaxed space-y-2 animate-fade-up delay-3">
          {text.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>

      <img
        src={image}
        className="lg:w-5/12 rounded-2xl shadow-2xl hover:scale-105 transition duration-500 animate-fade-up delay-4"
        alt={title}
      />
    </section>
  );
}


