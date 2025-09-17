import { motion, useScroll, useSpring } from 'framer-motion';
import { ReactNode, useEffect } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-orange-500 origin-left z-50"
        style={{ scaleX }}
      />
      <motion.div
        initial={{ 
          opacity: 0,
          y: 20,
          filter: 'blur(10px)',
          scale: 0.95
        }}
        animate={{ 
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          scale: 1
        }}
        exit={{ 
          opacity: 0,
          y: -20,
          filter: 'blur(10px)',
          scale: 0.95
        }}
        transition={{ 
          duration: 0.4,
          ease: [0.65, 0, 0.35, 1],
          staggerChildren: 0.1
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageTransition;
