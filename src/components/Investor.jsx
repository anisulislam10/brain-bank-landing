import React from "react";
import { FaDollarSign, FaLightbulb, FaUsers, FaChartLine } from "react-icons/fa";

const InvestorSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-6">
      
      {/* Call to Action Section */}
      <div className="text-center mb-20">
        <h3 className="text-4xl font-bold text-gray-900 mb-6">
          Be Part of the <span className="text-green-600">Knowledge Revolution</span>
        </h3>
        <p className="text-xl text-gray-700 mb-8">
          We’re seeking an initial investment of $500,000 to accelerate growth, expand our user base, and enhance the platform.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 w-full text-center">
  <a
    href="#"
    className="bg-green-600 text-white px-8 py-3 sm:px-10 sm:py-4 rounded-xl hover:bg-green-700 transition duration-300 transform hover:scale-105 w-full sm:w-auto">
    Schedule a Demo
  </a>
  <a
    href="#"
    className="bg-gray-900 text-white px-8 py-3 sm:px-10 sm:py-4 rounded-xl hover:bg-gray-800 transition duration-300 transform hover:scale-105 w-full sm:w-auto">
      Download Investor Deck
  </a>
</div>

      </div>

      {/* Team Section
      <div className="container mx-auto mb-12 text-center">
        <h3 className="text-4xl font-bold text-gray-900 mb-6">Our Team</h3>
        <p className="text-xl text-gray-700 mb-6">
          Experienced and passionate professionals with a shared vision of democratizing knowledge and empowering individuals.
        </p>
      </div> */}
    </section>
  );
};

export default InvestorSection;