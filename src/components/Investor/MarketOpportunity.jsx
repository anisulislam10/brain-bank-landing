import React from "react";
import { motion } from "framer-motion";
import marketImage from "./../../assets/MarketOpprotunity/marketOpp.svg";

const MarketOpportunity = () => {
  return (
    <div className="bg-gradient-to-br from-white to-white py-16 px-6 md:px-24">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left Section - Image */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={marketImage}
            alt="Market Opportunity"
            className="w-full rounded-lg "
          />
        </motion.div>

        {/* Right Section - Market Opportunity */}
        <motion.div
          className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-2xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-green-500">
            Market Opportunity
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            <span className="font-semibold">
              Tapping into a $58 Billion Knowledge Economy
            </span>
          </p>
          <p className="mt-2 text-gray-600">
            The global knowledge management market is projected to grow from{" "}
            <strong>$33 billion in 2020</strong> to{" "}
            <strong>$58 billion by 2025</strong>, at a CAGR of 12% (Source:
            MarketsandMarkets).
          </p>
          <p className="mt-2 text-gray-600">
            Brain Bank targets a massive and underserved market: individuals
            seeking affordable, practical advice and experts looking to
            monetize their knowledge.
          </p>
          <p className="mt-2 text-gray-600">
            With over <strong>4.6 billion internet users worldwide</strong>, the
            potential for growth is immense, especially in regions like South
            Asia, where access to affordable expertise is limited.
          </p>

          {/* Bullet Points with Animation */}
          <ul className="mt-6 space-y-3">
            {[
              "Global market expected to reach $58 billion",
              "High growth potential with 4.6 billion internet users",
              "Opportunities in underserved regions like South Asia",
              "Bridging the gap between knowledge seekers and experts",
            ].map((point, index) => (
              <motion.li
                key={index}
                className="flex items-center space-x-3 text-lg text-gray-700"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
              >
                <span className="text-green-600 text-sm ">✅</span>
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default MarketOpportunity;
