import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import PrivacyPolicy from "./component/PrivacyPolicy.jsx";
import ContactUs from "./component/ContactUs.jsx";
import TermsAndConditions from "./component/TermsAndConditions.jsx";
import Pricing from "./component/Shippingdelay.jsx";
import RefundPolicy from "./component/RefundPolicy.jsx";
import Shippingdelay from "./component/Shippingdelay.jsx";
import Disclaimer from "./component/Disclaimer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/Shipping-delay" element={<Shippingdelay/>}/>
        <Route path="/Refund-Cancellation" element={<RefundPolicy />} />
        <Route path="/Disclaimer" element={<Disclaimer />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
