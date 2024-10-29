import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";

const FraudDetector = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleRedirect = (url) => {
    window.location.href = url;
  };

  const navLinks = [
    { title: "Home", icon: <FaShieldAlt />, url: "http://localhost:5173/" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-600">FraudGuard</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleRedirect(link.url)}
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  {link.icon}
                  <span>{link.title}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleRedirect(link.url)}
                  className="flex items-center space-x-2 w-full px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
                >
                  {link.icon}
                  <span>{link.title}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">
              Protecting You From Auto Insurance Fraud
            </h1>
            <p className="text-lg text-gray-600">
              Our advanced fraud detection system helps identify and prevent automotive insurance fraud,
              protecting both insurers and honest policyholders.
            </p>
            <button
              onClick={() => handleRedirect("https://frauddetectionashu.streamlit.app/")}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Report Fraud"
            >
              Report Suspicious Activity
            </button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
              alt="Car insurance fraud detection illustration showing a protective shield over a car"
              className="rounded-xl shadow-2xl w-full object-cover"
              style={{ height: "400px" }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-xl"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FraudDetector;
