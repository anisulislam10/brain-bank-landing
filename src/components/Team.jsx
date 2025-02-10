import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import Adil_Ishfaq from './../assets/Team/Adeel_Ishfq_-_Sharplogicians_CEO.webp'
import Sana from './../assets/Team/Sana_React_JS_Sharplogicians-removebg-preview0.png'
import Umer_Akhter from './../assets/Team/Umer_Akhter_Sharplogicians-removebg-preview.webp'
import Anis from './../assets/Team/Anis_React_JS_Sharplogicians-removebg-preview.png'


const teamMembers = [
  {
    id: 1,
    name: "Adil Ishfaq",
    position: "CTO & Founder",
    image: Adil_Ishfaq,
    linkedin: "https://www.linkedin.com/in/magentoxpert/",
    twitter: "#",
    github: "#",
  },
  {
    id: 2,
    name: "Umer Akhtar",
    position: "CEO",
    image: Umer_Akhter,
    linkedin: "https://www.linkedin.com/in/umer-akhtar-92599622/",
    twitter: "#",
    github: "#",
  },
//   {
//     id: 3,
//     name: "Sana Ullah",
//     position: "Flutter Developer",
//     image: Sana,
//     linkedin: "#",
//     twitter: "#",
//     github: "#",
//   },

//   {
//     id: 3,
//     name: "Anisul Islam",
//     position: "React Native Developer",
//     image: Anis,
//     linkedin: "#",
//     twitter: "#",
//     github: "#",
//   },
];

const TeamSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Meet Our <span className="text-green-500">Team</span>
        </h2>
        <p className="text-gray-600 mb-12">
          A team of talented individuals passionate about innovation.
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 px-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-30 h-30 rounded-full mx-auto mb-4 border-4 border-green-500"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-500 mb-4">{member.position}</p>

              {/* Social Icons */}
              <div className="flex justify-center gap-4">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-blue-600 text-2xl hover:text-blue-800 transition" />
                </a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-blue-400 text-2xl hover:text-blue-600 transition" />
                </a>
                <a href={member.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-gray-800 text-2xl hover:text-gray-600 transition" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
