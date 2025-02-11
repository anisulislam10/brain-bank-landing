import React, { useState } from "react";
import signupImage from "./../assets/signup/sign-up-form.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !emailOrPhone || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    console.log("Form submitted", { username, emailOrPhone, password });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-500 px-4">
      <div className="bg-white rounded-lg overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
        <div className="hidden md:flex w-1/2">
          <img src={signupImage} alt="Signup" className="object-bottom w-full h-full" />
        </div>
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Join the <span className="text-green-600">BrainBank Community</span>
          </h2>
          {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
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
            <div>
              <label htmlFor="emailOrPhone" className="block text-sm font-medium text-gray-700">Email or Phone</label>
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
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                placeholder="Enter your password"
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="absolute top-10 right-3 cursor-pointer text-gray-500"
                onClick={togglePasswordVisibility}
              />
            </div>
            <div className="relative">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                placeholder="Confirm your password"
              />
              <FontAwesomeIcon
                icon={showConfirmPassword ? faEyeSlash : faEye}
                className="absolute top-10 right-3 cursor-pointer text-gray-500"
                onClick={toggleConfirmPasswordVisibility}
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full p-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition duration-300"
              >
                <FontAwesomeIcon icon={faLock} /> Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
