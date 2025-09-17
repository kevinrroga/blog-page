import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const ProfessionalDevelopment = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const professionalDevelopmentItems = [
    {
      title: 'Traineeship',
      description: t.elseTraineeshipDescription, // Use your translation or original text
      logo: '../assets/traineeship.jpg'
    },
    {
      title: 'Career Launch',
      description: t.careerLaunchDescription, // Use your translation or original text
      logo: '../assets/color_career.jpg'
    },
    {
      title: 'Lawyers at Work',
      description: t.lawyersAtWorkDescription, // Use your translation or original text
      logo: '' // Empty string for no logo
    },
    {
      title: 'PD Workshops',
      description: t.pdWorkshopsDescription, // Use your translation or original text
      logo: '' // Empty string for no logo
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50">
      {/* Hero Section with animation */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-200">
            {t.professionalDevelopment}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            {t.pdIntro}
          </p>
        </div>
      </section>

      {/* Programs List with staggered animations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <style>{`
            .slide-in {
              opacity: 0;
              transform: translateY(40px);
              animation: slideIn 0.8s forwards;
            }
            .slide-in:nth-child(1) { animation-delay: 0s; }
            .slide-in:nth-child(2) { animation-delay: 0.3s; }
            .slide-in:nth-child(3) { animation-delay: 0.6s; }
            .slide-in:nth-child(4) { animation-delay: 0.9s; }
            @keyframes slideIn {
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
          <div className="space-y-20">
            {professionalDevelopmentItems.map((item, index) => (
              <div key={index} className="slide-in bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className={item.logo ? "grid grid-cols-1 lg:grid-cols-3 gap-12" : "max-w-4xl mx-auto p-8"}>
                  {/* Logo Section with hover animation */}
                  {item.logo && (
                    <div className="lg:col-span-1 p-8 flex items-center justify-center bg-gradient-to-br from-slate-50 to-orange-50">
                      <div className="w-56 h-56 rounded-full bg-white p-6 shadow-lg flex items-center justify-center">
                        <img 
                          src={item.logo}
                          alt={item.title}
                          className="w-44 h-44 object-contain"
                        />
                      </div>
                    </div>
                  )}

                  {/* Content Section with fade-in */}
                  <div className={item.logo ? "lg:col-span-2 p-8 lg:pr-12" : "py-6"}>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-4 border-b border-orange-200">
                      {item.title}
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed text-justify">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProfessionalDevelopment;