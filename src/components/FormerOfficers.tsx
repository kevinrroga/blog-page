import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import PageTransition from './PageTransition';
import SEO from './SEO';

interface Officer {
  position: string;
  name: string;
}

interface BoardTerm {
  period: string;
  members: Officer[];
}

// National Boards of ELSA Albania (most recent first)
const formerBoards: BoardTerm[] = [
  {
    period: '2025/2026',
    members: [
      { position: 'President', name: 'Jon Kola' },
      { position: 'Secretary General', name: 'Kostandino Rroga' },
      { position: 'Vice President in Charge of Marketing', name: 'Stivi Meta' },
      { position: 'Vice President in Charge of Academic Activities', name: 'Martina Gllavaj' },
      { position: 'Vice President in Charge of Professional Development', name: 'Teuta Elezaj' },
      { position: 'Vice President in Charge of Seminars & Conferences', name: 'Marios Prendi' },
    ],
  },
  {
    period: '2024/2025',
    members: [
      { position: 'President', name: 'Kostandino Rroga' },
      { position: 'Secretary General', name: 'Jon Kola' },
      { position: 'Treasurer', name: 'Paula Hodaj' },
      { position: 'Vice President in Charge of Marketing', name: 'Sefeda Lazaj' },
      { position: 'Vice President in Charge of Competitions', name: 'Rei Zoto' },
      { position: 'Vice President in Charge of Academic Activities', name: 'Stejsi Shameti' },
      { position: 'Vice President in Charge of Professional Development', name: 'Elizabeta Gjoka' },
      { position: 'Vice President in Charge of Seminars & Conferences', name: 'Arba Ollomani' },
    ],
  },
  {
    period: '2023/2024',
    members: [
      { position: 'President', name: 'Edmorela Myftaraj' },
      { position: 'Secretary General', name: 'Kriselda Dedndreaj' },
      { position: 'Treasurer', name: 'Martina Gllavaj' },
      { position: 'Vice President in Charge of Marketing', name: 'Driola Kraja' },
      { position: 'Vice President in Charge of Competitions', name: 'Mikaela Gabeta' },
      { position: 'Vice President in Charge of Academic Activities', name: 'Kostandino Rroga' },
      { position: 'Vice President in Charge of Professional Development', name: 'Mergit Topalli' },
      { position: 'Vice President in Charge of Seminars & Conferences', name: 'Jon Kola' },
    ],
  },
  {
    period: '2022/2023',
    members: [
      { position: 'President', name: 'Dhimitër Zguro' },
      { position: 'Secretary General', name: 'Rea Lamaj' },
      { position: 'Treasurer', name: 'Teisa Kurti' },
      { position: 'Vice President in Charge of Marketing', name: 'Engjëllushe Haxhi' },
      { position: 'Vice President in Charge of Competitions', name: 'Jona Gashi' },
      { position: 'Vice President in Charge of Academic Activities', name: 'Kriselda Dedndreaj' },
      { position: 'Vice President in Charge of Professional Development', name: 'Ernest Alushaj' },
      { position: 'Vice President in Charge of Seminars & Conferences', name: 'Edmorela Myftaraj' },
    ],
  },
  {
    period: '2021/2022',
    members: [
      { position: 'President', name: 'Teisa Kurti' },
      { position: 'Secretary General', name: 'Servete Çeka' },
      { position: 'Vice President in Charge of Marketing', name: 'Engjëllushe Haxhi' },
      { position: 'Vice President in Charge of Moot Court Competitions', name: 'Enegrida Bënja' },
      { position: 'Vice President in Charge of Academic Activities', name: 'Dhimitër Zguro' },
      { position: 'Vice President in Charge of STEP', name: 'Senada Aliu' },
      { position: 'Vice President in Charge of Seminars & Conferences', name: 'Borana Fuqi' },
    ],
  },
  {
    period: '2020/2021',
    members: [
      { position: 'President', name: 'Glen Mebelli Bardhi' },
      { position: 'Secretary General', name: 'Edrilona Uzeiri' },
      { position: 'Treasurer', name: 'Elbjana Murati' },
      { position: 'Vice President in Charge of Marketing', name: 'Engjëllushe Haxhi' },
      { position: 'Vice President in Charge of Moot Court Competitions', name: 'Eva Tafçiu' },
      { position: 'Vice President in Charge of Academic Activities', name: 'Teisa Kurti' },
      { position: 'Vice President in Charge of STEP', name: 'Servete Çeka' },
      { position: 'Vice President in Charge of Seminars & Conferences', name: 'Luizita Voda' },
    ],
  },
  {
    period: '2019/2020',
    members: [
      { position: 'President', name: 'Marash Logu' },
      { position: 'Secretary General', name: 'Esmeralda Dida' },
      { position: 'Treasurer', name: 'Armino Halla' },
      { position: 'Vice President in Charge of Marketing', name: 'Kristina Nikaj' },
      { position: 'Vice President in Charge of Academic Activities', name: 'Jozef Shkambi' },
      { position: 'Vice President in Charge of STEP', name: 'Kristal Shytani' },
      { position: 'Vice President in Charge of Seminars & Conferences', name: 'Glen Mebelli' },
    ],
  },
  {
    period: '2018/2019',
    members: [
      { position: 'President', name: 'Fiona Kamberi' },
      { position: 'Secretary General', name: 'Gladiola Ago' },
      { position: 'Treasurer', name: 'Flavia Alliu' },
      { position: 'Vice President in Charge of Marketing', name: 'Kristina Nikaj' },
      { position: 'Vice President in Charge of Moot Court Competitions', name: 'Marash Logu' },
      { position: 'Vice President in Charge of Academic Activities', name: 'Esmeralda Dida' },
      { position: 'Vice President in Charge of STEP', name: 'Odeta Taçi' },
      { position: 'Vice President in Charge of Seminars & Conferences', name: 'Xhenila Tamizi' },
    ],
  },
  {
    period: '2017/2018',
    members: [
      { position: 'President', name: 'Teno Guga' },
      { position: 'Secretary General', name: 'Juna Hiçka' },
      { position: 'Treasurer', name: 'Esmir Hoxha' },
      { position: 'Vice President in Charge of Marketing', name: 'Fiona Kamberi' },
      { position: 'Vice President in Charge of Academic Activities', name: 'Ina Shënplaku' },
      { position: 'Vice President in Charge of Seminars & Conferences', name: 'Pamela Beleraj' },
    ],
  },
];

