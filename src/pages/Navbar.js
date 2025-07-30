import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header
      className={`navbar fixed top-0 left-0 right-0 flex items-center p-4 shadow z-50
        ${theme === 'theme1' ? 'bg-gray-200 text-gray-800 font-sans' : ''}
        ${theme === 'theme2' ? 'bg-gray-900 text-white font-bold font-serif italic' : ''}
        ${theme === 'theme3' ? 'bg-blue-200 text-purple-900 font-pacifico' : ''}
        backdrop-blur bg-white/90
      `}
    >
      <div className="relative flex w-full items-center">
        {/* Title centered */}
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold">
          🎨 Theme Switcher
        </h1>

        {/* Right aligned select and links */}
        <div className="ml-auto flex gap-4 items-center">
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="p-1 rounded text-black border border-black"
          >
            <option value="theme1">Theme 1</option>
            <option value="theme2">Theme 2</option>
            <option value="theme3">Theme 3</option>
          </select>
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
