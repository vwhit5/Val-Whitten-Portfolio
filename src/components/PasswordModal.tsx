import { useEffect, useState } from "react";
import type { PasswordModalProps } from "../types";

const PasswordModal: React.FC<PasswordModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setPassword("");
      setError(null);
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const success = onSubmit(password);

    if (!success) {
      setError("Incorrect password. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 z-50">
      <div className="max-w-sm w-full rounded-2xl shadow-2xl bg-white/95 backdrop-blur-sm">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              Enter Password
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300 text-gray-500 hover:text-gray-700"
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <p className="text-sm text-gray-600 mb-6">
            The Strategy &amp; GTM dashboard is protected. Please enter the
            password to continue.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="strategy-password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                id="strategy-password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 outline-none transition"
                placeholder="Enter password"
                autoFocus
              />
            </div>

            {error && (
              <p className="text-sm text-red-500" role="alert">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
            >
              Unlock Dashboard
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordModal;
