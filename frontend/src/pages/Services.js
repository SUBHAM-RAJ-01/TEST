import React from 'react';
import { FaCrown, FaUnlock, FaBan, FaEnvelope, FaUser } from 'react-icons/fa';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4">
      {/* Premium Section */}
      <section className="w-full max-w-5xl text-center mb-12">
        <h1 className="text-4xl font-semibold mb-6 text-gray-800">Premium Services</h1>
        <p className="text-gray-600 mb-8">
          Unlock exclusive features with our Premium subscription and enjoy an ad-free experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Perk 1 */}
          <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg">
            <FaUnlock className="text-gray-700 text-5xl mb-4" />
            <h3 className="text-xl font-medium mb-2">Unlimited Access</h3>
            <p className="text-gray-600">
              Convert as many files as you want without any restrictions.
            </p>
          </div>
          {/* Perk 2 - Replaced "Unlimited Downloads" with "No Ads" */}
          <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg">
            <FaBan className="text-red-500 text-5xl mb-4" />
            <h3 className="text-xl font-medium mb-2">No Ads</h3>
            <p className="text-gray-600">
              Enjoy an ad-free experience with Premium access.
            </p>
          </div>
          {/* Perk 3 */}
          <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg">
            <FaCrown className="text-yellow-500 text-5xl mb-4" />
            <h3 className="text-xl font-medium mb-2">Priority Support</h3>
            <p className="text-gray-600">
              Get 24/7 customer support with priority response for Premium users.
            </p>
          </div>
        </div>
        <button className="mt-8 bg-black text-white py-3 px-6 rounded-lg font-medium transition duration-300 hover:bg-gray-800">
          Get Premium
        </button>
      </section>

      {/* Contact Section */}
      <section className="w-full max-w-2xl text-center bg-white shadow-md rounded-lg p-8 mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact Us</h2>
        <p className="text-gray-600 mb-6">
          Have questions or need help? Reach out to us!
        </p>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-700 font-medium mb-1">
              <FaUser className="inline mr-2" />
              Name
            </label>
            <input
              type="text"
              id="name"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 font-medium mb-1">
              <FaEnvelope className="inline mr-2" />
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-700 font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-black text-white py-2 px-6 rounded-md font-medium transition duration-300 hover:bg-gray-800"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Services;
