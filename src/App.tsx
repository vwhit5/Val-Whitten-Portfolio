import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import ContactModal from "./components/ContactModal";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navigation from "./components/Navigation";
import PasswordModal from "./components/PasswordModal";
import ProjectsSection from "./components/ProjectsSection";
import StrategyDashboard from "./components/StrategyDashboard";
import TransitionSection from "./components/TransitionSection";
import type { AppTab } from "./types";

function App(): JSX.Element {
  const [showContact, setShowContact] = useState<boolean>(false);
  const [mouseX, setMouseX] = useState<number>(0);
  const [mouseY, setMouseY] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<AppTab>("portfolio");
  const [isStrategyUnlocked, setIsStrategyUnlocked] = useState<boolean>(false);
  const [showPasswordModal, setShowPasswordModal] = useState<boolean>(false);
  const [pendingTab, setPendingTab] = useState<AppTab | null>(null);

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

  const isPortfolioView = activeTab === "portfolio";

  const closePasswordModal = () => {
    setShowPasswordModal(false);
    setPendingTab(null);
  };

  const handlePasswordSubmit = (password: string) => {
    if (password === "BildW25") {
      setIsStrategyUnlocked(true);
      setActiveTab("strategy");
      closePasswordModal();
      return true;
    }

    return false;
  };

  const handleTabChange = (tab: AppTab): boolean => {
    if (tab === activeTab) {
      return true;
    }

    if (tab === "strategy" && !isStrategyUnlocked) {
      setPendingTab(tab);
      setShowPasswordModal(true);
      return false;
    }

    setActiveTab(tab);
    return true;
  };

  return (
    <div
      className={`min-h-screen ${
        isPortfolioView
          ? "text-white overflow-x-hidden gradient-bg"
          : "bg-slate-100"
      }`}
    >
      {isPortfolioView && (
        <>
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
        </>
      )}

      <Navigation
        onContactClick={() => setShowContact(true)}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />

      {isPortfolioView ? (
        <>
          <HeroSection />
          <TransitionSection />
          <ProjectsSection />
          <AboutSection />
          <Footer />
        </>
      ) : (
        <main className="pt-28 pb-16">
          <StrategyDashboard />
        </main>
      )}

      <ContactModal
        isOpen={showContact}
        onClose={() => setShowContact(false)}
      />

      <PasswordModal
        isOpen={showPasswordModal && pendingTab === "strategy"}
        onClose={closePasswordModal}
        onSubmit={handlePasswordSubmit}
      />
    </div>
  );
}

export default App;
