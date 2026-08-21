export default function VisionMission() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-yellow-600 font-semibold">
            Our Purpose
          </p>

          <h2 className="mt-4 text-4xl font-bold text-blue-950">
            Driven by Vision. Guided by Mission.
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Every project we undertake is driven by a commitment to innovation,
            integrity and sustainable development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-16">

          {/* Vision */}
          <div className="bg-white rounded-3xl p-10 shadow-lg border border-slate-100">
            <div className="w-16 h-16 rounded-2xl bg-blue-950 flex items-center justify-center mb-6">
              <span className="text-2xl text-white">👁️</span>
            </div>

            <h3 className="text-2xl font-bold text-blue-950">
              Our Vision
            </h3>

            <p className="mt-6 text-gray-600 leading-8">
              To become the premier industry leader in the Niger Delta and
              beyond, recognized for integrity, innovation and our commitment
              to driving socioeconomic progress.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-3xl p-10 shadow-lg border border-slate-100">
            <div className="w-16 h-16 rounded-2xl bg-yellow-500 flex items-center justify-center mb-6">
              <span className="text-2xl text-white">🎯</span>
            </div>

            <h3 className="text-2xl font-bold text-blue-950">
              Our Mission
            </h3>

            <p className="mt-6 text-gray-600 leading-8">
              To deliver reliable, high-quality and cost-effective services
              through professional excellence, advanced technology and
              responsible business practices that exceed client expectations.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
