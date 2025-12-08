import React from "react";

export default function ExpeditionsPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Top Navigation */}
      <nav className="flex justify-end space-x-8 p-6 text-lg tracking-wide">
        <a href="#" className="hover:opacity-70 transition">Menu</a>
        <a href="#" className="hover:opacity-70 transition">Aliens</a>
        <a href="#" className="hover:opacity-70 transition">Expeditions</a>
      </nav>

      {/* Title */}
      <h1 className="text-5xl text-center mb-10 font-light">Expeditions</h1>

      {/* Filters */}
      <div className="flex justify-center space-x-4 mb-12">
        <select className="bg-gray-700 px-4 py-2 rounded-lg">
          <option>Mission Timeline</option>
          <option>Past Missions</option>
          <option>Current Missions</option>
          <option>Future Missions</option>
        </select>

        <select className="bg-gray-700 px-4 py-2 rounded-lg">
          <option>Destination</option>
          <option>Moon</option>
          <option>Mars</option>
          <option>Asteroids</option>
          <option>Earth</option>
          <option>Deep Space</option>
        </select>

        <select className="bg-gray-700 px-4 py-2 rounded-lg">
          <option>Organization</option>
          <option>Soviet Union</option>
          <option>Flyby</option>
          <option>Robotic</option>
          <option>Lander</option>
          <option>Orbiter</option>
          <option>Telescope</option>
        </select>

        <button className="bg-purple-600 px-6 py-2 rounded-lg hover:bg-purple-700 transition">
          Search
        </button>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10 pb-20">
        {[1, 2, 3, 4, 5, 6].map((card) => (
          <div key={card} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            <div className="h-48 bg-gray-600 w-full"></div>
            <div className="p-4 flex justify-end">
              <button className="bg-blue-700 px-4 py-2 rounded-lg hover:bg-blue-800 transition">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
