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

  return (
    <div
      className="min-h-screen text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/images/backgroundalien.jpg')" }}
    >
      {/* HERO */}
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

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto p-10 space-y-12">
        <button
          onClick={() => navigate(-1)}
          className="bg-purple-600 px-6 py-2 rounded-lg"
        >
          ← Back
        </button>

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

        {/* Split content for missions with special layout */}
        {/* Vostok 1 */}
        {id === "vostok-1" && (
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <p className="text-lg opacity-85 md:w-2/3 whitespace-pre-line">
                {expedition.content.split("Preparations:")[1]?.split("Flight:")[0]}
              </p>
              {expedition.prepImage && (
                <img
                  src={expedition.prepImage}
                  alt="Preparations"
                  className="md:w-1/2 rounded-xl object-cover shadow-2xl"
                />
              )}
            </div>
            <div className="flex flex-col md:flex-row items-start gap-8">
              <p className="text-lg opacity-85 md:w-2/3 whitespace-pre-line">
                {expedition.content.split("Flight:")[1]}
              </p>
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
            <div className="flex flex-col md:flex-row items-start gap-8">
              <p className="text-lg opacity-85 md:w-2/3 whitespace-pre-line">
                {expedition.content.split("Mission:")[1]?.split("Objectives:")[0]}
              </p>
              {expedition.paragraphImage && (
                <img
                  src={expedition.paragraphImage}
                  alt="Mission"
                  className="md:w-1/4 rounded-xl object-cover shadow-2xl"
                />
              )}
            </div>
            <p className="text-lg opacity-85 whitespace-pre-line">
              {expedition.content.split("Objectives:")[1]?.split("Spacecraft:")[0]}
            </p>
            <div className="flex flex-col md:flex-row items-start gap-8">
              <p className="text-lg opacity-85 md:w-2/3 whitespace-pre-line">
                {expedition.content.split("Spacecraft:")[1]}
              </p>
              {expedition.spacecraftImage && (
                <img
                  src={expedition.spacecraftImage}
                  alt="Spacecraft"
                  className="md:w-1/3 rounded-xl object-cover shadow-2xl"
                />
              )}
            </div>
          </div>
        )}

        {/* Mars Rover */}
        {id === "mars-rover" && (
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <p className="text-lg opacity-85 md:w-2/3 whitespace-pre-line">
                {expedition.content.split("Rover Design / Project History:")[1]?.split("Objectives:")[0]}
              </p>
              <img
                src={expedition.roverDesignImage}
                alt="Project History"
                className="md:w-1/3 rounded-xl object-cover shadow-2xl"
              />
            </div>
            <p className="text-lg opacity-85 whitespace-pre-line">
              {expedition.content.split("Objectives:")[1]?.split("Mission Timeline:")[0]}
            </p>
            <p className="text-lg opacity-85 whitespace-pre-line">
              {expedition.content.split("Mission Timeline:")[1]}
            </p>
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

        {/* Ramses */}
        {id === "ramses" && (
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <p className="text-lg opacity-85 md:w-2/3 whitespace-pre-line">
                {expedition.content.split("Project history:")[1]?.split("CubeSats:")[0]}
              </p>
              <img
                src={expedition.projectHistoryImage}
                alt="Project History"
                className="md:w-1/3 rounded-xl object-cover shadow-2xl"
              />
            </div>
            <p className="text-lg opacity-85 whitespace-pre-line">
              {expedition.content.split("CubeSats:")[1]}
            </p>
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

        {/* Apollo */}
        {id === "apollo" && (
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <p className="text-lg opacity-85 md:w-2/3 whitespace-pre-line">{expedition.content}</p>
              {expedition.paragraphImage && (
                <img
                  src={expedition.paragraphImage}
                  alt="Apollo"
                  className="md:w-1/3 rounded-xl object-cover shadow-2xl"
                />
              )}
            </div>
            {expedition.spacecraftImage && (
              <img
                src={expedition.spacecraftImage}
                alt="Apollo Insignia"
                className="w-full md:w-3/4 mx-auto rounded-xl shadow-2xl"
              />
            )}
            {expedition.bottomImage1 && (
              <img
                src={expedition.bottomImage1}
                alt="Apollo Lunar Orbit"
                className="w-full md:w-3/4 mx-auto rounded-xl shadow-2xl"
              />
            )}
          </div>
        )}

        {/* VIPER */}
        {id === "viper" && (
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <p className="text-lg opacity-85 md:w-2/3 whitespace-pre-line">{expedition.content}</p>
              {expedition.paragraphImage && (
                <img
                  src={expedition.paragraphImage}
                  alt="VIPER Rover"
                  className="md:w-1/3 rounded-xl object-cover shadow-2xl"
                />
              )}
            </div>
            {expedition.bottomImage1 && (
              <img
                src={expedition.bottomImage1}
                alt="VIPER Bottom"
                className="w-full md:w-3/4 mx-auto rounded-xl shadow-2xl"
              />
            )}
          </div>
        )}

        {/* Europa Clipper */}
        {id === "europa-clipper" && (
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <p className="text-lg opacity-85 md:w-2/3 whitespace-pre-line">{expedition.content}</p>
              {expedition.paragraphImage && (
                <img
                  src={expedition.paragraphImage}
                  alt="Europa Clipper"
                  className="md:w-1/3 rounded-xl object-cover shadow-2xl"
                />
              )}
            </div>
            {expedition.objectivesImage && (
              <img
                src={expedition.objectivesImage}
                alt="Europa Instruments"
                className="w-full md:w-3/4 mx-auto rounded-xl shadow-2xl"
              />
            )}
          </div>
        )}

        {/* Artemis */}
        {id === "artemis" && (
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <p className="text-lg opacity-85 md:w-2/3 whitespace-pre-line">{expedition.content}</p>
              {expedition.paragraphImage && (
                <img
                  src={expedition.paragraphImage}
                  alt="Artemis"
                  className="md:w-1/3 rounded-xl object-cover shadow-2xl"
                />
              )}
            </div>
            {expedition.systemsImage && (
              <img
                src={expedition.systemsImage}
                alt="Artemis Systems"
                className="w-full md:w-3/4 mx-auto rounded-xl shadow-2xl"
              />
            )}
            {expedition.timelineImage && (
              <img
                src={expedition.timelineImage}
                alt="Artemis Timeline"
                className="w-full md:w-3/4 mx-auto rounded-xl shadow-2xl"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}



