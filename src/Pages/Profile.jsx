import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaCar, FaFileAlt, FaIdCard, FaHistory, FaDownload, FaTimes } from "react-icons/fa";
import { jsPDF } from "jspdf";

const Profile = () => {
  const [selectedDoc, setSelectedDoc] = useState(null);

  const adminDetails = {
    name: "John Doe",
    email: "john.doe@example.com",
    mobile: "+1 234 567 8900",
    carNumber: "ABC 123 XYZ",
    carName: "Toyota Camry 2023"
  };

  const documents = [
    { 
      title: "Policy Report", 
      icon: <FaFileAlt />, 
      status: "Verified",
      details: "This is a comprehensive policy report detailing coverage terms, conditions, and benefits. Policy number: POL123456",
      validUntil: "2024-12-31",
      fileSize: "2.5 MB"
    },
    { 
      title: "RC Report", 
      icon: <FaFileAlt />, 
      status: "Pending",
      details: "Registration Certificate report containing vehicle registration details and ownership information.",
      validUntil: "2024-12-31",
      fileSize: "1.8 MB"
    },
    { 
      title: "Driving Licence", 
      icon: <FaIdCard />, 
      status: "Verified",
      details: "Official driving license document with license number DL98765 and endorsements.",
      validUntil: "2025-06-30",
      fileSize: "1.2 MB"
    },
    { 
      title: "History of Claim Insurance", 
      icon: <FaHistory />, 
      status: "Verified",
      details: "Detailed history of all insurance claims made, including dates, amounts, and resolution status.",
      validUntil: "2024-12-31",
      fileSize: "3.1 MB"
    }
  ];

  const handleDownload = (doc) => {
    const pdf = new jsPDF();
    
    // Add header
    pdf.setFontSize(20);
    pdf.text(doc.title, 20, 20);
    
    // Add document details
    pdf.setFontSize(12);
    pdf.text(`Status: ${doc.status}`, 20, 40);
    pdf.text(`Valid Until: ${doc.validUntil}`, 20, 50);
    pdf.text(`File Size: ${doc.fileSize}`, 20, 60);
    
    // Add main content
    const splitDetails = pdf.splitTextToSize(doc.details, 170);
    pdf.text(splitDetails, 20, 80);
    
    // Add admin details
    pdf.text("Admin Details:", 20, 120);
    pdf.text(`Name: ${adminDetails.name}`, 20, 130);
    pdf.text(`Email: ${adminDetails.email}`, 20, 140);
    pdf.text(`Mobile: ${adminDetails.mobile}`, 20, 150);
    pdf.text(`Car Number: ${adminDetails.carNumber}`, 20, 160);
    pdf.text(`Car Name: ${adminDetails.carName}`, 20, 170);
    
    // Add footer
    pdf.setFontSize(10);
    pdf.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, 280);
    
    // Save the PDF
    pdf.save(`${doc.title.replace(/ /g, "_")}.pdf`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-blue-600 p-4 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-white text-2xl font-bold">Car Insurance Admin</h1>
          <div className="hidden md:flex space-x-6">
            <button 
            onClick={() => window.open("http://localhost:5173/", "_blank")}
            className="hover:text-blue-200 transition-colors duration-200">Home</button>
          </div>
          <div className="flex items-center space-x-4">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d"
              alt="Admin Profile"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          </div>
          
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Admin Details</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaUser className="text-blue-600 text-xl" />
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="text-gray-800">{adminDetails.name}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-blue-600 text-xl" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-gray-800">{adminDetails.email}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhone className="text-blue-600 text-xl" />
                <div>
                  <p className="text-sm text-gray-500">Mobile Number</p>
                  <p className="text-gray-800">{adminDetails.mobile}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaCar className="text-blue-600 text-xl" />
                <div>
                  <p className="text-sm text-gray-500">Car Number</p>
                  <p className="text-gray-800">{adminDetails.carNumber}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaCar className="text-blue-600 text-xl" />
                <div>
                  <p className="text-sm text-gray-500">Car Name</p>
                  <p className="text-gray-800">{adminDetails.carName}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                role="article"
                aria-label={`${doc.title} card`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <span className="text-blue-600 text-xl">{doc.icon}</span>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${doc.status === "Verified" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"}`}
                  >
                    {doc.status}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{doc.title}</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
                <button
                  className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
                  onClick={() => setSelectedDoc(doc)}
                  aria-label={`View ${doc.title}`}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>

      {selectedDoc && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">{selectedDoc.title}</h3>
              <button
                onClick={() => setSelectedDoc(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-600">{selectedDoc.details}</p>
              
              <div className="flex justify-between text-sm text-gray-500">
                <span>Valid until: {selectedDoc.validUntil}</span>
                <span>File size: {selectedDoc.fileSize}</span>
              </div>
              
              <div className="flex justify-between items-center mt-6">
                <span className={`px-3 py-1 rounded-full text-sm ${selectedDoc.status === "Verified" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"}`}>
                  {selectedDoc.status}
                </span>
                
                <button
                  onClick={() => handleDownload(selectedDoc)}
                  className="flex items-center space-x-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                  <FaDownload />
                  <span>Download PDF</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;