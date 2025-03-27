// src/services/paymentService.js

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const verifyPayment = async (sessionId) => {
    if (!sessionId) {
      throw new Error('No session ID provided');
    }
    
    const response = await fetch(`${API_BASE_URL}/verify-payment/${sessionId}`);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to verify payment');
    }
    
    return data;
};
  
export const processPayment = async (paymentData) => {
    const response = await fetch(`${API_BASE_URL}/checkout`, {
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