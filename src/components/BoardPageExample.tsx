// Example showing how to use the SEO component in a specific page

import SEO from './SEO';
import PageTransition from './PageTransition';
// import { useLanguage } from '../contexts/LanguageContext';
// import { translations } from '../translations';

const BoardPageExample = () => {
  // const { language } = useLanguage();
  // const t = translations[language];

  return (
    <PageTransition>
      <SEO 
        title="Board and Team | ELSA Albania"
        description="Meet the dedicated team of ELSA Albania. Learn about our board members and their roles in the organization."
        url="https://elsa-albania.org/board"
        type="website"
        image="https://elsa-albania.org/assets/board-group-photo.jpg"
      />
      
      {/* Rest of the board page content */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">Board and Team</h1>
        {/* Board content would go here */}
      </div>
    </PageTransition>
  );
};

export default BoardPageExample;