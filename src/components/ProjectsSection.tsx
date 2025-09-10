import { ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { getProjectIcon, projects } from "../data";

interface SelectedProject {
  name: string;
  category: string;
  metric: string;
  description: string;
  problem: string;
  action: string;
  result: string;
  colorClasses: string;
}

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] =
    useState<SelectedProject | null>(null);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<string | null>(null);
  const [lastScrollLeft, setLastScrollLeft] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Project scroll tracking
  useEffect(() => {
    const handleProjectScroll = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const cardWidth = 340 + 24;
        const scrollLeft = container.scrollLeft;

        if (scrollLeft > lastScrollLeft) {
          setScrollDirection("right");
        } else if (scrollLeft < lastScrollLeft) {
          setScrollDirection("left");
        }
        setLastScrollLeft(scrollLeft);

        setTimeout(() => setScrollDirection(null), 150);

        const containerWidth = container.offsetWidth;
        const scrollPosition = scrollLeft + containerWidth / 2;
        let currentIndex = Math.round(scrollPosition / cardWidth);

        currentIndex = Math.max(0, Math.min(currentIndex, projects.length - 1));

        if (scrollLeft <= 10) {
          currentIndex = 0;
        } else if (scrollLeft >= container.scrollWidth - containerWidth - 10) {
          currentIndex = projects.length - 1;
        }

        setCurrentProjectIndex(currentIndex);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleProjectScroll);
      handleProjectScroll();
      return () => container.removeEventListener("scroll", handleProjectScroll);
    }
  }, [projects.length, lastScrollLeft]);

  const highlightText = (text: string, section: 'problem' | 'action' | 'result') => {
    const keywords = [
      "data-driven approach",
      "reduce tenant turnover",
      "optimize portfolio performance",
      "market research",
      "product positioning strategy",
      "maximize revenue",
      "low engagement rates",
      "no systematic approach",
      "measuring success",
      "strategic direction",
      "expanding impact",
      "maintaining operational efficiency",
      "declining sales",
      "no clear understanding",
      "Analyzed 750 tenant records",
      "built predictive churn model",
      "created ROI heatmap",
      "Conducted comprehensive market analysis",
      "interviewed 30+ artisans",
      "developed go-to-market strategy",
      "Built comprehensive KPI framework",
      "redesigned matching algorithm",
      "implemented tracking system",
      "Benchmarked 11 similar nonprofits",
      "analyzed 65 events",
      "conducted stakeholder interviews",
      "Analyzed 6 months of sales data",
      "conducted 50+ customer surveys",
      "benchmarked 8 competing bakeries",
      "20% churn reduction",
      "$50K annual savings",
      "150% revenue growth",
      "15+ women entrepreneurs",
      "40% improvement in engagement rates",
      "20+ underclassmen",
      "3x growth potential",
      "underserved youth market",
      "35% market loss",
      "25% revenue increase",
    ];

    // New blue scheme: Problem (darkest), Action (medium), Result (lightest)
    const colorClass = section === 'problem' ? 'text-blue-800' : 
                      section === 'action' ? 'text-blue-600' : 
                      'text-blue-500';

    let highlightedText = text;
    keywords.forEach((keyword) => {
      const regex = new RegExp(
        `(${keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
        "gi"
      );
      highlightedText = highlightedText.replace(
        regex,
        `<span class="font-semibold ${colorClass}">$1</span>`
      );
    });

    return highlightedText;
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            CHECK OUT MY CLIENTS
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            <span className="font-semibold text-blue-500">
              Real-world consulting work
            </span>
            <span className="text-white">
              {" "}
              for nonprofits, student housing, Indigenous artisans, and
              multicultural mentorship programs.
            </span>
          </p>
        </div>

        <div className="w-full">
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto pb-6"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <div
              className="flex space-x-6 px-2 min-w-max"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="flex-none w-72 h-[420px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-white/95 backdrop-blur-sm group"
                  style={{ scrollSnapAlign: "start" }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="h-full p-5 flex flex-col relative">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-2">
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-r ${project.colorClasses} text-white`}
                        >
                          {getProjectIcon(project.category)}
                        </div>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                          {project.category}
                        </span>
                      </div>
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-gray-700 transition-colors">
                        {project.name}
                      </h3>

                      <div className="mb-4">
                        <span
                          className={`inline-block bg-gradient-to-r ${project.colorClasses} text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg`}
                        >
                          {project.metric}
                        </span>
                      </div>

                      <p className="text-sm leading-relaxed mb-6 text-gray-600 flex-1">
                        {project.description}
                      </p>

                      <div className="mt-auto">
                        <div className="text-sm font-medium text-blue-500 flex items-center">
                          Click to read full case study
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-6">
            <div
              className={`transition-all duration-300 ${
                scrollDirection === "left"
                  ? "text-blue-400 scale-125"
                  : "text-gray-600"
              }`}
            >
              <ChevronLeft size={28} />
            </div>

            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    index === currentProjectIndex
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 w-8"
                      : "bg-gray-600 w-2"
                  }`}
                />
              ))}
            </div>

            <div
              className={`transition-all duration-300 ${
                scrollDirection === "right"
                  ? "text-blue-400 scale-125"
                  : "text-gray-600"
              }`}
            >
              <ChevronRight size={28} />
            </div>
          </div>

          <div className="flex justify-center mt-16">
            <div className="animate-bounce">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                className="text-gray-400"
              >
                <path
                  d="M7 13l5 5 5-5M7 6l5 5 5-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="max-w-6xl w-full rounded-2xl shadow-2xl bg-white/95 backdrop-blur-sm flex flex-col max-h-[90vh]">
            {/* Header */}
            <div className="flex-shrink-0 p-6 border-b border-gray-200/50 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-r ${selectedProject.colorClasses} text-white`}
                >
                  {getProjectIcon(selectedProject.category)}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {selectedProject.name}
                  </h2>
                  <p className="text-gray-600">{selectedProject.category}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-3 rounded-full hover:bg-gray-100 transition-all duration-300 text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Problem Section - Darkest Blue */}
                <div className="p-6 rounded-2xl bg-white border border-gray-200">
                  <div className="w-16 h-1 bg-blue-800 mb-4 rounded-full" />
                  <h3 className="text-2xl font-bold mb-4 text-blue-800">
                    PROBLEM
                  </h3>
                  <p
                    className="text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: highlightText(selectedProject.problem, 'problem'),
                    }}
                  />
                </div>

                {/* Action Section - Medium Blue */}
                <div className="p-6 rounded-2xl bg-white border border-gray-200">
                  <div className="w-16 h-1 bg-blue-600 mb-4 rounded-full" />
                  <h3 className="text-2xl font-bold mb-4 text-blue-600">
                    ACTION
                  </h3>
                  <p
                    className="text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: highlightText(selectedProject.action, 'action'),
                    }}
                  />
                </div>

                {/* Result Section - Lightest Blue */}
                <div className="p-6 rounded-2xl bg-white border border-gray-200">
                  <div className="w-16 h-1 bg-blue-500 mb-4 rounded-full" />
                  <h3 className="text-2xl font-bold mb-4 text-blue-500">
                    RESULT
                  </h3>
                  <p
                    className="text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: highlightText(selectedProject.result, 'result'),
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;