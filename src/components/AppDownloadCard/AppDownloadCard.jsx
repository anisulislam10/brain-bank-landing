import React from "react";
import appImage from "../../assets/header/h1.webp"; 
import { motion } from "framer-motion";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faLightbulb, faHandshake } from "@fortawesome/free-solid-svg-icons";
const AppDownloadCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-6 md:p-12 rounded-lg shadow-lg max-w-5xl mx-auto mb-10">
      {/* Left Side - Mobile App Image */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={appImage}
          alt="Mobile App"
          className="w-48 md:w-64 lg:w-80 h-auto"
        />
      </motion.div>

      {/* Right Side - Card */}
      <motion.div
        className="w-full md:w-1/2 bg-white p-6 md:p-8 rounded-lg shadow-md text-center"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          <span className="text-green-500">Download</span> the App
        </h2>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Get early access to our app and experience the future of knowledge sharing.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col gap-3">
          <Link to='/signup' className="bg-green-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-green-700 transition">
          <i className="fa fa-sign-in text-2xl text-white"></i> Signup for Early Access
          </Link>
          <button className="bg-green-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-green-700 transition">
          <i className="fa fa-play text-2xl text-white"></i> Download Now for Free
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AppDownloadCard;
