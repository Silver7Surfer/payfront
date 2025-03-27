import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { verifyPayment } from '../services/paymentService';

const PaymentSuccessPage = () => {
  const [searchParams] = useSearchParams();
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const checkPaymentStatus = async () => {
      const sessionId = searchParams.get('session_id');
      
      if (!sessionId) {
        setError('No session ID found');
        setLoading(false);
        return;
      }
      
      try {
        const data = await verifyPayment(sessionId);
        setPaymentDetails(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    
    checkPaymentStatus();
  }, [searchParams]);
  
  if (loading) {
    return (
      <div className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center p-4">
        <div className="bg-[#1a1a1a] rounded-lg p-8 w-full max-w-md text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00ff00] mx-auto mb-4"></div>
          <h2 className="text-xl font-bold">Verifying Your Payment...</h2>
          <p className="mt-4 text-gray-400">Please wait while we confirm your transaction.</p>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center p-4">
        <div className="bg-[#1a1a1a] rounded-lg p-8 w-full max-w-md text-center">
          <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-2xl">✕</span>
          </div>
          <h2 className="text-xl font-bold mb-4">Payment Verification Failed</h2>
          <p className="mb-6 text-gray-400">{error}</p>
          <Link 
            to="/"
            className="bg-[#00ff00] text-black font-bold py-3 px-6 rounded inline-block"
          >
            Return Home
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="bg-[#1a1a1a] rounded-lg p-8 w-full max-w-md text-center">
        <div className="w-20 h-20 bg-[#00ff00] rounded-full mx-auto mb-6 flex items-center justify-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-12 w-12 text-black" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={3} 
              d="M5 13l4 4L19 7" 
            />
          </svg>
        </div>
        
        <h1 className="text-2xl font-bold mb-4">Payment Successful!</h1>
        
        {paymentDetails && (
          <div className="text-4xl font-bold my-6">
            ${paymentDetails.amount}
          </div>
        )}
        
        <div className="bg-[#222] p-4 rounded-lg text-left mb-6">
          <p className="mb-2 text-gray-400">Payment Status: <span className="text-white font-medium">Completed</span></p>
          {paymentDetails?.customerDetails?.email && (
            <p className="mb-2 text-gray-400">Email: <span className="text-white font-medium">{paymentDetails.customerDetails.email}</span></p>
          )}
          {paymentDetails?.customerDetails?.name && (
            <p className="text-gray-400">Name: <span className="text-white font-medium">{paymentDetails.customerDetails.name}</span></p>
          )}
        </div>
        
        <p className="mb-6">
          Your payment has been successfully processed. Funds will be credited to your game account shortly.
        </p>
        
        <Link 
          to="/"
          className="bg-[#00ff00] text-black font-bold py-3 px-6 rounded inline-block"
        >
          Make Another Deposit
        </Link>
      </div>
      
      <div className="mt-8 text-gray-500">
        Powered by <strong>PayNow</strong>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;