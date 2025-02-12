import React, { useState, useCallback } from "react";
import emailjs from "emailjs-com";
import vaimg from "./../assets/signup/Rocket.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const EarlyBirdForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Reset error before submission

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const userId = import.meta.env.VITE_USER_ID;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: "support@sharplogicians.com",
    };

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then(() => {
        setSubmitted(true);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setError("❌ Something went wrong. Please try again.");
        setLoading(false);
      });
  }, [formData]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-400 to-green-500 p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white rounded-lg shadow-lg overflow-hidden flex w-full max-w-4xl"
      >
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-1/2 hidden md:block"
        >
          <img src={vaimg} alt="Early Access" className="h-full w-full object-cover" />
        </motion.div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl font-semibold text-center text-gray-700 mb-6"
          >
            🚀 Get <span className="text-green-500">Early Bird</span> Access
          </motion.h2>

          {submitted ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-green-600 text-lg text-center"
              aria-live="polite"
            >
              🎉 Thank you! You've secured early access.
            </motion.p>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                required
                aria-label="Your Name"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                required
                aria-label="Your Email"
              />

              <textarea
                name="message"
                placeholder="I want early bird access"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                required
                aria-label="Your Message"
              />

              {error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-red-500 text-center"
                  aria-live="assertive"
                >
                  {error}
                </motion.p>
              )}

              <button
                type="submit"
                disabled={loading}
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-md text-lg font-medium transition ${
                  loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 text-white hover:bg-green-700"
                }`}
                aria-label="Submit Form"
              >
                {loading ? (
                  <>
                    <FontAwesomeIcon icon={faPaperPlane} spin /> Submitting...
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faPaperPlane} /> Get Early Access
                  </>
                )}
              </button>
            </motion.form>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default EarlyBirdForm;
