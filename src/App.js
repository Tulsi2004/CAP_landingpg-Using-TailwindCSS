import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import JointFamily from './pages/JointFamily';
import SeniorCitizen from './pages/SeniorCitizen';
import NewlyMarried from './pages/NewlyMarried';
import FreshInvestor from './pages/FreshInvestor';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/joint-family" element={<JointFamily />} />
        <Route path="/senior-citizen" element={<SeniorCitizen />} />
        <Route path="/newly-married" element={<NewlyMarried />} />
        <Route path="/fresh-investor" element={<FreshInvestor />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;