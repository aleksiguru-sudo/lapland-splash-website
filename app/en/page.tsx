import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Services from "../components/Services";
import Experience from "../components/Experience";
import Gallery from "../components/Gallery";
import Booking from "../components/Booking";
import CtaBanner from "../components/CtaBanner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Lapland Splash — Jet Ski Safari Rovaniemi, Finland",
  description: "Finland's best jet ski safari experience on the Kemijoki river in Rovaniemi, Lapland. Book online. Sea-Doo fleet, professional guides.",
};

export default function HomeEN() {
  return (
    <main>
      <Navbar lang="en" />
      <Hero lang="en" />
      <Marquee />
      <Services lang="en" />
      <Experience lang="en" />
      <Gallery lang="en" />
      <Booking lang="en" />
      <CtaBanner lang="en" />
      <Contact lang="en" />
      <Footer lang="en" />
    </main>
  );
}
