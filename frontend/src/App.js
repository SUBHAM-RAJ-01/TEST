// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import MyAccount from './pages/MyAccount';
import Premium from './pages/Premium';
import Logout from './pages/Logout';
import Services from './pages/Services';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-orbitron bg-gray-100">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <div className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/account" element={<MyAccount />} />
            <Route path="/premium" element={<Premium />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
