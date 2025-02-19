import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const KeyFeaturesSection = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}whyus/get`);
        console.log("Fetched data:", response.data);
        setFeatures(response.data); // Assuming response.data is an array of objects
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-16 px-4 sm:px-8 sm:w-full bg-cover bg-center bg-no-repeat"
    >      
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-12">
          Why Choose <span className="text-green-500">BrainBank?</span>  
        </h2>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 text-left">
          {features.length > 0 ? (
            features.map((feature, index) => (
              <motion.div
                key={feature._id} 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  <img 
src={`${import.meta.env.VITE_SERVER_URL.replace("/api","")}${feature.imageUrl.replace("/","")}`}
                    
                    alt={feature.title} 
                    className="h-16 mb-4 object-cover" 
                  />
                  {console.log("Full Image URL--->:", `${import.meta.env.VITE_SERVER_URL.replace("/api","")}${feature.imageUrl.replace("/","")}`)}
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.subtitle}</p>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-600">Loading features...</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default KeyFeaturesSection;
