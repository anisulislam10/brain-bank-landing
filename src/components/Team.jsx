import React, { useEffect, useState } from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import axios from "axios";

const TeamSection = () => {
  const [teamMembers, setTeamMembers] = useState([]); // State to store team members

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}team/get`);
        // console.log("team data.....", response.data);
        setTeamMembers(response.data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };
    fetchData();
  }, []);

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
src={`${import.meta.env.VITE_SERVER_URL.split('/api')[0]}${member.image}`}


                alt={member.name}
                className="w-30 h-30 rounded-full mx-auto mb-4 border-4 border-green-500"
              />
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-500 mb-4">{member.title}</p>

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
