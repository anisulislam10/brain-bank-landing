import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import faqimg from "./../assets/contact/faq.svg";
import axios from "axios";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [faqList, setFaqList] = useState([]); // State to hold FAQ data from API

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}faq/get`);
        console.log("response----", response.data); // Log the data for debugging
        setFaqList(response.data); // Set the fetched data to state
      } catch (error) {
        console.error("Error fetching FAQ data:", error);
      }
    };

    fetchData();
  }, []);

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
            {/* Map over the FAQ data from state */}
            {faqList.length === 0 ? (
              <p className="text-gray-600">No FAQs available.</p>
            ) : (
              faqList.map((faq, index) => (
                <div
                  key={faq._id} // Use _id for unique key
                  className="bg-white shadow-md rounded-lg p-4 cursor-pointer"
                  onClick={() => toggleAnswer(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-700 flex justify-between items-center">
                    {faq.question}
                    <FontAwesomeIcon icon={openIndex === index ? faMinus : faPlus} className="ml-2" />
                  </h3>
                  {openIndex === index && <p className="text-gray-600 mt-1 text-sm"> ✅ {faq.answer}</p>}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
