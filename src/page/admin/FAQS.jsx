import React, { useState, useEffect } from "react";
import axios from "axios";

const FAQS = () => {
  const [faqList, setFaqList] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [faqIdToEdit, setFaqIdToEdit] = useState("");
  const [message, setMessage] = useState(""); // For success or error message
  const [messageType, setMessageType] = useState(""); // "success" or "error"

  // Fetch FAQs from backend when the component mounts
  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}faq/get`);
        setFaqList(response.data);
      } catch (error) {
        setMessage("Error fetching FAQs: " + (error.response?.data?.message || error.message));
        setMessageType("error");
      }
    };

    fetchFaqs();
  }, []); // Empty dependency array to fetch data only once on mount

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (question && answer) {
      try {
        if (editingIndex !== null) {
          // Send PUT request to update the FAQ
          const response = await axios.put(`${import.meta.env.VITE_SERVER_URL}faq/${faqIdToEdit}`, {
            question,
            answer
          });

          if (response.status === 200) {
            const updatedFaqList = [...faqList];
            updatedFaqList[editingIndex] = { _id: faqIdToEdit, question, answer };
            setFaqList(updatedFaqList);
            setMessage(response.data.message);
            setMessageType("success");
          }
          setEditingIndex(null);
          setFaqIdToEdit(""); 
        } else {
          // Send POST request to add the FAQ (if no edit mode)
          const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}faq/post`, {
            question,
            answer
          });

          if (response.status === 201) {
            setFaqList([ ...faqList, response.data.faq ]);
            setMessage(response.data.message);
            setMessageType("success");
          }
        }

        setQuestion("");
        setAnswer("");
      } catch (error) {
        setMessage("Error adding/updating FAQ: " + (error.response?.data?.message || error.message));
        setMessageType("error");
      }
    } else {
      setMessage("Both fields are required.");
      setMessageType("error");
    }
  };

  const handleEdit = (index) => {
    const faqToEdit = faqList[index];
    setQuestion(faqToEdit.question);
    setAnswer(faqToEdit.answer);
    setEditingIndex(index);
    setFaqIdToEdit(faqToEdit._id);
  };

  const handleDelete = async (index) => {
    const faqToDelete = faqList[index];

    try {
      const response = await axios.delete(`${import.meta.env.VITE_SERVER_URL}faq/${faqToDelete._id}`);
      if (response.status === 200) {
        const updatedFaqList = faqList.filter((_, i) => i !== index);
        setFaqList(updatedFaqList);
        setMessage(response.data.message);
        setMessageType("success");
      }
    } catch (error) {
      setMessage("Error deleting FAQ: " + (error.response?.data?.message || error.message));
      setMessageType("error");
    }
  };

  // Automatically hide the message after 5 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 5000);

      return () => clearTimeout(timer); // Clean up the timer
    }
  }, [message]);

  return (
    <div className="max-w-4xl p-6 bg-white rounded-lg">
      <h1 className="text-xl font-semibold text-start mb-6">Frequently Asked Questions</h1>

      {/* Message Display */}
      {message && (
        <div
          className={`p-4 mb-6 text-white rounded-lg ${
            messageType === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {message}
        </div>
      )}

      {/* FAQ Form */}
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label htmlFor="question" className="block text-lg font-medium text-gray-800">Question</label>
          <input
            type="text"
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter your question..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="answer" className="block text-lg font-medium text-gray-800">Answer</label>
          <textarea
            id="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Enter the answer..."
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition"
        >
          {editingIndex !== null ? "Update FAQ" : "Add FAQ"}
        </button>
      </form>

      {/* Display FAQ List */}
      <div>
        {faqList.map((faq, index) => (
          <div key={faq._id} className="border-b border-gray-200 py-4">
            <div className="text-lg font-medium text-gray-800">{faq.question}</div>
            <div className="mt-2 text-gray-600">{faq.answer}</div>
            <div className="mt-2 flex space-x-4">
              <button
                onClick={() => handleEdit(index)}
                className="text-blue-500 hover:text-blue-700"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQS;
