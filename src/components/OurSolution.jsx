import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faLightbulb, faHandshake, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const ProblemSolutionSection = () => {
  return (
    <div className="bg-gradient-to-r from-white to-white py-12 px-4 sm:px-8">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">
          The Problem <span className="text-green-500">We Solve</span>
        </h2>

        {/* Cards in Horizontal Layout */}
        <div className="flex flex-col md:flex-row justify-center gap-6 text-start">
          
          {/* For Knowledge Seekers */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex-1">
            <div className="flex justify-center mb-2">
              <FontAwesomeIcon icon={faUsers} size="2x" className="text-green-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700">For Knowledge Seekers</h3>
            <ul className="text-gray-600 text-sm mt-3 space-y-2">
              <li className="flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                Experts are often too expensive.
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                Limited access to quality guidance.
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                Need an affordable, reliable platform.
              </li>
            </ul>
          </div>

          {/* For Knowledge Providers */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex-1">
            <div className="flex justify-center mb-2">
              <FontAwesomeIcon icon={faHandshake} size="2x" className="text-green-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700">For Knowledge Providers</h3>
            <ul className="text-gray-600 text-sm mt-3 space-y-2">
              <li className="flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                Many experts lack a platform to share knowledge.
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                Monetizing skills can be challenging.
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                Need a trusted marketplace for their expertise.
              </li>
            </ul>
          </div>

          {/* Our Solution */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex-1">
            <div className="flex justify-center mb-2">
              <FontAwesomeIcon icon={faLightbulb} size="2x" className="text-green-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700">Our Solution</h3>
            <ul className="text-gray-600 text-sm mt-3 space-y-2">
              <li className="flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                Tech-driven knowledge-sharing platform.
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                Secure & affordable access to experts.
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                Scalable and ready-to-use solution.
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProblemSolutionSection;
