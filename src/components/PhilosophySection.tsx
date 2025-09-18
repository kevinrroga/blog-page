import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const PhilosophySection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-16 px-4 lg:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-6 -ml-8 lg:-ml-8"> {/* Added lg: prefix to keep on large screens only */}
            {/* Quote Mark */}
            <div className="text-orange-500 text-8xl font-bold leading-none pl-8">
              "
            </div>
            
            {/* Title and Quote */}
            <div className="space-y-4 pl-8 lg:pl-8"> {/* Added lg: prefix to keep on large screens only */}
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                {t.missionTitle}
              </h2>
              
              <div className="text-blue-600 font-semibold text-sm tracking-wider mb-6">
                {t.sinceMarch}
              </div>

              <blockquote className="text-xl font-medium text-gray-900 leading-relaxed">
                {t.missionQuote}
              </blockquote>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 lg:pl-8"> {/* Added lg: prefix to apply padding only on large screens */}
            {/* Description */}
            <p className="text-sm lg:text-base text-slate-600 text-justify max-w-prose">
              {t.missionDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;