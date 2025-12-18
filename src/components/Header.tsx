import { ChevronDown, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import elsaLogo from '../../assets/elsa-logo-white.png';

const Header = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileOpenSection, setMobileOpenSection] = useState<string | null>(null);
  
  const headerRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    setMobileOpenSection(null);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
      
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
        setMobileOpenSection(null);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const toggleMobileSection = (section: string) => {
    setMobileOpenSection(prevSection => prevSection === section ? null : section);
  };

  function toggleDesktopDropdown(section: string): void {
    setActiveDropdown(prev => prev === section ? null : section);
  }

  const [lastClicked, setLastClickedState] = useState(0);

  function setLastClicked(now: number) {
    setLastClickedState(now);
  }

  return (
    <header ref={headerRef} className="bg-slate-900 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Title */}
          <Link to="/" className="flex items-center gap-3 relative z-20">
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
                onClick={() => setActiveDropdown(activeDropdown === 'about' ? null : 'about')}
                className="px-3 py-2 rounded hover:bg-slate-800 flex items-center gap-1"
                aria-expanded={activeDropdown === 'about'}
                aria-controls="about-dropdown"
              >
                {t.aboutUs}
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              {/* Desktop About Dropdown */}
              {activeDropdown === 'about' && (
                <div id="about-dropdown" className="absolute left-0 mt-2 w-56 bg-slate-800 rounded-md shadow-lg py-2 z-50">
                  <a 
                    href="https://elsa.org/" 
                    target="_blank" 
                    rel="external noopener noreferrer" 
                    title="Visit ELSA International's official website" 
                    className="block px-4 py-2 hover:bg-slate-700"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open('https://elsa.org/', '_blank', 'noopener,noreferrer');
                    }}
                  >
                    {t.ElsaInternational}
                  </a>
                  <Link to="/" className="block px-4 py-2 hover:bg-slate-700">
                    {t.ElsaAlbania}
                  </Link>
                  <Link to="/board" className="block px-4 py-2 hover:bg-slate-700">
                    {t.NationalBoard}
                  </Link>
                  <Link to="/team" className="block px-4 py-2 hover:bg-slate-700">
                    {t.aboutTeam}
                  </Link>
                </div>
              )}
            </div>

            {/* Projects */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDesktopDropdown('projects')}
                className="px-3 py-2 rounded hover:bg-slate-800 flex items-center gap-1"
                aria-label="Projects dropdown"
              >
                {t.projects}
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
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

            {/* SAL direct link (no dropdown) */}
            <Link to="/sal/llm" className="px-3 py-2 rounded hover:bg-slate-800">
              {t.sal}
            </Link>

            {/* Language */}
            <div className="flex items-center gap-2" role="group" aria-label="Language selector">
              <button
                type="button"
                onClick={() => {
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
                  if (now - lastClicked < 500) return;
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
            className="md:hidden px-3 py-2 rounded hover:bg-slate-800 relative z-20"
            onClick={() => setMobileMenuOpen(v => !v)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden mt-3 bg-slate-800 rounded-lg p-2 z-40 relative pointer-events-auto shadow-lg"
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
                className="w-full text-left px-3 py-2 rounded hover:bg-slate-700 flex items-center justify-between"
                onClick={() => toggleMobileSection('about')}
                aria-expanded={mobileOpenSection === 'about'}
                aria-controls="about-submenu"
                aria-label="About Us submenu"
              >
                {t.aboutUs}
                <ChevronDown className={`w-3.5 h-3.5 ml-1 transition-transform duration-200 ${mobileOpenSection === 'about' ? 'rotate-180' : ''}`} />
              </button>
              {mobileOpenSection === 'about' && (
                <ul id="about-submenu" className="mt-1 ml-2 border-l border-slate-700 pl-3 space-y-1">
                  <li>
                    <a 
                      href="https://elsa.org/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block px-3 py-2 rounded hover:bg-slate-700"
                    >
                      {t.ElsaInternational}
                    </a>
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
                    <Link to="/team" className="block px-3 py-2 rounded hover:bg-slate-700">
                      {t.aboutTeam}
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            {/* Projects (collapsible) */}
            <div className="mt-1">
              <button
                type="button"
                className="w-full text-left px-3 py-2 rounded hover:bg-slate-700 flex items-center justify-between"
                onClick={() => toggleMobileSection('projects')}
                aria-expanded={mobileOpenSection === 'projects'}
                aria-controls="projects-submenu"
                aria-label="Projects submenu"
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

            {/* SAL direct link (Mobile) */}
            <Link to="/sal/llm" className="block mt-1 px-3 py-2 rounded hover:bg-slate-700">
              {t.sal}
            </Link>

            {/* Language */}
            <div className="flex items-center gap-2 mt-2 px-1">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-3 py-2 rounded ${language === 'en' ? 'bg-orange-500' : 'hover:bg-slate-700'}`}
                aria-pressed={language === 'en'}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('al')}
                className={`px-3 py-2 rounded ${language === 'al' ? 'bg-orange-500' : 'hover:bg-slate-700'}`}
                aria-pressed={language === 'al'}
                aria-label="Switch to Albanian"
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