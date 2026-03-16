// import { ClipboardCheck, Search, Wrench, Smile } from 'lucide-react';

// export default function Steps() {
//   const steps = [
//     { icon: <ClipboardCheck size={22} />, title: 'Chat',   desc: 'Chat with us — no paperwork, no hassle.' },
//     { icon: <Search size={22} />,         title: 'Assess',  desc: 'We carry out a site audit and recommend the right system for you.' },
//     { icon: <Wrench size={22} />,         title: 'Install', desc: 'Our certified engineers install and activate your system within 48 hrs.' },
//     { icon: <Smile size={22} />,          title: 'Enjoy',   desc: 'Start enjoying dependable solar power with flexible PayGo payments.' },
//   ];

//   return (
//     <section className="steps">

//       {/* Dot grid */}
//       <svg className="steps-bg" xmlns="http://www.w3.org/2000/svg">
//         <defs>
//           <pattern id="dotgrid" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
//             <circle cx="1" cy="1" r="1" fill="#cbd5e1" opacity="0.5" />
//           </pattern>
//         </defs>
//         <rect width="100%" height="100%" fill="url(#dotgrid)" />
//       </svg>

//       <div className="steps-blob steps-blob--1" />
//       <div className="steps-blob steps-blob--2" />

//       <div >
//         <div className="steps-header">
//           <span className="steps-eyebrow">The Process</span>
//           <h2 className="steps-title">How It <span>Works</span></h2>
//           <p className="steps-subtitle">Four simple steps to energy independence.</p>
//         </div>

//         <div className="steps-grid container">
          
//           {steps.map((step, i) => (
//             <div key={i} className='steps-each'>
//               <div className="step-card">
//                 <div className="step-card__fill" />
//                 <div className="step-card__num">0{i + 1}</div>
//                 <div className="step-card__icon">{step.icon}</div>
//                 <div className="step-card__title">{step.title}</div>
//                 <p className="step-card__desc">{step.desc}</p>
//               </div>
//               {i < 3 && (
//                 <div className="steps-arrow">
//                   <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
//                     stroke="#f4ca25" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M5 12h14M13 6l6 6-6 6" />
//                   </svg>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="steps-strip" />
//     </section>
//   );
// }






















import { ClipboardCheck, Search, Wrench, Smile } from 'lucide-react';

export default function Steps() {
  const steps = [
    { icon: <ClipboardCheck size={22} />, title: 'Chat',   desc: 'Chat with us — no paperwork, no hassle.' },
    { icon: <Search size={22} />,         title: 'Assess',  desc: 'We carry out a site audit and recommend the right system for you.' },
    { icon: <Wrench size={22} />,         title: 'Install', desc: 'Our certified engineers install and activate your system within 48 hrs.' },
    { icon: <Smile size={22} />,          title: 'Enjoy',   desc: 'Start enjoying dependable solar power with flexible PayGo payments.' },
  ];
  const defaultMessage = encodeURIComponent("Hello Enerplaz, I'm interested in your PayGo services. Can I get more information?");

  return (
    <section className="steps">

      {/* Dot grid */}
      <svg className="steps-bg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dotgrid" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#cbd5e1" opacity="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotgrid)" />
      </svg>

      <div className="steps-blob steps-blob--1" />
      <div className="steps-blob steps-blob--2" />

      <div >
        <div className="steps-header">
          <span className="steps-eyebrow">The Process</span>
          <h2 className="steps-title">How It <span>Works</span></h2>
          <p className="steps-subtitle">Four simple steps to energy independence.</p>
        </div>

        <div className="steps-grid container">
          
          {steps.map((step, i) => {
            const cardContent = (
              <div className="step-card">
                <div className="step-card__fill" />
                <div className="step-card__num">0{i + 1}</div>
                <div className="step-card__icon">{step.icon}</div>
                <div className="step-card__title">{step.title}</div>
                <p className="step-card__desc">{step.desc}</p>
              </div>
            );

            return (
              <div key={i} className='steps-each'>
                {i === 0 ? (
                  <a
                    href={`https://wa.me/09121111163?text=${defaultMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="step-card-link"
                    aria-label="Chat on WhatsApp"
                  >
                    {cardContent}
                  </a>
                ) : cardContent}

                {i < 3 && (
                  <div className="steps-arrow">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
                      stroke="#f4ca25" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="steps-strip" />
    </section>
  );
}

