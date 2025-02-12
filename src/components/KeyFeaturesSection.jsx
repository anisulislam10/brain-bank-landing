import React from "react";
import { motion } from "framer-motion";
import affo from './../assets/header/affo.png';
import earn from './../assets/header/earn.png';
import available from './../assets/header/available.png';
import trust from './../assets/header/trust.png';
import secure from './../assets/header/secure.png';
import ui from './../assets/header/ui.png';
import app from './../assets/header/app.webp'


const KeyFeaturesSection = () => {
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
          {[
            { img: affo, title: "Affordable Expertise", text: "Say goodbye to expensive consultants! BrainBank connects you with real people who offer practical, real-world advice at a fraction of the cost." },
            { img: trust, title: "Trusted Experts", text: "Every expert is verified and reviewed by users. Trust the quality of knowledge, whether it's from an immigration pro or a seasoned career coach." },
            { img: available, title: "24/7 Access to Knowledge", text: "Get help at odd hours! BrainBank is available 24/7, so you can find answers anytime." },
            { img: earn, title: "Earn Money by Sharing Knowledge", text: "Monetize your skills! BrainBank allows you to help others while earning money for your expertise." },
            { img: ui, title: "User-Friendly Interface", text: "Whether you're tech-savvy or new to apps, BrainBank is intuitive and easy to navigate." },
            { img: secure, title: "Secure and Confidential", text: "Your privacy is our priority. All transactions and interactions are secure and confidential." },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                <img src={feature.img} alt={feature.title} className="h-16 mb-4" />
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default KeyFeaturesSection;
