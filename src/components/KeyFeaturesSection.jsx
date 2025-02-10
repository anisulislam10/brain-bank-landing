import React from "react";
import affo from './../assets/header/affo.png'
import earn from './../assets/header/earn.png'
import available from './../assets/header/available.png'
import trust from './../assets/header/trust.png'
import secure from './../assets/header/secure.png'
import ui from './../assets/header/ui.png'


const KeyFeaturesSection = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-8 sm:w-full">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-12 ">
        Why Choose <span className="text-green-500 ">BrainBank?</span>  
              </h2>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 text-left">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">


            <img src={affo} alt="Affordable" className="h-16 mb-4" />

              Affordable Expertise
            </h3>
            <p className="text-gray-600">
              Say goodbye to expensive consultants! BrainBank connects you with
              real people who offer practical, real-world advice at a fraction of
              the cost.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">

            <img src={trust} alt="Affordable" className="h-16 mb-4" />

              Trusted Experts
            </h3>
            <p className="text-gray-600">
              Every expert is verified and reviewed by users. Trust the quality
              of knowledge, whether it's from an immigration pro or a seasoned
              career coach.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">

            <img src={available} alt="Affordable" className="h-16 mb-4" />

              24/7 Access to Knowledge
            </h3>
            <p className="text-gray-600">
              Get help at odd hours! BrainBank is available 24/7, so you can
              find answers anytime.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">

            <img src={earn} alt="Affordable" className="h-16 mb-4" />

              Earn Money by Sharing Knowledge
            </h3>
            <p className="text-gray-600">
              Monetize your skills! BrainBank allows you to help others while
              earning money for your expertise.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">

            <img src={ui} alt="Affordable" className="h-16 mb-4" />

              User-Friendly Interface
            </h3>
            <p className="text-gray-600">
              Whether you're tech-savvy or new to apps, BrainBank is intuitive
              and easy to navigate.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">

            <img src={secure} alt="Affordable" className="h-16 mb-4" />

              Secure and Confidential
            </h3>
            <p className="text-gray-600">
              Your privacy is our priority. All transactions and interactions
              are secure and confidential.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeaturesSection;
