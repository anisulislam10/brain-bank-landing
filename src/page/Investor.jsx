import React, { useEffect } from "react";
import { motion } from "framer-motion";
import MarketOpportunity from "../components/Investor/MarketOpportunity";
import RevenueModel from "../components/Investor/RevenueModel";
import TractioMilestones from "../components/Investor/TractioMilestones";
import FinancialProjections from "../components/Investor/FinancialProjections";
import bgImage from "../assets/header/app.webp"; // Replace with your actual image path
import logo from "../assets/logo/logo.webp"; // Replace with your actual logo path
import Footer from "../components/Footer";
import AppDownloadCard from "../components/AppDownloadCard/AppDownloadCard";
import ProblemSolutionSection from "../components/OurSolution";

const Investor = () => {
  // Ensure the page starts from the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Background Image */}
      <div
        className="relative bg-cover bg-center text-gray-900 py-24 px-6 md:px-24 min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 to-gray-900/40"></div>

        {/* Logo - Positioned in the top-left corner */}
        <div className="absolute top-4 left-4 md:top-6 md:left-6 lg:top-8 lg:left-8 z-10">
          <img
            src={logo}
            alt="Brain Bank Logo"
            className="w-12 md:w-16 lg:w-10 h-auto shadow-2xl bg-white rounded-xl"
          />
        </div>

        {/* Headline & Subheadline */}
        <motion.section
          className="relative text-center max-w-4xl mx-auto text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Invest in the Future of Knowledge Sharing
          </h1>
          <p className="text-lg md:text-xl mt-4 font-medium">
            Brain Bank is revolutionizing the knowledge economy by creating a
            marketplace for real-world expertise. With a ready MVP, a scalable model,
            and a massive addressable market, we’re poised for exponential growth.
          </p>
        </motion.section>
      </div>

      {/* Content Sections */}
      <div className="flex-grow">
      <ProblemSolutionSection />

        <MarketOpportunity className="mb-16" />
        <RevenueModel className="mb-16" />
        <TractioMilestones className="mb-16" />
        <FinancialProjections className="mb-16" />
        <AppDownloadCard />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Investor;
