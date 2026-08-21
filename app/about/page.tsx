import Story from "@/components/about/Story";
import VisionMission from "@/components/about/VisionMission";
import CoreValues from "@/components/about/CoreValues";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-yellow-400 font-semibold">
            About Us
          </p>

          <h1 className="mt-6 text-4xl md:text-5xl font-bold text-white">
            Building Sustainable Growth Across Industries
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-blue-100 leading-8">
            Neweraplus Group of Companies Ltd. is committed to delivering
            innovative, reliable and sustainable solutions across engineering,
            oil & gas, healthcare and construction.
          </p>
        </div>
      </section>

      <Story />
      <VisionMission />
      <CoreValues />
      <WhyChooseUs />
      <AboutCTA />
    </main>
  );
}
