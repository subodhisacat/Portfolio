import { useState, useEffect } from "react";

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPrompt(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      setDeferredPrompt(null);
      setShowPrompt(false);
    }
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-6 rounded-xl shadow-2xl flex items-center gap-6 z-50 border border-gray-200 dark:border-gray-700 animate-fade-in">
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-gray-900 dark:text-white">
          Install Portfolio App
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Add to your home screen for quick access
        </p>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={handleInstallClick}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105 font-medium shadow-md hover:shadow-lg"
        >
          Install Now
        </button>
        <button
          onClick={() => setShowPrompt(false)}
          className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
          aria-label="Close"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
