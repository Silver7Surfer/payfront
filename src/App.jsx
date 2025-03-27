import { useState } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';

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

  return (
    <div className="min-h-screen w-full bg-black text-white font-sans text-center flex flex-col justify-between">
      <div className="flex-grow flex flex-col items-center justify-center py-5 px-4">
        <h1 className="text-2xl font-bold mb-8">PayNow</h1>
        
        <form id="depositForm" className="w-full max-w-md">
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
        </form>
      </div>
      
      <footer className="py-4">
        Powered by <strong>PayNow</strong>
      </footer>
    </div>
  );
}

export default App;