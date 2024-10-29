import {
  BrowserRouter as Router,
  Routes,
  Route, 
}
from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./Home/Home";
import CarDetails from "./Pages/CarDetails";
import Inspector from "./Pages/Inspector";
import Claim from "./Pages/Claim";
import Repair from "./Pages/Repair";
import Insurance from "./Pages/Insurance";
import Profile from "./Pages/Profile";
import FraudDetector from "./Pages/FraudDetector";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home/></Layout>} />
        <Route path="/page/car-details" element={<CarDetails />} />
        <Route path="/page/inspector" element={<Inspector />} />
        <Route path="/page/claim" element={<Claim />} />
        <Route path="/page/repair" element={<Repair />} />
        <Route path="/page/insurance" element={<Insurance />} />
        <Route path="/page/fraud-detector" element={<FraudDetector />} />
        <Route path="/profile" element={<Profile />} />
        
      </Routes>
    </Router>
   
    
  )
}

export default App