
import React, { useState } from 'react';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  navigateTo: (page: Page) => void;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  navigateTo: (page: Page) => void;
  children: React.ReactNode;
}> = ({ page, currentPage, navigateTo, children }) => {
  const isActive = currentPage === page;
  return (
    <button
      onClick={() => navigateTo(page)}
      className={`px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
        isActive
          ? 'text-[#E2962E]'
          : 'text-gray-700 hover:text-[#E2962E]'
      }`}
    >
      {children}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ currentPage, navigateTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = (
    <>
      <NavLink page={Page.Home} currentPage={currentPage} navigateTo={navigateTo}>Home</NavLink>
      <NavLink page={Page.Gallery} currentPage={currentPage} navigateTo={navigateTo}>Gallery</NavLink>
      <NavLink page={Page.About} currentPage={currentPage} navigateTo={navigateTo}>About</NavLink>
      <NavLink page={Page.Contact} currentPage={currentPage} navigateTo={navigateTo}>Contact</NavLink>
    </>
  );

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 
          className="text-2xl md:text-3xl font-extrabold text-[#E2962E] cursor-pointer"
          onClick={() => navigateTo(Page.Home)}
        >
          Yoenrattan
        </h1>
        <nav className="hidden md:flex items-center space-x-2">
          {navLinks}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center py-4">
            {navLinks}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
