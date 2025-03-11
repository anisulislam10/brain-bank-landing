import React from 'react'
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail,MdOutlineSettingsPhone } from "react-icons/md";




const Footer = () => {
  return (
    <div>

            {/* Enhanced Footer with Call-to-Action, About, Contact, and Social Links */}
<footer className="bg-green-500 text-white py-12 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">

    {/* About BrainBank Section */}
    <div>
      <h3 className="text-xl font-bold mb-3">About BrainBank</h3>
      <p className="text-white-400">
        BrainBank is your go-to platform for knowledge, innovation, and growth. 
        Stay ahead with expert insights and valuable resources.
      </p>
    </div>

    {/* Contact Us Section */}
    <div>
  <h3 className="text-xl font-bold mb-3">Contact Us</h3>

  <p className="flex items-center">
    <MdOutlineEmail className="mr-2" />
    <a href="mailto:info@sharplogician.com" className="text-white hover:underline">
      info@sharplogician.com
    </a>
  </p>

  <p className="flex items-center">
    <MdOutlineSettingsPhone className="mr-2" />
    <a href="tel:+13074604411" className="text-white hover:underline">
      +1 307 460 4411
    </a>
  </p>

  <p className="flex items-start">
    <CiLocationOn className="mr-2" />
    <span>USA: 1309 Coffeen Avenue STE 1200 Sheridan Wyoming 82801, US</span>
  </p>

  <p className="flex items-start">
    <CiLocationOn className="mr-2" />
    <span>Pakistan: Ofc# 32, 4th Floor Agile Center Bahria P-4 Islamabad, PK</span>
  </p>
</div>


    {/* Social Links Section */}
    <div className="flex flex-col items-center sm:items-start">
      <h3 className="text-xl font-bold mb-3">Follow Us</h3>
      <div className="flex space-x-4">
        <a href="#" className="hover:text-green-700 transition duration-300">
          <i className="fab fa-facebook text-2xl"></i>
        </a>
        <a href="#" className="hover:text-green-700 transition duration-300">
          <i className="fab fa-twitter text-2xl"></i>
        </a>
        <a href="#" className="hover:text-green-700 transition duration-300">
          <i className="fab fa-instagram text-2xl"></i>
        </a>
        <a href="#" className="hover:text-green-700 transition duration-300">
          <i className="fab fa-linkedin text-2xl"></i>
        </a>
      </div>
    </div>

  </div>

  {/* Call-to-Action Buttons */}
  <div className="text-center mt-8">
    {/* <h3 className="text-2xl font-bold mb-4">Join the Knowledge Revolution</h3>
    <p className="text-white-400 mb-6">
      Stay ahead with the latest insights, trends, and innovations.
    </p> */}
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition duration-300 transform hover:scale-105">
        <i className="fa fa-play text-2xl text-white"></i> Download Now for Free
      </button>
      <Link to="/signup" className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition duration-300 transform hover:scale-105">
        <i className="fa fa-sign-in text-2xl text-white"></i> Signup Today
      </Link>
    </div>
  </div>

  {/* Footer Bottom Text */}
  <p className="text-white-500 text-center mt-6 text-sm">
    © {new Date().getFullYear()} BrainBank. All rights reserved.
  </p>
</footer>
    </div>
  )
}

export default Footer