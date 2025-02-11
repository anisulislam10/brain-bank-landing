import React, { useState } from "react";
import signupImage from "./../assets/signup/sign-up-form.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";


const SignupForm = () => {
  // State to manage form input
  const [username, setUsername] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !emailOrPhone || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Clear error and perform submission logic
    setError("");
    console.log("Form submitted", { username, emailOrPhone, password });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-500 px-4">
      <div className="bg-white rounded-lg overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
        
        {/* Left Image Section */}
        <div className="hidden md:flex w-1/2">
          <img
            src={signupImage}
            alt="Signup"
            className="object-bottom w-full h-full"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Join the <span className="text-green-600">BrainBank Community</span>
          </h2>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Input */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                placeholder="Enter your username"
              />
            </div>

            {/* Email or Phone Input */}
            <div>
              <label htmlFor="emailOrPhone" className="block text-sm font-medium text-gray-700">
                Email or Phone
              </label>
              <input
                type="text"
                id="emailOrPhone"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                required
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                placeholder="Enter your email or phone"
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                placeholder="Enter your password"
              />
            </div>

            {/* Confirm Password Input */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                placeholder="Confirm your password"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full p-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition duration-300"
              >
               <FontAwesomeIcon icon={faLock} />  Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
