import React from 'react';

const ProgressBar = ({ currentStep }) => {
  return (
    <div className="flex justify-center mb-5">
      <div className={`h-[5px] w-20 mx-1 rounded-sm ${currentStep >= 1 ? 'bg-[#0f0]' : 'bg-[#333]'}`}></div>
      <div className={`h-[5px] w-20 mx-1 rounded-sm ${currentStep >= 2 ? 'bg-[#0f0]' : 'bg-[#333]'}`}></div>
      <div className={`h-[5px] w-20 mx-1 rounded-sm ${currentStep >= 3 ? 'bg-[#0f0]' : 'bg-[#333]'}`}></div>
      <div className={`h-[5px] w-20 mx-1 rounded-sm ${currentStep >= 4 ? 'bg-[#0f0]' : 'bg-[#333]'}`}></div>
    </div>
  );
};

export default ProgressBar;