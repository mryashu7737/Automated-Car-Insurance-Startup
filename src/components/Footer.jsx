import { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d"
              alt="CarInsure Logo"
              className="h-12 w-auto"
            />
            <p className="text-sm text-gray-400">
              Your trusted partner in comprehensive car insurance solutions, providing peace of mind on every journey.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Home">Home</button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="About Us">About Us</button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Services">Services</button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Contact Us">Contact Us</button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li>
                <button className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Privacy Policy">Privacy Policy</button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Terms of Service">Terms of Service</button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Cookie Policy">Cookie Policy</button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect With Us</h3>
            <div className="flex space-x-4">
              <button
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </button>
              <button
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </button>
              <button
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-400 text-center">
            Disclaimer: Insurance products and services are subject to terms, conditions, and eligibility requirements. Please read all policy documents carefully before purchase.
          </p>
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} CarInsure. All rights reserved.
        </div>
      </div>

      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </footer>
  );
};

export default Footer;