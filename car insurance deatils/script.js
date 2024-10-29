// Sample fake data array
const insuranceData = [
    { ownerName: 'Jithin Rithin Okreddy.', carNumber: 'TS08HK5454', carModel: 'Maruti vitara vxi 1.5L5', dateOfPurchase: '01-02-2021', numberOfOwners: 1, insuranceStatus: 'Yes', insuranceCompany:'BAJAJFinance', numberOfRepairs: 1, relation: 'Self', address: 'Rangareddy east,telangana', phoneNumber: '9376876483', email: 'jrreddy@gmail.com', rcNumber: 'RC-003244', licenseNumber: 'LIC-987654321' },
        { ownerName: 'Arun', carNumber: 'KL10AY4300', carModel: 'Maruti Swift vdi BS IV', dateOfPurchase: '26-09-2017', numberOfOwners: 2, insuranceStatus: 'Yes', insuranceCompany: 'ICICI LAMBORD', numberOfRepairs: 2, relation: 'Spouse', address: 'kondotty Srto,kerala', phoneNumber: '6342847894', email: 'arun121@gmail.com', rcNumber: 'RC-001235', licenseNumber: 'LIC-123456789' },
        { ownerName: 'Deepak Sra ', carNumber: 'GJ21AQ5140', carModel: 'New Swift VDI', dateOfPurchase: '30-10-2015', numberOfOwners: 1, insuranceStatus: 'Yes', insuranceCompany: 'HDFC ERGO General insurance company ltd', numberOfRepairs: 3, relation: 'Self', address: 'Navsari Gujarat', phoneNumber: '9965541234', email: 'Deepaksra@gmail.com', rcNumber: 'RC-001236', licenseNumber: 'LIC-234567890' },
        { ownerName: 'Shivajibobele', carNumber: 'MH09FR2100', carModel: 'THAR LX MT 4WD 4S HT', dateOfPurchase: '03-12-2020', numberOfOwners: 1, insuranceStatus: 'Yes', insuranceCompany: 'Bharti axa General insurance CO.LTD', numberOfRepairs: 3, relation: 'Sister', address: 'Kolhapur maharashtra', phoneNumber: '6332843989', email: 'shivaji545@gmail.com', rcNumber: 'RC-001237', licenseNumber: 'LIC-345678901' },
        { ownerName: 'Ashok', carNumber: 'RJ14TK5467', carModel: 'Chevrolet Malibu', dateOfPurchase: '30-07-2021', numberOfOwners:1, insuranceStatus: 'No', insuranceCompany: '-', numberOfRepairs: 5, relation: 'Cousin', address: 'JHODPUR Rajasthan', phoneNumber: '6758387343', email: 'ashoksuthar@gmail.com', rcNumber: 'RC-001238', licenseNumber: 'LIC-456789012' },
        { ownerName: 'Bobbabathi krishna', carNumber: 'MH04GZ8074', carModel: 'ELANTRA VTVT SX 1.8 BSIV', dateOfPurchase: '05-12-2019', numberOfOwners: 2, insuranceStatus: 'Yes', insuranceCompany: 'Sunshine Insurance', numberOfRepairs: 1, relation: 'Self', address: 'Thane Maharashtra', phoneNumber: '9977321668', email: 'Bkrishna001@gmail.com', rcNumber: 'RC-001239', licenseNumber: 'LIC-567890123' },
        { ownerName: 'Chris Evans', carNumber: 'JKL2345', carModel: 'BMW 3 Series', dateOfPurchase: '15-01-2022', numberOfOwners: 1, insuranceStatus: 'Yes', insuranceCompany: 'Global Insurers', numberOfRepairs: 0, relation: 'Self', address: '135 Walnut St, Westside', phoneNumber: '555-2345', email: 'chris@example.com', rcNumber: 'RC-001240', licenseNumber: 'LIC-678901234' },
        { ownerName: 'Jessica Alba', carNumber: 'MNO6789', carModel: 'Audi Q5', dateOfPurchase: '11-06-2023', numberOfOwners: 1, insuranceStatus: 'No', insuranceCompany: '-', numberOfRepairs: 2, relation: 'Partner', address: '246 Spruce Ct, Lakeview', phoneNumber: '555-6789', email: 'jessica@example.com', rcNumber: 'RC-001241', licenseNumber: 'LIC-789012345' },
        { ownerName: 'Imran', carNumber: 'UP 15 6678', carModel: 'Hyundai Sonata', dateOfPurchase: '09-09-2020', numberOfOwners: 2, insuranceStatus: 'Yes', insuranceCompany: 'Allstate Insurance', numberOfRepairs: 1, relation: 'Self', address: '357 dholakpur uttar pardesh', phoneNumber: '6875498842', email: 'shaikimran@gmail.com', rcNumber: 'RC-001242', licenseNumber: 'LIC-890123456' },
        { ownerName: 'Lisa Black', carNumber: 'UVW7890', carModel: 'Kia Sorento', dateOfPurchase: '20-02-2021', numberOfOwners: 1, insuranceStatus: 'Yes', insuranceCompany: 'State Farm', numberOfRepairs: 4, relation: 'Self', address: '468 Cherry Ln, Hilltop', phoneNumber: '555-7890', email: 'lisa@example.com', rcNumber: 'RC-001243', licenseNumber: 'LIC-901234567' },
        { ownerName: 'Tony Stark', carNumber: 'OPQ1234', carModel: 'Mercedes-Benz C-Class', dateOfPurchase: '14-04-2022', numberOfOwners: 1, insuranceStatus: 'Yes', insuranceCompany: 'Geico', numberOfRepairs: 0, relation: 'Self', address: '579 Chestnut Ave, Uptown', phoneNumber: '555-1234', email: 'tony@example.com', rcNumber: 'RC-001244', licenseNumber: 'LIC-012345678' },
        { ownerName: 'Bruce Wayne', carNumber: 'XYZ4321', carModel: 'Jaguar F-Pace', dateOfPurchase: '01-10-2023', numberOfOwners: 1, insuranceStatus: 'No', insuranceCompany: '-', numberOfRepairs: 1, relation: 'Self', address: '135 Gotham St, Gotham City', phoneNumber: '555-4321', email: 'bruce@example.com', rcNumber: 'RC-001245', licenseNumber: 'LIC-123456780' },
        { ownerName: 'Yash sharma', carNumber: 'RJ 21 6667', carModel: 'Subaru Outback', dateOfPurchase: '22-07-2022', numberOfOwners: 1, insuranceStatus: 'Yes', insuranceCompany: 'Progressive', numberOfRepairs: 2, relation: 'Self', address: '654 makrana rajasthan', phoneNumber: '9687366437', email: 'yeshsharma@gmail.com', rcNumber: 'RC-001246', licenseNumber: 'LIC-234567890' },
        { ownerName: 'Diana Prince', carNumber: 'JKL6789', carModel: 'Volkswagen Tiguan', dateOfPurchase: '30-03-2020', numberOfOwners: 1, insuranceStatus: 'Yes', insuranceCompany: 'Liberty Mutual', numberOfRepairs: 0, relation: 'Self', address: '789 Amazon Ln, Paradise', phoneNumber: '555-6789', email: 'diana@example.com', rcNumber: 'RC-001247', licenseNumber: 'LIC-345678901' },
        { ownerName: 'Clark Kent', carNumber: 'DEF5432', carModel: 'Chevrolet Bolt', dateOfPurchase: '11-05-2021', numberOfOwners: 1, insuranceStatus: 'No', insuranceCompany: '-', numberOfRepairs: 3, relation: 'Friend', address: '321 Fortress St, Metropolis', phoneNumber: '555-5432', email: 'clark@example.com', rcNumber: 'RC-001248', licenseNumber: 'LIC-456789012' },
        { ownerName: 'Barry Allen', carNumber: 'GHI0987', carModel: 'Ford Mustang', dateOfPurchase: '18-08-2019', numberOfOwners: 1, insuranceStatus: 'Yes', insuranceCompany: 'Farmers Insurance', numberOfRepairs: 1, relation: 'Self', address: '654 Speedy Ln, Central City', phoneNumber: '555-0987', email: 'barry@example.com', rcNumber: 'RC-001249', licenseNumber: 'LIC-567890123' }
    
];

