import { useEffect, useState } from "react";

const TransitionSection: React.FC = () => {
  const [animatedLines, setAnimatedLines] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollProgress = Math.max(
        0,
        (scrollY - windowHeight * 0.6) / (windowHeight * 0.4)
      );

      const newAnimatedLines = animatedLines.map(
        (_, index) => scrollProgress > index * 0.25
      );
      setAnimatedLines(newAnimatedLines);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [animatedLines]);

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight space-y-8 text-white">
          <div
            className={`transition-all duration-1000 ease-out ${
              animatedLines[0]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            Each of these taught me
          </div>
          <div
            className={`bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent transition-all duration-1000 ease-out ${
              animatedLines[1]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            skills and industry knowledge
          </div>
          <div
            className={`transition-all duration-1000 ease-out ${
              animatedLines[2]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            I've applied to do projects that
          </div>
          <div
            className={`text-blue-400 font-extrabold transition-all duration-1000 ease-out ${
              animatedLines[3]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            built something impactful
          </div>
        </div>

        <div className="mt-20 animate-bounce">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            className="mx-auto text-gray-400"
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
    </section>
  );
};

export default TransitionSection;
