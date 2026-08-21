import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects, projectCategories } from "@/data/projects";

export default function ProjectsPage() {
  const featured = projects.slice(0, 2);
  const grid = projects.slice(2);

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-950 to-slate-900 py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-yellow-400 font-semibold">
            Our Projects
          </p>
          <h1 className="mt-6 text-5xl font-bold text-white">
            Delivering Excellence Across Industries
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-blue-100">
            Explore some of the projects and solutions that demonstrate our
            commitment to quality, innovation and client satisfaction.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-950 mb-16">
            Featured Projects
          </h2>
          <div className="space-y-24">
            {featured.map((project, index) => (
              <div
                key={project.title}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}
                <div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[400px] object-cover rounded-3xl shadow-xl"
                  />
                </div>
                {/* Content */}
                <div>
                  <p className="uppercase tracking-[0.3em] text-yellow-600 font-semibold">
                    {project.category}
                  </p>
                  <h3 className="mt-4 text-3xl font-bold text-blue-950">
                    {project.title}
                  </h3>
                  <div className="mt-4">
                    <span className="inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
                      {project.status}
                    </span>
                  </div>
                  <p className="mt-6 text-gray-600 leading-8">
                    {project.summary}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 mt-8 rounded-xl bg-blue-950 px-6 py-4 text-white font-semibold hover:bg-blue-900 transition"
                  >
                    Learn More
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter Bar */}
      <section className="py-12 bg-slate-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {projectCategories.map((category) => (
              <button
                key={category}
                className="rounded-full px-6 py-2 text-sm font-semibold transition border border-gray-300 text-gray-700 hover:bg-blue-950 hover:text-white hover:border-blue-950"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-950 mb-16">
            All Projects
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {grid.map((project) => (
              <div
                key={project.title}
                className="group rounded-3xl overflow-hidden shadow-lg bg-white border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <p className="uppercase tracking-widest text-xs font-semibold text-yellow-600">
                      {project.category}
                    </p>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        project.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-blue-950">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-gray-600 leading-7">
                    {project.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-blue-950 to-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white">
            Have a Project in Mind?
          </h2>
          <p className="mt-6 text-lg text-blue-100 leading-8">
            Let&apos;s discuss how Neweraplus can bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-10 rounded-xl bg-yellow-500 px-8 py-4 text-blue-950 font-semibold hover:bg-yellow-400 transition"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
