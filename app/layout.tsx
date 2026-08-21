import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Neweraplus Group of Companies",
  description:
    "Neweraplus Group of Companies — Engineering, Oil & Gas, Healthcare and Construction.",

  openGraph: {
    title: "Neweraplus Group of Companies",
    description:
      "Engineering, Oil & Gas, Healthcare and Construction solutions.",
    url: "https://www.neweraplusgroup.com",
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
      "Engineering, Oil & Gas, Healthcare and Construction solutions.",
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
