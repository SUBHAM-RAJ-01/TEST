import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto text-center">
        <p className="text-xs mu-6 mb-4">© 2024 Fileme. All rights reserved.</p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl hover:text-blue-500 transition duration-300" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-blue-800 transition duration-300" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-pink-600 transition duration-300" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-300 transition duration-300" />
          </a>
        </div>

        <p className="text-sm">Follow us on social media for the latest updates.</p>
      </div>
    </footer>
  );
};

export default Footer;
