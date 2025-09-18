import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { useEffect } from 'react';
import GalleryImage from './GalleryImage';
import { motion } from 'framer-motion';

const GalleryStats = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const images = [
    {
      src: '/images/ahc.png',
      alt: t.legalConference,
    },
    {
      src: '/images/ice.png',
      alt: t.modernCourthouse,
    },
    {
      src: '/images/j.png',
      alt: t.legalAssembly,
    },
    {
      src: '/images/wels.png',
      alt: t.academicGathering,
    },
    {
      src: '/images/sels.png',
      alt: 'International Conference',
    },
    {
      src: '/images/color_career.jpg',
      alt: 'Legal Symposium',
    },
  ];

  // Preload images
  useEffect(() => {
    images.forEach(({ src }) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const partners = [
    {
      logo: '../assets/frostfire.jpeg', // Move to public/images if not already there
      name: 'Frost & Fire',
      description: 'Supporting legal excellence',
    },
    {
      logo: '../assets/lrg.jpg', // Move to public/images if not already there
      name: 'Partner Organization 2',
      description: 'Advancing legal education',
    },
    {
      logo: '../assets/fdut.jpeg',
      name: 'Fakulteti i Drejtësisë',
      description: 'International cooperation',
    },
    {
      logo: '../assets/halimi.jpeg',
      name: 'Halimi Law & Tax',
      description: 'Professional development',
    },
    {
      logo: '../assets/europiani.jpg',
      name: 'Universiteti Europian i Tiranes',
      description: 'Professional development',
    },
    {
      logo: '../assets/epoka university.jpg',
      name: 'Epoka University',
      description: 'Professional development',
    },
    {
      logo: '../assets/komitetihelsinkit.jpeg',
      name: 'Komiteti Shqiptar i Helsinkit',
      description: 'Professional development',
    },
    {
      logo: '../assets/ndi.jpeg',
      name: 'NDI',
      description: 'Professional development',
    },
    {
      logo: '../assets/ministriadrejtesise.jpg',
      name: 'Ministria e Drejtësisë',
      description: 'Professional development',
    },
    {
      logo: '../assets/osce.jpeg',
      name: 'OSCE',
      description: 'Professional development',
    },
    {
      logo: '../assets/vcs.jpg',
      name: 'VCS',
      description: 'Professional development',
    },
    {
      logo: '../assets/ryco.jpg',
      name: 'Regional Youth Cooperation Office',
      description: 'Professional development',
    },
    {
      logo: '../assets/bba.jpeg',
      name: 'Beyond Barriers Association',
      description: 'Professional development',
    },
    {
      logo: '../assets/qq.jpg',
      name: 'Qëndresa Qytetare',
      description: 'Professional development',
    },
    {
      logo: '../assets/lawfirm.jpg',
      name: 'Partner Organization 4',
      description: 'Professional development',
    },
  ];

  return (
    <section className="bg-slate-900">
      {/* Gallery Section */}
      <div className="max-w-7xl mx-auto px-4 pt-16">
        <div className="flex items-center gap-2 h-[400px] w-full max-w-5xl mx-auto mb-16">
          {images.map((image, index) => (
            <GalleryImage key={index} src={image.src} alt={image.alt} />
          ))}
        </div>

        {/* Enhanced Partners Section */}
        <div className="pb-16">
          <div className="text-center mb-16">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100px' }}
              className="h-1 bg-orange-500 mx-auto mb-8"
              transition={{ duration: 0.8 }}
            />
            <h2 className="text-3xl font-bold text-white">{t.ourPartners}</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col items-center"
              >
                <div className="w-40 h-40 bg-white rounded-xl shadow-lg flex items-center justify-center mb-4 transform transition-all duration-300 hover:shadow-orange-500/20 hover:-translate-y-1">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-36 h-36 object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h3 className="text-orange-400 font-medium mb-1">
                  {partner.name}
                </h3>
                <p className="text-sm text-slate-300 text-center">
                  {partner.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryStats;