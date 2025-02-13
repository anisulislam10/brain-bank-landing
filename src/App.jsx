import { HelmetProvider } from "react-helmet-async";
import React from "react";
import './App.css';
import Home from './page/Home';
import 'animate.css';

function App() {
  return (
    <HelmetProvider>
      <Home />
    </HelmetProvider>
  );
}

export default App;
