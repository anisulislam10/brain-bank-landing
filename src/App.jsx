import { HelmetProvider } from "react-helmet-async";
import React from "react";
import { Routes, Route } from "react-router-dom"; // ✅ Import Routes & Route
import './App.css';
import 'animate.css';
import Home from './page/Home';
import SignupForm from "./page/Signup.jsx";
import ScheduleDemoForm from "./page/ContactForm.jsx";
import Investor from "./page/Investor.jsx";

function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/contactform" element={<ScheduleDemoForm />} />
        <Route path="/investor" element={<Investor />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
