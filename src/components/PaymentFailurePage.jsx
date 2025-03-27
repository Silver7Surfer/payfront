import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const PaymentFailurePage = () => {
  const [searchParams] = useSearchParams();
  const errorReason = searchParams.get('error') || 'The payment could not be processed.';
  
  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="bg-[#1a1a1a] rounded-lg p-8 w-full max-w-md text-center">
        <div className="w-20 h-20 bg-red-600 rounded-full mx-auto mb-6 flex items-center justify-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-12 w-12 text-white" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </div>
        
        <h1 className="text-2xl font-bold mb-4">Payment Failed</h1>
        
        <div className="bg-red-900/30 border border-red-800 rounded-lg p-4 mb-6 text-left">
          <p className="text-red-200">{errorReason}</p>
        </div>
        
        <p className="mb-6">
          Your payment could not be processed. This may be due to insufficient funds, 
          incorrect card details, or a temporary issue with your payment method.
        </p>
        
        <div className="space-y-4">
          <Link 
            to="/"
            className="bg-[#00ff00] text-black font-bold py-3 px-6 rounded inline-block w-full"
          >
            Try Again
          </Link>
          
          <div className="mt-4 text-sm text-gray-400">
            <p>Common reasons for payment failures:</p>
            <ul className="list-disc text-left pl-5 mt-2 space-y-1">
              <li>Insufficient funds in your account</li>
              <li>Card expired or invalid card details</li>
              <li>Transaction declined by your bank</li>
              <li>Network or connection issues</li>
            </ul>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-700 text-sm">
            <p>Need help? Contact our support team at</p>
            <a href="mailto:support@paynow.com" className="text-[#00ff00] hover:underline">
              support@paynow.com
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-gray-500">
        Powered by <strong>PayNow</strong>
      </div>
    </div>
  );
};

export default PaymentFailurePage;