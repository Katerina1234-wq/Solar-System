import { useParams, useNavigate } from "react-router-dom";

export default function ExpeditionDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 bg-purple-600 px-6 py-2 rounded-lg"
      >
        ← Back
      </button>

      <h1 className="text-5xl font-serif mb-6">
        Expedition: {id.replace("-", " ")}
      </h1>

      <p className="max-w-2xl text-lg opacity-80">
        Detailed information about the {id} mission goes here.
        You can add images, timelines, crew, and videos.
      </p>
    </div>
  );
}
