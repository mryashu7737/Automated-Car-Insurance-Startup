import React, { useState } from 'react';

const Insurance = () => {
  // Insurance plans data
  const insurancePlans = {
    "third-party": [
      {
        name: "Bajaj",
        price: "$200",
        fullPrice: "$500",
        planType: "Third Party",
        claimsSettled: "98%",
        claimBenefits: "Repair Anywhere, 50% Advance Payment",
        about: "Bajaj Allianz is a renowned provider of third-party car insurance with extensive coverage and affordable pricing.",
        logo: "https://mechomotive.com/wp-content/uploads/2021/07/Bajaj.png", // Replace with actual logo URL
      },
      {
        name: "Chola MS",
        price: "$220",
        fullPrice: "$520",
        planType: "Third Party",
        claimsSettled: "96%",
        claimBenefits: "Free Towing, Cashless Claims",
        about: "Chola MS offers reliable third-party car insurance, ensuring hassle-free claims.",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs5n1E_sB9jSK3GDbIvbmxbwKS2MvK96Shag&s", // Replace with actual logo URL
      },
      {
        name: "Digit",
        price: "$250",
        fullPrice: "$520",
        planType: "Third Party",
        claimsSettled: "96%",
        claimBenefits: "6-Month Repair Warranty, 50% Advance Payment, Free Pick-up & Drop",
        about: " Digit's pay-as-you-drive plan offers ease and comprehensive coverage.",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2jgmdqi67JzlI5IbAXrkist3R2Z3TLcleSQ&s", // Replace with actual logo URL
      },
      {
        name: "Future Generali",
        price: "$210",
        fullPrice: "$310",
        planType: "Third Party",
        
        claimBenefits: "Free Towing, Cashless Claims",
        about: "Future Generali provides complete protection with flexible options.",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLa2clWCdBijkNys3BT1W95pSYJzOPGtpUlQ&s", // Replace with actual logo URL
      },
      {
        name: "ICICI Lombard",
        price: "$230",
        about: "ICICI Lombard pay-as-you-drive provides hassle-free claims" ,

        price: "$550", 

        planType: "Third Party",

        claimsSettled: "96.75%",

        claimBenefits: "On-Ground Support, Self-video Claims, Zero Paper Claims",
        logo: "https://www.bizzbuzz.news/h-upload/2022/08/26/1582647-icicic-lomlourd.jpg", // Replace with actual logo URL
      },
      {
        name: "HDFC ERGO",
        price: "$230",
        fullPrice: "$330",
        planType: "Third Party",
        
        about: "HDFC ERGO comprehensive insurance combines affordability and coverage.",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjqcIGQy-D0KHWjG4lGfxqwADdDuRc2SYr2w&s", // Replace with actual logo URL
      },
      {
        name: "SBI General",
        price: "$200",
        fullPrice: "$430",
        planType: "Third Party",
        about: "SBI General is a dependable option for own-damage insurance.",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7z5gHwm9zeCoYxpe8qvLq3ijh0DS0wQshKQ&s", // Replace with actual logo URL
      },
      {
        name: "SZUNO",
        price: "$220",
        fullPrice: "$530",
        planType: "Third Party",
        claimsSettled: "98%",
        claimBenefits: "ero Paper Claims, 6-Month Repair Warranty, Free Pick-up & Drop",
        about: "ZUNO offers hassle-free pay-as-you-drive insurance.",
        logo: "https://indianpsu.com/wp-content/uploads/2023/11/IMG-20231122-WA0033-780x439.jpg", // Replace with actual logo URL
      },
      {
        name: "Sriram General Insurance",
        price: "$250",
        fullPrice: "$440",
        planType: "Third Partye",
        about: "Sriram General Insurance offers effective own-damage policies.",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR96sKf2DlGD82DpQbLbi5vAc8Pe5e1fht9iQ&s", // Replace with actual logo URL
      },
      {
        name: "United India Insurance",
        price: "$210",
        fullPrice: "$210",
        planType: "Third Party",
        about: "United India Insurance is a trusted provider of third-party car insurance.",
        logo: "https://bimabazaar.com/wp-content/uploads/2017/08/united-1.jpg", // Replace with actual logo URL
      },
      
      // Add other third-party plans...
    ],
    "comprehensive": [
        {
            name: "Bajaj",
            price: "$300",
            fullPrice: "$500",
            planType: "comprehensive",
            claimsSettled: "98%",
            claimBenefits: "Repair Anywhere, 50% Advance Payment",
            about: "Bajaj Allianz is a renowned provider of third-party car insurance with extensive coverage and affordable pricing.",
            logo: "https://mechomotive.com/wp-content/uploads/2021/07/Bajaj.png", // Replace with actual logo URL
          },
          {
            name: "Chola MS",
            price: "$320",
            fullPrice: "$520",
            planType: "comprehensive",
            claimsSettled: "96%",
            claimBenefits: "Free Towing, Cashless Claims",
            about: "Chola MS offers reliable third-party car insurance, ensuring hassle-free claims.",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs5n1E_sB9jSK3GDbIvbmxbwKS2MvK96Shag&s", // Replace with actual logo URL
          },
          {
            name: "Digit",
            price: "$350",
            fullPrice: "$520",
            planType: "comprehensive",
            claimsSettled: "96%",
            claimBenefits: "6-Month Repair Warranty, 50% Advance Payment, Free Pick-up & Drop",
            about: " Digit's pay-as-you-drive plan offers ease and comprehensive coverage.",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2jgmdqi67JzlI5IbAXrkist3R2Z3TLcleSQ&s", // Replace with actual logo URL
          },
          {
            name: "Future Generali",
            price: "$310",
            fullPrice: "$310",
            planType: "Comprehensive",
            
            claimBenefits: "Free Towing, Cashless Claims",
            about: "Future Generali provides complete protection with flexible options.",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLa2clWCdBijkNys3BT1W95pSYJzOPGtpUlQ&s", // Replace with actual logo URL
          },
          
          {
            name: "HDFC ERGO",
            price: "$230",
            fullPrice: "$330",
            planType: "comprehensive",
            
            about: "HDFC ERGO comprehensive insurance combines affordability and coverage.",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjqcIGQy-D0KHWjG4lGfxqwADdDuRc2SYr2w&s", // Replace with actual logo URL
          },
          {
            name: "ICICI Lombard",
            price: "$330",
            about: "ICICI Lombard pay-as-you-drive provides hassle-free claims" ,
    
            price: "$550", 
    
            planType: "comprehensive",
    
            claimsSettled: "96.75%",
    
            claimBenefits: "On-Ground Support, Self-video Claims, Zero Paper Claims",
            logo: "https://www.bizzbuzz.news/h-upload/2022/08/26/1582647-icicic-lomlourd.jpg", // Replace with actual logo URL
          },
          {
            name: "SBI General",
            price: "$300",
            fullPrice: "$430",
            planType: "comprehensive",
            about: "SBI General is a dependable option for own-damage insurance.",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7z5gHwm9zeCoYxpe8qvLq3ijh0DS0wQshKQ&s", // Replace with actual logo URL
          },
      {
        name: "TATA",
        price: "$320",
        fullPrice: "$400",
        planType: "comprehensive",
        about: "TATA provides own-damage insurance with extensive options.",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsZrlriXOW2OxzNHEFXzEycFrXd3h4e58jcA&s", // Replace with actual logo URL
      },
      {
        name: "Zurich Kotak",
        price: "$350",
        fullPrice: "$510",
        planType: "comprehensive",
        about: "Zurich Kotak covers own-damage with ease of claims.",
        logo: "https://img-cdn.thepublive.com/fit-in/1200x675/newsdrum-in/media/media_files/9XMpJBWIhfwNS9lagvB7.jpg", // Replace with actual logo URL
      },
      {
        name: "Reliance General Insurance",
        price: "$310",
        fullPrice: "$510",
        planType: "comprehensive",
        claimsSettled: "98%",
        claimBenefits: "Cashless Claims, Self-video Claims, Spot Claims up to 20,000",
        about: "Reliance General Insurance is ideal for pay-as-you-drive options.",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvD9csUNSHTlYPlS1tH6JG3edrfCU_HhQhHQ&s", // Replace with actual logo URL
      },
      
    ],


    "own-damage": [
      {
        name: "Bajaj",
        price: "$400",
        fullPrice: "$500",
        planType: "Own Damage",
        claimsSettled: "98%",
        claimBenefits: "Repair Anywhere, 50% Advance Payment",
        about: "Bajaj Allianz is a renowned provider of third-party car insurance with extensive coverage and affordable pricing.",
        logo: "https://mechomotive.com/wp-content/uploads/2021/07/Bajaj.png", // Replace with actual logo URL
      },
      {
        name: "Digit",
        price: "$250",
        fullPrice: "$520",
        planType: "Own Damage",
        claimsSettled: "96%",
        claimBenefits: "6-Month Repair Warranty, 50% Advance Payment, Free Pick-up & Drop",
        about: " Digit's pay-as-you-drive plan offers ease and comprehensive coverage.",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2jgmdqi67JzlI5IbAXrkist3R2Z3TLcleSQ&s", // Replace with actual logo URL
      },
      {
        name: "Liberty General Insurance",
        price: "$450",
        fullPrice: "$450",
        planType: "Own Damage",
        about: "Liberty General Insurance focuses on effective own-damage protection.",
        logo: "https://www.livelaw.in/h-upload/2024/06/26/1600x960_546338-liberty-videocon-general-insurance.webp", // Replace with actual logo URL
      },
      {
        name: "Oriental Insurance",
        price: "$410",
        fullPrice: "$410",
        planType: "Own Damage",
        about: "Oriental Insurance provides strong coverage for own-damage cases.",
        logo: "https://example.com/digit-logo.png", // Replace with actual logo URL
      },
      {
        name: "SBI General",
        price: "$400",
        fullPrice: "$430",
        planType: "Third Party",
        about: "SBI General is a dependable option for own-damage insurance.",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7z5gHwm9zeCoYxpe8qvLq3ijh0DS0wQshKQ&s", // Replace with actual logo URL
      },
      {
        name: "Sriram General Insurance",
        price: "$440",
        fullPrice: "$440",
        planType: "Own Damage",
        about: "Sriram General Insurance offers effective own-damage policies.",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR96sKf2DlGD82DpQbLbi5vAc8Pe5e1fht9iQ&s", // Replace with actual logo URL
      },
      {
        name: "TATA",
        price: "$400",
        fullPrice: "$400",
        planType: "Own Damage",
        about: "TATA provides own-damage insurance with extensive options.",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsZrlriXOW2OxzNHEFXzEycFrXd3h4e58jcA&s", // Replace with actual logo URL
      },
      {
        name: "ZUNO",
        price: "$420",
        fullPrice: "$530",
        planType: "Own Damage",
        claimsSettled: "98%",
        claimBenefits: "ero Paper Claims, 6-Month Repair Warranty, Free Pick-up & Drop",
        about: "ZUNO offers hassle-free pay-as-you-drive insurance.",
        logo: "https://indianpsu.com/wp-content/uploads/2023/11/IMG-20231122-WA0033-780x439.jpg", // Replace with actual logo URL
      },
      {
        name: "Zurich Kotak",
        price: "$450",
        fullPrice: "$450",
        planType: "Own Damage",
        about: "Zurich Kotak covers own-damage with ease of claims.",
        logo: "https://img-cdn.thepublive.com/fit-in/1200x675/newsdrum-in/media/media_files/9XMpJBWIhfwNS9lagvB7.jpg", // Replace with actual logo URL
      },
      {
        name: "ICICI Lombard",
        price: "$330",
        about: "ICICI Lombard pay-as-you-drive provides hassle-free claims" ,

        price: "$550", 

        planType: "Own Damage",

        claimsSettled: "96.75%",

        claimBenefits: "On-Ground Support, Self-video Claims, Zero Paper Claims",
        logo: "https://www.bizzbuzz.news/h-upload/2022/08/26/1582647-icicic-lomlourd.jpg", // Replace with actual logo URL
      },
      
    
      // Add other own-damage plans...
    ],
    "trending": [
        {
            name: "Bajaj",
            price: "$500",
            fullPrice: "$500",
            planType: "Third Party",
            claimsSettled: "98%",
            claimBenefits: "Repair Anywhere, 50% Advance Payment",
            about: "Bajaj Allianz is a renowned provider of third-party car insurance with extensive coverage and affordable pricing.",
            logo: "https://mechomotive.com/wp-content/uploads/2021/07/Bajaj.png", // Replace with actual logo URL
          },
          
          {
            name: "Digit",
            price: "$520",
            fullPrice: "$520",
            planType: "Third Party",
            claimsSettled: "96%",
            claimBenefits: "6-Month Repair Warranty, 50% Advance Payment, Free Pick-up & Drop",
            about: " Digit's pay-as-you-drive plan offers ease and comprehensive coverage.",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2jgmdqi67JzlI5IbAXrkist3R2Z3TLcleSQ&s", // Replace with actual logo URL
          },
          
          {
            name: "ICICI Lombard",
            price: "$550",
            about: "ICICI Lombard pay-as-you-drive provides hassle-free claims" ,
    
            price: "$550", 
    
            planType: "Third Party",
    
            claimsSettled: "96.75%",
    
            claimBenefits: "On-Ground Support, Self-video Claims, Zero Paper Claims",
            logo: "https://www.bizzbuzz.news/h-upload/2022/08/26/1582647-icicic-lomlourd.jpg", // Replace with actual logo URL
          },
          {
            name: "Reliance General Insurance",
            price: "$510",
            fullPrice: "$510",
            planType: "comprehensive",
            claimsSettled: "98%",
            claimBenefits: "Cashless Claims, Self-video Claims, Spot Claims up to 20,000",
            about: "Reliance General Insurance is ideal for pay-as-you-drive options.",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvD9csUNSHTlYPlS1tH6JG3edrfCU_HhQhHQ&s", // Replace with actual logo URL
          },
          
          {
            name: "ZUNO",
            price: "$530",
            fullPrice: "$530",
            planType: "Third Party",
            claimsSettled: "98%",
            claimBenefits: "ero Paper Claims, 6-Month Repair Warranty, Free Pick-up & Drop",
            about: "ZUNO offers hassle-free pay-as-you-drive insurance.",
            logo: "https://indianpsu.com/wp-content/uploads/2023/11/IMG-20231122-WA0033-780x439.jpg", // Replace with actual logo URL
          },
          
          
      
    ]
  };

  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setShowModal(true);
  };

  
  const handleGetPlan = (plan) => {
    setSelectedPlan(plan);
  };

  const handleCloseModal = () => {
    setSelectedPlan(null);
  };

  const handleBuyNow = () => {
    alert(`You have chosen to buy the ${selectedPlan.name} plan.`);
    handleCloseModal();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-blue-800 text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Car Insurance Plans</h1>
            <ul className="flex space-x-6">
              <li><a href="#third-party" className="hover:text-yellow-300 transition-colors">Third Party</a></li>
              <li><a href="#comprehensive" className="hover:text-yellow-300 transition-colors">Comprehensive</a></li>
              <li><a href="#own-damage" className="hover:text-yellow-300 transition-colors">Own Damage</a></li>
              <li><a href="#trending" className="hover:text-yellow-300 transition-colors">Trending</a></li>
              <li>
                <button
                  onClick={() => setShowContact(!showContact)}
                  className="bg-yellow-400 text-blue-800 px-4 py-1 rounded-md hover:bg-yellow-500 transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
            <div className="hidden md:flex space-x-6">
            <button 
            onClick={() => window.open("http://localhost:5173/", "_blank")}
            className="hover:text-blue-200 transition-colors duration-200">Home</button>
          </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-16 py-8">
        {Object.entries(insurancePlans).map(([category, plans]) => (
          <section key={category} id={category} className="mb-12">
            <h2 className="text-3xl md-2 font-bold text-blue-800 mb-6 pb-2 border-b-2 text-center border-blue-800 ">
              {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {plans.map((plan) => (
                <div key={plan.name} className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:-translate-y-2 justify-center text-center">
                  <img src={plan.logo} alt={plan.name} className="w-44 h-44 object-contain mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <p className="text-2xl font-bold text-red-600 mb-2">{plan.price}</p>
                  <p className="text-gray-600 mb-2">Type: {plan.planType || plan.insuranceTypes}</p>
                  {plan.ClaimsSettled && <p className="text-gray-600 mb-2">Claims Settled: {plan.ClaimsSettled}</p>}
                  <button
                    onClick={() => handlePlanSelect(plan)}
                    className="w-full bg-blue-800 text-white py-2 rounded-md hover:bg-blue-900 transition-colors"
                  >
                    Get Plan
                  </button>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Modal */}
      {showModal && selectedPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold">{selectedPlan.name}</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <img src={selectedPlan.logo} alt={selectedPlan.name} className="w-32 h-32 object-contain mx-auto mb-4" />
            <p className="text-gray-600 mb-4">{selectedPlan.about}</p>
            <p className="text-xl font-bold text-red-600 mb-2">{selectedPlan.price}</p>
            <p className="mb-2">Type: {selectedPlan.planType || selectedPlan.insuranceTypes}</p>
            {selectedPlan.ClaimsSettled && <p className="mb-2">Claims Settled: {selectedPlan.ClaimsSettled}</p>}
            {selectedPlan.ClaimBenefits && <p className="mb-4">Benefits: {selectedPlan.ClaimBenefits}</p>}
            <div className="flex space-x-4">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => window.open("https://ashuminajclaim.streamlit.app/", "_blank")}
                className="flex-1 bg-blue-800 text-white py-2 rounded-md hover:bg-blue-900 transition-colors"
              >
                Buy Now
              </button>
            </div>
          </div>
          {selectedPlan && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <img src={selectedPlan.logo} alt={`${selectedPlan.name} Logo`} className="h-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{selectedPlan.name}</h3>
            <p className="text-gray-700">
              <strong>About:</strong> {selectedPlan.about}
            </p>
            <p className="text-gray-700">
              <strong>Price:</strong> {selectedPlan.fullPrice}
            </p>
            <p className="text-gray-700">
              <strong>Plan Type:</strong> {selectedPlan.planType}
            </p>
            <p className="text-gray-700">
              <strong>Claims Settled:</strong> {selectedPlan.claimsSettled}
            </p>
            <p className="text-gray-700">
              <strong>Claim Benefits:</strong> {selectedPlan.claimBenefits}
            </p>
            <div className="flex mt-4">
              <button
                className="bg-gray-400 text-white py-2 px-4 rounded mr-2"
                onClick={handleCloseModal}
              >
                Close
              </button>
              <button
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                onClick={() => window.open("https://ashuminajclaim.streamlit.app/", "_blank")}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
        
        
      )}
      

      {/* Contact Info Box */}
      {showContact && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">For On-Call Vehicle Health Check-Up, please contact us at:</p>
            <p className="text-2xl font-bold text-red-600 mb-4">+916836757232</p>
            <button
              onClick={() => setShowContact(false)}
              className="bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300 transition-colors w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Insurance;