// Form submission handler
document.getElementById('insuranceForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // const ownerName = document.getElementById('ownerName').value;
    const carNumber = document.getElementById('carNumber').value;

    // Call the function to check insurance
    checkInsurance( carNumber);
});

// Function to check insurance data
function checkInsurance( carNumber) {
    const record = insuranceData.find(item =>  item.carNumber === carNumber);
    const resultDiv = document.getElementById('result');

    // Get the modal
    const modal = document.getElementById("resultModal");

    // If a record is found
    if (record) {
        resultDiv.innerHTML = `
            <p><strong>Owner Name:</strong> ${record.ownerName}</p>
            <p><strong>Car Number:</strong> ${record.carNumber}</p>
            <p><strong>Car Model:</strong> ${record.carModel}</p>
            <p><strong>Date of Purchase:</strong> ${record.dateOfPurchase}</p>
            <p><strong>Number of Owners:</strong> ${record.numberOfOwners}</p>
            <p><strong>Insurance Status:</strong> ${record.insuranceStatus}</p>
            <p><strong>Insurance Company:</strong> ${record.insuranceCompany}</p>
            <p><strong>Number of Repairs:</strong> ${record.numberOfRepairs}</p>
            <p><strong>Relation:</strong> ${record.relation}</p>
            <p><strong>Address:</strong> ${record.address}</p>
            <p><strong>Phone Number:</strong> ${record.phoneNumber}</p>
            <p><strong>Email:</strong> ${record.email}</p>
            <p><strong>RC Number:</strong> ${record.rcNumber}</p>
            <p><strong>License Number:</strong> ${record.licenseNumber}</p>
        `;
        modal.style.display = "block"; // Show the modal
    } else {
        resultDiv.innerHTML = '<p>No insurance details found for the given owner name and car number.</p>';
        modal.style.display = "block"; // Show the modal
    }
}

// Close the modal when the user clicks on <span> (x)
document.querySelector('.close').onclick = function() {
    const modal = document.getElementById("resultModal");
    modal.style.display = "none"; // Hide the modal
}

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
    const modal = document.getElementById("resultModal");
    if (event.target === modal) {
        modal.style.display = "none"; // Hide the modal
    }
}
