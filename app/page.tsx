import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Booking from "./components/Booking";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar lang="fi" />
      <Hero lang="fi" />
      <Services lang="fi" />
      <Booking lang="fi" />
      <Gallery lang="fi" />
      <Contact lang="fi" />
      <Footer lang="fi" />
    </main>
  );
}
