import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const AcademicActivities = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const activities = [
    {
      title: t.ahrcTitle,
      description: t.ahrcDescription,
      logo: '../assets/ahrc.jpg'
    },
    {
      title: t.roleTitle,
      description: t.roleDescription,
      logo: '../assets/rule_law.jpg'
    },
    {
      title: t.lawReviewTitle,
      description: t.lawReviewDescription,
      logo: '../assets/lrg.jpg'
    },
    {
      title: t.lrgTitle,
      description: t.lrgDescription,
      logo: '../assets/lrg.jpg'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50">
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

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6">{t.academicActivities}</h1>
          <p className="text-slate-300 max-w-3xl">{t.academicActivitiesIntro}</p>
        </div>
      </section>

      {/* Activities List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-16">
            {activities.map((activity, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md p-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center slide-in"
              >
                {/* Text Content */}
                <div className="lg:col-span-2 space-y-4">
                  <h2 className="text-2xl font-bold text-slate-900">
                    {activity.title}
                  </h2>
                  <p className="text-slate-600 text-justify">
                    {activity.description}
                  </p>
                </div>

                {/* Logo */}
                <div className="flex justify-center lg:justify-end">
                  <div className="bg-white rounded-lg flex items-center justify-center w-56 h-56 p-4 shadow">
                    <img 
                      src={activity.logo}
                      alt={activity.title}
                      className="w-full h-full object-contain"
                    />
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

export default AcademicActivities;