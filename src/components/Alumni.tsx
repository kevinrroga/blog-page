import { motion, easeOut } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

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
      position: 'Former President 2018-2019',
      photo: '/assets/alumni/john-doe.jpg',
      currentRole: 'Associate - Halimi Law & Tax'
    },
    {
      name: 'Sofjan Jaupaj',
      position: 'Former VP Academic Activities 2019-2020',
      photo: '/assets/alumni/jane-smith.jpg',
      currentRole: 'Minister of Environment of the Republic of Albania'
    },
    {
      name: 'Glen Mebelli Bardhi',
      position: 'Former Secretary General 2017-2018',
      photo: '/assets/alumni/mark-johnson.jpg',
      currentRole: 'Advisor to the Speaker of the Parliament and Chevening Scholar'
    },
    {
      name: 'Gladiola Ago',
      position: 'Former VP Marketing 2020-2021',
      photo: '/assets/alumni/sarah-williams.jpg',
      currentRole: 'Senior Associate - Boga & Associates'
    },
    {
      name: 'Bora Kola',
      position: 'Former VP Seminars & Conferences 2016-2017',
      photo: '/assets/alumni/david-brown.jpg',
      currentRole: 'National Legal Expert - OSCE Presence in Albania'
    },
    {
      name: 'Fiona Kamberi',
      position: 'Former Treasurer 2019-2020',
      photo: '/assets/alumni/emily-davis.jpg',
      currentRole: 'Associate - Frost & Fire Consulting'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/assets/pattern.svg')] bg-repeat bg-center"></div>
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
                {/* Photo with fade-in and scale effect */}
                <motion.div 
                  className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-center text-slate-900 mb-2">
                  {member.name}
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

      {/* Join Alumni Network CTA */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            {t.alumniNetwork}
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            {t.joinAlumniDescription}
          </p>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors">
            {t.connectWithUs}
          </button>
        </div>
      </section>
    </main>
  );
};

export default Alumni;