import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer
      className={`footer p-4 text-center mt-10
        ${theme === 'theme1' ? 'bg-cyan-900 text-gray-800 font-sans' : ''}
        ${theme === 'theme2' ? 'bg-gray-800 text-white font-bold font-serif italic' : ''}
        ${theme === 'theme3' ? 'bg-green-500 text-purple-900 font-pacifico' : ''}
      `}
    >
      <p>&copy; {new Date().getFullYear()} My Themed Website</p>
      <div className="mt-2 flex justify-center gap-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </div>
    </footer>
  );
}
