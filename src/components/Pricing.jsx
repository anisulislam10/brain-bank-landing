import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faUserTie, faUsers, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const PricingSection = () => {
  return (
    <div className="bg-gradient-to-r from-green-300 to-green-500 py-16 px-4 sm:px-8">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-3xl font-semibold text-white mb-8">
          Transparent & Affordable Pricing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* For Knowledge Seekers Card */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex justify-center items-center mb-4">
              <FontAwesomeIcon icon={faUsers} size="3x" className="text-green-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              For Knowledge Seekers
            </h3>
            <p className="text-gray-600 text-lg mb-4">
              Pay only for the advice you need. Prices start as low as <span className="font-bold text-green-600">$5</span> per session, depending on the expert and the complexity of your query.
            </p>
            <ul className="text-left text-gray-600">
              <li className="flex items-center mb-2">
                <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-green-500" />
                Affordable sessions for every budget.
              </li>
              <li className="flex items-center mb-2">
                <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-green-500" />
                Access to a wide range of experts.
              </li>
              <li className="flex items-center mb-2">
                <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-green-500" />
                Flexible pricing based on your needs.
              </li>
            </ul>
          </div>

          {/* For Knowledge Providers Card */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex justify-center items-center mb-4">
              <FontAwesomeIcon icon={faUserTie} size="3x" className="text-green-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              For Knowledge Providers
            </h3>
            <p className="text-gray-600 text-lg mb-4">
              Set your own rates and keep 80% of the earnings. We only take a small commission to keep the platform running.
            </p>
            <ul className="text-left text-gray-600">
              <li className="flex items-center mb-2">
                <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-green-500" />
                Set your own pricing based on expertise.
              </li>
              <li className="flex items-center mb-2">
                <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-green-500" />
                Keep 80% of your earnings.
              </li>
              <li className="flex items-center mb-2">
                <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-green-500" />
                A small commission to keep the platform running.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
