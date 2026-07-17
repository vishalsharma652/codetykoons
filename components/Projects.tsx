'use client';
import { useEffect, useRef, useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const projects = [
  {
    title: 'AI Support Agent',
    category: 'AI Automation',
    desc: 'An automated lead scoring and customer support agent handling 10k+ daily queries.',
    gradient: 'from-[#6366f1] to-[#8b5cf6]',
  },
  {
    title: 'Tycoon Dashboard',
    category: 'Website Development',
    desc: 'A premium Next.js SaaS dashboard with real-time analysis, charts, and dark glassmorphism styling.',
    gradient: 'from-[#a855f7] to-[#ec4899]',
  },
  {
    title: 'Apex Campaign Engine',
    category: 'Digital Marketing',
    desc: 'Automated SEO keyword analysis and PPC management tracker boosting lead conversion by 45%.',
    gradient: 'from-[#3b82f6] to-[#06b6d4]',
  },
  {
    title: 'SwiftPay Mobile App',
    category: 'Software App',
    desc: 'Secure cross-platform fintech wallet app built for secure client money transfers.',
    gradient: 'from-[#10b981] to-[#3b82f6]',
  },
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 px-8 relative" ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#6366f1]/12 border border-[#6366f1]/30 text-[#a5b4fc] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4">
            Showcase
          </span>
          <h2 className="font-['Outfit'] text-[clamp(2rem,4vw,2.8rem)] font-extrabold text-white tracking-tight mb-4">
            Featured <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-white/55 text-base max-w-[480px] mx-auto leading-relaxed">
            Take a look at some of the digital products we have developed for our partners.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, index) => (
            <div
              key={index}
              className={`bg-white/[0.01] border border-white/[0.07] rounded-[24px] p-8 flex flex-col justify-between transition-all duration-700 hover:border-[#6366f1]/30 hover:bg-[#6366f1]/5 group relative overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Top Details */}
              <div>
                <span className={`inline-block bg-gradient-to-r ${proj.gradient} text-white px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-4`}>
                  {proj.category}
                </span>
                <h3 className="font-['Outfit'] text-2xl font-bold text-white mb-3 tracking-tight flex items-center gap-2 group-hover:text-[#a5b4fc] transition-colors duration-300">
                  {proj.title}
                  <FiArrowUpRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-[#a5b4fc]" size={20} />
                </h3>
                <p className="text-white/50 text-sm leading-relaxed m-0 mb-6">
                  {proj.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
