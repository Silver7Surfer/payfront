import React from 'react';
import ProgressBar from './ProgressBar';
import applePay from '../assets/apple_pay.png';
import googlePay from '../assets/google_pay.png';
import cashApp from '../assets/cashapp.png';

const Step1 = ({ formData, errors, handleInputChange, goToStep, currentStep }) => {
  return (
    <div className="bg-[#1a1a1a] rounded-lg p-5 w-full max-w-md mx-auto my-5 relative">
      <ProgressBar currentStep={currentStep} />
      
      <h2 className="text-xl font-bold mb-2">Deposit</h2>
      <p className="mb-2">Please fill out the form below to deposit to a server.</p>
      <p className="mb-2">Select a server provider from the dropdown.</p>
      <p className="mb-4">Easily pay with your preferred methods:</p>
      
      <div className="flex justify-center items-center mb-4">
        <img src={applePay} alt="Apple Pay" className="mx-2 h-[70px]" />
        <img src={googlePay} alt="Google Pay" className="mx-2 h-[70px]" />
        <img src={cashApp} alt="Cash App" className="mx-2 h-[70px]" />
      </div>
      
      <label htmlFor="serverProvider" className="block text-left">Server Provider</label>
      <select 
        id="serverProvider" 
        name="serverProvider" 
        value={formData.serverProvider}
        onChange={handleInputChange}
        className="w-full my-4 p-2 rounded bg-white text-black"
      >
        <option value="">Select a provider</option>
        <option value="Juwa777">1 Juwa777</option>
        <option value="Milky Way">2 Milky Way</option>
        <option value="GameVault">3 GameVault</option>
        <option value="Ultra Panda">4 Ultra Panda</option>
        <option value="Orion Stars">5 Orion Stars</option>
        <option value="FireKirin">6 FireKirin</option>
        <option value="Yolo">8 Yolo</option>
        <option value="Cash Machine">9 Cash Machine</option>
        <option value="Panda Master">10 Panda Master</option>
        <option value="Mafia">11 Mafia</option>
        <option value="Noble">12 Noble</option>
        <option value="Game Room">13 Game Room</option>
        <option value="Vegas Sweeps">14 Vegas Sweeps</option>
      </select>
      
      {errors.serverProvider && 
        <span className="text-red-500 text-xs text-left block -mt-2 mb-3">
          The server provider field is required.
        </span>
      }
      
      <button 
        type="button" 
        onClick={() => goToStep(2)}
        className="w-full bg-[#0f0] text-black font-bold p-2 rounded hover:bg-[#0c0] cursor-pointer"
      >
        Continue
      </button>
    </div>
  );
};

export default Step1;