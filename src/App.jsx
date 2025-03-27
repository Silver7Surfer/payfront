import { useState } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    serverProvider: '',
    username: '',
    amount: ''
  });
  const [errors, setErrors] = useState({
    serverProvider: false,
    username: false,
    amount: false
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: false
      });
    }
  };

  const goToStep = (step, isBack = false) => {
    if (!isBack && !validateStep(currentStep)) return;
    setCurrentStep(step);
  };

  const validateStep = (step) => {
    let isValid = true;
    const newErrors = { ...errors };

    if (step === 1) {
      if (!formData.serverProvider) {
        newErrors.serverProvider = true;
        isValid = false;
      } else {
        newErrors.serverProvider = false;
      }
    } else if (step === 2) {
      if (!formData.username) {
        newErrors.username = true;
        isValid = false;
      } else {
        newErrors.username = false;
      }

      if (!formData.amount) {
        newErrors.amount = true;
        isValid = false;
      } else {
        newErrors.amount = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (currentStep === 4) {
      setLoading(true);
      
      try {
        const response = await fetch('http://localhost:5000/checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            serverProvider: formData.serverProvider,
            username: formData.username,
            amount: formData.amount
          }),
        });
        
        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.message || 'Error processing payment');
        }
        
        // Redirect to Stripe checkout page
        window.location.href = data.url;
        
      } catch (error) {
        console.error('Error submitting payment:', error);
        alert(`Error: ${error.message}`);
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen w-full bg-black text-white font-sans text-center flex flex-col justify-between">
      <div className="flex-grow flex flex-col items-center justify-center py-5 px-4">
        <h1 className="text-2xl font-bold mb-8">PayNow</h1>
        
        <form id="depositForm" onSubmit={handleSubmit} className="w-full max-w-md">
          {currentStep === 1 && (
            <Step1 
              formData={formData}
              errors={errors}
              handleInputChange={handleInputChange}
              goToStep={goToStep}
              currentStep={currentStep}
            />
          )}

          {currentStep === 2 && (
            <Step2 
              formData={formData}
              errors={errors}
              handleInputChange={handleInputChange}
              goToStep={goToStep}
              currentStep={currentStep}
            />
          )}

          {currentStep === 3 && (
            <Step3 
              formData={formData}
              goToStep={goToStep}
              currentStep={currentStep}
            />
          )}

          {currentStep === 4 && (
            <Step4 
              goToStep={goToStep}
              currentStep={currentStep}
              formData={formData}
              loading={loading}
            />
          )}
        </form>
      </div>
      
      <footer className="py-4">
        Powered by <strong>PayNow</strong>
      </footer>
    </div>
  );
}

export default App;