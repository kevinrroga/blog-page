import PageTransition from './PageTransition';
import SEO from './SEO';
import { useEffect } from 'react';
import llm1 from '@assets/llm1.png';
import llm2 from '@assets/llm2.png';

const SALLLM = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <SEO
        title="Master's Study in Law (LL.M) - Scholarships | ELSA Albania"
        description="Learn about LL.M. opportunities in Chicago with 75%-100% scholarships and how to apply."
        url="https://elsa-albania.org/sal/llm"
      />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero */}
        <section className="relative bg-slate-900 text-white py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              Master's Study in Law (LL.M) with 75%-100% Scholarships
              <br />
              <span className="block text-lg md:text-xl font-medium mt-3">In Chicago, IL, USA</span>
            </h1>

            <p className="mt-6 text-slate-300 max-w-3xl mx-auto">
              Chicago-Kent College of Law, a top-tier American law school affiliated with Illinois Institute of Technology - Illinois Tech, through the School of American Law, announces two interconnected stages offering substantial 75% scholarships exclusively designed for legal professionals.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://salchicagokent.com/school/albania/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Visit SAL Program
              </a>
            </div>
          </div>
        </section>

        {/* Images: moved to Visual Highlights further down */}

        {/* Content */}
        <section className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="space-y-10">
              {/* Stage 1 - SAL */}
              <article className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold mb-3">Stage 1 — School of American Law (SAL) Program</h2>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li>The SAL program's duration is two semesters, spanning from <strong>February 2026 to December 2026</strong>. SAL graduates arrive in  Chicago in December 2026 if they continue the LL.M semester at Chicago-Kent immediately after the SAL. Generally, graduates have 3 years to continue their LL.M semester at Chicago.</li>
                  <li>After SAL graduation, students become eligible to continue their LL.M at Chicago-Kent in Chicago, USA.</li>
                  <li>SAL courses are designed in a hybrid mode and can be taken online or in person at our SAL locations.</li>
                  <li>SAL courses are scheduled once a month on weekends. Only 10 weekends are busy with with the SAL classes. The SAL delivers 10 mandatory business courses with advanced standing credits to complete an LL.M in Chicago.</li>
                  <li>Only Chicago-Kent professors teach SAL courses. Our academics are consistently ranked among the nation's best.</li>
                  <li><strong>TOEFL/IELTS is not required</strong> to start the SAL program.</li>
                  <li>An advisory session is available to assist SAL students in navigating the LL.M. application process and applying for an F1-F2 student visa for education abroad.</li>
                </ul>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-50 p-4 rounded">
                    <h3 className="font-semibold">SAL Tuition</h3>
                    <p className="text-slate-700 mt-2">Standard tuition: <strong>€6,850</strong></p>
                    <p className="text-slate-700">ELSA Albania member discount: <strong>20% → €5,480</strong></p>
                    <p className="text-slate-700 mt-2">Tuition can be paid in <strong>three installments</strong>.</p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded">
                    <h3 className="font-semibold">How to Apply</h3>
                    <p className="text-slate-700 mt-2">Submit electronically the following (in English):</p>
                    <ul className="list-disc pl-5 mt-2 text-slate-700 space-y-1">
                      <li>CV in English (updated)</li>
                      <li>Copy of Law diploma(s)</li>
                      <li>Copy of Passport or ID</li>
                      <li>Recommender contact (name, position, phone, email) included in CV</li>
                      <li>Bar membership card</li>
                    </ul>
                    <p className="text-slate-700 mt-2">If diplomas are in a language other than English, provide an English translation (not notarized).</p>
                    <p className="mt-3"><strong>Send applications to:</strong></p>
                    <p className="text-slate-700"><a className="text-orange-600" href="mailto:admissions@salchicagokent.com">admissions@salchicagokent.com</a></p>
                    <p className="text-slate-700"><a className="text-orange-600" href="mailto:admission@chicagokentlaw.ge">admission@chicagokentlaw.ge</a></p>
                  </div>
                </div>
              </article>

              {/* Stage 2 - LL.M */}
              <article className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold mb-3">Stage 2 - LL.M at Chicago-Kent College of Law, Illinois Tech</h2>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li>After graduating from SAL, students smoothly transition to the LL.M. in Chicago, Illinois, USA.</li>
                  <li>The continuation of the LL.M. program at Chicago-Kent, Illinois Tech, is fully guaranteed.</li>
                  <li>An LL.M. degree can be earned in <strong>5 months (one semester)</strong> or <strong>9 months (two semesters)</strong>.</li>
                  <li>All SAL graduates automatically qualify and get a <strong>75% tuition scholarship</strong>.</li>
                  <li>The SAL graduate with a final GPA of <strong>4.0</strong> is awarded a <strong>100% tuition scholarship</strong>.</li>
                  <li>SAL graduates earn an LL.M. degree in one semester (five months) in U.S., International, and Transnational Law.</li>
                  <li>SAL graduates have the option to earn various LL.M. degrees within two semesters (approximately 9 months) in one of the following specialized programs: <strong>Global Business and Financial Service Law, Legal Innovation and Technology, Trial Advocacy, and International Intellectual Property Law</strong>.</li>
                  <li><strong>DUAL</strong> - LL.M./Master of Business Administration (MBA) degree program allowing students to obtain an LL.M. from Chicago-Kent College of Law and an MBA from Illinois Institute of Technology’s Stuart School of Business in two or two and a half years.</li>
                  <li>The SAL graduates receive comprehensive support throughout the visa application process, including assistance with gathering the required documentation and navigating the LL.M. application procedures. Additionally, the SAL graduates benefit from guidance and resources to find suitable housing.</li>
                  <li>The SAL graduates are assured of a <strong>TOEFL waiver</strong> for LL.M. continuation.</li>
                </ul>

                <div className="mt-6 bg-slate-50 p-4 rounded">
                  <h3 className="font-semibold">LL.M. tuition</h3>
                  <ul className="mt-2 text-slate-700 list-disc pl-5 space-y-1">
                    <li>For SAL graduates’ tuition for one semester at Chicago-Kent is <strong>$10,000</strong> instead of the regular fee of <strong>$43,860</strong></li>
                    <li>LL.M tuition is payable after arrival in Chicago in several instalments</li>
                    <li>If SAL graduates opt for the two-semester LL.M. study, the tuition for the second semester is <strong>7,250 USD</strong>.</li>
                    <li>Tuition for DUAL LL.M & MBA program is offered with <strong>45% scholarship</strong> - Substantial savings to make dual degrees more accessible from <strong>97,400 dollars</strong> fixed to <strong>53,570</strong> over two years</li>
                  </ul>
                </div>

                <div className="mt-6 bg-white p-4 rounded">
                  <h4 className="font-semibold">LL.M Advantages</h4>
                  <ul className="list-disc pl-5 mt-2 text-slate-700 space-y-1">
                    <li>SAL graduates are guaranteed the right to continue LL.M. studies either immediately or within <strong>three years</strong> after graduation from SAL.</li>
                    <li><strong>Internships:</strong> Practical experience through the innovative legal clinics at Chicago-Kent's in-house Law Group can stimulate career advancement.</li>
                    <li><strong>Externships:</strong> Chicago-Kent's deep connections within the Chicago legal community, top private law firms, corporations, and a diverse range of establishments will be an integral part of your experience.</li>
                    <li><strong>Individual Career Planning</strong> through the Career Services Office inside the university.</li>
                    <li><strong>OPT:</strong> Students spending two semesters at Chicago-Kent have access to the OPT in the USA, a 12-month post-study work permit.</li>
                    <li>After completing two semesters at Chicago-Kent, graduates are eligible to take the Bar Exam in the United States.</li>
                  </ul>
                </div>
                {/* Visual highlights: smaller, centered images with captions */}
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3">Visual highlights</h3>
                  <div className="flex gap-6 justify-center items-start">
                    <figure className="text-center bg-slate-50 rounded-md p-2">
                      <img src={llm1} alt="LL.M. cohort" className="w-56 md:w-72 h-44 md:h-52 object-contain rounded-md shadow-lg bg-white" loading="lazy" decoding="async" style={{ objectPosition: 'center' }} />
                    </figure>

                    <figure className="text-center bg-slate-50 rounded-md p-2">
                      <img src={llm2} alt="Chicago-Kent campus" className="w-56 md:w-72 h-44 md:h-52 object-contain rounded-md shadow-lg bg-white" loading="lazy" decoding="async" style={{ objectPosition: 'center' }} />
                      </figure>
                  </div>
                </div>

                <div className="mt-6 bg-white p-4 rounded">
                  <h4 className="font-semibold">Location & Credentials</h4>
                  <p className="text-slate-700">Chicago-Kent boasts the world's best location, situated in the heart of Chicago, one of the nation's top legal and financial hubs. The law school is situated within the downtown "Loop," just blocks away from the city's courthouses, government centers, and numerous law firms.</p>

                  <h5 className="mt-4 font-semibold">Chicago-Kent Credentials</h5>
                  <ul className="list-disc pl-5 mt-2 text-slate-700 space-y-1">
                    <li>One of the few U.S. law schools, Chicago-Kent is part of a Tech University.</li>
                    <li>Chicago-Kent Rankings</li>
                    <li>Top 12 in Trial Advocacy</li>
                    <li>Top 18 in Intellectual Property Law</li>
                    <li>Top 40 in Legal Writing</li>
                    <li>A+ for Labor and Employment Law</li>
                  </ul>

                  <h5 className="mt-4 font-semibold">Chicago-Kent graduates' employment rate</h5>
                  <ul className="list-disc pl-5 mt-2 text-slate-700 space-y-1">
                    <li>66.2% right after graduation</li>
                    <li>90.7% within 9 months following the graduation</li>
                    <li>Chicago-Kent graduates' bar pass rate</li>
                    <li>88.7% ULTIMATE BAR PASS RATE</li>
                    <li>88.2% TOTAL EMPLOYMENT RATE 10 months post-graduation (2022)</li>
                  </ul>
                </div>
              </article>

              {/* Contact & CTA */}
              <article className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold mb-3">Contact & Next Steps</h2>
                <p className="text-slate-700">For program-specific information, application assistance and scholarship confirmation, contact SAL admissions or Chicago-Kent:</p>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-slate-50 p-4 rounded">
                    <h4 className="font-semibold">SAL Admissions</h4>
                    <p className="text-slate-700 mt-2"><a className="text-orange-600" href="mailto:admissions@salchicagokent.com">admissions@salchicagokent.com</a></p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded">
                    <h4 className="font-semibold">Chicago-Kent Admissions</h4>
                    <p className="text-slate-700 mt-2"><a className="text-orange-600" href="mailto:admission@chicagokentlaw.ge">admission@chicagokentlaw.ge</a></p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded">
                    <h4 className="font-semibold">ELSA Albania</h4>
                    <p className="text-slate-700 mt-2"><a className="text-orange-600" href="mailto:president@al.elsa.org">president@al.elsa.org</a></p>
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href="mailto:admissions@salchicagokent.com"
                    className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors mr-3"
                  >
                    Apply via Email
                  </a>
                  <a
                    href="https://salchicagokent.com/school/albania/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-slate-700 hover:bg-slate-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    SAL Program Page
                  </a>
                </div>
              </article>

              
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default SALLLM;
