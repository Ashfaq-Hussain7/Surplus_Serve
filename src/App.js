import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandPage from './components/LandPage';
import AboutPage from './components/About';
import ContactPage from './components/Contact';
import DonorAuth from './components/DonorAuth';
import RecipientAuth from './components/RecipientAuth';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/donor-auth" element={<DonorAuth />} />
        <Route path="/recipient-auth" element={<RecipientAuth />} />
        {/*<Route path="/donor-dashboard" element={<DonorDashboard />} />
        <Route path="/recipient-dashboard" element={<RecipientDashboard />} />*/}
      </Routes>
    </Router>
  );
}

export default App;