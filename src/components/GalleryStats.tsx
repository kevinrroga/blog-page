import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { useEffect } from 'react';
import GalleryImage from './GalleryImage';
import { motion } from 'framer-motion';

// Import gallery images
import imazh1 from '@assets/imazh1.jpeg';
import imazh2 from '@assets/imazh2.jpeg';
import imazh3 from '@assets/imazh3.jpeg';
import imazh4 from '@assets/imazh4.jpeg';
import imazh5 from '@assets/imazh5.jpeg';

// Import partner logos
import frostfireImg from '@assets/frostfire.jpeg';
import lrgImg from '@assets/lrg.jpg';
import fdutImg from '@assets/fdut.jpeg';
import halimiImg from '@assets/halimi.jpeg';
import europianiImg from '@assets/europiani.jpg';
import epokaImg from '@assets/epoka university.jpg';
import komitetihelsinikitImg from '@assets/komitetihelsinkit.jpeg';
// import ndiImg from '@assets/ndi.jpeg';
import ministriadrejtesiseImg from '@assets/ministriadrejtesise.jpg';
import osceImg from '@assets/osce.jpeg';
import vcsImg from '@assets/vcs.jpg';
import rycoImg from '@assets/ryco.jpg';
import bbaImg from '@assets/bba.jpeg';
import qqImg from '@assets/qq.jpg';
import lawfirmImg from '@assets/lawfirm.jpg';

const GalleryStats = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const images = [
    {
      src: imazh1,
      alt: t.legalConference,
    },
    {
      src: imazh2,
      alt: t.modernCourthouse,
    },
    {
      src: imazh3,
      alt: t.legalAssembly,
    },
    {
      src: imazh4,
      alt: t.academicGathering,
    },
    {
      src: imazh5,
      alt: t.legalAssembly,
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
      logo: frostfireImg,
      name: 'Frost & Fire',
    },
    {
      logo: lrgImg,
      name: 'Partner Organization 2',
    },
    {
      logo: fdutImg,
      name: 'Fakulteti i Drejtësisë',
    },
    {
      logo: halimiImg,
      name: 'Halimi Law & Tax',
    },
    {
      logo: europianiImg,
      name: 'Universiteti Europian i Tiranes',
    },
    {
      logo: epokaImg,
      name: 'Epoka University',

    },
    {
      logo: komitetihelsinikitImg,
      name: 'Komiteti Shqiptar i Helsinkit',

    },
    // {
    //   logo: ndiImg,
    //   name: 'NDI',

    // },
    {
      logo: ministriadrejtesiseImg,
      name: 'Ministria e Drejtësisë',

    },
    {
      logo: osceImg,
      name: 'OSCE',

    },
    {
      logo: vcsImg,
      name: 'CleanScore',

    },
    {
      logo: rycoImg,
      name: 'Regional Youth Cooperation Office',

    },
    {
      logo: bbaImg,
      name: 'Beyond Barriers Association',

    },
    {
      logo: qqImg,
      name: 'Qëndresa Qytetare',

    },
    {
      logo: lawfirmImg,
      name: 'K Law Firm',

    },
  ];

  return (
    <section className="bg-slate-900">
      {/* Gallery Section */}
      <div className="max-w-7xl mx-auto px-4 pt-16">
        <div className="flex items-center justify-center gap-2 h-[400px] w-full max-w-5xl mx-auto mb-16 overflow-x-auto">
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