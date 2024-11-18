import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <nav className="bg-black text-white w-full p-4 shadow-md fixed top-0 left-0 z-10 font-orbitron">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold pr-20">Fileme</Link>

        <div className="space-x-6 hidden md:flex">
          <Link to="/" className="hover:text-orange-500">Home</Link>
          <Link to="/services" className="hover:text-orange-500">Services</Link>
        </div>

        <div className="relative">
          <button className="flex items-center space-x-2 text-white" onClick={toggleDropdown}>
            <i className="fas fa-user-circle text-2xl"></i>
            <span>{isLoggedIn ? 'My Account' : 'Login/Signup'}</span>
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg">
              {!isLoggedIn ? (
                <>
                  <Link to="/login" className="block px-4 py-2 hover:bg-gray-100">Login</Link>
                  <Link to="/signup" className="block px-4 py-2 hover:bg-gray-100">Signup</Link>
                </>
              ) : (
                <>
                  <Link to="/account" className="block px-4 py-2 hover:bg-gray-100">My Account</Link>
                  <Link to="/premium" className="block px-4 py-2 hover:bg-gray-100">Premium</Link>
                  <button onClick={handleLogout} className="block w-full px-4 py-2 text-left hover:bg-gray-100">Logout</button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
