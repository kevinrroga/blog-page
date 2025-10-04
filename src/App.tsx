import { LanguageProvider } from './contexts/LanguageContext';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HeroSection from './components/HeroSection'
import PhilosophySection from './components/PhilosophySection'
import GalleryStats from './components/GalleryStats'
import PageTransition from './components/PageTransition';
import BoardPage from './components/BoardPage';
import Layout from './components/Layout';
import AcademicActivities from './components/AcademicActivities';
import Competitions from './components/Competitions';
import ProfessionalDevelopment from './components/ProfessionalDevelopment';
import SeminarsConferences from './components/Seminars';
import Alumni from './components/Alumni';
import TeamPage from './components/TeamPage';
import SEO from './components/SEO';
import Header from './components/Header';
import Footer from './components/Footer';

function HomePage() {
  return (
    <PageTransition>
      <SEO 
        title="ELSA Albania | Home"
        description="The European Law Students' Association (ELSA) Albania is a non-political, independent, non-profit organisation run by and for law students and young lawyers."
        url="https://elsa-albania.org/"
      />
      <main>
        <HeroSection />
        <PhilosophySection />
        <GalleryStats />
      </main>
    </PageTransition>
  );
}

function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <Router>
        <LanguageProvider>
          <Header />
          <AnimatePresence mode="wait">
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="/board" element={<BoardPage />} />
                <Route path="/academic-activities" element={<AcademicActivities />} />
                <Route path="/competitions" element={<Competitions />} />
                <Route path="/professional-development" element={<ProfessionalDevelopment />} />
                <Route path="/seminars-conferences" element={<SeminarsConferences />} />
                <Route path="/alumni" element={<Alumni />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
            </Routes>
          </AnimatePresence>
          <Footer />
        </LanguageProvider>
      </Router>
    </div>
  )
}

export default App