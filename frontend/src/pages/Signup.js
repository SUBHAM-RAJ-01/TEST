// src/components/Signup.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosClient from '../utils/axios'; // Use axiosClient instance

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [role, setRole] = useState('');
  const [gender, setGender] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // For password visibility
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosClient.post('/auth/signup', { // Corrected endpoint
        email,
        password,
        name,
        dob,
        role,
        gender,
      });
      navigate('/login'); // Redirect to login page after successful signup
    } catch (err) {
      setError('Error creating account'); // Display error if signup fails
    }
  };

  const handleSocialSignup = (platform) => {
    // Placeholder for integrating social signup like Google, Facebook, or Twitter
    alert(`Sign up with ${platform}`);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 mt-2 border-b-2 border-gray-300 focus:outline-none focus:border-black"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Date of Birth Input */}
        <div className="mb-4">
          <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            className="w-full px-4 py-2 mt-2 border-b-2 border-gray-300 focus:outline-none focus:border-black"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>

        {/* Role Input */}
        <div className="mb-4">
          <label htmlFor="role" className="block text-sm font-medium text-gray-700">
            Role
          </label>
          <select
            id="role"
            className="w-full px-4 py-2 mt-2 border-b-2 border-gray-300 focus:outline-none focus:border-black"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select Role</option>
            <option value="student">Student</option>
            <option value="professional">Professional</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Gender Input */}
        <div className="mb-4">
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
            Gender
          </label>
          <div className="flex space-x-6">
            <label className="flex items-center">
              <input
                type="radio"
                id="male"
                value="male"
                checked={gender === 'male'}
                onChange={() => setGender('male')}
                className="mr-2"
              />
              Male
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                id="female"
                value="female"
                checked={gender === 'female'}
                onChange={() => setGender('female')}
                className="mr-2"
              />
              Female
            </label>
          </div>
        </div>

        {/* Email Input */}
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

        {/* Password Input */}
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
          className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-400 transition duration-300"
        >
          Sign Up
        </button>
      </form>

      <p className="text-center text-sm mt-4">
        Already have an account?{' '}
        <a href="/login" className="text-blue-500 font-medium">
          Login here
        </a>
      </p>

      {/* Social Signup Buttons */}
      <div className="flex items-center justify-between mt-6">
        <hr className="w-full border-gray-300" />
        <span className="text-gray-500 mx-4">OR</span>
        <hr className="w-full border-gray-300" />
      </div>

      <div className="flex space-x-4 mt-6">
        {/* Google Button */}
        <button
          onClick={() => handleSocialSignup('Google')}
          className="bg-red-500 text-white p-2 rounded-full flex items-center justify-center ml-36"
        >
          <i className="fa-brands fa-google text-white"></i>
        </button>

        {/* Facebook Button */}
        <button
          onClick={() => handleSocialSignup('Facebook')}
          className="bg-blue-600 text-white p-2 rounded-full flex items-center justify-center"
        >
          <i className="fa-brands fa-facebook-f text-white"></i>
        </button>

        {/* Twitter Button */}
        <button
          onClick={() => handleSocialSignup('Twitter')}
          className="bg-blue-400 text-white p-2 rounded-full flex items-center justify-center"
        >
          <i className="fa-brands fa-twitter text-white"></i>
        </button>
      </div>
    </div>
  );
};

export default Signup;
