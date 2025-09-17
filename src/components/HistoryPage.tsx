import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import PhilosophySection from './PhilosophySection';
import GalleryStats from './GalleryStats';
import PageTransition from './PageTransition';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

const HistoryPage = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <PageTransition>
      <main className="min-h-screen">
        <motion.div 
          className="bg-slate-800 py-20 text-white text-center relative overflow-hidden"
          initial={{ backgroundColor: "#1e293b" }}
          animate={{ 
            backgroundColor: ["#1e293b", "#2d3a4f", "#1e293b"],
            transition: { 
              duration: 5, 
              repeat: Infinity,
              repeatType: "reverse" 
            }
          }}
        >
          <AnimatedSection>
            <h1 className="text-4xl font-bold mb-4">{t.History}</h1>
            <p className="text-xl text-gray-300">Our Journey Through Time</p>
          </AnimatedSection>
          
          <motion.div 
            className="absolute inset-0 opacity-10"
            initial={{ backgroundPosition: "0% 0%" }}
            animate={{ 
              backgroundPosition: ["0% 0%", "100% 100%"],
              transition: { 
                duration: 20, 
                repeat: Infinity,
                repeatType: "reverse" 
              }
            }}
            style={{
              backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
              backgroundSize: "60px 60px"
            }}
          />
        </motion.div>

        <AnimatedSection delay={0.2}>
          <PhilosophySection />
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <GalleryStats />
        </AnimatedSection>
      </main>
    </PageTransition>
  );
};

export default HistoryPage;
