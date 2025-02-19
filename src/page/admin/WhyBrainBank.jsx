import React, { useState, useEffect } from "react";

const WhyBrainBank = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [editingId, setEditingId] = useState(null);

  // Fetch existing data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_SERVER_URL}whyus/get`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  // Save or update data
  const handleSave = async () => {
    if (!title.trim() || !subtitle.trim()) {
      alert("Please fill all fields.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("subtitle", subtitle);
    if (image) formData.append("image", image);

    try {
      let response;
      if (editingId) {
        response = await fetch(`${import.meta.env.VITE_SERVER_URL}whyus/${editingId}`, {
          method: "PUT",
          body: formData,
        });
      } else {
        response = await fetch(`${import.meta.env.VITE_SERVER_URL}whyus/post`, {
          method: "POST",
          body: formData,
        });
      }

      const result = await response.json();
      if (response.ok) {
        setData(editingId ? data.map((item) => (item._id === editingId ? result : item)) : [...data, result]);
        setTitle("");
        setSubtitle("");
        setImage(null);
        setPreviewImage(null);
        setEditingId(null);
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {
      console.error("Error saving:", error);
      alert("Something went wrong!");
    }
  };

  // Handle edit
  const handleEdit = (item) => {
    setTitle(item.title);
    setSubtitle(item.subtitle);
    setPreviewImage(`${import.meta.env.VITE_SERVER_URL.split('/api')[0]}${item.imageUrl}`);
    setEditingId(item._id);
  };

  // Handle delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;

    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}whyus/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setData(data.filter((item) => item._id !== id));
      } else {
        alert("Error deleting item");
      }
    } catch (error) {
      console.error("Error deleting:", error);
    }
  };

  return (
    <div className="max-w-3xl bg-white p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-start">
        Why Choose BrainBank?
      </h2>

      {/* Image Upload */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Upload Image</label>
        <input type="file" accept="image/*" onChange={handleImageChange} className="border border-gray-300 p-2 rounded w-full" />
        {previewImage && <img src={previewImage} alt="Preview" className="mt-4 w-32 h-32 object-cover rounded-lg" />}
      </div>

      {/* Title Input */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="border border-gray-300 p-2 rounded w-full" placeholder="Enter title" />
      </div>

      {/* Subtitle Input */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Subtitle</label>
        <textarea value={subtitle} onChange={(e) => setSubtitle(e.target.value)} className="border border-gray-300 p-2 rounded w-full" placeholder="Enter subtitle" rows="3" />
      </div>

      {/* Save Button */}
      <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded w-full">
        {editingId ? "Update" : "Save"}
      </button>

      {/* Display Saved Data */}
      <div className="mt-6">
        {data.map((item) => (
          <div key={item._id} className="bg-gray-100 p-4 rounded-lg mb-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src={`${import.meta.env.VITE_SERVER_URL.split('/api')[0]}${item.imageUrl}`} alt="Saved" className="w-16 h-16 object-cover rounded-lg" />
              <div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-gray-600">{item.subtitle}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button onClick={() => handleEdit(item)} className="bg-blue-500 text-white px-3 py-1 rounded">Edit</button>
              <button onClick={() => handleDelete(item._id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyBrainBank;
