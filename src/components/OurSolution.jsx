import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faLightbulb, faHandshake } from "@fortawesome/free-solid-svg-icons";

const ProblemSolutionSection = () => {
  return (
    <div className="bg-gradient-to-r from-teal-100 to-blue-200 py-16 px-4 sm:px-8">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-12">
          The Problem We Solve
        </h2>

        {/* Problem We Solve for Seekers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* For Knowledge Seekers */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex justify-center items-center mb-4">
              <FontAwesomeIcon icon={faUsers} size="3x" className="text-teal-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">For Knowledge Seekers</h3>
            <p className="text-gray-600 text-lg">
              Traditional consultants and experts are often too expensive or inaccessible. Brain Bank provides an affordable, reliable alternative.
            </p>
          </div>

          {/* For Knowledge Providers */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex justify-center items-center mb-4">
              <FontAwesomeIcon icon={faHandshake} size="3x" className="text-teal-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">For Knowledge Providers</h3>
            <p className="text-gray-600 text-lg">
              Millions of people with valuable skills and experiences have no platform to monetize their knowledge. Brain Bank empowers them to earn income by sharing what they know.
            </p>
          </div>
        </div>

        {/* Our Solution */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Our Solution
        </h2>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="flex justify-center items-center mb-6">
            <FontAwesomeIcon icon={faLightbulb} size="3x" className="text-teal-500" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">A Scalable, Tech-Driven Marketplace for Real-World Knowledge</h3>
          <p className="text-gray-600 text-lg">
            Brain Bank connects knowledge seekers with verified experts in various fields. With a user-friendly platform, we make knowledge sharing accessible and scalable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProblemSolutionSection;
