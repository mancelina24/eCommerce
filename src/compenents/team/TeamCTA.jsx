import React from "react";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const TeamCTA = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
          Start your 14 days free trial
        </h1>
        <p className="text-gray-500 mb-8">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>
        <a
          href="#"
          className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-3 px-6 rounded"
        >
          Try it free now
        </a>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 mt-4 text-[#23a6f0] text-xl">
          <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
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
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="fill-[#23a6f0] hover:opacity-80 transition" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamCTA;
