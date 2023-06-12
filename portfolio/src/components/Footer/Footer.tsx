import React from 'react';
import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si'; // Install react-icons

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 px-6 sm:px-12 lg:px-24 bg-gray-800 text-white text-center">
      <div className="flex justify-center space-x-4 mb-4">
        <a
          href="https://github.com/your_username"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300"
        >
          <SiGithub aria-label="github" size={30} />
        </a>
        <a
          href="https://linkedin.com/in/your_username"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300"
        >
          <SiLinkedin aria-label="linkedin" size={30} />
        </a>
        <a
          href="https://twitter.com/your_username"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300"
        >
          <SiTwitter aria-label="twitter" size={30} />
        </a>
        {/* Add more social media links as needed */}
      </div>
      <p>&copy; {currentYear} Taro Schenker. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
