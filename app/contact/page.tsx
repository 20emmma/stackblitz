import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-950 to-slate-900 py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-yellow-400 font-semibold">
            Contact Us
          </p>
          <h1 className="mt-6 text-5xl font-bold text-white">
            Let&apos;s Start a Conversation
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-blue-100">
            We&apos;d love to hear about your project. Reach out to us through any of
            the channels below.
          </p>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-blue-950">
              Get In Touch
            </h2>
            <p className="mt-4 text-gray-600 leading-8">
              Our team is available to answer your enquiries and discuss how we
              can support your next project.
            </p>
            <div className="mt-10 space-y-8">
              <div className="flex gap-5">
                <Phone className="text-yellow-500" />
                <div>
                  <h3 className="font-semibold text-blue-950">Phone</h3>
                  <p className="text-gray-600">
                    +234 805 123 4567
                  </p>
                  <p className="text-gray-600">
                    +234 703 456 7890
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <Mail className="text-yellow-500" />
                <div>
                  <h3 className="font-semibold text-blue-950">Email</h3>
                  <p className="text-gray-600">
                    info@neweraplusgroup.com
                  </p>
                  <p className="text-gray-600">
                    admin@neweraplusgroup.com
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <MapPin className="text-yellow-500" />
                <div>
                  <h3 className="font-semibold text-blue-950">
                    Office Address
                  </h3>
                  <p className="text-gray-600">
                    Plot 20–21 Newlayer,
                    <br />
                    Off Ughelli–Warri Road,
                    <br />
                    Ughelli, Delta State.
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <Clock className="text-yellow-500" />
                <div>
                  <h3 className="font-semibold text-blue-950">
                    Office Hours
                  </h3>
                  <p className="text-gray-600">
                    Monday – Friday
                  </p>
                  <p className="text-gray-600">
                    8:00 AM – 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-slate-50 rounded-3xl p-10 shadow-lg">
            <h2 className="text-3xl font-bold text-blue-950">
              Send Us a Message
            </h2>
            <form className="mt-8 space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <textarea
                rows={6}
                placeholder="Your Message"
                className="w-full rounded-xl border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-blue-950 py-4 text-white font-semibold hover:bg-blue-900 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
