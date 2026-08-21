import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

type Company = {
  slug: string;
  name: string;
  shortName: string;
  industry: string;
  image: string;
  summary: string;
  description: string;
  locations: string[];
  href: string;
};

type Props = {
  company: Company;
  reverse?: boolean;
};

export default function CompanyShowcase({
  company,
  reverse = false,
}: Props) {
  return (
    <section className="py-24 bg-white">
      <div
        className={`max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Image */}
        <div>
          <img
            src={company.image}
            alt={company.name}
            className="w-full h-[450px] object-cover rounded-3xl shadow-xl"
          />
        </div>
        {/* Content */}
        <div>
          <p className="uppercase tracking-[0.3em] text-yellow-600 font-semibold">
            {company.industry}
          </p>
          <h2 className="mt-4 text-4xl font-bold text-blue-950">
            {company.name}
          </h2>
          <p className="mt-6 text-gray-600 leading-8">
            {company.description}
          </p>
          <div className="mt-8 flex items-start gap-3">
            <MapPin className="text-yellow-600 mt-1" size={20} />
            <div>
              <p className="font-semibold text-blue-950">
                Locations
              </p>
              <p className="text-gray-600">
                {company.locations.join(" • ")}
              </p>
            </div>
          </div>
          <Link
            href={company.href}
            className="inline-flex items-center gap-2 mt-10 rounded-xl bg-blue-950 px-6 py-4 text-white font-semibold hover:bg-blue-900 transition"
          >
            Learn More
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
