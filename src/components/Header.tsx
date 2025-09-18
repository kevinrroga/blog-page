import { ChevronDown, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import elsaLogo from '../../assets/elsa-logo-white.png';
import { motion } from 'framer-motion';

const Header = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null); // desktop dropdowns
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileOpenSection, setMobileOpenSection] = useState<string | null>(null); // 'about' | 'projects' | null
  const [lastClicked, setLastClicked] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    setMobileOpenSection(null);
  }, [location.pathname]);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDesktopDropdown = (name: string) => {
    setActiveDropdown(prev => (prev === name ? null : name));
  };

  const toggleMobileSection = (name: string) => {
    setMobileOpenSection(prev => (prev === name ? null : name));
  };

  return (
    <header className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Title */}
          <Link to="/" className="flex items-center gap-3">
            <div className="h-10 md:h-12">
              <img
                src={elsaLogo}
                alt="ELSA Albania Logo"
                className="h-full w-auto object-contain"
                loading="lazy"
                decoding="async"
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="hidden sm:block text-sm">
              <div className="font-semibold">{t.networkTitle}</div>
              <div className="text-slate-300">{t.location}</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-4" ref={dropdownRef}>
            <Link
              to="/"
              className="px-3 py-2 rounded hover:bg-slate-800 text-orange-400 hover:text-orange-300"
            >
              {t.homepage}
            </Link>

            {/* About Us */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDesktopDropdown('about')}
                className="px-3 py-2 rounded hover:bg-slate-800"
              >
                {t.aboutUs}
              </button>
              {activeDropdown === 'about' && (
                <div className="absolute left-0 mt-2 w-56 bg-slate-800 rounded-md shadow-lg py-2 z-50">
                  <Link to="/history" className="block px-4 py-2 hover:bg-slate-700">
                    {t.ElsaInternational}
                  </Link>
                  <Link to="/" className="block px-4 py-2 hover:bg-slate-700">
                    {t.ElsaAlbania}
                  </Link>
                  <Link to="/board" className="block px-4 py-2 hover:bg-slate-700">
                    {t.NationalBoard}
                  </Link>
                  <Link to="/history" className="block px-4 py-2 hover:bg-slate-700">
                    {t.History}
                  </Link>
                </div>
              )}
            </div>

            {/* Projects */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDesktopDropdown('projects')}
                className="px-3 py-2 rounded hover:bg-slate-800"
              >
                {t.projects}
              </button>
              {activeDropdown === 'projects' && (
                <div className="absolute left-0 mt-2 w-64 bg-slate-800 rounded-md shadow-lg py-2 z-50">
                  <Link to="/academic-activities" className="block px-4 py-2 hover:bg-slate-700">
                    {t.academicActivities}
                  </Link>
                  <Link to="/competitions" className="block px-4 py-2 hover:bg-slate-700">
                    {t.competitions}
                  </Link>
                  <Link to="/professional-development" className="block px-4 py-2 hover:bg-slate-700">
                    {t.professionalDevelopment}
                  </Link>
                  <Link to="/seminars-conferences" className="block px-4 py-2 hover:bg-slate-700">
                    {t.seminarsConferences}
                  </Link>
                </div>
              )}
            </div>

            <Link to="/alumni" className="px-3 py-2 rounded hover:bg-slate-800">
              {t.alumni}
            </Link>

            {/* Language */}
            <div className="flex items-center gap-2" role="group" aria-label="Language selector">
              <button
                type="button"
                onClick={() => {
                  // Validate to prevent potential stored XSS if language is somehow manipulated
                  const validLangs = ['en', 'al'];
                  if (!validLangs.includes('en')) {
                    console.error('Invalid language selection attempted');
                    return;
                  }
                  setLanguage('en');
                }}
                className={`px-3 py-2 rounded ${language === 'en' ? 'bg-orange-500' : 'hover:bg-slate-800'}`}
                aria-pressed={language === 'en'}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => {
                  const now = Date.now();
                  if (now - lastClicked < 500) return; // Prevent rapid clicks
                  setLastClicked(now);
                  setLanguage('al');
                }}
                className={`px-3 py-2 rounded ${language === 'al' ? 'bg-orange-500' : 'hover:bg-slate-800'}`}
                aria-pressed={language === 'al'}
                aria-label="Switch to Albanian"
              >
                AL
              </button>
            </div>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden px-3 py-2 rounded hover:bg-slate-800"
            onClick={() => setMobileMenuOpen(v => !v)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden mt-3 bg-slate-800 rounded-lg p-2 z-50 relative pointer-events-auto"
          >
            {/* Top-level items */}
            <Link
              to="/"
              className="block px-3 py-2 rounded hover:bg-slate-700 text-orange-400 hover:text-orange-300"
            >
              {t.homepage}
            </Link>

            {/* About Us (collapsible) */}
            <div className="mt-1">
              <button
                type="button"
                className="w-full text-left px-3 py-2 rounded hover:bg-slate-700"
                onClick={() => toggleMobileSection('about')}
                aria-expanded={mobileOpenSection === 'about'}
                aria-controls="about-submenu"
              >
                {t.aboutUs}
                <ChevronDown className={`w-3.5 h-3.5 ml-1 transition-transform duration-200 ${mobileOpenSection === 'about' ? 'rotate-180' : ''}`} />
              </button>
              {mobileOpenSection === 'about' && (
                <ul id="about-submenu" className="mt-1 ml-2 border-l border-slate-700 pl-3 space-y-1">
                  <li>
                    <Link to="/history" className="block px-3 py-2 rounded hover:bg-slate-700">
                      {t.ElsaInternational}
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="block px-3 py-2 rounded hover:bg-slate-700">
                      {t.ElsaAlbania}
                    </Link>
                  </li>
                  <li>
                    <Link to="/board" className="block px-3 py-2 rounded hover:bg-slate-700">
                      {t.NationalBoard}
                    </Link>
                  </li>
                  <li>
                    <Link to="/history" className="block px-3 py-2 rounded hover:bg-slate-700">
                      {t.History}
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            {/* Projects (collapsible) */}
            <div className="mt-1">
              <button
                type="button"
                className="w-full text-left px-3 py-2 rounded hover:bg-slate-700"
                onClick={() => toggleMobileSection('projects')}
                aria-expanded={mobileOpenSection === 'projects'}
                aria-controls="projects-submenu"
              >
                {t.projects}
                <ChevronDown className={`w-3.5 h-3.5 ml-1 transition-transform duration-200 ${mobileOpenSection === 'projects' ? 'rotate-180' : ''}`} />
              </button>
              {mobileOpenSection === 'projects' && (
                <ul id="projects-submenu" className="mt-1 ml-2 border-l border-slate-700 pl-3 space-y-1">
                  <li>
                    <Link to="/academic-activities" className="block px-3 py-2 rounded hover:bg-slate-700">
                      {t.academicActivities}
                    </Link>
                  </li>
                  <li>
                    <Link to="/competitions" className="block px-3 py-2 rounded hover:bg-slate-700">
                      {t.competitions}
                    </Link>
                  </li>
                  <li>
                    <Link to="/professional-development" className="block px-3 py-2 rounded hover:bg-slate-700">
                      {t.professionalDevelopment}
                    </Link>
                  </li>
                  <li>
                    <Link to="/seminars-conferences" className="block px-3 py-2 rounded hover:bg-slate-700">
                      {t.seminarsConferences}
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            {/* Alumni */}
            <Link to="/alumni" className="block mt-1 px-3 py-2 rounded hover:bg-slate-700">
              {t.alumni}
            </Link>

            {/* Language */}
            <div className="flex items-center gap-2 mt-2 px-1">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-3 py-2 rounded ${language === 'en' ? 'bg-orange-500' : 'hover:bg-slate-700'}`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('al')}
                className={`px-3 py-2 rounded ${language === 'al' ? 'bg-orange-500' : 'hover:bg-slate-700'}`}
              >
                AL
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;