const FormerOfficers = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [openPeriod, setOpenPeriod] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const togglePeriod = (period: string) => {
    setOpenPeriod(prev => (prev === period ? null : period));
  };

  return (
    <PageTransition>
      <SEO
        title="Former Officers | ELSA Albania"
        description="The National Boards of ELSA Albania through the years."
        url="https://elsa-albania.org/former-officers"
      />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero */}
        <section className="bg-slate-900 text-white py-24 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {t.formerOfficers}
            </motion.h1>
            <p className="text-slate-300 text-lg">
              The National Boards of ELSA Albania through the years.
            </p>
          </div>
        </section>

        {/* Accordion */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 space-y-4">
            {formerBoards.map((board, index) => {
              const isOpen = openPeriod === board.period;
              return (
                <motion.div
                  key={board.period}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => togglePeriod(board.period)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-slate-50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg font-semibold text-slate-900">
                      National Board of ELSA Albania {board.period}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-orange-500 flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-1">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="text-slate-500 border-b border-slate-200">
                                <th className="text-left font-medium py-2 pr-4">Position</th>
                                <th className="text-left font-medium py-2">Name</th>
                              </tr>
                            </thead>
                            <tbody>
                              {board.members.map((officer, i) => (
                                <tr
                                  key={officer.position}
                                  className={i % 2 === 1 ? 'bg-slate-50' : ''}
                                >
                                  <td className="py-2 pr-4 text-slate-700 align-top">
                                    {officer.position}
                                  </td>
                                  <td className="py-2 text-slate-900 font-medium align-top">
                                    {officer.name}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default FormerOfficers;
