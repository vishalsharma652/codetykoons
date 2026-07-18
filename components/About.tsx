'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const values = [
  {
    icon: '🚀',
    title: 'Innovation First',
    desc: 'We leverage the latest tech to keep your business ahead of the curve.',
  },
  {
    icon: '🎯',
    title: 'Result Driven',
    desc: 'Every strategy we implement is measured by real business outcomes.',
  },
  {
    icon: '🤝',
    title: 'Client Partnership',
    desc: "Your success is our success. We're with you every step of the way.",
  },
  {
    icon: '⚡',
    title: 'Agile Delivery',
    desc: 'Fast, iterative delivery so you see results quickly and adapt early.',
  },
];

export default function About() {
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
    <section className="py-24 px-8 relative overflow-hidden" id="about" ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Column (Logo Emblem Showcase Card) */}
        <div className="relative flex justify-center lg:justify-start">
          <div className={`relative w-full max-w-[360px] bg-white/[0.02] border border-white/10 rounded-[32px] shadow-2xl backdrop-blur-md transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Glow backdrop */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-[33px] blur-lg opacity-25 group-hover:opacity-40 transition duration-1000 z-0" />
            
            {/* Content Image Container */}
            <div className="relative z-10 overflow-hidden rounded-[32px] border border-white/5">
              <Image
                src="/about_showcase.jpg"
                alt="CodeTykoons Digital Illustration"
                width={360}
                height={360}
                className="w-full h-auto object-cover rounded-[32px] hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-5 -right-5 bg-gradient-to-br from-[#6366f1] to-[#a855f7] rounded-2xl p-4 flex flex-col items-center z-20 shadow-[0_10px_30px_rgba(99,102,241,0.5)]">
              <span className="font-['Outfit'] text-[30px] font-extrabold text-white leading-none">4+</span>
              <span className="text-[11px] text-white/90 text-center font-medium mt-1 whitespace-nowrap">Years of Excellence</span>
            </div>
          </div>
        </div>

        {/* Right Column (Text details) */}
        <div className="flex flex-col">
          <span className={`inline-block bg-[#6366f1]/12 border border-[#6366f1]/30 text-[#a5b4fc] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 w-fit transition-all duration-700 delay-75 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            About Us
          </span>
          
          <h2 className={`font-['Outfit'] text-[clamp(2.2rem,4vw,3.2rem)] font-extrabold text-white tracking-tight leading-[1.2] mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Empowering Businesses with <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">Smart Technology</span>
          </h2>
          
          <p className={`text-white/60 text-base leading-relaxed mb-4 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            CodeTykoons is a full-service digital agency passionate about helping businesses grow through
            cutting-edge technology. We specialize in building impactful digital products — from beautiful
            websites to powerful AI-driven automations.
          </p>
          
          <p className={`text-white/60 text-base leading-relaxed mb-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Our team of experts combines creativity with technical excellence to deliver solutions that not
            only look great but also perform exceptionally well. We treat every project as a partnership,
            ensuring your business goals are at the core of everything we build.
          </p>

          {/* Core Values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`bg-white/[0.02] border border-white/[0.07] rounded-2xl p-5 flex gap-4 items-start transition-all duration-500 hover:border-[#6366f1]/35 hover:bg-[#6366f1]/5 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{ transitionDelay: `${250 + i * 50}ms` }}
              >
                <span className="text-2xl shrink-0 leading-none select-none">{v.icon}</span>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">{v.title}</h4>
                  <p className="text-[13px] text-white/50 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
