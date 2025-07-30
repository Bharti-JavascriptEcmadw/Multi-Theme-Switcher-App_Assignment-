import React, { useContext, useState } from 'react';
import { ThemeContext } from '../ThemeContext';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`navbar fixed top-0 left-0 right-0 p-4 shadow z-50
        ${theme === 'theme1' ? 'bg-gray-200 text-gray-800 font-sans' : ''}
        ${theme === 'theme2' ? 'bg-gray-900 text-white font-bold font-serif italic' : ''}
        ${theme === 'theme3' ? 'bg-blue-200 text-purple-900 font-pacifico' : ''}
        backdrop-blur bg-white/90
      `}
    >
      <div className="flex items-center justify-between w-full relative">
        {/* Title */}
        <h1 className="text-xl font-bold">🎨 Theme Switcher</h1>

        {/* Hamburger icon for small screens */}
        <button onClick={toggleMenu} className="sm:hidden text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop menu */}
        <div className="hidden sm:flex gap-4 items-center ml-auto">
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="p-1 rounded text-black border border-black min-w-[120px]"
          >
            <option value="theme1">Theme 1</option>
            <option value="theme2">Theme 2</option>
            <option value="theme3">Theme 3</option>
          </select>
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full flex flex-col items-center gap-4 bg-white shadow sm:hidden py-4 z-50">
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="p-1 rounded text-black border border-black w-3/4"
            >
              <option value="theme1">Theme 1</option>
              <option value="theme2">Theme 2</option>
              <option value="theme3">Theme 3</option>
            </select>
            <Link to="/" onClick={closeMenu} className="hover:underline">Home</Link>
            <Link to="/about" onClick={closeMenu} className="hover:underline">About</Link>
            <Link to="/contact" onClick={closeMenu} className="hover:underline">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
