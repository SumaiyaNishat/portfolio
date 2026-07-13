import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Skills />

        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
