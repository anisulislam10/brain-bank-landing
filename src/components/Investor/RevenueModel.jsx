import React from "react";
import { motion } from "framer-motion";
import revenueImage from "./../../assets/RevenueModel/RevenueModel.svg"; // Replace with your image path

const RevenueModel = () => {
  return (
    <div className="bg-gradient-to-br from-white to-white py-16 px-6 md:px-24">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left Section - Revenue Model Text */}
        <motion.div
          className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-2xl"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-green-500">Revenue Model</h2>
          <p className="mt-4 text-lg text-gray-700">
            <span className="font-semibold">
              Multiple Streams of High-Margin Revenue
            </span>
          </p>

          {/* Bullet Points with Scroll Animation */}
          <ul className="mt-6 space-y-3">
            {[
              "We take a 20% commission on every transaction",
              "Premium subscription plans with exclusive features",
              "Advertising revenue from businesses on the platform",
            ].map((point, index) => (
              <motion.li
                key={index}
                className="flex items-center space-x-3 text-lg text-gray-700"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 20 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <span className="text-green-600 text-sm ">✅</span>
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right Section - Image with Scroll Animation */}
        <motion.div
          className="w-full md:w-1/2"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <img
            src={revenueImage}
            alt="Revenue Model"
            className="w-full rounded-lg "
          />
        </motion.div>
      </div>
    </div>
  );
};

export default RevenueModel;
