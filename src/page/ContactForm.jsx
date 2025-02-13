import React, { useState } from "react";
import emailjs from "emailjs-com";
import vaimg from "./../assets/contact/va.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";

const ScheduleDemoForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const userId =import.meta.env.VITE_USER_ID ;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: "support@sharplogicians.com",
    };

    emailjs.send(serviceId, templateId, templateParams, userId)
      .then(() => {
        setSubmitted(true);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setLoading(false);
      });
  };

  return (
    <><div className="flex justify-center items-center min-h-screen bg-green-400">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex w-full max-w-4xl">

        {/* Left Side - Image */}
        <div className="w-1/2 hidden md:block">
          <img src={vaimg} alt="Schedule Demo" className="h-full w-full object-cover" />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">
            Schedule a <span className="text-green-500">Demo</span>
          </h2>

          {submitted ? (
            <p className="text-green-600 text-lg text-center">
              🎉 Thank you! We will contact you soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                required />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                required />

              <textarea
                name="message"
                placeholder="Demo Request Message/Date"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                required />

              <button
                type="submit"
                disabled={loading}
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-md text-lg font-medium transition ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 text-white hover:bg-green-700"}`}
              >
                {loading ? (
                  <>
                    <FontAwesomeIcon icon={faPaperPlane} spin /> Requesting...
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faPaperPlane} /> Demo Request
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

    </div><Footer /></>
  );
};

export default ScheduleDemoForm;
