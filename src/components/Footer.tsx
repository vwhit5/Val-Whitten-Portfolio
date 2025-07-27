const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex justify-center space-x-12">
          <a
            href="https://linkedin.com/in/valeriewhitten"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-semibold hover:text-blue-400 transition-colors text-white relative group"
          >
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            className="text-2xl font-semibold hover:text-blue-400 transition-colors text-white relative group"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
