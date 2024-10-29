const insurancePlans = {
    "third-party": [
        { name: "Bajaj", logo: "https://mechomotive.com/wp-content/uploads/2021/07/Bajaj.png", price: "$200", insuranceTypes: "Third Party", about: "Bajaj Allianz is a renowned provider of third-party car insurance with extensive coverage and affordable pricing." },
        { name: "Chola MS", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs5n1E_sB9jSK3GDbIvbmxbwKS2MvK96Shag&s", price: "$220", insuranceTypes: "Third Party", about: "Chola MS offers reliable third-party car insurance, ensuring hassle-free claims." },
        { name: "Digit", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2jgmdqi67JzlI5IbAXrkist3R2Z3TLcleSQ&s", price: "$250", insuranceTypes: "Third Party", about: "Digit provides comprehensive third-party insurance with a customer-friendly experience." },
        { name: "Future Generali", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLa2clWCdBijkNys3BT1W95pSYJzOPGtpUlQ&s", price: "$210", insuranceTypes: "Third Party", about: "Future Generali's third-party insurance offers quality coverage and fast claims." },
        { name: "ICICI Lombard", logo: "https://www.bizzbuzz.news/h-upload/2022/08/26/1582647-icicic-lomlourd.jpg", price: "$230", insuranceTypes: "Third Party", about: "ICICI Lombard is a leading insurer known for robust third-party coverage." },
        { name: "HDFC ERGO", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjqcIGQy-D0KHWjG4lGfxqwADdDuRc2SYr2w&s", price: "$240", insuranceTypes: "Third Party", about: "HDFC ERGO provides secure third-party insurance with nationwide coverage." },
        { name: "SBI General", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7z5gHwm9zeCoYxpe8qvLq3ijh0DS0wQshKQ&s", price: "$200", insuranceTypes: "Third Party", about: "SBI General's third-party insurance is affordable with a smooth claims process." },
        { name: "ZUNO", logo: "https://indianpsu.com/wp-content/uploads/2023/11/IMG-20231122-WA0033-780x439.jpg", price: "$220", insuranceTypes: "Third Party", about: "ZUNO offers reliable third-party insurance with excellent customer service." },
        { name: "Sriram General Insurance", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR96sKf2DlGD82DpQbLbi5vAc8Pe5e1fht9iQ&s", price: "$250", insuranceTypes: "Third Party", about: "Sriram General Insurance provides effective third-party coverage with easy claims." },
        { name: "United India Insurance", logo: "https://bimabazaar.com/wp-content/uploads/2017/08/united-1.jpg", price: "$210", insuranceTypes: "Third Party", about: "United India Insurance is a trusted provider of third-party car insurance." }
    ],
    "comprehensive": [
        { name: "Bajaj", logo: "https://mechomotive.com/wp-content/uploads/2021/07/Bajaj.png", price: "$300", planType: "Comprehensive", about: "Bajaj Allianz provides full coverage with a focus on customer satisfaction." },
        { name: "Chola MS", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs5n1E_sB9jSK3GDbIvbmxbwKS2MvK96Shag&s", price: "$320", planType: "Comprehensive", about: "Chola MS offers strong comprehensive car insurance with wide coverage." },
        { name: "Digit", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2jgmdqi67JzlI5IbAXrkist3R2Z3TLcleSQ&s", price: "$350", planType: "Comprehensive", about: "Digit's comprehensive insurance ensures peace of mind with extensive coverage." },
        { name: "Future Generali", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLa2clWCdBijkNys3BT1W95pSYJzOPGtpUlQ&s", price: "$310", planType: "Comprehensive", about: "Future Generali provides complete protection with flexible options." },
        { name: "HDFC ERGO", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjqcIGQy-D0KHWjG4lGfxqwADdDuRc2SYr2w&s", price: "$330", planType: "Comprehensive", about: "HDFC ERGO comprehensive insurance combines affordability and coverage." },
        { name: "ICICI Lombard", logo: "https://www.bizzbuzz.news/h-upload/2022/08/26/1582647-icicic-lomlourd.jpg", price: "$340", planType: "Comprehensive", about: "ICICI Lombard offers top-notch comprehensive insurance with extensive benefits." },
        { name: "SBI General", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7z5gHwm9zeCoYxpe8qvLq3ijh0DS0wQshKQ&s", price: "$300", planType: "Comprehensive", about: "SBI General's comprehensive insurance is affordable and reliable." },
        { name: "TATA", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsZrlriXOW2OxzNHEFXzEycFrXd3h4e58jcA&s", price: "$320", planType: "Comprehensive", about: "TATA offers premium comprehensive insurance with great coverage." },
        { name: "Zurich Kotak", logo: "https://img-cdn.thepublive.com/fit-in/1200x675/newsdrum-in/media/media_files/9XMpJBWIhfwNS9lagvB7.jpg", price: "$350", planType: "Comprehensive", about: "Zurich Kotak provides superior comprehensive coverage with ease of claim." },
        { name: "Reliance General Insurance", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvD9csUNSHTlYPlS1tH6JG3edrfCU_HhQhHQ&s", price: "$310", planType: "Comprehensive", about: "Reliance General Insurance offers reliable comprehensive coverage." }
    ],
    "own-damage": [
        { name: "Bajaj", logo: "https://mechomotive.com/wp-content/uploads/2021/07/Bajaj.png", price: "$400", planType: "Own Damage", about: "Bajaj Allianz covers own-damage with fast claim processing." },
        { name: "Digit", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2jgmdqi67JzlI5IbAXrkist3R2Z3TLcleSQ&s", price: "$420", planType: "Own Damage", about: "Digit offers wide own-damage coverage with reliable service." },
        { name: "Liberty General Insurance", logo: "https://www.livelaw.in/h-upload/2024/06/26/1600x960_546338-liberty-videocon-general-insurance.webp", price: "$450", planType: "Own Damage", about: "Liberty General Insurance focuses on effective own-damage protection." },
        { name: "Oriental Insurance", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGpzrtbcPrCjmKkm72uN5FIPw5KI8bQ5H2Wg&s", price: "$410", planType: "Own Damage", about: "Oriental Insurance provides strong coverage for own-damage cases." },
        { name: "SBI General", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7z5gHwm9zeCoYxpe8qvLq3ijh0DS0wQshKQ&s", price: "$430", planType: "Own Damage", about: "SBI General is a dependable option for own-damage insurance." },
        { name: "Sriram General Insurance", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR96sKf2DlGD82DpQbLbi5vAc8Pe5e1fht9iQ&s", price: "$440", planType: "Own Damage", about: "Sriram General Insurance offers effective own-damage policies." },
        { name: "TATA", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsZrlriXOW2OxzNHEFXzEycFrXd3h4e58jcA&s", price: "$400", planType: "Own Damage", about: "TATA provides own-damage insurance with extensive options." },
        { name: "ZUNO", logo: "https://indianpsu.com/wp-content/uploads/2023/11/IMG-20231122-WA0033-780x439.jpg", price: "$420", planType: "Own Damage", about: "ZUNO offers comprehensive own-damage protection." },
        { name: "Zurich Kotak", logo: "https://img-cdn.thepublive.com/fit-in/1200x675/newsdrum-in/media/media_files/9XMpJBWIhfwNS9lagvB7.jpg", price: "$450", planType: "Own Damage", about: "Zurich Kotak covers own-damage with ease of claims." },
        { name: "ICICI Lombard", logo: "https://www.bizzbuzz.news/h-upload/2022/08/26/1582647-icicic-lomlourd.jpg", price: "$410", planType: "Own Damage", about: "ICICI Lombard provides robust own-damage coverage." }
    ],
    "trending": [
        { name: "Bajaj", logo: "https://mechomotive.com/wp-content/uploads/2021/07/Bajaj.png", price: "$500", planType: "Pay As You Drive", ClaimsSettled: "98%", ClaimBenefits: "Repair Anywhere, 50% Advance Payment", about: "Bajaj's pay-as-you-drive option combines flexibility and affordability." },
        { name: "Digit", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2jgmdqi67JzlI5IbAXrkist3R2Z3TLcleSQ&s", price: "$520", planType: "Pay As You Drive", ClaimsSettled: "96%", ClaimBenefits: "6-Month Repair Warranty, 50% Advance Payment, Free Pick-up & Drop", about: "Digit's pay-as-you-drive plan offers ease and comprehensive coverage." },
        { name: "ICICI Lombard", logo: "https://www.bizzbuzz.news/h-upload/2022/08/26/1582647-icicic-lomlourd.jpg", price: "$550", planType: "Pay As You Drive", ClaimsSettled: "96.75%", ClaimBenefits: "On-Ground Support, Self-video Claims, Zero Paper Claims", about: "ICICI Lombard pay-as-you-drive provides hassle-free claims." },
        { name: "Reliance General Insurance", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvD9csUNSHTlYPlS1tH6JG3edrfCU_HhQhHQ&s", price: "$510", planType: "Pay As You Drive", ClaimsSettled: "98%", ClaimBenefits: "Cashless Claims, Self-video Claims, Spot Claims up to 20,000", about: "Reliance General Insurance is ideal for pay-as-you-drive options." },
        { name: "ZUNO", logo: "https://indianpsu.com/wp-content/uploads/2023/11/IMG-20231122-WA0033-780x439.jpg", price: "$530", planType: "Pay As You Drive", ClaimsSettled: "98%", ClaimBenefits: "Zero Paper Claims, 6-Month Repair Warranty, Free Pick-up & Drop", about: "ZUNO offers hassle-free pay-as-you-drive insurance." }
    ]
};

// Function to open modal with plan details
const getPlanDetails = (planName) => {
    let plan;
    Object.keys(insurancePlans).forEach(planType => {
        plan = insurancePlans[planType].find(p => p.name === planName) || plan;
    });

    if (plan) {
        const modalBody = document.getElementById('modal-body');
        modalBody.innerHTML = `
            <img src="${plan.logo}" alt="${plan.name} Logo" style="width: 100px; height: auto;">
            <h2>${plan.name}</h2>
            <p><strong>About:</strong> ${plan.about}</p>
            <p><strong>Price:</strong> ${plan.price}</p>
            <p><strong>Plan Type:</strong> ${plan.planType || plan.insuranceTypes}</p>
            ${plan.ClaimsSettled ? `<p><strong>Claims Settled:</strong> ${plan.ClaimsSettled}</p>` : ""}
            ${plan.ClaimBenefits ? `<p><strong>Claim Benefits:</strong> ${plan.ClaimBenefits}</p>` : ""}
            <button onclick="closeModal()">Close</button>
            <button onclick="buyNow('${plan.name}')">Buy Now</button>
        `;

        document.getElementById('modal').style.display = 'block';
    }
};

// Function to handle 'Buy Now' button click
const buyNow = (planName) => {
    alert(`You have chosen to buy the ${planName} plan.`);
};

// Function to close modal
const closeModal = () => {
    document.getElementById('modal').style.display = 'none';
};

// Update the button onclick in createCards to use getPlanDetails instead
const createCards = (planType) => {
    const cardContainer = document.getElementById(`${planType}-cards`);
    insurancePlans[planType].forEach(plan => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${plan.logo}" alt="${plan.name} Logo">
            <h3>${plan.name}</h3>
            <p class="price">${plan.price}</p>
            <p>Plan Type: ${plan.planType || plan.insuranceTypes}</p>
            ${plan.ClaimsSettled ? `<p>Claims Settled: ${plan.ClaimsSettled}</p>` : ""}
            ${plan.ClaimBenefits ? `<p>Claim Benefits: ${plan.ClaimBenefits}</p>` : ""}
            <button onclick="getPlanDetails('${plan.name}')">Get Plan</button>
        `;
        cardContainer.appendChild(card);
    });
};

// Generate cards for each plan type
['third-party', 'comprehensive', 'own-damage', 'trending'].forEach(createCards);

// contact deatils
document.getElementById("contact-link").addEventListener("click", function (event) {
    event.preventDefault();
    const contactBox = document.getElementById("contact-info-box");
    contactBox.style.display = contactBox.style.display === "none" ? "block" : "none";
});

// Close the contact box if clicked outside
window.addEventListener("click", function (event) {
    const contactBox = document.getElementById("contact-info-box");
    if (event.target !== document.getElementById("contact-link") && event.target !== contactBox) {
        contactBox.style.display = "none";
    }
});
