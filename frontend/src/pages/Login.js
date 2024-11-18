// src/components/Login.js

import React, { useState } from 'react';
import axiosClient from '../utils/axios'; // Use axiosClient instance
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // For password visibility
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosClient.post('/auth/login', { email, password }); // Correct endpoint
      localStorage.setItem('token', response.data.token);
      navigate('/');
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  const handleSocialLogin = (platform) => {
    // Integrate with third-party social login API like Google, Facebook, or Twitter
    alert(`Login with ${platform}`);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <h2 className="text-2xl font-bold text-center mb-8">Login</h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 mt-2 border-b-2 border-gray-300 focus:outline-none focus:border-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4 relative">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            className="w-full px-4 py-2 mt-2 border-b-2 border-gray-300 focus:outline-none focus:border-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
          >
            <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-300"
        >
          Login
        </button>
      </form>

      <p className="text-center text-sm mt-4">
        Don't have an account?{' '}
        <a href="/signup" className="text-blue-500 font-medium">
          Sign up 
        </a>
      </p>

      <div className="flex items-center justify-between mt-6">
        <hr className="w-full border-gray-300" />
        <span className="text-gray-500 mx-4">OR</span>
        <hr className="w-full border-gray-300" />
      </div>

      <div className="flex space-x-4 mt-6">
        <button
          onClick={() => handleSocialLogin('Google')}
          className="bg-red-500 text-white p-2 rounded-full flex items-center justify-center ml-36"
        >
          <i className="fa-brands fa-google"></i>
        </button>
        <button
          onClick={() => handleSocialLogin('Facebook')}
          className="bg-blue-600 text-white p-2 rounded-full flex items-center justify-center"
        >
          <i className="fa-brands fa-facebook-f"></i>
        </button>
        <button
          onClick={() => handleSocialLogin('Twitter')}
          className="bg-blue-400 text-white p-2 rounded-full flex items-center justify-center"
        >
          <i className="fa-brands fa-twitter"></i>
        </button>
      </div>
    </div>
  );
};

export default Login;
