import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { motion } from 'framer-motion';

interface Program {
  title: string;
  description: string;
  logo: string;
  secondaryLogo?: string; // Made optional
}

const SeminarsConferences = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const events: Program[] = [
    {
      title: t.lawSchoolsTitle,
      description: t.lawSchoolsDescription,
      logo: '../assets/sels.jpg',
      secondaryLogo: '../assets/wels.jpg' // Added second logo
    },
    {
      title: t.delegationsTitle,
      description: t.delegationsDescription,
      logo: '../assets/delegations.jpg'
    },
    {
      title: t.iceTitle,
      description: t.iceDescription,
      logo: '../assets/ice.jpg'
    },
    {
      title: t.instutionalVisitsTitle,
      description: t.instutionalVisitsDescription,
      logo: '' // Empty string for no logo
    },
    {
      title: t.seminarsConfTitle,
      description: t.seminarsConfDescription,
      logo: '' // Empty string for text-only layout
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section with Pattern */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              {t.seminarsConferences}
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
              {t.seminarsConferencesIntro}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-20">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className={`grid grid-cols-1 ${event.logo ? 'lg:grid-cols-3' : 'lg:grid-cols-1'} gap-12`}>
                  {/* Only render logo section if logo exists */}
                  {event.logo && (
                    <div className="lg:col-span-1 p-8 flex flex-col items-center justify-center space-y-6 bg-gradient-to-br from-slate-50 to-blue-50">
                      <div className="w-48 h-48 rounded-full bg-white p-6 shadow-lg flex items-center justify-center border-2 border-blue-50">
                        <img 
                          src={event.logo}
                          alt={event.title}
                          className="w-36 h-36 object-contain"
                        />
                      </div>
                      {event.secondaryLogo && (
                        <div className="w-48 h-48 rounded-full bg-white p-6 shadow-lg flex items-center justify-center border-2 border-blue-50">
                          <img 
                            src={event.secondaryLogo}
                            alt={`${event.title} Secondary`}
                            className="w-36 h-36 object-contain"
                          />
                        </div>
                      )}
                    </div>
                  )}

                  {/* Content Section - Adjusted for no-logo case */}
                  <div className={`${event.logo ? 'lg:col-span-2' : 'max-w-4xl mx-auto'} p-8 lg:px-12 flex flex-col justify-center`}>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b border-blue-100 pb-4">
                      {event.title}
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default SeminarsConferences;