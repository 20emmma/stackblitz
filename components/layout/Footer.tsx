export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white pt-20 pb-10">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-12 border-b border-blue-800 pb-16">

          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">

              <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold">
                N+
              </div>

              <div>
                <h3 className="font-bold text-xl">
                  Neweraplus Group
                </h3>

                <p className="text-sm text-blue-200">
                  Group of Companies Ltd.
                </p>
              </div>
            </div>

            <p className="text-blue-100 leading-7">
              Delivering innovative and sustainable solutions
              across engineering, oil & gas, healthcare
              and construction sectors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">
              Quick Links
            </h4>

            <ul className="space-y-4 text-blue-100">
              <li>Home</li>
              <li>About</li>
              <li>Companies</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold text-lg mb-6">
              Industries
            </h4>

            <ul className="space-y-4 text-blue-100">
              <li>Engineering</li>
              <li>Oil & Gas</li>
              <li>Healthcare</li>
              <li>Construction</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">
              Contact
            </h4>

            <div className="space-y-4 text-blue-100">
              <p>Ughelli, Delta State</p>

              <p>+234 805 123 4567</p>

              <p>info@neweraplusgroup.com</p>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-blue-300 text-sm">

          <p>
            © 2026 Neweraplus Group of Companies Ltd.
          </p>

          <p>
            Designed for Excellence.
          </p>

        </div>

      </div>
    </footer>
  );
}