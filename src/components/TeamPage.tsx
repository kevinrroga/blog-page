import { motion, easeOut } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { Mail, Linkedin } from 'lucide-react';

// Import all images
import dinaImage from '../assets/Dina.png';
import inesImage from '../assets/Ines.png';
import zImage from '../assets/z.png';
import zJpg from '../assets/z.jpg';
import ersianaImage from '../assets/ersiana_korriku.jpg';
import matildaImage from '../assets/matilda_lleshi.png';
import lidiaImage from '../assets/lidia_sula.jpg';
import megiImage from '../assets/megi_zoto.jpg';
import glenImage from '../assets/glen.jpg';
import placeholderImage from '../assets/profile-placeholder.jpg';
// Add halimi.jpeg import
import halimiImage from '../assets/halimi.jpeg';

const TeamPage = () => {
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

  // Team data with imported images
  const teamData = [
    {
      category: t.boardRelations,
      members: [
        {
          id: 1,
          name: "Dina Shapo",
          role: "Director for External Relations",
          photo: dinaImage,
          email: "president@al.elsa.org",
          linkedin: "https://linkedin.com/in/ana-marku"
        },
        {
          id: 2,
          name: "Ines Deçolli",
          role: "Director for Expansions",
          photo: inesImage,
          email: "secgen@al.elsa.org",
          linkedin: "https://linkedin.com/in/erion-deda"
        }
      ]
    },
    {
      category: t.internalManagement,
      members: [
        {
          id: 4,
          name: "Etual Hoxha",
          role: "Academic Activities Coordinator",
          photo: zImage,
          email: "aa@al.elsa.org",
          linkedin: "https://linkedin.com/in/klara-hoxha"
        }
      ]
    },
    {
      category: t.academicActivities,
      members: [
        {
          id: 4,
          name: "Ersiana Korriku",
          role: "Academic Activities Coordinator",
          photo: ersianaImage,
          email: "aa@al.elsa.org",
          linkedin: "https://linkedin.com/in/klara-hoxha"
        },
        {
          id: 5,
          name: "Matilda Lleshi",
          role: "STEP Coordinator",
          photo: matildaImage,
          email: "step@al.elsa.org",
           linkedin: "https://linkedin.com/in/dritan-berisha"
         },
        {
          id: 5,
          name: "Lidia Sula",
          role: "STEP Coordinator",
          photo: lidiaImage,
          email: "step@al.elsa.org",
           linkedin: "https://linkedin.com/in/dritan-berisha"
         }
      ]
    },
    {
      category: t.competitions,
      members: [
        {
          id: 4,
          name: "Megi Zoto",
          role: "Academic Activities Coordinator",
          photo: megiImage,
          email: "aa@al.elsa.org",
          linkedin: "https://linkedin.com/in/klara-hoxha"
        },
         {
           id: 5,
           name: "Ema Dako",
           role: "STEP Coordinator",
           photo: zImage,
           email: "step@al.elsa.org",
           linkedin: "https://linkedin.com/in/dritan-berisha"
         },
         {
           id: 5,
           name: "Marinel Prenga",
           role: "STEP Coordinator",
           photo: zJpg,
           email: "step@al.elsa.org",
           linkedin: "https://linkedin.com/in/dritan-berisha"
         }
      ]
    },
    {
      category: t.professionalDevelopment,
      members: [
        {
          id: 6,
          name: "Ariel Muka",
          role: "IT Director",
          photo: glenImage,
          email: "it@al.elsa.org",
          linkedin: "https://linkedin.com/in/artan-beqiri"
        },
      ]
    },
    {
      category: t.seminarsConferences,
      members: [
        {
          id: 6,
          name: "Heldi Kodra",
          role: "IT Director",
          photo: glenImage,
          email: "it@al.elsa.org",
          linkedin: "https://linkedin.com/in/artan-beqiri"
        },
        {
          id: 6,
          name: "Redi Vranici",
          role: "IT Director",
          photo: glenImage,
          email: "it@al.elsa.org",
          linkedin: "https://linkedin.com/in/artan-beqiri"
        },
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-32 overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/assets/pattern.svg')] bg-repeat bg-center"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-6">{t.teamTitle}</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">{t.teamDescription}</p>
          </motion.div>
        </div>
      </section>

      {/* Team Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {teamData.map((section, index) => (
            <div key={index} className="mb-24">
              <motion.h2 
                className="text-4xl font-bold text-slate-900 mb-3 text-center relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {section.category}
              </motion.h2>
              
              <div className="flex justify-center mb-16">
                <div className="w-24 h-2 bg-orange-500 rounded-full"></div>
              </div>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center"
                }}
              >
                {section.members.map(member => (
                  <motion.div
                    key={member.id}
                    variants={cardVariants}
                    className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 
                              flex flex-col items-center transform hover:-translate-y-2 
                              border border-slate-100 mx-auto"
                    whileHover={{ scale: 1.02 }}
                    style={{
                      width: "100%",
                      maxWidth: "320px",
                      margin: "0 auto 20px"
                    }}
                  >
                    {/* Photo */}
                    <motion.div 
                      className="w-52 h-52 rounded-full overflow-hidden mb-6 border-4 border-orange-400 shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src={member.photo} 
                        alt={`${member.name}, ${member.role}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback if image fails to load
                          (e.target as HTMLImageElement).src = placeholderImage;
                        }}
                      />
                    </motion.div>
                    
                    {/* Details */}
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-slate-800">{member.name}</h3>
                      <p className="text-orange-600 font-medium mt-2 text-lg">{member.role}</p>
                      
                      <div className="w-16 h-1 bg-orange-400 mx-auto my-5 rounded-full"></div>
                      
                      {/* Contact Links */}
                      <div className="mt-6 flex items-center justify-center space-x-6">
                        {member.email && (
                          <a 
                            href={`mailto:${member.email}`}
                            className="text-slate-600 hover:text-orange-600 transition-colors bg-slate-100 
                                     hover:bg-orange-100 p-3 rounded-full"
                            title={`Email ${member.name}`}
                            aria-label={`Email ${member.name}`}
                          >
                            <Mail size={22} />
                          </a>
                        )}
                        
                        {member.linkedin && (
                          <a 
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-600 hover:text-orange-600 transition-colors bg-slate-100 
                                     hover:bg-orange-100 p-3 rounded-full"
                            title={`${member.name}'s LinkedIn Profile`}
                            aria-label={`${member.name}'s LinkedIn Profile`}
                          >
                            <Linkedin size={22} />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default TeamPage;
