const AboutSection: React.FC = () => {
  const skills = [
    "Management Consulting",
    "Emerging Markets",
    "Consumer Strategy",
    "Behavioral Economics",
    "Real Estate",
    "Law",
    "Tableau",
    "Salesforce",
    "Advanced Excel",
    "IBM Business Analyst Certificate",
    "Bloomberg Market Concepts",
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 text-white">
          ABOUT VAL
        </h2>

        <p className="text-xl mb-12 text-gray-300 max-w-3xl">
          Strategy consultant. First-generation. Built to navigate systems. 
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Photo */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative group mb-6">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-sm p-6 rounded-3xl border border-gray-700 group-hover:border-blue-500/50 transition-all duration-500">
                <img
                  src="/DSC02478.jpeg"
                  alt="Val Whitten"
                  className="w-64 h-80 lg:w-72 lg:h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
            <div className="text-center text-white text-sm font-light flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Los Angeles, CA</span>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">
              Expertise & Skills
            </h3>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                {skills.slice(0, 3).map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full text-sm border border-gray-700 hover:border-blue-500 hover:bg-gray-700/50 transition-all duration-300 text-white cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.slice(3, 6).map((skill, index) => (
                  <span
                    key={index + 3}
                    className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full text-sm border border-gray-700 hover:border-blue-500 hover:bg-gray-700/50 transition-all duration-300 text-white cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full text-sm border border-gray-700 hover:border-blue-500 hover:bg-gray-700/50 transition-all duration-300 text-white cursor-default">
                  Tableau
                </span>
                <span className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full text-sm border border-gray-700 hover:border-blue-500 hover:bg-gray-700/50 transition-all duration-300 text-white cursor-default">
                  Salesforce
                </span>
                <span className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full text-sm border border-gray-700 hover:border-blue-500 hover:bg-gray-700/50 transition-all duration-300 text-white cursor-default">
                  Advanced Excel
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full text-sm border border-gray-700 hover:border-blue-500 hover:bg-gray-700/50 transition-all duration-300 text-white cursor-default">
                  IBM Business Analyst Certificate
                </span>
                <span className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full text-sm border border-gray-700 hover:border-blue-500 hover:bg-gray-700/50 transition-all duration-300 text-white cursor-default">
                  Bloomberg Market Concepts
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
