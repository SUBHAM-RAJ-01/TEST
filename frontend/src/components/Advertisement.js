import React, { useEffect, useState } from 'react';

const advertisements = [
  {
    id: 1,
    title: '🚀 Discover Premium Services',
    description: 'Unlock unlimited access, priority support, and more.',
    bgColor: 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500',
  },
  {
    id: 2,
    title: '📂 Easy File Management',
    description: 'Upload, convert, and download files in seconds.',
    bgColor: 'bg-gradient-to-r from-green-400 to-blue-500',
  },
  {
    id: 3,
    title: '⚡ Superfast Conversions',
    description: 'Experience lightning-fast file conversions anytime.',
    bgColor: 'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500',
  },
];

const Advertisement = () => {
  const [currentAd, setCurrentAd] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prevAd) => (prevAd + 1) % advertisements.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const ad = advertisements[currentAd];

  return (
    <div
      className={`w-full py-20 px-4 text-center text-white transition-all duration-500 ${ad.bgColor}`}
    >
      <h2 className="text-2xl font-bold">{ad.title}</h2>
      <p className="mt-2">{ad.description}</p>
    </div>
  );
};

export default Advertisement; // Ensure it's a default export
