import { motion, easeOut } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

// Import alumni images from root-level assets folder
import dhimiterImage from '@assets/dhimiter.jpg';
import sofjanImage from '@assets/sofjan.jpg';
import glenImage from '@assets/glen.jpg';
import gladiolaImage from '@assets/gladiola.jpg';
import boraImage from '@assets/bora.png';
import fionaImage from '@assets/fiona.png';
import elsaLogoWhite from '@assets/elsa-logo-white.png'; // Fallback image

const Alumni = () => {
  const { language } = useLanguage();
  const t = translations[language];

  // Container animation variant
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Controls delay between each card
      }
    }
  };

  // Individual card animation variant
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  };

  const alumni = [
    {
      name: 'Dhimitër Zguro',
      position: 'Associate - Halimi Law & Tax',
      photo: dhimiterImage,
      currentRole: '',
      linkedinUrl: 'https://halimi.al/en/avokatet/dhimiter-zguro/' // Add LinkedIn URLs
    },
    {
      name: 'Sofjan Jaupaj',
      position: 'Minister of Environment of the Republic of Albania',
      photo: sofjanImage,
      currentRole: '',
      linkedinUrl: 'https://en.wikipedia.org/wiki/Sofjan_Jaupaj'
    },
    {
      name: 'Glen Mebelli Bardhi',
      position: 'Advisor to the Speaker of the Parliament and Chevening Scholar',
      photo: glenImage,
      currentRole: '',
      linkedinUrl: 'https://www.linkedin.com/in/glenmebellibardhi/'
    },
    {
      name: 'Gladiola Ago',
      position: 'Senior Associate - Boga & Associates',
      photo: gladiolaImage,
      currentRole: '',
      linkedinUrl: 'https://www.linkedin.com/in/gladiola-ago/'
    },
    {
      name: 'Bora Kola',
      position: 'National Legal Expert - OSCE Presence in Albania',
      photo: boraImage,
      currentRole: '',
      linkedinUrl: 'https://www.linkedin.com/in/bora-kola/'
    },
    {
      name: 'Fiona Kamberi',
      position: 'Associate - Frost & Fire Consulting',
      photo: fionaImage,
      currentRole: '',
      linkedinUrl: 'https://www.linkedin.com/in/fiona-kamberi/'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {/* Using a simple gradient instead of missing SVG pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-6">{t.alumniNetwork}</h1>
            <p className="text-xl text-slate-300 max-w-3xl">{t.alumniIntro}</p>
          </motion.div>
        </div>
      </section>

      {/* Success Stories Grid - Updated with animations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            {t.successStories}
          </h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {alumni.map((member, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Photo with fade-in and scale effect - now wrapped with LinkedIn link */}
                <a 
                  href={member.linkedinUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block"
                >
                  <motion.div 
                    className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden group relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback if image fails to load
                        (e.target as HTMLImageElement).src = elsaLogoWhite;
                      }}
                    />
                    {/* LinkedIn overlay on hover */}
                    <div className="absolute inset-0 bg-blue-800/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#FFFFFF">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </div>
                  </motion.div>
                </a>

                {/* Name now wrapped in LinkedIn link */}
                <h3 className="text-xl font-semibold text-center text-slate-900 mb-2">
                  <a 
                    href={member.linkedinUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-700 transition-colors"
                  >
                    {member.name}
                  </a>
                </h3>

                <div className="w-16 h-1 bg-orange-400 mx-auto mb-4"></div>

                <div className="text-center space-y-2">
                  <p className="text-orange-500 font-medium">{member.position}</p>
                  <p className="text-slate-600 text-sm">{member.currentRole}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Alumni;