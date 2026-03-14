import type { Metadata } from "next";
import { Poppins, Arimo } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "800"],
  style: ["italic", "normal"],
  variable: "--font-heading",
});

const arimo = Arimo({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Lapland Splash — Jet Ski Safari Rovaniemi",
  description:
    "Koe ainutlaatuinen vesijettisafari Kemijoen vesistöillä Rovaniemellä. Experience unique jet ski safaris on the Kemijoki river in Rovaniemi, Finnish Lapland.",
  keywords: [
    "jet ski Rovaniemi",
    "vesijetti vuokraus Rovaniemi",
    "jet ski safari Lapland",
    "vesijettisafari Rovaniemi",
    "water activities Rovaniemi",
    "Lapland Splash",
  ],
  openGraph: {
    title: "Lapland Splash — Jet Ski Safari Rovaniemi",
    description:
      "Experience unique jet ski safaris on the Kemijoki river in Rovaniemi, Finnish Lapland.",
    url: "https://laplandsplash.com",
    siteName: "Lapland Splash",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fi">
      <body className={`${poppins.variable} ${arimo.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
