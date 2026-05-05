import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Reviews from "@/components/Reviews";
import Experience from "@/components/Experience";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollToTop from "@/components/ScrollToTop";
import RevealObserver from "@/components/RevealObserver";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <RevealObserver />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Projects />
        <Reviews />
        <Experience />
        <Stack />
        <Contact />
      </main>
      <ScrollToTop />
      <Footer />
    </>
  );
}
