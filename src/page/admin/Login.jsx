import React, { useState, useEffect } from "react";
import axios from "axios";
import loginImage from "../../assets/Admin/admin.png"; // Adjust the path as needed
import { useNavigate } from "react-router";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // New state for loading
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      // Redirect to the dashboard if the user is already logged in
      navigate("/admin/dashboard");
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true); 

    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}auth/login`, {
        username,
        password,
      });

      if (response.data && response.data.token) {
        localStorage.setItem("token", response.data.token);
        console.log("Login successful:", response.data);
        navigate("/admin/dashboard"); 
      } else {
        setError("Invalid credentials");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Invalid username or password");
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Section - Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-end bg-green-500 p-6">
        <div className="w-full max-w-md p-8 shadow-lg bg-white rounded-lg">
          <h2 className="text-2xl font-bold mb-2 text-center">
            <span className="text-green-500">Brain Bank</span> Super Admin
          </h2>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
              disabled={isLoading} // Disable the button while loading
            >
              {isLoading ? (
                <span className="flex justify-center items-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-3 border-t-2 border-b-2 border-white rounded-full"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="4"></circle>
                    <path
                      className="opacity-75"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="4"
                      d="M4 12a8 8 0 0 1 16 0"
                    ></path>
                  </svg>
                  Loading...
                </span>
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="w-full md:w-1/2 flex items-center justify-start bg-green-500 p-6">
        <img src={loginImage} alt="Login" className="w-3/4 md:w-2/3 lg:w-1/2" />
      </div>
    </div>
  );
};

export default Login;
