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

function HomePage() {
  return (
    <PageTransition>
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
                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
            </Routes>
          </AnimatePresence>
        </LanguageProvider>
      </Router>
    </div>
  )
}

export default App