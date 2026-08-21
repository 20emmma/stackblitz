"use client";

import { useState } from "react";

import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-5">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-blue-950 flex items-center justify-center text-white font-bold">
              N+
            </div>
            <div>
              <h1 className="font-bold text-lg text-blue-950">
                Neweraplus Group
              </h1>
              <p className="text-xs text-gray-500">
                Group of Companies Ltd.
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8 text-sm font-medium text-gray-700">
              <Link href="/" className="hover:text-yellow-600 transition">
                Home
              </Link>
              <Link href="/about" className="hover:text-yellow-600 transition">
                About
              </Link>
              <Link href="/companies" className="hover:text-yellow-600 transition">
                Companies
              </Link>
              <Link href="/projects" className="hover:text-yellow-600 transition">
                Projects
              </Link>
            </div>

            <Link
              href="/contact"
              className="bg-blue-950 hover:bg-blue-900 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1 p-2"
            aria-label="Toggle menu"
          >
            <span className="w-6 h-0.5 bg-blue-950"></span>
            <span className="w-6 h-0.5 bg-blue-950"></span>
            <span className="w-6 h-0.5 bg-blue-950"></span>
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-6 flex flex-col gap-4 text-sm font-medium text-blue-950">
            <Link href="/" className="hover:text-yellow-600 transition py-1">Home</Link>
            <Link href="/about" className="hover:text-yellow-600 transition py-1">About</Link>
            <Link href="/companies" className="hover:text-yellow-600 transition py-1">Companies</Link>
            <Link href="/projects" className="hover:text-yellow-600 transition py-1">Projects</Link>
            <Link
              href="/contact"
              className="bg-blue-950 text-white text-center px-6 py-3 rounded-xl font-semibold mt-2"
            >
              Contact Us
            </Link>
          </div>
        )}

      </div>
    </nav>
  );
}
