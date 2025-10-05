import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="bg-gradient-to-br from-slate-800 via-slate-800 to-slate-700 min-h-[90vh] py-16 md:py-20 flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="text-white space-y-6 md:space-y-8">
          <div className="text-sm text-slate-300 tracking-wider uppercase">
            {/* Main organization name with typewriter effect */}
            <TypeAnimation
              sequence={[
                'The European Law Students\' Association Albania',
                500
              ]}
              wrapper="h2"
              speed={50}
              repeat={1}
              cursor={false}
              className="text-lg md:text-xl font-medium mb-4 md:mb-6"
            />
          </div>
          
          <div className="space-y-3 md:space-y-4">
            {/* Each activity typed individually with delays */}
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <TypeAnimation
                sequence={[
                  900, // Initial delay
                  t.academicActivities,
                  500
                ]}
                wrapper="h1"
                speed={50}
                repeat={1}
                cursor={false}
                className="text-white block"
              />
            </div>

            <div className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <TypeAnimation
                sequence={[
                  1600, // Delay after first item
                  t.competitions,
                  500
                ]}
                wrapper="h1"
                speed={50}
                repeat={1}
                cursor={false}
                className="text-amber-400 block"
              />
            </div>

            <div className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <TypeAnimation
                sequence={[
                  2300, // Delay after second item
                  t.professionalDevelopment,
                  500
                ]}
                wrapper="h1"
                speed={50}
                repeat={1}
                cursor={false}
                className="text-orange-500 block"
              />
            </div>

            <div className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <TypeAnimation
                sequence={[
                  3000, // Delay after third item
                  t.seminarsConferences,
                  500
                ]}
                wrapper="h1"
                speed={50}
                repeat={1}
                cursor={false}
                className="text-cyan-500 block"
              />
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="text-white space-y-4 md:space-y-6 mt-4 md:mt-0">
          <p className="text-sm md:text-base lg:text-lg text-slate-400 mb-4 md:mb-8">
            {t.heroDescription}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;