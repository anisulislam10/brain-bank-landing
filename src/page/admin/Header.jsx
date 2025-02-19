import axios from "axios";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [message, setMessage] = useState(""); 
  const [headerId, setHeaderId] = useState(null); 

  const handleSave = async () => {
    if (!title || !subtitle) {
      setMessage("Title and subtitle are required");
      return;
    }

    if (!headerId) {
      setMessage("No header found to update.");
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}header/${headerId}`, {
        method: "PUT", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, subtitle }),
      });

      if (response.ok) {
        setMessage("Header content updated successfully");
      } else {
        setMessage("Error while updating header");
      }
    } catch (error) {
      console.error("Error saving header:", error);
      setMessage("Error while saving header");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}header/get`);
        const data = response.data;

        if (data && data.length > 0) {
          setTitle(data[0].title);
          setSubtitle(data[0].subtitle);
          setHeaderId(data[0]._id); // Set dynamic header ID
        } else {
          setMessage("No header data found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setMessage("Error fetching header data");
      }
    };

    fetchData();
  }, []); 

  return (
    <div className="bg-white p-6 rounded-2xl w-full mr-48">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Edit Title & Subtitle</h2>

      {/* Title Input */}
      <label className="block text-gray-700 font-medium mb-1">Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title..."
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
      />

      {/* Subtitle Textarea */}
      <label className="block text-gray-700 font-medium mb-1">Subtitle</label>
      <textarea
        value={subtitle}
        onChange={(e) => setSubtitle(e.target.value)}
        placeholder="Enter subtitle..."
        rows="4"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
      />

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-lg transition"
      >
        Save Changes
      </button>

      {/* Display message */}
      {message && (
        <div
          className={`mt-4 p-3 rounded-lg ${
            message.includes("Error") ? "bg-red-200" : "bg-green-200"
          } text-gray-800`}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default Header;
