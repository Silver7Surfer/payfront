// src/services/paymentService.js
export const verifyPayment = async (sessionId) => {
    if (!sessionId) {
      throw new Error('No session ID provided');
    }
    
    const response = await fetch(`https://api.bigwin.gold/verify-payment/${sessionId}`);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to verify payment');
    }
    
    return data;
};
  
export const processPayment = async (paymentData) => {
    const response = await fetch('https://api.bigwin.gold/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData),
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Error processing payment');
    }
    
    return data;
  };