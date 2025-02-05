import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle answer visibility
  };

  return (
    <div className="bg-blue-50 py-16 px-4 sm:px-8">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Got Questions? We’ve Got Answers!
        </h2>
        <div className="space-y-8">
          <div
            className="bg-white shadow-lg rounded-lg p-6 cursor-pointer"
            onClick={() => toggleAnswer(0)}
          >
            <h3 className="text-xl font-semibold text-gray-700 flex justify-between items-center">
              Is Brain Bank free to use?
              <FontAwesomeIcon
                icon={openIndex === 0 ? faMinus : faPlus}
                className="ml-2"
              />
            </h3>
            {openIndex === 0 && (
              <p className="text-gray-600 mt-2">
                Yes, signing up and browsing experts is free. You only pay for
                the advice you need.
              </p>
            )}
          </div>

          <div
            className="bg-white shadow-lg rounded-lg p-6 cursor-pointer"
            onClick={() => toggleAnswer(1)}
          >
            <h3 className="text-xl font-semibold text-gray-700 flex justify-between items-center">
              How do I become an expert?
              <FontAwesomeIcon
                icon={openIndex === 1 ? faMinus : faPlus}
                className="ml-2"
              />
            </h3>
            {openIndex === 1 && (
              <p className="text-gray-600 mt-2">
                Simply sign up, list your expertise, and start earning money by
                helping others.
              </p>
            )}
          </div>

          <div
            className="bg-white shadow-lg rounded-lg p-6 cursor-pointer"
            onClick={() => toggleAnswer(2)}
          >
            <h3 className="text-xl font-semibold text-gray-700 flex justify-between items-center">
              Is my information safe?
              <FontAwesomeIcon
                icon={openIndex === 2 ? faMinus : faPlus}
                className="ml-2"
              />
            </h3>
            {openIndex === 2 && (
              <p className="text-gray-600 mt-2">
                Absolutely. We prioritize your privacy and ensure secure
                transactions.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
