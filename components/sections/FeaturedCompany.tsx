export default function FeaturedCompany() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-yellow-500 rounded-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200&auto=format&fit=crop"
              alt="Engineering"
              className="relative rounded-3xl object-cover h-[500px] w-full shadow-2xl"
            />
          </div>
          {/* Content Side */}
          <div>
            <p className="text-yellow-600 font-semibold uppercase tracking-widest mb-5">
              Featured Subsidiary
            </p>
            <h2 className="text-5xl font-bold text-blue-950 leading-tight mb-8">
              Gsixmas Engineering Limited
            </h2>
            <p className="text-gray-600 text-lg leading-9 mb-8">
              Delivering innovative engineering and infrastructure
              solutions designed to support sustainable development
              and industrial growth across Nigeria.
            </p>
            <div className="space-y-5 mb-10">
              <div className="flex gap-4">
                <div className="w-3 h-3 rounded-full bg-yellow-500 mt-2"></div>
                <p className="text-gray-700">
                  Infrastructure & Industrial Engineering
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-3 h-3 rounded-full bg-yellow-500 mt-2"></div>
                <p className="text-gray-700">
                  Operational Presence in Benin & Port-Harcourt
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-3 h-3 rounded-full bg-yellow-500 mt-2"></div>
                <p className="text-gray-700">
                  Focused on Quality, Precision & Safety
                </p>
              </div>
            </div>
            <button className="bg-blue-950 hover:bg-blue-900 text-white px-8 py-4 rounded-2xl font-semibold transition duration-300">
              Explore Company
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
