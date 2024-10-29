import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineSafety, AiOutlineInfoCircle } from "react-icons/ai";

const CarDetails = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const slides = [
    {
      url: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8",
      title: "Front View",
    },
    {
      url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
      title: "Side View",
    },
    {
      url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
      title: "Rear View",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-blue-600 shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-white text-xl font-bold">Car Details</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              <button 
                onClick={() => window.open("http://localhost:5173/", "_blank")}
                className="text-white hover:text-blue-200 transition-colors duration-200"
                aria-label="Home"
              >
                Home
              </button>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <button
                onClick={toggleNav}
                className="text-white p-2"
                aria-label="Toggle navigation"
              >
                {isNavOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isNavOpen && (
          <div className="md:hidden bg-blue-500">
            <button
              onClick={() => window.open("http://localhost:5173/", "_blank")}
              className="block w-full text-white hover:bg-blue-600 px-4 py-2 transition-colors duration-200"
              aria-label="Home"
            >
              Home
            </button>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {/* Image Slider */}
        <div className="relative h-[60vh] w-full overflow-hidden">
          <div
            className="absolute inset-0 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="absolute top-0 h-full w-full"
                style={{ left: `${index * 100}%` }}
              >
                <img
                  src={slide.url}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Slider Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors duration-200"
            aria-label="Previous slide"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors duration-200"
            aria-label="Next slide"
          >
            <FiChevronRight size={24} />
          </button>
        </div>

        {/* Car Information */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-gray-800">
                2023 Luxury Sedan
              </h1>
              <p className="text-gray-600">
                Experience luxury and performance in perfect harmony. This
                stunning vehicle combines cutting-edge technology with elegant
                design.
              </p>
              <a
                href="https://vocal-brigadeiros-0a1c0b.netlify.app/"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                aria-label="Visit Dealer Website"
              >
                Check Your Car Details
              </a>
            </div>

            {/* Insurance Information */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Insurance Details
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <AiOutlineSafety className="text-blue-600 text-2xl" />
                  <div>
                    <h3 className="font-semibold">Comprehensive Coverage</h3>
                    <p className="text-gray-600">
                      Full protection for your vehicle
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <AiOutlineInfoCircle className="text-blue-600 text-2xl" />
                  <div>
                    <h3 className="font-semibold">24/7 Roadside Assistance</h3>
                    <p className="text-gray-600">Help whenever you need it</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CarDetails;
