import PageTransition from './PageTransition';
import SEO from './SEO';
import HeroSection from './HeroSection';
import PhilosophySection from './PhilosophySection';
import GalleryStats from './GalleryStats';
import { useEffect } from 'react';

const SALMore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <SEO
        title="SAL - More | ELSA Albania"
        description="More information about the SAL program (Chicago-Kent) related to ELSA Albania."
        url="https://elsa-albania.org/sal/more"
      />

      {/* Reuse Home-like sections to match the home display */}
      <main>
        <HeroSection />
        <PhilosophySection />
        /* <GalleryStats /> */
      </main>
    </PageTransition>
  );
};

export default SALMore;
