import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";  // Import Helmet
import logo_off from './../../assets/logo/logo.webp';
import img1 from './../../assets/header/h1.webp';
import screenn from './../../assets/header/screen.webp';
import app from './../../assets/header/bgif.gif';
import InvestorSection from "../Investor";
import FAQSection from "../FAQSection";
import KeyFeaturesSection from "../KeyFeaturesSection";
import PricingSection from "../Pricing";
import ProblemSolutionSection from "../OurSolution";
import TeamSection from "../Team";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const Page = () => {
  const featuresRef = useRef(null);
const [title, settitle] = useState()
const [subtitle, setSubTitle] = useState()

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);



  useEffect(() => {
    const fetchData= async ()=>{
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}header/get`)
      // console.log("response data----",response.data[0].subtitle);
      settitle(response.data[0].title)
      setSubTitle(response.data[0].subtitle)
    }

    fetchData()
  }, [])



  
  
  return (
    <div>
      {/* SEO Metadata */}
      <Helmet>
        <title>BrainBank - Real People, Real Advice</title>
        <meta
          name="description"
          content="BrainBank connects you with everyday experts for real advice on immigration, career guidance, event planning, and more. Get affordable, practical solutions instantly!"
        />
        <meta
          name="keywords"
          content="BrainBank, expert advice, career guidance, immigration help, affordable consultation, online experts, real people advice"
        />
        <meta name="author" content="BrainBank Team" />
        <meta property="og:title" content="BrainBank - Real People, Real Advice" />
        <meta
          property="og:description"
          content="Access expert guidance anytime, anywhere. Connect with real people for practical advice on career, immigration, and more."
        />
        <meta property="og:image" content={logo_off} />
        <meta property="og:url" content="https://sharplogicians.com/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Page Content */}
      <section className="relative bg-gradient-to-r from-green-500 to-green-600 text-white min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-4 sm:px-8 md:px-12 lg:px-16">
        <img
          src={logo_off}
          alt="Logo"
          className="absolute top-4 left-4 h-12 shadow-md bg-[#FFFFFF] rounded-md"
        />

        {/* Flex Container for Text and Images */}
        <section className="flex flex-col items-center px-4 sm:px-8 lg:px-16">
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto mb-8 sm:mb-12 md:mb-16 gap-6 md:gap-12 lg:gap-16 text-center md:text-start">
            <div className="flex flex-col items-center sm:items-center md:items-start w-full sm:w-5/6 md:w-3/4 lg:w-1/2 px-4 sm:px-6 md:px-8 text-center sm:text-center md:text-start">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6 md:mb-8 mt-[100px] text-start">
                
                {title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-start">

                {subtitle}
              </p>
            </div>

            {/* Image Section */}
            <div className="relative w-full md:w-1/2 flex justify-center items-center ml-16">
              <img
                src={screenn}
                alt="Screen"
                className="max-w-full sm:w-auto h-[400px] sm:h-130 transform rotate-6 mb-4 "
              />
              <img
                src={img1}
                alt="Logo"
                className="absolute top-10 left-[-20px] max-w-full sm:w-auto h-[400px] sm:h-100 transform rotate-10 sm:ml-10 sm:mt-10 "
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 w-full justify-center mt-10">
            <button className="bg-green-700 text-white px-6 sm:px-8 lg:px-12 py-3 rounded-lg hover:bg-green-800 transition duration-300 transform hover:scale-105 w-full sm:w-auto text-sm sm:text-base lg:text-lg">
              <i className="fa fa-play text-2xl text-white"></i> Download Now for Free
            </button>

            <Link to="/signup" className="bg-green-700 text-white px-6 sm:px-8 lg:px-12 py-3 rounded-lg hover:bg-green-800 transition duration-300 transform hover:scale-105 w-full sm:w-auto text-sm sm:text-base lg:text-lg">
              <i className="fa fa-sign-in text-2xl text-white"></i> Signup for Early Access
            </Link>

            <button
              className="bg-orange-600 text-white px-6 sm:px-8 lg:px-2 py-3 rounded-lg hover:bg-orange-700 transition duration-300 transform hover:scale-105 w-full sm:w-auto text-sm sm:text-base lg:text-lg mb-2 "
              onClick={() => featuresRef.current?.scrollIntoView({ behavior: "smooth" })}
            >
              <i className="fa fa-chevron-circle-down text-2xl text-white"></i> Learn more
            </button>
          </div>
        </section>
      </section>

      {/* Other Sections */}
      <section ref={featuresRef} className="bg-gray-100 py-20 px-8">
        <KeyFeaturesSection />
      </section>

      <section className="bg-white py-20 px-8">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12">
        Get Started in <span className="text-green-500">3 Easy Steps</span>
      </h2>

      <div className="flex flex-col sm:flex-row items-center gap-12 max-w-screen-lg mx-auto">
        {/* Left Side - Image */}
        <div className="w-full sm:w-1/2">
          <img
            src={app}
            alt="How It Works"
            className="w-full rounded-lg "
          />
        </div>

        {/* Right Side - Steps */}
        <div className="w-full sm:w-1/2">
          <ul className="space-y-6 text-lg">
            <li className="flex items-start">
              <span className="text-2xl mr-4 text-green-400 bg-green-500">1️⃣ </span>
              <div>
                <h3 className="font-semibold">Sign Up</h3>
                <p>Create your free account in seconds.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-4">2️⃣</span>
              <div>
                <h3 className="font-semibold">Find or Share Knowledge</h3>
                <p>Search for experts or list your own expertise to start earning.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-4">3️⃣</span>
              <div>
                <h3 className="font-semibold">Connect and Solve</h3>
                <p>Chat directly with experts, get advice, and solve your problems.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>


      <FAQSection />
      <PricingSection />
      <InvestorSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Page;
