import React, { useRef } from 'react';
import logo_off from './../../assets/logo/logo.webp';
import img1 from './../../assets/header/h1.webp';

import screenn from './../../assets/header/screenn.png';

import affo from './../../assets/header/affo.png'
import earn from './../../assets/header/earn.png'
import available from './../../assets/header/available.png'
import trust from './../../assets/header/trust.png'
import app from './../../assets/header/app.webp'
import InvestorSection from '../Investor';
import FAQSection from '../FAQSection';
import KeyFeaturesSection from '../KeyFeaturesSection';
import PricingSection from '../Pricing';
import ProblemSolutionSection from '../OurSolution';



const Page = () => {

    const featuresRef = useRef(null);

    // Scroll to the features section
    const handleScroll = () => {
      featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
  return (
    <div >
      {/* Headline (Above the Fold) */}
     {/* Headline (Above the Fold) */}
{/* Headline (Above the Fold) */}
<section className="relative bg-gradient-to-r from-green-500 to-green-600 text-white h-screen flex items-center justify-center text-center px-6">
  <img
    src={logo_off}
    alt="Logo"
    className="absolute top-4 left-4 h-12 shadow-md bg-[#FFFFFF] rounded-md"
  />
  
  {/* Flex Container for Text and Images */}
  <div className="flex flex-row items-center justify-between w-full max-w-6xl mx-auto mb-16 ml-40 text-start">
    {/* Text Section */}
    <div className="flex flex-col items-start w-1/2 px-6">
      <h1 className="text-3xl sm:text-4xl lg:text-3xl font-extrabold mb-6 animate__animated animate__fadeIn">
        Real People, Real Advice Anytime, Anywhere!
      </h1>
      <p className="text-lg sm:text-xl mb-8 animate__animated animate__fadeIn animate__delay-1s">
        Access affordable, practical advice from everyday experts. Whether it’s immigration tips, event planning, or career guidance, Brain Bank connects you with the right people to solve your problems.
      </p>
    </div>

    {/* Image Section */}
    <div className="relative w-1/2 flex justify-center">
      <img
        src={screenn}
        alt="Screen"
        className="w-full sm:w-auto h-auto sm:h-130 transform rotate-15 mb-4 ml-95"
      />
      <img
        src={img1}
        alt="Logo"
        className="absolute top-0 left-0 w-full sm:w-auto h-auto sm:h-110 transform rotate-15  ml-20 mt-10"
      />
    </div>
  </div>

  {/* Button Section Below Text */}
  <div className="space-y-4 space-x-4 w-full sm:w-auto mt-150  ">
    <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition duration-300 transform hover:scale-105 w-full sm:w-auto border-1 border-white">
      <i className="fa fa-play text-2xl text-white"> </i> Download Now for Free
    </button>

    <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition duration-300 transform hover:scale-105 w-full sm:w-auto border-1 border-white">
      <i className="fa fa-sign-in text-2xl text-white"> </i> Signup Today
    </button>

    <button
      className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition duration-300 transform hover:scale-105 w-full sm:w-auto border-1 border-white"
      onClick={handleScroll} // Scroll when clicked
    >
      <i className="fa fa-chevron-circle-down text-2xl text-white"> </i> Learn more
    </button>
  </div>
</section>



    


      {/* Key Features Section */}
      <section ref={featuresRef} className="bg-gray-100 py-20 px-8">
<KeyFeaturesSection/>
        
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-20 px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12">Get Started in 3 Easy Steps</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>


            <h3 className="text-xl font-semibold mb-4">
                1️⃣
                Sign Up</h3>
            <p>Create your free account in seconds.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">
                2️⃣
                Find or Share Knowledge</h3>
            <p>Search for experts or list your own expertise to start earning.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">
                3️⃣
                Connect and Solve</h3>
            <p>Chat directly with experts, get advice, and solve your problems.</p>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <img src={app} alt="How It Works" className="w-full sm:w-2/3 rounded-lg shadow-md" />
        </div>
      </section>
<FAQSection/>
<ProblemSolutionSection/>
<PricingSection/>

<InvestorSection/>


     {/* Enhanced Footer with Call-to-Action and Social Links */}
<footer className="bg-green-500 text-white py-12 px-6 text-center">
  <div className="max-w-4xl mx-auto">
    <h3 className="text-2xl font-bold mb-4">Join the Knowledge Revolution</h3>
    <p className="text-white-400 mb-6 ">Stay ahead with the latest insights, trends, and innovations.</p>

    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
      <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition duration-300 transform hover:scale-105">
        Download Now for Free
      </button>
      <button className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition duration-300 transform hover:scale-105">
        Sign Up Today
      </button>
    </div>

    <div className="flex justify-center space-x-6 text-white">
      <a href="#" className="hover:text-green-700 transition duration-300">
        <i className="fab fa-facebook text-2xl"></i>
      </a>
      <a href="#" className="hover:text-green-700 transition duration-300">
        <i className="fab fa-twitter text-2xl color-red-400"></i>
      </a>
      <a href="#" className="hover:text-green-700 transition duration-300">
        <i className="fab fa-instagram text-2xl"></i>
      </a>
      <a href="#" className="hover:text-green-700 transition duration-300">
        <i className="fab fa-linkedin text-2xl"></i>
      </a>
    </div>

    <p className="text-white-500 mt-6 text-sm">
      © {new Date().getFullYear()} Brain Bank. All rights reserved.
    </p>
  </div>
</footer>

    </div>
  );
};

export default Page;
