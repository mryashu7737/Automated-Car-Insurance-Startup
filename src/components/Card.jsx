import { useState } from "react";
import { FaCarSide, FaCog, FaTools } from "react-icons/fa";

const Card = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const carServices = [
    {
      id: 1,
      title: "Premium Car Maintenance",
      description: "Comprehensive maintenance service including oil change, filter replacement, and complete vehicle inspection",
      image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc",
      icon: <FaTools className="text-blue-500 text-2xl" />,
      details: "Our premium maintenance package includes thorough inspection of all vital components, fluid checks, and professional cleaning."
    },
    {
      id: 2,
      title: "Advanced Diagnostics",
      description: "State-of-the-art diagnostic testing to identify and resolve complex vehicle issues",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
      icon: <FaCog className="text-blue-500 text-2xl" />,
      details: "Using cutting-edge diagnostic tools, we precisely identify issues and provide detailed solutions for optimal vehicle performance."
    },
    {
      id: 3,
      title: "Custom Modifications",
      description: "Professional car modification services to enhance performance and aesthetics",
      image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d",
      icon: <FaCarSide className="text-blue-500 text-2xl" />,
      details: "Transform your vehicle with our expert modification services, from performance upgrades to custom styling solutions."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {carServices.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 cursor-pointer"
            onClick={() => setSelectedCard(selectedCard === service.id ? null : service.id)}
          >
            <div className="relative overflow-hidden h-48">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                {service.icon}
                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              {selectedCard === service.id && (
                <div className="mt-4 p-4 bg-blue-50 rounded-lg transition-all duration-300 ease-in-out">
                  <p className="text-blue-800">{service.details}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;