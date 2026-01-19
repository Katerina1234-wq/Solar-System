import { useParams, useNavigate } from "react-router-dom";
import { expeditions } from "../data/expeditions";

export default function ExpeditionDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const expedition = expeditions[id];

  if (!expedition) {
    return (
      <div className="min-h-screen bg-black text-white p-10 flex flex-col items-center justify-center">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 bg-purple-600 px-6 py-2 rounded-lg"
        >
          ← Back
        </button>
        <h1 className="text-4xl">Expedition Not Found</h1>
      </div>
    );
  }

  // Vostok 1 content splits
  const preparations = expedition.content.split("Preparations:")[1]?.split("Flight:")[0] || "";
  const flight = expedition.content.split("Flight:")[1] || "";

  // Lunar Trailblazer splits
  const missionText = expedition.content.split("Mission:")[1]?.split("Objectives:")[0] || "";
  const objectivesText = expedition.content.split("Objectives:")[1]?.split("Spacecraft:")[0] || "";
  const spacecraftText = expedition.content.split("Spacecraft:")[1] || "";

  // Mars Rover splits
  const projectHistoryText = expedition.content.split("Rover Design / Project History:")[1]?.split("Objectives:")[0] || "";
  const objectivesMarsText = expedition.content.split("Objectives:")[1]?.split("Mission Timeline:")[0] || "";
  const missionTimelineText = expedition.content.split("Mission Timeline:")[1] || "";

  // Ramses splits
  const projectHistoryRamses = expedition.content.split("Project history:")[1]?.split("CubeSats:")[0] || "";
  const cubesatsText = expedition.content.split("CubeSats:")[1] || "";

  return (
    <div
      className="min-h-screen text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/images/backgroundd.jpg')" }}
    >
      {/* HERO */}
      {["lunar-trailblazer", "mars-rover", "ramses"].includes(id) ? (
        <div className="flex flex-col md:flex-row items-start md:items-center p-10 gap-6">
          <div className="md:w-2/3">
            <h1 className="text-5xl md:text-6xl font-serif">{expedition.title}</h1>
            <p className="opacity-80 mt-2">{expedition.date}</p>
          </div>
          {expedition.heroImage && (
            <img
              src={expedition.heroImage}
              alt="Hero"
              className="md:w-1/3 w-full rounded-xl object-cover shadow-2xl"
            />
          )}
        </div>
      ) : (
        // Full-width hero for Vostok 1
        <div
          className="h-[60vh] bg-cover bg-center flex items-end relative"
          style={{ backgroundImage: `url(${expedition.heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
          <div className="relative p-10">
            <h1 className="text-6xl font-serif">{expedition.title}</h1>
            <p className="opacity-80 mt-2">{expedition.date}</p>
          </div>
        </div>
      )}

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto p-10 space-y-12">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="bg-purple-600 px-6 py-2 rounded-lg"
        >
          ← Back
        </button>

        {/* Description */}
        <p className="text-xl opacity-90">{expedition.description}</p>

        {/* Crew & Duration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-2">Crew</h3>
            <ul className="opacity-80">
              {expedition.crew.map((c) => (
                <li key={c}>• {c}</li>
              ))}
            </ul>
          </div>
          {expedition.duration && (
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">Duration</h3>
              <p className="opacity-80">{expedition.duration}</p>
            </div>
          )}
        </div>

        {/* Vostok 1 */}
        {id === "vostok-1" && (
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <p className="text-lg opacity-85 md:w-2/3 whitespace-pre-line">{preparations}</p>
              {expedition.prepImage && (
                <img
                  src={expedition.prepImage}
                  alt="Preparations"
                  className="md:w-1/2 rounded-xl object-cover shadow-2xl"
                />
              )}
            </div>
            <div className="flex flex-col md:flex-row items-start gap-8">
              <p className="text-lg opacity-85 md:w-2/3 whitespace-pre-line">{flight}</p>
              {expedition.flightImage && (
                <img
                  src={expedition.flightImage}
                  alt="Flight"
                  className="md:w-1/2 rounded-xl object-cover shadow-2xl"
                />
              )}
            </div>
          </div>
        )}

        {/* Lunar Trailblazer */}
        {id === "lunar-trailblazer" && (
          <div className="space-y-12">
            <div className="space-y-6">
              <p className="text-lg opacity-85 whitespace-pre-line">{missionText}</p>
              {expedition.paragraphImage && (
                <img
                  src={expedition.paragraphImage}
                  alt="Mission"
                  className="w-full md:w-3/4 mx-auto rounded-xl shadow-2xl"
                />
              )}
            </div>
            <div className="space-y-6">
              <p className="text-lg opacity-85 whitespace-pre-line">{objectivesText}</p>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-8">
              <p className="text-lg opacity-85 md:w-2/3 whitespace-pre-line">{spacecraftText}</p>
              {expedition.spacecraftImage && (
                <img
                  src={expedition.spacecraftImage}
                  alt="Spacecraft"
                  className="md:w-1/2 rounded-xl object-cover shadow-2xl"
                />
              )}
            </div>
          </div>
        )}

        {/* Mars Rover & Ramses */}
        {["mars-rover", "ramses"].includes(id) && (
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <p className="text-lg opacity-85 md:w-2/3 whitespace-pre-line">
                {id === "mars-rover" ? projectHistoryText : projectHistoryRamses}
              </p>
              <img
                src={
                  id === "mars-rover"
                    ? expedition.roverDesignImage
                    : expedition.projectHistoryImage
                }
                alt="Project History"
                className="md:w-1/3 rounded-xl object-cover shadow-2xl"
              />
            </div>

            <div className="space-y-6">
              <p className="text-lg opacity-85 whitespace-pre-line">
                {id === "mars-rover" ? objectivesMarsText : cubesatsText}
              </p>
            </div>

            {id === "mars-rover" && (
              <div className="space-y-6">
                <p className="text-lg opacity-85 whitespace-pre-line">{missionTimelineText}</p>
              </div>
            )}

            {/* Bottom Images */}
            <div className="flex flex-col md:flex-row gap-6 justify-center mt-10">
              {expedition.bottomImage1 && (
                <img
                  src={expedition.bottomImage1}
                  alt="Bottom 1"
                  className="md:w-1/2 w-full rounded-xl shadow-2xl"
                />
              )}
              {expedition.bottomImage2 && (
                <img
                  src={expedition.bottomImage2}
                  alt="Bottom 2"
                  className="md:w-1/2 w-full rounded-xl shadow-2xl"
                />
              )}

              
            </div>
          </div>
        )}
        { id === "apollo" && (
  <div className="space-y-12">

    {/* First paragraph + centered image */}
    <div className="space-y-6">
      <p className="text-lg opacity-85 whitespace-pre-line">
        {expedition.content.split("Mission Achievements:")[0]}
      </p>

      <img
        src={expedition.paragraphImage}
        className="w-full md:w-3/4 mx-auto rounded-xl shadow-2xl"
        alt="Apollo Surface"
      />
    </div>

    {/* Mission Insignia */}
    <div className="space-y-6">
      <p className="text-lg opacity-85 whitespace-pre-line">
        {expedition.content.split("Mission Insignia and Callsign:")[1]
          ?.split("Lunar Sphere of Influence:")[0]}
      </p>

      <img
        src={expedition.insigniaImage}
        className="w-full md:w-2/3 mx-auto rounded-xl shadow-2xl"
        alt="Apollo Insignia"
      />
    </div>

    {/* Lunar Orbit Section */}
    <div className="flex flex-col md:flex-row items-start gap-8">
      <p className="text-lg opacity-85 md:w-2/3 whitespace-pre-line">
        {expedition.content.split("Lunar Sphere of Influence:")[1]}
      </p>

     
    </div>
  </div>
)}



      </div>
    </div>
  );
}


