import React from 'react';
import ProgressBar from './ProgressBar';
import backArrow from '../assets/back_arrow.svg';

const Step2 = ({ formData, errors, handleInputChange, goToStep, currentStep }) => {
  return (
    <div className="bg-[#1a1a1a] rounded-lg p-5 w-full max-w-md mx-auto my-5 relative">
      <img 
        src={backArrow} 
        alt="Back" 
        className="absolute left-2 top-2 w-6 h-6 cursor-pointer" 
        onClick={() => goToStep(1, true)}
      />
      
      <ProgressBar currentStep={currentStep} />
      
      <h2 className="text-xl font-bold mb-2">Continue Deposit</h2>
      <p className="mb-2">Enter your username from the server provider.</p>
      <p className="mb-4">Enter the amount you would like to load.</p>
      
      <div>
      <input  
        type="text"  
        id="username"  
        name="username"  
        placeholder="Username"
        value={formData.username}
        onChange={handleInputChange}  
        className="w-full mt-4 mb-1 p-2 rounded bg-white text-black"
      />
      <span className="text-xs text-gray-500">Multiple usernames are accepted seperated by comma</span>
    </div>
      
      {errors.username && 
        <span className="text-red-500 text-xs text-left block -mt-2 mb-3">
          The username field is required.
        </span>
      }
      
      <input 
        type="number" 
        id="amount" 
        name="amount" 
        placeholder="Amount"
        value={formData.amount}
        onChange={handleInputChange}
        className="w-full my-4 p-2 rounded bg-white text-black" 
      />
      
      {errors.amount && 
        <span className="text-red-500 text-xs text-left block -mt-2 mb-3">
          The amount field is required.
        </span>
      }
      
      <button 
        type="button" 
        onClick={() => goToStep(3)}
        className="w-full bg-[#0f0] text-black font-bold p-2 rounded hover:bg-[#0c0] cursor-pointer"
      >
        Continue
      </button>
    </div>
  );
};

export default Step2;