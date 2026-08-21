import {
  Cog,
  Fuel,
  HeartPulse,
  Building2,
} from "lucide-react";

const industries = [
  {
    title: "Engineering",
    description:
      "Innovative engineering solutions designed for modern infrastructure and industrial development.",
    icon: Cog,
  },
  {
    title: "Oil & Gas",
    description:
      "Reliable energy-sector services supporting operational efficiency and sustainability.",
    icon: Fuel,
  },
  {
    title: "Healthcare",
    description:
      "Quality healthcare and maternity services focused on patient wellbeing and excellence.",
    icon: HeartPulse,
  },
  {
    title: "Construction",
    description:
      "Modern construction solutions delivering durable and impactful infrastructure projects.",
    icon: Building2,
  },
];

export default function Industries() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-2xl mb-16">
          <p className="text-yellow-600 font-semibold mb-3">
            Our Industries
          </p>

          <h2 className="text-4xl font-bold text-blue-950">
            Diverse Expertise Across Key Sectors
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {industries.map((industry) => (
            <div
              key={industry.title}
              className="group bg-white rounded-3xl p-8 border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-950 mb-6 flex items-center justify-center group-hover:bg-yellow-500 transition-all duration-500">
                <industry.icon size={30} className="text-white" />
              </div>

              <h3 className="text-2xl font-bold text-blue-950 mb-4">
                {industry.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {industry.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
