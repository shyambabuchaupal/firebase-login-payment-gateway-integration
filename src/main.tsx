import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Login from "./Components/Login"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { initializeApp } from "firebase/app";
import Payment from "./Components/Payment.tsx";


const firebaseConfig = {
  apiKey: "AIzaSyCYvlh4Hf42oSmNuNbimHLUOYqScoHf3rA",
  authDomain: "authentication-df013.firebaseapp.com",
  projectId: "authentication-df013",
  storageBucket: "authentication-df013.firebasestorage.app",
  messagingSenderId: "784317714590",
  appId: "1:784317714590:web:7a4e22ec8732af25afab8f"
};


initializeApp(firebaseConfig);


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/payment" element={<Payment/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
