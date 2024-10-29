import { useState } from "react";
import { FaPhone, FaUserTie, FaExclamationCircle, FaHome ,FaCar} from "react-icons/fa";
const Claim = () => {
    const [showError, setShowError] = useState(false);

  const handleCallClick = () => {
    try {
      window.location.href = "https://yolocardamage.streamlit.app/";
    } catch (error) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2"
          alt="Car Insurance Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      <nav className="relative z-10 bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <FaCar className="text-2xl" />
            <span className="text-xl font-bold">Car Insurance Claims</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <button 
            onClick={() => window.open("http://localhost:5173/", "_blank")}
            className="hover:text-blue-200 transition-colors duration-200">Home</button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Your Trusted Car Insurance Partner</h1>
          <p className="text-xl text-gray-200">Protecting your journey with comprehensive coverage and quick claims</p>
        </div>

        <div className="mt-16 text-center " >
        <button
                  onClick={handleCallClick}
                  className="px-12 py-4 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transform transition-all duration-200 hover:scale-105 shadow-lg"
                  aria-label="Click to call inspector"
                >
                  
                  Damage Detector
                </button>
                <button
                className="px-12 py-4  bg-blue-600 text-white m-10 rounded-full text-lg font-semibold hover:bg-blue-700 transform transition-all duration-200 hover:scale-105 shadow-lg"
                onClick={() => window.open("https://universe.roboflow.com/sammy/damaged-vehicle-images/model/3?webcam=true", "_blank")}
                >
                  Live Detection
                  </button>
        </div>
      </div>
    </div>
  );
};

export default Claim;