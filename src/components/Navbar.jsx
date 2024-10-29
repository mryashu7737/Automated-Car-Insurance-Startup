import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaCar,
  FaClipboard,
  FaTools,
  FaShieldAlt,
  FaCog,
  FaSignOutAlt,
  FaHome,
  FaInfoCircle,
  FaSearch,
  FaExclamationTriangle, // Importing icon for Fraud Detector
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [error, setError] = useState("");
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSignOut = () => {
    try {
      // Simulated sign-out logic
      setError("");
      // Close dropdown after sign out
      setShowDropdown(false);
    } catch (error) {
      setError("Failed to sign out. Please try again.");
    }
  };

  // Function to check if the link is active
  const isActive = (path) => {
    return location.pathname === path ? "text-blue-600" : "text-gray-600";
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <FaCar className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-bold text-gray-800">CarCare</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {/* Home Link */}
                <Link
                  to="/"
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-all duration-300 group ${isActive(
                    "/"
                  )}`}
                  aria-label="Home"
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  <FaHome className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="relative">
                    Home
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>

                {/* Car Details Link */}
                <Link
                  to="/page/car-details"
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-all duration-300 group ${isActive(
                    "/page/car-details"
                  )}`}
                  aria-label="Car Details"
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  <FaInfoCircle className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="relative">
                    Car Details
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>

                {/* Inspector Link */}
                <Link
                  to="/page/inspector"
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-all duration-300 group ${isActive(
                    "/page/inspector"
                  )}`}
                  aria-label="Inspector"
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  <FaSearch className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="relative">
                    Inspector
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>

                {/* Claim Link */}
                <Link
                  to="/page/claim"
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-all duration-300 group ${isActive(
                    "/page/claim"
                  )}`}
                  aria-label="Claim"
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  <FaClipboard className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="relative">
                    Claim
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>

                {/* Repair Link */}
                <Link
                  to="/page/repair"
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-all duration-300 group ${isActive(
                    "/page/repair"
                  )}`}
                  aria-label="Repair"
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  <FaTools className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="relative">
                    Repair
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>

                {/* Insurance Link */}
                <Link
                  to="/page/insurance"
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-all duration-300 group ${isActive(
                    "/page/insurance"
                  )}`}
                  aria-label="Insurance"
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  <FaShieldAlt className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="relative">
                    Insurance
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>

                {/* Fraud Detector Link */}
                <Link
                  to="/page/fraud-detector" // Update this path based on your routing
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-all duration-300 group ${isActive(
                    "/page/fraud-detector"
                  )}`}
                  aria-label="Fraud Detector"
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  <FaExclamationTriangle className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="relative">
                    Fraud Detector
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Profile Dropdown */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 relative">
              <Link
                to="/profile"
                className="p-2 rounded-full text-gray-600 hover:text-blue-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
                aria-label="User profile"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                <FaUser className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
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
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className={`flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 transition-all duration-300 group ${isActive(
              "/"
            )}`}
            onClick={toggleMenu}
          >
            <FaHome className="mr-2 group-hover:scale-110 transition-transform duration-300" />
            Home
          </Link>
          <Link
            to="/page/car-details"
            className={`flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 transition-all duration-300 group ${isActive(
              "/page/car-details"
            )}`}
            onClick={toggleMenu}
          >
            <FaInfoCircle className="mr-2 group-hover:scale-110 transition-transform duration-300" />
            Car Details
          </Link>
          <Link
            to="/page/inspector"
            className={`flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 transition-all duration-300 group ${isActive(
              "/page/inspector"
            )}`}
            onClick={toggleMenu}
          >
            <FaSearch className="mr-2 group-hover:scale-110 transition-transform duration-300" />
            Inspector
          </Link>
          <Link
            to="/page/claim"
            className={`flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 transition-all duration-300 group ${isActive(
              "/page/claim"
            )}`}
            onClick={toggleMenu}
          >
            <FaClipboard className="mr-2 group-hover:scale-110 transition-transform duration-300" />
            Claim
          </Link>
          <Link
            to="/page/repair"
            className={`flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 transition-all duration-300 group ${isActive(
              "/page/repair"
            )}`}
            onClick={toggleMenu}
          >
            <FaTools className="mr-2 group-hover:scale-110 transition-transform duration-300" />
            Repair
          </Link>
          <Link
            to="/page/insurance"
            className={`flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 transition-all duration-300 group ${isActive(
              "/page/insurance"
            )}`}
            onClick={toggleMenu}
          >
            <FaShieldAlt className="mr-2 group-hover:scale-110 transition-transform duration-300" />
            Insurance
          </Link>
          {/* Fraud Detector Link in Mobile Menu */}
          <Link
            to="/page/fraud-detector" // Update this path based on your routing
            className={`flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 transition-all duration-300 group ${isActive(
              "/page/fraud-detector"
            )}`}
            onClick={toggleMenu}
          >
            <FaExclamationTriangle className="mr-2 group-hover:scale-110 transition-transform duration-300" />
            Fraud Detector
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
