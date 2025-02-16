import React from "react";
import { teamMembers } from "../../services/othersdata";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const AboutMembers = () => {
  return (
    <div className="text-center py-12 px-4">
      <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
      <p className="text-gray-500 mt-2 max-w-lg mx-auto">
        Problems trying to resolve the conflict between the two major realms of
        Classical physics: Newtonian mechanics
      </p>

      <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-center max-w-sm w-full"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full rounded-lg"
            />
            <h3 className="text-lg font-semibold text-gray-900 mt-4">
              {member.name}
            </h3>
            <p className="text-gray-500">{member.profession}</p>
            <div className="flex justify-center gap-4 mt-4 text-[#23a6f0] text-xl">
              <a href={member.github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="fill-[#23a6f0] hover:opacity-80 transition" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="fill-[#23a6f0] hover:opacity-80 transition" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiTwitter className="fill-[#23a6f0] hover:opacity-80 transition" />
              </a>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="fill-[#23a6f0] hover:opacity-80 transition" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMembers;
