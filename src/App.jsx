import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans antialiased bg-gradient-to-b from-blue-300 to-white min-h-screen">
      <Navbar />
      <main className="pt-16"> {/* reserve space for sticky navbar */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
