import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://stackblitz-xi.vercel.app"),

  title: "Neweraplus Group of Companies",
  description:
    "Innovative solutions across Engineering, Oil & Gas, Healthcare and Construction.",

  openGraph: {
    title: "Neweraplus Group of Companies",
    description:
      "Innovative solutions across Engineering, Oil & Gas, Healthcare and Construction.",
    url: "https://stackblitz-xi.vercel.app/",
    siteName: "Neweraplus Group of Companies",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Neweraplus Group of Companies",
      },
    ],
    locale: "en_NG",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Neweraplus Group of Companies",
    description:
      "Innovative solutions across Engineering, Oil & Gas, Healthcare and Construction.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
