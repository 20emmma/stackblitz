import Industries from "../components/sections/Industries";
import FeaturedCompany from "../components/sections/FeaturedCompany";
import Companies from "../components/sections/Companies";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-black min-h-screen flex items-center">

        {/* Background Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        </div>

        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">

            {/* LEFT CONTENT */}
            <div>

              <p className="text-yellow-400 font-semibold mb-6 tracking-widest uppercase">
                Building Excellence Across Industries
              </p>

              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-tight max-w-3xl">
                Modern Solutions Across Engineering,
                Oil & Gas, Healthcare and Construction.
              </h1>

              <p className="mt-8 text-xl text-blue-100 max-w-2xl leading-9">
                Neweraplus Group of Companies delivers innovative,
                reliable and sustainable solutions designed to drive
                growth and create long-term value across multiple sectors.
              </p>

              <div className="mt-12 flex flex-col sm:flex-row gap-5">

                <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-2xl font-semibold transition duration-300 shadow-2xl">
                  Explore Companies
                </button>

                <button className="border border-white/20 hover:border-white/40 bg-white/5 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-semibold transition duration-300">
                  Contact Us
                </button>

              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">

              {/* Decorative Border */}
              <div className="
                absolute
                -inset-4
                bg-gradient-to-br
                from-yellow-400/40
                to-transparent
                rounded-[2rem]
                blur-2xl
                opacity-70
              "></div>

              {/* Main Image */}
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop"
                alt="Industrial Operations"
                className="relative rounded-[2rem] object-cover h-[650px] xl:h-[720px] w-full shadow-2xl"
              />

              {/* Floating Card */}
              <div className="absolute bottom-8 -left-16 bg-white/90 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl max-w-xs">

                <p className="text-yellow-600 font-semibold text-sm uppercase mb-2">
                  Trusted Excellence
                </p>

                <h3 className="text-2xl font-bold text-blue-950 mb-3">
                  4 Core Industries
                </h3>

                <p className="text-gray-600 leading-7">
                  Engineering, Oil & Gas, Healthcare and Construction services
                  delivered with innovation and professionalism.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Industries />
      <FeaturedCompany />
      <Companies />
    </main>
  );
}
