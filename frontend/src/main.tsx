import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Login from "./Components/Login";
import StripeWrapper from "./Components/StripeWrapper";
import Success from "./Components/Success"; //  Import Success component
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { initializeApp } from "firebase/app";
import PrivateRoute from "./Components/PrivateRoute";

//  Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCYvlh4Hf42oSmNuNbimHLUOYqScoHf3rA",
  authDomain: "authentication-df013.firebaseapp.com",
  projectId: "authentication-df013",
  storageBucket: "authentication-df013.firebasestorage.app",
  messagingSenderId: "784317714590",
  appId: "1:784317714590:web:7a4e22ec8732af25afab8f",
};

// Initialize Firebase
initializeApp(firebaseConfig);

//  App Render with Protected Routes
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/payment"
          element={
            <PrivateRoute>
              <StripeWrapper />
            </PrivateRoute>
          }
        />
        <Route path="/success" element={<Success />} /> {/*  Add this route */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
