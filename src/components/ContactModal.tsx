import { ContactModalProps } from "../types";

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 z-50">
      <div className="max-w-lg w-full rounded-2xl shadow-2xl bg-white/95 backdrop-blur-sm">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Let's Connect</h2>
            <button
              onClick={onClose}
              className="p-3 rounded-full hover:bg-gray-100 transition-all duration-300 text-gray-500 hover:text-gray-700"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          <div className="space-y-4">
            <a
              href="mailto:vwhitten@usc.edu"
              className="flex items-center space-x-3 p-4 rounded-xl hover:bg-gray-100 transition-all duration-300 text-gray-900 group"
            >
              <div className="p-2 rounded-lg bg-blue-100 group-hover:bg-blue-200 transition-colors">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  className="text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <span className="font-medium">vwhitten@usc.edu</span>
            </a>
            <a
              href="https://linkedin.com/in/valeriewhitten"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-4 rounded-xl hover:bg-gray-100 transition-all duration-300 text-gray-900 group"
            >
              <div className="p-2 rounded-lg bg-blue-100 group-hover:bg-blue-200 transition-colors">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="text-blue-600"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <span className="font-medium">LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
