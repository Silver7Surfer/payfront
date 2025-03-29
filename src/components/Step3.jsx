import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import backArrow from '../assets/back_arrow.svg';
import { processPayment } from '../services/paymentService';

const Step3 = ({ formData, goToStep, currentStep, merchant = 'default' }) => {
  const [loading, setLoading] = useState(false);
  
  const handleStripeCheckout = async () => {
    setLoading(true);
    
    try {
      const data = await processPayment({
        serverProvider: formData.serverProvider,
        username: formData.username,
        amount: formData.amount,
        merchantId: merchant // Include merchant ID in payment data
      });
      
      // Redirect to Stripe checkout page
      window.location.href = data.url;
      
    } catch (error) {
      console.error('Error submitting payment:', error);
      alert(`Error: ${error.message}`);
      setLoading(false);
    }
  };

  // Get merchant display name
  const merchantDisplay = merchant !== 'default' 
    ? merchant.toUpperCase() 
    : '';

  return (
    <div className="bg-[#1a1a1a] rounded-lg p-5 w-full max-w-md mx-auto my-5 relative">
      <img 
        src={backArrow} 
        alt="Back" 
        className="absolute left-2 top-2 w-6 h-6 cursor-pointer" 
        onClick={() => goToStep(2, true)}
      />
      
      <ProgressBar currentStep={currentStep} />
      
      <h2 className="text-xl font-bold mb-2">Confirm & Pay</h2>
      
      {/* Show merchant info if not default */}
      {merchant !== 'default' && (
        <div className="text-sm text-green-400 mb-2">
          Via {merchantDisplay}
        </div>
      )}
      
      <p className="mb-4">Please confirm your deposit details and proceed to payment.</p>
      
      <div className="text-left mb-4 bg-[#222] p-4 rounded">
        <p className="mb-2"><strong>Server Provider:</strong> {formData.serverProvider}</p>
        <p className="mb-2"><strong>Username:</strong> {formData.username}</p>
        <p className="mb-2"><strong>Amount:</strong> ${parseFloat(formData?.amount || 0).toFixed(2)}</p>
        {merchant !== 'default' && (
          <p className="mb-2"><strong>Merchant:</strong> {merchantDisplay}</p>
        )}
      </div>
      
      <button 
        type="button"
        onClick={handleStripeCheckout}
        disabled={loading}
        className={`w-full ${loading ? 'bg-gray-500' : 'bg-[#0f0] hover:bg-[#0c0]'} 
          text-black font-bold p-2 rounded cursor-pointer transition-colors`}
      >
        {loading ? 'Processing...' : 'Confirm & Pay Now'}
      </button>
    </div>
  );
};

export default Step3;