import { MapPin, Phone, Mail, Copy, Check, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import elsaLogo from '../../assets/elsa-logo-white.png';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [copied, setCopied] = useState(false);

  const handlePhoneClick = () => {
    // Copy to clipboard
    navigator.clipboard.writeText(t.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Add coordinates for ELSA Albania location
  const location = {
    address: `${t.street}, ${t.city}`,
    coordinates: "41.3275,19.8187" // Coordinates for Faculty of Law, University of Tirana
  };

  // Create Google Maps URL
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white relative">
      {/* Decorative Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                className="fill-white/5"></path>
          <path d="M1200,0H0V27.35a600.21,600.21,0,0,0,321.39,29.09c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3" 
                className="fill-slate-800"></path>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-8 lg:px-12 pt-24 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {/* Logo Section */}
          <div className="flex flex-col items-center justify-center space-y-4">
          <div className="h-28 flex items-center">
            <img 
              src={elsaLogo}
              alt="ELSA Albania Logo"
              className="h-full w-auto object-contain"
            />
          </div>
          <div className="text-xs">
            <div className="font-semibold text-sm mb-1">{t.networkTitle}</div>
            <div className="text-slate-300">{t.location}</div>
          </div>
        </div>

          {/* Contact Section */}
          <div className="lg:col-span-1 flex flex-col items-center">
            <h3 className="text-base font-bold mb-4 uppercase tracking-wide">{t.contact}</h3>
            <div className="space-y-3 text-sm">
              <a 
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 hover:text-orange-400 transition-colors group"
              >
                <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0 group-hover:text-orange-400" />
                <div className="text-left">
                  <div>{t.street}</div>
                  <div>{t.city}</div>
                </div>
              </a>
              
              <a 
                href={`tel:${t.phone.replace(/\s/g, '')}`}
                onClick={(e) => {
                  // If not on mobile, prevent default and copy instead
                  if (!/Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                    e.preventDefault();
                    handlePhoneClick();
                  }
                }}
                className="flex items-center space-x-3 hover:text-orange-400 transition-colors group cursor-pointer"
              >
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0 group-hover:text-orange-400" />
                <div className="flex items-center space-x-2">
                  <span>{t.phone}</span>
                  {!copied ? (
                    <Copy className="w-4 h-4 opacity-0 group-hover:opacity-50 transition-opacity" />
                  ) : (
                    <Check className="w-4 h-4 text-green-500" />
                  )}
                </div>
              </a>
              
              <div className="flex items-center space-x-3">
                <a 
                href="mailto:president@al.elsa.org"
                className="flex items-center justify-center space-x-2 text-sm text-slate-300 hover:text-orange-400 transition-colors group"
              >
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <div>{t.email}</div>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="lg:col-span-1 flex flex-col items-center">
            <h3 className="text-base font-bold mb-4 uppercase tracking-wide">{t.quickLinks}</h3>
            <div className="space-y-2 text-sm">
              <div><a href="/board" className="text-gray-300 hover:text-white transition-colors">Board and Team</a></div>ont
              <div><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Form</a></div>
              <div><a href="#" className="text-gray-300 hover:text-white transition-colors">Projects</a></div>
            </div>
          </div>

          {/* Vision Section */}
          <div className="lg:col-span-1 flex flex-col items-center">
            <h3 className="text-base font-bold mb-4 uppercase tracking-wide">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed text-sm text-center">
              A fair world in which there is respect for human dignity and cultural diversity.
            </p>
          </div>
        </div>

        {/* Follow Us Section */}
        <div className="lg:col-span-1 flex flex-col items-center mt-12">
          <h3 className="text-base font-bold mb-4 uppercase tracking-wide">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com/elsaalbania" target="_blank" rel="noopener noreferrer"
              className="text-slate-300 hover:text-orange-400 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://instagram.com/elsa_albania" target="_blank" rel="noopener noreferrer"
              className="text-slate-300 hover:text-orange-400 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/company/elsa-albania" target="_blank" rel="noopener noreferrer"
              className="text-slate-300 hover:text-orange-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} ELSA Albania. All rights reserved.</p>
            <div className="mt-2 space-x-4">
              <a href="/privacy" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="/terms" className="hover:text-orange-400 transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-orange-500 p-2 rounded-full shadow-lg hover:bg-orange-600 transition-colors focus:outline-none"
        aria-label="Back to top"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;