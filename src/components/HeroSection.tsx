import { useEffect, useState } from "react";
import { jobs } from "../data";

const HeroSection: React.FC = () => {
  const [currentJob, setCurrentJob] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentJob((prev) => (prev + 1) % jobs.length);
          setIsTransitioning(false);
        }, 300);
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [isTransitioning]);

  const currentJobData = jobs[currentJob];
  const progressPercentage = ((currentJob + 1) / jobs.length) * 100;

  return (
    <section
      id="journey"
      className="min-h-screen flex flex-col justify-center items-center px-6 relative"
    >
      <div className="max-w-6xl mx-auto w-full text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
            EVERY JOB TAUGHT ME SOMETHING
          </h2>
        </div>

        <div
          className={`job-transition ${
            isTransitioning
              ? "opacity-0 scale-95 translate-y-2"
              : "opacity-100 scale-100 translate-y-0"
          }`}
        >
          <h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-white"
            style={{
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 0.9,
            }}
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              {currentJobData.title}
            </span>
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl font-light tracking-wide text-gray-400 text-center mb-8"
            style={{ fontWeight: 300, letterSpacing: "0.05em" }}
          >
            {currentJobData.employer}
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center space-y-4">
          <div className="text-xs font-medium tracking-wider text-gray-500">
            {String(currentJob + 1).padStart(2, "0")} /{" "}
            {String(jobs.length).padStart(2, "0")}
          </div>

          <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full transition-all duration-500 ease-out bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
              style={{ width: `${progressPercentage}%` }}
            />
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

export default HeroSection;
