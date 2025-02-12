import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import faqimg from "./../assets/contact/faq.svg";
// import faqimg from "./../assets/signup/faqgif.gif";


const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-blue-50 py-16 px-4 sm:px-8">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img src={faqimg} alt="FAQs" className="w-full max-w-md rounded-lg" />
        </div>

        {/* FAQ Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center md:text-left">
            Got Questions? <span className="text-green-500">We’ve Got Answers!</span>
          </h2>
          <div className="space-y-4">
            {[
              {
                question: "Is BrainBank free to use?",
                answer: "✅ Yes, signing up and browsing experts is free. You only pay for the advice you need.",
              },
              {
                question: "How do I become an expert?",
                answer: "✅ Simply sign up, list your expertise, and start earning money by helping others.",
              },
              {
                question: "Is my information safe?",
                answer: "✅ Absolutely. We prioritize your privacy and ensure secure transactions.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <h3 className="text-lg font-semibold text-gray-700 flex justify-between items-center">
                  {faq.question}
                  <FontAwesomeIcon icon={openIndex === index ? faMinus : faPlus} className="ml-2" />
                </h3>
                {openIndex === index && <p className="text-gray-600 mt-1 text-sm">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
