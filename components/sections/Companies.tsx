import Link from "next/link";
import { companies } from "../../data/companies";

export default function Companies() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-2xl mb-16">
          <p className="text-yellow-600 font-semibold mb-3">
            Our Companies
          </p>

          <h2 className="text-4xl font-bold text-blue-950">
            Subsidiaries Driving Innovation & Growth
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {companies.map((company) => (
            <div
              key={company.slug}
              className="group border border-gray-100 rounded-3xl p-10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 bg-white"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full">
                  {company.industry}
                </span>
              </div>

              <h3 className="text-3xl font-bold text-blue-950 mb-4">
                {company.name}
              </h3>

              <p className="text-gray-600 leading-7 mb-8">
                {company.description}
              </p>

              <Link
                href={`/companies/${company.slug}`}
                className="text-blue-950 font-semibold inline-flex items-center gap-2 group-hover:gap-4 transition-all duration-300"
              >
                <span>View Company</span>
                <span>→</span>
              </Link>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
