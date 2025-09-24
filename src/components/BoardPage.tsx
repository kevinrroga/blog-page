// Removed unused import of useEffect and useState
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { motion } from 'framer-motion';
import PageTransition from './PageTransition';
import AnimatedSection from './AnimatedSection';
import boardGroupPhoto from '../../assets/board-group-photo.jpg'; // Add this import
import jImage from '../../assets/j.jpg';
import nImage from '../../assets/n.jpg';
import sImage from '../../assets/s.jpg';
import tImage from '../../assets/t.jpg';
import aImage from '../../assets/a.jpg';
import mpImage from '../../assets/mp.jpg';
import mgImage from '../../assets/mg.jpg';
import boardPhoto from '../../assets/board-group-photo.jpg';

// Board members dataoto
const boardMembers = [
  {
    name: "Jon Kola",
    position: "President",
    image: jImage,
    bio: "Leading ELSA Albania with passion and dedication.",
    isMain: true
  },
  {
    name: "Kostandino Rroga",
    position: "Secretary General",
    image: nImage,
    bio: "Coordinating academic activities and international relations.",
    isMain: true
  },
  {
    name: "Stivi Meta",
    position: "Vice President in Charge of Marketing",
    image: sImage,
    bio: "",
    isMain: false
  },
  {
    name: "Martina Gllavaj",
    position: "Vice President in Charge of Academic Activities",
    image: mgImage,
    bio: "",
    isMain: false
  },
  {
    name: "Arba Ollomani",
    position: "Vice President in Charge of Competitions",
    image: aImage,
    bio: "",
    isMain: false
  },
  {
    name: "Teuta Elezaj",
    position: "Vice President in Charge of Professional Development",
    image: tImage,
    bio: "",
    isMain: false
  },
  {
    name: "Marios Prendi",
    position: "Vice President in Charge of Seminars & Conferences",
    image: mpImage,
    bio: "",
    isMain: false
  }
];

const BoardPage = () => {
  const { language } = useLanguage();
  const t = translations[language];

  // Animation variants

  // Separate main positions from others
  const mainMembers = boardMembers.filter(member => member.isMain);
  const otherMembers = boardMembers.filter(member => !member.isMain);

  // Split otherMembers into two groups
  const regularVPs = otherMembers.slice(0, otherMembers.length - 2); // All VPs except last two
  const lastTwoVPs = otherMembers.slice(-2); // Last two VPs (Teuta and Marios)

  return (
    <PageTransition>
      <main className="min-h-screen">
        <motion.div 
          className="bg-slate-800 py-20 text-white text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}  
        >
          <h1 className="text-4xl font-bold mb-4">{t.boardTitle}</h1>
          <p className="text-slate-300 text-lg mb-12">{t.boardDescription}</p>
          
          {/* Group Photo Section */}
          <motion.div 
            className="max-w-5xl mx-auto mb-20 px-6" // Changed from max-w-4xl to max-w-5xl
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative aspect-[16/10] rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={boardGroupPhoto}
                alt="ELSA Albania National Board 2025/2026"
                className="w-full h-full object-cover object-center scale-105 object-[-5%_center]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"/>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h2 className="text-3xl font-semibold">
                  2025/2026 National Board of ELSA Albania
                </h2>
              </div>
            </div>
          </motion.div>

          {/* Main Position Cards */}
          <div className="max-w-6xl mx-auto px-6 mb-16">
            <div className="flex justify-center gap-16"> {/* Changed to flex container */}
              {mainMembers.map((member, index) => (
                <AnimatedSection key={member.name} delay={index * 0.1}>
                  <div className="text-center">
                    <motion.div 
                      className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden" 
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </motion.div>
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-orange-400 font-medium">
                      {member.position}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Regular VPs Grid */}
          <div className="max-w-6xl mx-auto px-6 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {regularVPs.map((member, index) => (
                <AnimatedSection key={member.name} delay={(index + 1) * 0.1}>
                  <div className="text-center">
                    <motion.div 
                      className="w-40 h-40 mx-auto mb-3 rounded-full overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-orange-400 font-medium">
                      {member.position}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Last Two VPs - Centered */}
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex justify-center gap-16">
              {lastTwoVPs.map((member, index) => (
                <AnimatedSection key={member.name} delay={(index + 1) * 0.1}>
                  <div className="text-center">
                    <motion.div 
                      className="w-40 h-40 mx-auto mb-3 rounded-full overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-orange-400 font-medium">
                      {member.position}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </motion.div>
      </main>
    </PageTransition>
  );
};

export default BoardPage;
