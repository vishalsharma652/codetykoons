'use client';
import { useEffect, useRef, useState } from 'react';
import { FiSearch, FiLayers, FiCpu, FiCompass } from 'react-icons/fi';

const steps = [
  {
    num: '01',
    title: 'Consult & Research',
    desc: 'We analyze your business goals, identify automation opportunities, and plan the roadmap.',
    icon: <FiSearch size={22} />,
    color: 'from-[#6366f1] to-[#8b5cf6]',
  },
  {
    num: '02',
    title: 'Design & Prototype',
    desc: 'We draft sleek, modern mockups and visual designs tailored to your branding guidelines.',
    icon: <FiLayers size={22} />,
    color: 'from-[#a855f7] to-[#ec4899]',
  },
  {
    num: '03',
    title: 'Modern Development',
    desc: 'Our experts build your product using fast, scalable tech stacks like Next.js and Tailwind.',
    icon: <FiCpu size={22} />,
    color: 'from-[#3b82f6] to-[#06b6d4]',
  },
  {
    num: '04',
    title: 'AI Integration & Launch',
    desc: 'We integrate smart AI automations, thoroughly test your platform, and go live safely.',
    icon: <FiCompass size={22} />,
    color: 'from-[#10b981] to-[#3b82f6]',
  },
];

export default function Process() {
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
    <section className="py-24 px-8 relative overflow-hidden" ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block bg-[#6366f1]/12 border border-[#6366f1]/30 text-[#a5b4fc] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4">
            Workflow
          </span>
          <h2 className="font-['Outfit'] text-[clamp(2rem,4vw,2.8rem)] font-extrabold text-white tracking-tight mb-4">
            How We <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-white/75 text-base max-w-[480px] mx-auto leading-relaxed">
            Our structured, step-by-step methodology ensures high-quality execution from idea to deployment.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col relative bg-white/[0.01] border border-white/[0.06] rounded-[24px] p-8 transition-all duration-700 hover:border-[#6366f1]/25 hover:bg-[#6366f1]/5 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Step number badge */}
              <div className="flex justify-between items-start mb-6">
                <span className="font-['Outfit'] text-4xl font-extrabold text-white/10 group-hover:text-white/20 transition-colors duration-300">
                  {step.num}
                </span>
                <div className={`w-[48px] h-[48px] rounded-xl flex items-center justify-center bg-gradient-to-r ${step.color} text-white shadow-lg`} aria-hidden="true">
                  {step.icon}
                </div>
              </div>

              {/* Title & Desc */}
              <h3 className="font-['Outfit'] text-lg font-bold text-white mb-3 tracking-tight group-hover:text-[#a5b4fc] transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-white/70 text-[13.5px] leading-relaxed m-0">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
