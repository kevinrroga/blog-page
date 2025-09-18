import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Competitions = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const competitions = [
    {
      title: t.helgaPedersenTitle,
      description: t.helgaPedersenDescription,
      logo: '../assets/helga.jpg'
    },
    {
      title: t.johnJacksonTitle,
      description: t.johnJacksonDescription,
      logo: '../assets/john.jpg'
    },
    {
      title: t.encTitle,
      description: t.encDescription,
      logo: '../assets/enc.jpg'
    },
    {
      title: t.mootCourtTitle,
      description: t.mootCourtDescription,
      logo: '' // Empty string to indicate no logo
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6">{t.competitions}</h1>
        </div>
      </section>

      {/* Competitions List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-16">
            {competitions.map((competition, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center hover:shadow-xl transition-shadow duration-300"
              >
                {/* Text Content */}
                <div className="lg:col-span-2 space-y-6">
                  <h2 className="text-2xl font-bold text-slate-900 border-b border-orange-200 pb-4">
                    {competition.title}
                  </h2>
                  <p className="text-slate-600 text-justify leading-relaxed">
                    {competition.description}
                  </p>
                </div>

                {/* Logo - Only render if logo exists */}
                {competition.logo ? (
                  <div className="flex justify-center lg:justify-end">
                    <div className="w-64 h-64 rounded-xl bg-white p-4 flex items-center justify-center shadow-md">
                      <img 
                        src={competition.logo}
                        alt={competition.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="hidden lg:block" /> // Empty div to preserve grid structure
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Competitions;