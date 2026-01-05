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



  const location = {
    address: `${t.street}, ${t.city}`,
    coordinates: "41.3275,19.8187" // Coordinates for Faculty of Law, University of Tirana
  };

  // Create Google Maps URL
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isMobileDevice = () => {
    const regex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent) || 
           (navigator.maxTouchPoints && navigator.maxTouchPoints > 2);
  };

  return (
    <footer className="bg-slate-900 text-white relative">
      {/* Decorative Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg width="1200" height="60" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px]">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                  className="fill-slate-800"></path>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-8 lg:px-12 pt-24 pb-16">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {/* Logo Section */}
          <article className="flex flex-col items-center justify-center space-y-4">
            <div className="h-28 flex items-center">
              <img 
                src={elsaLogo}
                alt="ELSA Albania Logo"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="text-xs">
              {/* <div className="font-semibold text-sm mb-1">{t.networkTitle}</div> */}
              <div className="text-slate-300">{t.location}</div>
            </div>
          </article>

          {/* Contact Section */}
          <address className="lg:col-span-1 flex flex-col items-center not-italic">
            <h3 className="text-base font-bold mb-4 uppercase tracking-wide">{t.contact}</h3>
            <div className="space-y-3 text-sm">
              <a 
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Find ELSA Albania on Google Maps"
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
                  if (!isMobileDevice()) {
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
          </address>

          {/* Quick Links Section */}
          <nav className="lg:col-span-1 flex flex-col items-center">
            <h3 className="text-base font-bold mb-4 uppercase tracking-wide" id="footer-links">{t.quickLinks}</h3>
            <ul className="space-y-2 text-sm" aria-labelledby="footer-links">
              <li>
                <a 
                  href="/board" 
                  className="text-gray-300 hover:text-white transition-colors"
                  title="Meet ELSA Albania's Board Members and Team"
                >
                  Board and Team
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
                  className="text-gray-300 hover:text-white transition-colors"
                  title="Get in touch with ELSA Albania"
                >
                  Contact Form
                </a>
              </li>
              <li>
                <a 
                  href="/projects" 
                  className="text-gray-300 hover:text-white transition-colors"
                  title="Explore ELSA Albania's Projects and Initiatives"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="/events" 
                  className="text-gray-300 hover:text-white transition-colors"
                  title="View upcoming ELSA Albania events"
                >
                  Events
                </a>
              </li>
              {/* <li>
                <a 
                  href="/membership" 
                  className="text-gray-300 hover:text-white transition-colors"
                  title="Learn how to join ELSA Albania"
                >
                  Become a Member
                </a>
              </li> */}
            </ul>
          </nav>

          {/* Vision Section */}
          <section className="lg:col-span-1 flex flex-col items-center">
            <h3 className="text-base font-bold mb-4 uppercase tracking-wide">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed text-sm text-center">
              A fair world in which there is respect for human dignity and cultural diversity.
            </p>
          </section>
        </section>

        {/* Follow Us Section */}
        <section className="lg:col-span-1 flex flex-col items-center mt-12">
          <h3 className="text-base font-bold mb-4 uppercase tracking-wide" id="social-links">Follow Us</h3>
          <nav aria-labelledby="social-links" className="flex space-x-4">
            <a 
              href="https://www.facebook.com/elsaalbania" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-orange-400 transition-colors transform hover:scale-110 will-change-transform"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/elsa_albania" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-orange-400 transition-colors transform hover:scale-110 will-change-transform"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/company/elsa-albania/posts/?feedView=all" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-orange-400 transition-colors transform hover:scale-110 will-change-transform"
              aria-label="Follow us on LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </nav>
        </section>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} ELSA Albania. All rights reserved.</p>
            <div className="mt-2 space-x-4">
              <a 
                href="/privacy" 
                className="hover:text-orange-400 transition-colors"
                title="ELSA Albania's Privacy Policy"
              >
                Privacy Policy
              </a>
              <span>•</span>
              <a 
                href="/terms" 
                className="hover:text-orange-400 transition-colors"
                title="ELSA Albania's Terms of Use"
              >
                Terms of Use
              </a>
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

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ELSA Albania",
            "description": "The European Law Students' Association in Albania is a non-political, independent, non-profit organization run by and for law students and young lawyers.",
            "url": "https://www.al.elsa.org",
            "logo": "https://www.al.elsa.org/logo.png",
            "foundingDate": "1995-03-15",
            "keywords": "law students, legal education, ELSA, European Law Students Association, Albania",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": t.phone,
              "email": "president@al.elsa.org",
              "contactType": "Customer Service",
              "availableLanguage": ["Albanian", "English"]
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": t.street,
              "addressLocality": "Tirana",
              "addressRegion": "Tirana",
              "postalCode": "1001",
              "addressCountry": "AL"
            },
            "sameAs": [
              "https://www.facebook.com/elsaalbania",
              "https://www.instagram.com/elsa_albania",
              "https://www.linkedin.com/company/elsa-albania"
            ]
          })
        }}
      />
    </footer>
  );
};

export default Footer;
