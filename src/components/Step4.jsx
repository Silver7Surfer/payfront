import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import backArrow from '../assets/back_arrow.svg';
import { processPayment } from '../services/paymentService';

const Step4 = ({ goToStep, currentStep, formData }) => {
  const [loading, setLoading] = useState(false);
  
  const handleStripeCheckout = async () => {
    setLoading(true);
    
    try {
      const data = await processPayment({
        serverProvider: formData.serverProvider,
        username: formData.username,
        amount: formData.amount
      });
      
      // Redirect to Stripe checkout page
      window.location.href = data.url;
      
    } catch (error) {
      console.error('Error submitting payment:', error);
      alert(`Error: ${error.message}`);
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#1a1a1a] rounded-lg p-5 w-full max-w-md mx-auto my-5 relative">
      <img 
        src={backArrow} 
        alt="Back" 
        className="absolute left-2 top-2 w-6 h-6 cursor-pointer" 
        onClick={() => goToStep(3, true)}
      />
      
      <ProgressBar currentStep={currentStep} />
      
      <h2 className="text-xl font-bold mb-2">Payment Pending ! ! !</h2>
      <p className="mb-4">Please Press Continue to Complete the Payment</p>
      
      <div className="text-left mb-4 bg-[#222] p-4 rounded">
        <p className="mb-2"><strong>Server Provider:</strong> {formData?.serverProvider}</p>
        <p className="mb-2"><strong>Username:</strong> {formData?.username}</p>
        <p className="mb-2"><strong>Amount:</strong> ${parseFloat(formData?.amount || 0).toFixed(2)}</p>
      </div>
      
      <button 
        type="button"
        onClick={handleStripeCheckout}
        disabled={loading}
        className={`w-full ${loading ? 'bg-gray-500' : 'bg-[#0f0] hover:bg-[#0c0]'} 
          text-black font-bold p-2 rounded cursor-pointer transition-colors`}
      >
        {loading ? 'Processing...' : 'Continue'}
      </button>
    </div>
  );
};

export default Step4;