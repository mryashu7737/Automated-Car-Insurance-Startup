import React, { useState } from "react";
import { FaPhone, FaClock, FaMapMarkerAlt, FaTools, FaCar, FaOilCan, FaCogs, FaWrench } from "react-icons/fa";

const Repair = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    { id: 1, icon: <FaTools />, title: "General Repairs", description: "Complete car maintenance and repair services" },
    { id: 2, icon: <FaCar />, title: "Diagnostics", description: "Advanced computer diagnostics for all car models" },
    { id: 3, icon: <FaOilCan />, title: "Oil Change", description: "Professional oil change and fluid services" },
    { id: 4, icon: <FaCogs />, title: "Engine Repair", description: "Expert engine repair and maintenance" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <FaWrench className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">AutoCare Pro</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#services" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500">Services</a>
                <a href="#location" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500">Location</a>
                <a href="#contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500">Contact</a>
                <div className="hidden md:flex space-x-6">
            <button 
            onClick={() => window.open("http://localhost:5173/", "_blank")}
            className="hover:text-blue-200 transition-colors duration-200">Home</button>
          </div>
              </div>
              
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-500 focus:outline-none"
                aria-label="Main menu"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#services" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500">Services</a>
              <a href="#location" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500">Location</a>
              <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500">Contact</a>
            </div>
          </div>
        )}
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Car Repair Services</h1>
          <p className="text-xl text-gray-600">Expert care for your vehicle</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-blue-600 text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div id="location" className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Our Location</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243556.0373403021!2d78.1679125493046!3d17.480614000000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb930d5e6ea48f%3A0x3d1b8f431ff4c23d!2sI%20Car%20Service%20(Audi%20BMW%20Volvo%20Mercedes%20benz%20Jaguar%20Car%20Services)!5e0!3m2!1sen!2sin!4v1729985802528!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps location"
            ></iframe>
          </div>
        </div>

        <div id="contact" className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaPhone className="text-blue-600 mr-2" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <FaClock className="text-blue-600 mr-2" />
                <span>Mon-Fri: 8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-blue-600 mr-2" />
                <span>123 Auto Service Lane, Cartown, CT 06510</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repair;
