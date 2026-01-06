import React from "react";

export default function VostokPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-10 py-6 border-b border-white/20">
        <div className="text-xl font-semibold">🚀</div>
        <nav className="space-x-6 text-sm uppercase tracking-wider">
          <a href="#" className="hover:opacity-70">Menu</a>
          <a href="#" className="hover:opacity-70">Aliens</a>
          <a href="#" className="hover:opacity-70">Expeditions</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 py-20 items-center">
        <div>
          <h1 className="text-5xl font-light leading-tight mb-6">
            Orbit the Earth – <br /> Vostok I
          </h1>
          <p className="text-white/70 max-w-xl">
            The Vostok program (1961–1963) was the Soviet Union's first human
            spaceflight program, which launched six successful crewed missions.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/images/earth.png"
            alt="Earth from space"
            className="rounded-full shadow-2xl max-w-md"
          />
        </div>
      </section>

      {/* Vostok 1 Section */}
      <section className="px-10 py-16 max-w-5xl">
        <h2 className="text-3xl font-semibold mb-6">
          Vostok 1 <span className="text-white/60">(April 12, 1961)</span>
        </h2>
        <p className="text-white/70 leading-relaxed">
          Vostok 1 (Russian: Восток, lit. 'East' or 'Orient') was the first
          spaceflight of the Vostok programme and the first human orbital
          spaceflight in history. The Vostok 3KA space capsule was launched from
          Baikonur Cosmodrome on 12 April 1961, with Soviet cosmonaut Yuri Gagarin
          aboard.
        </p>
      </section>

      {/* Info Cards */}
      <section className="px-10 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <InfoCard title="Yuri Gagarin" image="/images/gagarin.png" />
        <InfoCard
          title="Significance"
          text="The first human spaceflight, with Gagarin becoming the first person to orbit the Earth."
        />
        <InfoCard title="Duration" text="1 hour and 48 minutes" />
      </section>

      {/* Preparations */}
      <section className="px-10 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-semibold mb-6">Preparations</h2>
          <p className="text-white/70 leading-relaxed">
            Because of weight constraints, there was no backup retrorocket
            engine. The spacecraft carried 13 days of provisions to allow for
            survival and natural orbital decay in the event the retro rockets
            failed.
          </p>
        </div>
        <div>
          <img
            src="/images/vostok-model.png"
            alt="Model of the Vostok spacecraft"
            className="rounded-xl shadow-lg"
          />
          <p className="text-sm text-white/50 mt-2">Model of the Vostok spacecraft</p>
        </div>
      </section>

      {/* Flight */}
      <section className="px-10 py-16 max-w-5xl">
        <h2 className="text-3xl font-semibold mb-6">Flight</h2>
        <p className="text-white/70 leading-relaxed">
          At 05:30 Moscow time on the morning of 12 April 1961, Yuri Gagarin was
          awakened and transported to the launch pad. Launch occurred at 07:10
          local time, and after a single orbit of the Earth, Gagarin safely
          returned.
        </p>
      </section>
    </div>
  );
}

function InfoCard({ title, text, image }) {
  return (
    <div className="bg-white/5 rounded-2xl p-6 shadow-lg">
      {image && (
        <img
          src={image}
          alt={title}
          className="h-24 mx-auto mb-4 object-contain"
        />
      )}
      <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
      {text && <p className="text-sm text-white/70 text-center">{text}</p>}
    </div>
  );
}
 