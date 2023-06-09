import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  }

  return (
    <header className="fixed w-full z-50 bg-gray-900 text-white p-4">
      <nav className="container mx-auto flex items-center justify-between">
        <h1 className="font-extrabold text-2xl">John Smith</h1>
        <div className="hidden md:block">
          <Link to="home" spy={true} smooth={true} offset={-70} duration={500} onSetActive={handleClose} className="px-4">Home</Link>
          <Link to="about" spy={true} smooth={true} offset={-70} duration={500} onSetActive={handleClose} className="px-4">About</Link>
          <Link to="portfolio" spy={true} smooth={true} offset={-70} duration={500} onSetActive={handleClose} className="px-4">Portfolio</Link>
          <Link to="skills" spy={true} smooth={true} offset={-70} duration={500} onSetActive={handleClose} className="px-4">Skills</Link>
          <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} onSetActive={handleClose} className="px-4">Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          {isOpen && (
            <div className="absolute top-full left-0 w-full bg-gray-900 text-center p-4">
              <Link to="home" spy={true} smooth={true} offset={-70} duration={500} onSetActive={handleClose} className="block py-1">Home</Link>
              <Link to="about" spy={true} smooth={true} offset={-70} duration={500} onSetActive={handleClose} className="block py-1">About</Link>
              <Link to="portfolio" spy={true} smooth={true} offset={-70} duration={500} onSetActive={handleClose} className="block py-1">Portfolio</Link>
              <Link to="skills" spy={true} smooth={true} offset={-70} duration={500} onSetActive={handleClose} className="block py-1">Skills</Link>
              <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} onSetActive={handleClose} className="block py-1">Contact</Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
