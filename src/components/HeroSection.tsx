import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const HeroSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="bg-gradient-to-br from-slate-800 via-slate-800 to-slate-700 h-[80vh] flex items-center">
      <style>{`
        .slide-in {
          opacity: 0;
          transform: translateX(-50px);
          animation: slideIn 0.8s forwards;
        }

        .slide-in:nth-child(1) { animation-delay: 0s; }
        .slide-in:nth-child(2) { animation-delay: 0.3s; }
        .slide-in:nth-child(3) { animation-delay: 0.6s; }
        .slide-in:nth-child(4) { animation-delay: 0.9s; }

        @keyframes slideIn {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-white space-y-8">
          <div className="text-sm text-slate-300 tracking-wider uppercase">
            {t.heroSubtitle}
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-5xl font-bold leading-tight">
              <div className="text-white slide-in">{t.academicActivities}</div>
              <div className="text-amber-400 slide-in">{t.competitions}</div>
              <div className="text-orange-500 slide-in">{t.professionalDevelopment}</div>
              <div className="text-cyan-500 slide-in">{t.seminarsConferences}</div>
            </h1>
          </div>
        </div>

        {/* Right Content */}
        <div className="text-white space-y-6">
          <p className="text-base lg:text-lg text-slate-400 mb-8">
            {t.heroDescription}
          </p>
        </div>
      </div>
      
      {/* Background Image Strip
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-r from-amber-900 via-orange-800 to-amber-900 opacity-20">
        <div className="h-full bg-[url('https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg')] bg-cover bg-center opacity-60"></div>
      </div> */}
    </section>
  );
};

export default HeroSection;