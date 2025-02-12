import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // ✅ Import Routes and Route
import App from "./App.jsx";
import SignupForm from "./page/Signup.jsx";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ScheduleDemoForm from "./page/ContactForm.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/contactform" element={<ScheduleDemoForm />} />

    </Routes>
  </BrowserRouter>
);
