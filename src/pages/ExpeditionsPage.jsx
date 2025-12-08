import React from "react";

export default function ExpeditionsPage() {
  const cards = [
    { title: "Orbit the Earth – Vostok I", image: "/images/earth.png" },
    { title: "Salyut program", image: "/images/program.png" },
    { title: "Mission", image: "/images/mission.png" },
    { title: "Mission", image: "/images/mission.png" },
    { title: "Mission", image: "/images/mission.png" },
    { title: "Mission", image: "/images/mission.png" },
  ];

  return (
    <div className="min-h-screen bg-[url('/images/backgroundd.jpg')] bg-cover bg-center text-white">

      {/* NAVIGATION BAR */}
      <nav className="w-full bg-black/30 backdrop-blur-md py-4 px-8 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <img src="/images/logo.png" alt="Logo" className="w-10 h-10" />
        </div>

        <ul className="flex gap-10 text-lg font-light">
          <li className="hover:text-purple-300 cursor-pointer">Menu</li>
          <li className="hover:text-purple-300 cursor-pointer">Aliens</li>
          <li className="hover:text-purple-300 cursor-pointer">Expeditions</li>
        </ul>
      </nav>

      <h1 className="text-5xl text-center font-light mb-10 mt-10">Expeditions</h1>

      {/* Filters */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        <select className="bg-black/20 px-4 py-2 rounded-lg backdrop-blur-md">
          <option>Mission Timeline</option>
          <option>Past Missions</option>
          <option>Current Missions</option>
          <option>Future Missions</option>
        </select>

        <select className="bg-white/20 px-4 py-2 rounded-lg backdrop-blur-md">
          <option>Destination</option>
          <option>Moon</option>
          <option>Mars</option>
          <option>Asteroids</option>
          <option>Earth</option>
          <option>Deep Space</option>
        </select>

        <select className="bg-white/20 px-4 py-2 rounded-lg backdrop-blur-md">
          <option>Organizations</option>
          <option>Soviet Union</option>
          <option>FlyBy</option>
          <option>Robotic</option>
          <option>Lander</option>
          <option>Orbiter</option>
          <option>Telescope</option>
        </select>

        <button className="px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-700">
          Search
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto p-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl overflow-hidden"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl mb-2 font-light">{card.title}</h2>
              <button className="bg-blue-600 hover:bg-blue-700 w-full py-2 rounded-lg">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
