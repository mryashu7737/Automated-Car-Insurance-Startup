// Home.jsx

import React, { useState } from "react";
import Chatbot from "../components/Chatbot";
import Footer from "../components/footer";
import {
  FaQuestionCircle,
  FaPhone,
  FaComments,
  FaTrophy,
  FaCheck,
  FaTimes,
  FaRobot,
  FaPaperPlane,
} from "react-icons/fa";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    policyNumber: "",
    email: "",
    phone: "",
    vehicleMake: "",
    vehicleModel: "",
    incidentDescription: "",
    documents: null,
  });

  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  const testimonials = [
    {
      id: 1,
      name: "John Smith",
      comment: "Quick and hassle-free claims process. Highly recommended!",
      rating: 5,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      comment: "Excellent service and prompt response to my claim.",
      rating: 5,
    },
    {
      id: 3,
      name: "Michael Brown",
      comment: "Professional handling of my claim from start to finish.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "How long does the claims process take?",
      answer: "Most claims are processed within 48-72 hours of submission.",
    },
    {
      question: "What documents do I need to submit?",
      answer:
        "You'll need your policy document, incident photos, and police report if applicable.",
    },
    {
      question: "How will I receive my settlement?",
      answer:
        "Settlements are typically processed via direct bank transfer or check.",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      documents: e.target.files[0],
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.policyNumber)
      newErrors.policyNumber = "Policy number is required";
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Valid email is required";
    }
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Valid phone number is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Handle form submission
    }
  };

  const handleSendMessage = () => {
    if (currentMessage.trim()) {
      setMessages([...messages, { text: currentMessage, isUser: true }]);
      // Simulate bot response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            text: "Thank you for your query. Our AI assistant is processing your request. A customer service representative will get back to you shortly.",
            isUser: false,
          },
        ]);
      }, 1000);
      setCurrentMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.autonomousvehicleinternational.com/wp-content/uploads/2024/03/AdobeStock_650988463-scaled.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                File Your Car Insurance Claim
              </h1>
              <p className="text-xl mb-8">
                Quick, easy, and hassle-free claims process
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="flex items-center mb-4">
                  <FaTrophy className="text-yellow-500 mr-2" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaCheck key={i} className="text-green-500" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{testimonial.comment}</p>
                <p className="font-bold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chatbot Modal */}
      {isChatOpen && (
        <div className="fixed bottom-4 right-4 w-96 bg-white rounded-lg shadow-xl">
          <div className="p-4 border-b flex justify-between items-center bg-blue-600 text-white rounded-t-lg">
            <div className="flex items-center">
              <FaRobot className="mr-2" />
              <span className="font-semibold">Insurance Assistant</span>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-white hover:text-gray-200 transition duration-300"
            >
              <FaTimes />
            </button>
          </div>
          <div className="h-96 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 ${
                  message.isUser ? "text-right" : "text-left"
                }`}
              >
                <div
                  className={`inline-block p-3 rounded-lg ${
                    message.isUser
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:border-blue-600"
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Home; // Make sure to export it as default
