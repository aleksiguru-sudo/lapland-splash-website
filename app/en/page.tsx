import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Booking from "../components/Booking";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Lapland Splash — Jet Ski Safari Rovaniemi, Finland",
  description:
    "Experience unique jet ski safaris on the Kemijoki river in Rovaniemi, Finnish Lapland. Book online. Thrill, nature and arctic adventure await.",
};

export default function HomeEN() {
  return (
    <main>
      <Navbar lang="en" />
      <Hero lang="en" />
      <Services lang="en" />
      <Booking lang="en" />
      <Gallery lang="en" />
      <Contact lang="en" />
      <Footer lang="en" />
    </main>
  );
}
