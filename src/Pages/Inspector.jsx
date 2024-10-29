import React, { useState } from "react";
import { FaPhone, FaUserTie, FaExclamationCircle, FaHome } from "react-icons/fa";

const Inspector = () => {
  const [showError, setShowError] = useState(false);

  const handleCallClick = () => {
    try {
      window.location.href = "https://rainbow-swan-b0770f.netlify/";
    } catch (error) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-blue-600 shadow-lg" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <FaUserTie className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-bold text-white">Video Inspection Portal</span>
            </div>
            <div className="flex items-center">
              <a
                href="http://localhost:5173/"
                className="flex items-center px-3 py-2 rounded-md text-white hover:text-gray-200 hover:bg-blue-700 transition-all duration-300"
                aria-label="Home"
              >
                <FaHome className="mr-2" />
                Home
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* Rest of the component remains the same */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Welcome to Video Inspection Services</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Professional inspection services at your fingertips. Connect with our expert inspectors for detailed video assessments.
        </p>

        {/* Inspector Card */}
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
          <div className="md:flex">
            <div className="p-8">
              <div className="flex items-center justify-center mb-4">
                <img
                  className="h-32 w-32 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                  alt="Inspector Profile"
                />
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">John Doe</h2>
                <p className="text-gray-600 mb-4">Senior Video Inspector</p>
                <p className="text-gray-500 mb-6">
                  Specialized in residential and commercial property inspections with over 10 years of experience.
                </p>
                <button
                  onClick={handleCallClick}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
                  aria-label="Click to call inspector"
                >
                  <FaPhone className="mr-2" />
                  Click to Call
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Error Toast */}
        {showError && (
          <div
            className="fixed bottom-4 right-4 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded shadow-lg"
            role="alert"
          >
            <div className="flex items-center">
              <FaExclamationCircle className="mr-2" />
              <p>Unable to initiate call. Please try again.</p>
            </div>
          </div>
        )}
      </div>

      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-white focus:text-blue-600"
      >
        Skip to main content
      </a>
    </div>
  );
};

export default Inspector;