import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import EducationCertificates from "@/components/EducationCertificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 bg-grid-pattern relative selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <EducationCertificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
