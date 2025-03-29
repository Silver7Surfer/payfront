// src/components/MerchantNotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const MerchantNotFoundPage = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white flex items-center justify-center">
      <div className="bg-[#1a1a1a] rounded-lg p-8 max-w-md text-center">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-16 w-16 text-red-500 mx-auto mb-4" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
          />
        </svg>
        
        <h1 className="text-2xl font-bold mb-4">Merchant Not Found</h1>
        
        <p className="mb-6">
          The payment merchant you're trying to access doesn't exist or is no longer available.
        </p>
        
        <div className="flex flex-col gap-3">
          <Link 
            to="/"
            className="bg-[#0f0] text-black font-bold py-2 px-4 rounded hover:bg-[#0c0]"
          >
            Go to Main Payment Page
          </Link>
          
          
        </div>
      </div>
    </div>
  );
};

export default MerchantNotFoundPage;