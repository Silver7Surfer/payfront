import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import PaymentSuccessPage from './components/PaymentSuccessPage.jsx'
import PaymentCancelPage from './components/PaymentCancelPage.jsx'
import PaymentFailurePage from './components/PaymentFailurePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/payment-success" element={<PaymentSuccessPage />} />
        <Route path="/payment-cancel" element={<PaymentCancelPage />} />
        <Route path="/payment-failure" element={<PaymentFailurePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)