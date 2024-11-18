// src/pages/Logout.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate clearing user data (could be from localStorage, session, or state)
    localStorage.removeItem('user'); // If you're using localStorage or sessionStorage
    sessionStorage.removeItem('user'); // Or sessionStorage

    // Redirect to homepage or login page after logout
    navigate('/');
  }, [navigate]);

  return (
    <div className="max-w-4xl mx-auto p-6 mt-8 bg-white shadow-md rounded-lg font-orbitron">
      <h1 className="text-3xl font-bold mb-4">Logging Out...</h1>
      <p className="text-lg">You have been logged out. Redirecting you to the homepage...</p>
    </div>
  );
};

export default Logout;
