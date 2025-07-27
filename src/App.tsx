import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import ContactModal from "./components/ContactModal";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navigation from "./components/Navigation";
import ProjectsSection from "./components/ProjectsSection";
import TransitionSection from "./components/TransitionSection";

function App(): JSX.Element {
  const [showContact, setShowContact] = useState<boolean>(false);
  const [mouseX, setMouseX] = useState<number>(0);
  const [mouseY, setMouseY] = useState<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMouseX(x);
      setMouseY(y);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen text-white overflow-x-hidden gradient-bg">
      {/* Animated Background Elements */}
      <div
        className="bg-parallax-1"
        style={{
          transform: `translate(${mouseX * 20}px, ${mouseY * 20}px)`,
        }}
      />
      <div
        className="bg-parallax-2"
        style={{
          transform: `translate(${mouseX * -15}px, ${mouseY * -15}px)`,
        }}
      />

      <Navigation onContactClick={() => setShowContact(true)} />
      <HeroSection />
      <TransitionSection />
      <ProjectsSection />
      <AboutSection />
      <Footer />

      <ContactModal
        isOpen={showContact}
        onClose={() => setShowContact(false)}
      />
    </div>
  );
}

export default App;
