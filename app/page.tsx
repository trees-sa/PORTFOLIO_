import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-cyber-black flex flex-col z-10 selection:bg-cyber-cyan/30 selection:text-white">
      
      {/* Absolute Ambient Glow Highlights */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-cyber-cyan/5 blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-[20%] left-0 w-[400px] h-[400px] rounded-full bg-cyber-blue/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[30%] right-[10%] w-[500px] h-[500px] rounded-full bg-cyber-cyan/5 blur-[160px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-cyber-blue/5 blur-[120px] pointer-events-none z-0" />

      {/* Navigation header */}
      <Navbar />

      {/* Main page content */}
      <main className="flex-grow flex flex-col">
        {/* Hero Section */}
        <Hero />

        {/* Projects Section */}
        <Projects />

        {/* About Section (with bottom centered completed statistics card) */}
        <About />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer Section */}
      <Footer />
      
    </div>
  );
}
