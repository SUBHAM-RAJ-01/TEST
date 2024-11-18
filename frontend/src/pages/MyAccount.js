// src/pages/MyAccount.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyAccount = () => {
  const [user, setUser] = useState(null); // To store user data
  const [loading, setLoading] = useState(true); // To handle loading state
  const [error, setError] = useState(''); // To store error message

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token'); // Get token from localStorage

      if (!token) {
        setError('You need to log in to view your account.');
        setLoading(false);
        return;
      }

      try {
        console.log('Sending request to /api/user with token:', token); // Debug log

        const response = await axios.get('/api/user', {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token in the header
          },
        });

        console.log('User data received:', response.data); // Debug log the response

        setUser(response.data); // Store the user data
        setLoading(false); // Stop loading
      } catch (err) {
        console.error('Error fetching user data:', err); // Debug log the error
        setError('Failed to fetch user data'); // Display error message
        setLoading(false); // Stop loading in case of an error
      }
    };

    fetchUserData();
  }, []); // Run this effect only once when the component mounts

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6 mt-8 bg-white shadow-md rounded-lg font-orbitron">
        <h1 className="text-3xl font-bold mb-4">My Account</h1>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-6 mt-8 bg-white shadow-md rounded-lg font-orbitron">
        <h1 className="text-3xl font-bold mb-4">My Account</h1>
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="max-w-4xl mx-auto p-6 mt-8 bg-white shadow-md rounded-lg font-orbitron">
        <h1 className="text-3xl font-bold mb-4">My Account</h1>
        <p className="text-red-500">No user data found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 mt-8 bg-white shadow-md rounded-lg font-orbitron">
      <h1 className="text-3xl font-bold mb-4">My Account</h1>
      <p className="text-lg">Welcome to your account page! Here you can manage your personal details, settings, and preferences.</p>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Personal Information</h2>
        <ul className="list-disc pl-6 mt-2">
          <li>Name: {user.name}</li>
          <li>Email: {user.email}</li>
          <li>Role: {user.role}</li>
          <li>Joined: {new Date(user.createdAt).toLocaleDateString()}</li>
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Account Settings</h2>
        <button className="mt-4 px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800">Edit Profile</button>
      </div>
    </div>
  );
};

export default MyAccount;
