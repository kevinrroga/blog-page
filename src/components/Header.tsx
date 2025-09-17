import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import elsaLogo from '../../assets/elsa-logo-white.png';
import { motion } from 'framer-motion';

const Header = () => {
	
	
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDropdownClick = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <header className="bg-slate-900 text-white py-8 px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-5">
          <div className="h-20 flex items-center">
            <img 
              src={elsaLogo}
              alt="ELSA Albania Logo"
              className="h-full w-auto object-contain"
            />
          </div>
          <div className="text-sm">
            <div className="font-semibold text-base mb-1">{t.networkTitle}</div>
            <div className="text-slate-300">{t.location}</div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center justify-center space-x-4" ref={dropdownRef}>
          {/* Homepage Link */}
          <Link 
            to="/"
            className="text-orange-400 hover:text-orange-300 transition-colors px-2.5 py-1.5 text-sm rounded-md hover:bg-slate-800"
          >
            {t.homepage}
          </Link>

          {/* About Us Dropdown */}
          <div className="relative group">
            <button 
              className="flex items-center space-x-2 hover:text-slate-300 transition-colors px-2.5 py-1.5 text-sm rounded-md hover:bg-slate-800"
              onClick={() => handleDropdownClick('about')}
            >
              <span>{t.aboutUs}</span>
              <ChevronDown className={`w-3.5 h-3.5 ml-1 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
            </button>
            
            {/* About Us Dropdown - Update onClick handlers */}
            {activeDropdown === 'about' && (
              <div className="absolute left-0 mt-2 w-48 bg-slate-800 rounded-md shadow-lg py-1 z-50">
                <Link 
                  to="/history" 
                  className="block px-4 py-2 text-sm text-white hover:bg-slate-700 transition-colors"
                  onClick={() => setActiveDropdown(null)}
                >
                  {t.ElsaInternational}
                </Link>
                <Link 
                  to="/" 
                  className="block px-4 py-2 text-sm text-white hover:bg-slate-700 transition-colors"
                  onClick={() => setActiveDropdown(null)}
                >
                  {t.ElsaAlbania}
                </Link>
                <Link 
                  to="/board" 
                  className="block px-4 py-2 text-sm text-white hover:bg-slate-700 transition-colors"
                  onClick={() => setActiveDropdown(null)}
                >
                  {t.NationalBoard}
                </Link>
                <Link 
                  to="/history" 
                  className="block px-4 py-2 text-sm text-white hover:bg-slate-700 transition-colors"
                  onClick={() => setActiveDropdown(null)}
                >
                  {t.History}
                </Link>
              </div>
            )}
          </div>
          
          {/* Projects Dropdown */}
          <div className="relative group">
            <button 
              className="flex items-center space-x-2 hover:text-slate-300 transition-colors px-2.5 py-1.5 text-sm rounded-md hover:bg-slate-800"
              onClick={() => handleDropdownClick('projects')}
            >
              <span>{t.projects}</span>
              <ChevronDown className={`w-3.5 h-3.5 ml-1 transition-transform duration-200 ${activeDropdown === 'projects' ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Projects Dropdown - Update onClick handlers */}
            {activeDropdown === 'projects' && (
              <div className="absolute left-0 mt-2 w-48 bg-slate-800 rounded-md shadow-lg py-1 z-50">
                <Link 
                  to="/academic-activities" 
                  className="block px-4 py-2 text-sm text-white hover:bg-slate-700 transition-colors"
                  onClick={() => setActiveDropdown(null)}
                >
                  {t.academicActivities}
                </Link>
                <Link 
                  to="/competitions" 
                  className="block px-4 py-2 text-sm text-white hover:bg-slate-700 transition-colors"
                  onClick={() => setActiveDropdown(null)}
                >
                  {t.competitions}
                </Link>
                <Link 
                  to="/professional-development" 
                  className="block px-4 py-2 text-sm text-white hover:bg-slate-700 transition-colors"
                  onClick={() => setActiveDropdown(null)}
                >
                  {t.professionalDevelopment}
                </Link>
                <Link 
                  to="/seminars-conferences" 
                  className="block px-4 py-2 text-sm text-white hover:bg-slate-700 transition-colors"
                  onClick={() => setActiveDropdown(null)}
                >
                  {t.seminarsConferences}
                </Link>
              </div>
            )}
          </div>

          {/* Alumni Link - Add this before the language flags */}
          <Link
            to="/alumni"
            className="flex items-center space-x-2 hover:text-slate-300 transition-colors px-2.5 py-1.5 text-sm rounded-md hover:bg-slate-800"
          >
            <span>{t.alumni}</span>
          </Link>

          {/* Enhanced Language Switcher */}
          <div className="flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setLanguage('en')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-200 ${
                language === 'en'
                  ? 'bg-orange-500 text-white'
                  : 'hover:bg-slate-800 text-slate-300'
              }`}
            >
              <img
                src="https://flagcdn.com/gb.svg"
                alt="English"
                className="w-5 h-5 rounded-sm object-cover"
              />
              <span className="text-sm font-medium">EN</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setLanguage('al')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-200 ${
                language === 'al'
                  ? 'bg-orange-500 text-white'
                  : 'hover:bg-slate-800 text-slate-300'
              }`}
            >
              <img
                src="https://flagcdn.com/al.svg"
                alt="Albanian"
                className="w-5 h-5 rounded-sm object-cover"
              />
              <span className="text-sm font-medium">AL</span>
            </motion.button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;