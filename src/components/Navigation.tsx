import { useState } from "react";
import { NavigationProps } from "../types";

const Navigation: React.FC<NavigationProps> = ({
  onContactClick,
  onTabChange,
  activeTab,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isPortfolioView = activeTab === "portfolio";

  const scrollToSection = (id: string) => {
    const navigate = () => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    if (!isPortfolioView) {
      const changed = onTabChange("portfolio");
      if (changed) {
        window.setTimeout(navigate, 100);
      } else {
        navigate();
      }
    } else {
      navigate();
    }

    setIsMobileMenuOpen(false);
  };

  const goToStrategy = () => {
    if (activeTab !== "strategy") {
      const changed = onTabChange("strategy");
      if (changed) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }

    setIsMobileMenuOpen(false);
  };

  const goToPortfolio = () => {
    if (!isPortfolioView) {
      const changed = onTabChange("portfolio");
      if (changed) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }

    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleContactClick = () => {
    onContactClick();
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-500 nav-bg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold tracking-wider text-white">
            VAL WHITTEN
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {isPortfolioView ? (
              <>
                <button
                  onClick={() => scrollToSection("journey")}
                  className="text-white hover:text-blue-400 transition-all duration-300"
                >
                  PROJECTS
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-white hover:text-blue-400 transition-all duration-300"
                >
                  ABOUT ME
                </button>
                <button
                  onClick={goToStrategy}
                  className="text-white hover:text-blue-400 transition-all duration-300"
                >
                  STRATEGY &amp; GTM
                </button>
              </>
            ) : (
              <button
                onClick={goToPortfolio}
                className="text-white hover:text-blue-400 transition-all duration-300"
              >
                PORTFOLIO
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white p-2">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={handleContactClick}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              CONTACT
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden mt-4 pb-4 border-t border-gray-700 ${
            isMobileMenuOpen ? "" : "hidden"
          }`}
        >
          <div className="flex flex-col space-y-2 pt-4">
            {isPortfolioView ? (
              <>
                <button
                  onClick={() => scrollToSection("journey")}
                  className="text-left text-white hover:text-blue-400 transition-colors py-2"
                >
                  PROJECTS
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left text-white hover:text-blue-400 transition-colors py-2"
                >
                  ABOUT ME
                </button>
                <button
                  onClick={goToStrategy}
                  className="text-left text-white hover:text-blue-400 transition-colors py-2"
                >
                  STRATEGY &amp; GTM
                </button>
              </>
            ) : (
              <button
                onClick={goToPortfolio}
                className="text-left text-white hover:text-blue-400 transition-colors py-2"
              >
                PORTFOLIO
              </button>
            )}
            <button
              onClick={handleContactClick}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg mt-4 self-start"
            >
              CONTACT
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
