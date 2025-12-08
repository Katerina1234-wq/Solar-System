export default function ExpeditionsPage() {
  const cards = [
    { title: "Orbit the Earth – Vostok I", image: "/orbit-earth-vostok.jpg" },
    { title: "Salyut program", image: "/salyut.jpg" },
    { title: "Mission", image: "/mission1.jpg" },
    { title: "Mission", image: "/mission2.jpg" },
    { title: "Mission", image: "/mission3.jpg" },
    { title: "Mission", image: "/mission4.jpg" },
  ];

  return (
    <div className="min-h-screen bg-[url('/space-bg.jpg')] bg-cover bg-center text-white p-6">
      <h1 className="text-5xl text-center font-light mb-10">Expeditions</h1>

      {/* Filters */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        <select className="bg-white/20 px-4 py-2 rounded-lg backdrop-blur-md">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
