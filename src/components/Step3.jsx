import React from 'react';
import ProgressBar from './ProgressBar';
import backArrow from '../assets/back_arrow.svg';

const Step3 = ({ formData, goToStep, currentStep }) => {
  return (
    <div className="bg-[#1a1a1a] rounded-lg p-5 w-full max-w-md mx-auto my-5 relative">
      <img 
        src={backArrow} 
        alt="Back" 
        className="absolute left-2 top-2 w-6 h-6 cursor-pointer" 
        onClick={() => goToStep(2, true)}
      />
      
      <ProgressBar currentStep={currentStep} />
      
      <h2 className="text-xl font-bold mb-2">Confirm</h2>
      <p className="mb-4">Please confirm all your entries before submitting your deposit.</p>
      
      <div className="text-left mb-4">
        <p className="mb-2"><strong>Server Provider:</strong> {formData.serverProvider}</p>
        <p className="mb-2"><strong>Username:</strong> {formData.username}</p>
        <p className="mb-2"><strong>Amount:</strong> ${formData.amount}</p>
      </div>
      
      <button 
        type="button" 
        onClick={() => goToStep(4)}
        className="w-full bg-[#0f0] text-black font-bold p-2 rounded hover:bg-[#0c0] cursor-pointer"
      >
        Confirm
      </button>
    </div>
  );
};

export default Step3;