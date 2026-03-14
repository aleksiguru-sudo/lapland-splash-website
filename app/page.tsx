import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Gallery from "./components/Gallery";
import Booking from "./components/Booking";
import CtaBanner from "./components/CtaBanner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar lang="fi" />
      <Hero lang="fi" />
      <Marquee />
      <Services lang="fi" />
      <Experience lang="fi" />
      <Gallery lang="fi" />
      <Booking lang="fi" />
      <CtaBanner lang="fi" />
      <Contact lang="fi" />
      <Footer lang="fi" />
    </main>
  );
}
