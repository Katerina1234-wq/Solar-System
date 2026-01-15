import { useParams, useNavigate } from "react-router-dom";
import { expeditions } from "../data/expeditions";

export default function ExpeditionDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const expedition = expeditions[id];

  if (!expedition) {
    return (
      <div className="min-h-screen bg-black text-white p-10">
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
    <div className="min-h-screen bg-black text-white">

      {/* HERO */}
      <div
        className="h-[60vh] bg-cover bg-center flex items-end"
        style={{ backgroundImage: `url(${expedition.heroImage})` }}
      >
        <div className="bg-black/70 p-10 w-full">
          <h1 className="text-6xl font-serif">{expedition.title}</h1>
          <p className="opacity-80 mt-2">{expedition.date}</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto p-10 space-y-8">
        <button
          onClick={() => navigate(-1)}
          className="bg-purple-600 px-6 py-2 rounded-lg"
        >
          ← Back
        </button>

        <p className="text-xl opacity-90">{expedition.description}</p>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white/10 p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-2">Crew</h3>
            <ul className="opacity-80">
              {expedition.crew.map((c) => (
                <li key={c}>• {c}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white/10 p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-2">Duration</h3>
            <p className="opacity-80">{expedition.duration}</p>
          </div>
        </div>

        <div className="whitespace-pre-line text-lg opacity-85">
          {expedition.content}
        </div>
      </div>
    </div>
  );
}

