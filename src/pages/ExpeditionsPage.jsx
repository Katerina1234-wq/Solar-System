import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function ExpeditionsPage() {
  const navigate = useNavigate();

  const [timeline, setTimeline] = useState("");
  const [destination, setDestination] = useState("");
  const [organization, setOrganization] = useState("");

  const cards = [
    { id:"vostok-1",  timeline:"Past Missions", destination:"Earth", organization:"Orbiter", image:"/images/earth.png" },
    { id:"lunar-trailblazer", timeline:"Current Missions", destination:"Moon", organization:"Orbiter", image:"/images/lunar.png" },
    { id:"mars-rover",  timeline:"Past Missions", destination:"Mars", organization:"Robotic", image:"/images/mars.png" },
    { id:"ramses", timeline:"Future Missions", destination:"Asteroids", organization:"FlyBy", image:"/images/ramses.png" },
    { id:"apollo", timeline:"Past Missions", destination:"Moon", organization:"Crewed", image:"/images/apollo.png" },
    { id:"viper", timeline:"Future Missions", destination:"Moon", organization:"Robotic", image:"/images/viper.png" },
    { id:"europa-clipper", timeline:"Current Missions", destination:"Earth", organization:"FlyBy", image:"/images/europa.png" },
    { id:"artemis", timeline:"Future Missions", destination:"Moon", organization:"Crewed", image:"/images/artemis.png" },
  ];

  const filteredCards = cards.filter((c) =>
    (!timeline || c.timeline === timeline) &&
    (!destination || c.destination === destination) &&
    (!organization || c.organization === organization)
  );

  return (
    <div className="min-h-screen bg-[url('/images/backgroundd.jpg')] bg-cover bg-center text-white">

      {/* NAV BAR */}
      <nav className="w-full bg-black/30 backdrop-blur-md py-4 px-8 flex items-center justify-between shadow-xl">
        <img src="/images/logo.png" alt="Logo" className="w-16 h-18" />

        <ul className="flex gap-10 text-lg font-serif">
          <li className="hover:text-purple-300 cursor-pointer">Menu</li>
          <li className="hover:text-purple-300 cursor-pointer">Aliens</li>
          <li className="hover:text-purple-300 cursor-pointer underline">Expeditions</li>
        </ul>
      </nav>

      <h1 className="text-6xl text-center font-serif mb-10 mt-10">
        Expeditions
      </h1>

      {/* filter */}
      <div className="flex justify-center mb-12 px-4">
        <div className="bg-white/10 backdrop-blur-md px-5 py-4 rounded-3xl shadow-2xl flex gap-7 flex-wrap items-end">

          {/* Timeline */}
          <div>
            <p className="text-sm opacity-80 mb-1">Mission Timeline</p>
            <select
              className="bg-[#121E3F] border border-white/20 px-4 py-2 rounded-xl shadow-inner focus:outline-none"
              onChange={(e)=>setTimeline(e.target.value)}
            >
              <option value="">All</option>
              <option>Past Missions</option>
              <option>Current Missions</option>
              <option>Future Missions</option>
            </select>
          </div>

          {/* Destination */}
          <div>
            <p className="text-sm opacity-70 mb-1">Destination</p>
            <select
              className="bg-[#121E3F] border border-white/20 px-4 py-2 rounded-xl shadow-inner focus:outline-none"
              onChange={(e)=>setDestination(e.target.value)}
            >
              <option value="">All</option>
              <option>Moon</option>
              <option>Mars</option>
              <option>Asteroids</option>
              <option>Earth</option>
            </select>
          </div>

          {/* Mission Type */}
          <div>
            <p className="text-sm opacity-70 mb-1">Mission Type</p>
            <select
              className="bg-[#121E3F] border border-white/20 px-4 py-2 rounded-xl shadow-inner focus:outline-none"
              onChange={(e)=>setOrganization(e.target.value)}
            >
              <option value="">All</option>
              <option>FlyBy</option>
              <option>Robotic</option>
              <option>Orbiter</option>
              <option>Crewed</option>
            </select>
          </div>

        </div>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto p-6">
        {filteredCards.map((card) => (
          <motion.div
            key={card.id}
            whileHover={{ scale: 1.05, rotate: 0.3 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
          >

            {/* IMAGE */}
            <motion.img
              src={card.image}
              alt={card.title}
              className="w-full h-64 object-cover"
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.6 }}
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>

            {/* TEXT */}
            <div className="absolute bottom-0 p-6">
              <h2 className="text-2xl font-light mb-3">{card.title}</h2>

              <motion.button
                onClick={() => navigate(`/expedition/${card.id}`)}
                whileHover={{ scale: 1.1 }}
                className="bg-[#121E3F] hover:bg-[#0e1733] px-5 py-2 rounded-xl"
              >
                View
              </motion.button>
            </div>

          </motion.div>
        ))}
      </div>
    </div>
  );
}
