import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center text-white text-bold text-xl">
      {/* <p className="font-extrabold text-4xl logo-font">Ha</p> */}
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href={import.meta.env.VITE_LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href={import.meta.env.VITE_GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href={import.meta.env.VITE_LEETCODE_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLeetcode />
        </a>
        <a
          href={`mailto:${import.meta.env.VITE_EMAIL}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
