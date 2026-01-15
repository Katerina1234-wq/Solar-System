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
    <div className="min-h-screen bg-[url('/images/backgroundalien.jpg')] bg-cover bg-center text-white">

      {/* MUSIC BUTTON */}
      <div className="fixed top-20 left-6 z-50">
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
      <nav className="w-full bg-black/40 backdrop-blur-md py-4 px-10 flex items-center justify-between shadow-xl fixed top-0 z-40">
        <img src="/images/logo.png" alt="Logo" className="w-14" />

        <ul className="flex gap-10 text-lg font-serif tracking-wide">
          <li className="hover:text-purple-300 cursor-pointer">Menu</li>
          <li className="hover:text-purple-300 cursor-pointer">Aliens</li>
          <li className="hover:text-purple-300 cursor-pointer underline">Expeditions</li>
        </ul>
      </nav>

      <div className="pt-28">

        {/* HERO */}
        <section className="text-center max-w-5xl mx-auto px-6">
          <h1 className="text-7xl font-serif mb-6 drop-shadow-[0_0_20px_rgba(150,100,255,0.4)]">
            Aliens
          </h1>

          <p className="text-gray-300 text-lg mb-14">
            Alien Civilizations — Theories Exploring Intelligent Life Beyond Earth
          </p>

          <img
            src="/images/alien1.png"
            className="rounded-2xl shadow-2xl mx-auto mb-10"
            alt="Alien City"
          />

          <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed mb-28">
            For centuries, humans have looked up at the night sky and wondered: Are we alone in the universe?
            Modern astronomy and astrobiology suggest that intelligent alien civilizations may not only be possible —
            but perhaps inevitable. This article explores the leading scientific and theoretical ideas about alien
            civilizations, separating evidence-based reasoning from speculation.
          </p>
        </section>

        {/* CONTENT */}
        <div className="max-w-5xl mx-auto px-6 space-y-32 pb-32">

          <BlockWithImage
            title="The Scale of the Universe: Why Alien Civilizations Are Possible"
            text="The observable universe contains over 200 billion galaxies, each with billions of stars and planets. With thousands of exoplanets already confirmed — many in habitable zones — the possibility of life beyond Earth has shifted from philosophy to science. Given these numbers, many scientists believe that intelligent civilizations could arise elsewhere, even if the probability per planet is small."
            image="/images/alien2.png"
          />

          <BlockWithImage
            title="The Drake Equation: Estimating Alien Civilizations"
            text="Proposed by astronomer Frank Drake in 1961, the Drake Equation estimates the number of technologically advanced civilizations in our galaxy capable of communication.
It considers factors such as:
The rate of star formation, 
The number of planets per star, 
The fraction of planets that develop life, 
The likelihood of intelligent life, 
The lifespan of technological civilizations, 
While the equation does not provide a single answer, it helps scientists frame the question scientifically. Estimates range from zero to millions of civilizations in the Milky Way."
            image="/images/alien3.png"
            reverse
          />

          <BlockWithImage
            title="The Fermi Paradox: 'Where Is Everybody?'"
            text="If intelligent alien civilizations are common, why haven’t we detected any signs of them?  This contradiction is known as the Fermi Paradox.
Proposed explanations include:
Intelligent life is extremely rare
Civilizations self-destruct before spreading
Alien civilizations avoid contact
We lack the technology to detect them
Advanced beings no longer use radio signals
The Fermi Paradox remains one of the most profound questions in science."
            image="/images/alien4.png"
          />

          <BlockWithImage
            title="The Great Filter Theory: A Cosmic Barrier"
            text="The Great Filter suggests there is a critical stage in evolution that is extremely difficult to pass. This filter could lie:
Behind us (life is rare)
Ahead of us (technological civilizations collapse)
If the filter is ahead, it may explain why the universe appears silent—and serve as a warning for humanity’s future."
            image="/images/alien5.png"
            reverse
          />

          <BlockWithImage
            title="The Dark Forest Theory: A Dangerous Universe"
            text="Popularized by science fiction, the Dark Forest Theory suggests that civilizations remain silent because revealing their location could invite destruction from others.
In this view, the universe is a hostile environment where survival depends on secrecy."
            image="/images/alien6.png"
          />

          {/* CONCLUSION */}
          <section className="text-center space-y-6 pt-10">
            <h2 className="text-3xl font-bold text-blue-400">Conclusion: Are We Alone?</h2>
            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
              There is no confirmed evidence of alien civilizations yet. However, the vastness of the universe,
              the abundance of habitable worlds, and the rapid advancement of human technology suggest we may be
              on the edge of one of the greatest discoveries in history.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}

function BlockWithImage({ title, text, image, reverse }) {
  return (
    <section className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-14 items-center`}>
      <div className="lg:w-1/2 space-y-4">
        <h2 className="text-2xl font-bold text-blue-400">{title}</h2>
        <p className="text-gray-300 leading-relaxed">{text}</p>
      </div>

      <img
        src={image}
        className="lg:w-1/2 rounded-xl shadow-2xl hover:scale-105 transition duration-500"
        alt="Alien Visual"
      />
    </section>
  );
}




