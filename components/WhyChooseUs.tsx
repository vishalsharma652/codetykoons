'use client';
import { useEffect, useRef, useState } from 'react';
import { FiTrendingUp, FiZap, FiCheckCircle, FiShield } from 'react-icons/fi';

const features = [
  {
    title: 'Ultra-Fast Performance',
    desc: 'We construct lightweight websites optimizing server-side speed benchmarks.',
    icon: <FiZap size={22} className="text-[#a855f7]" />,
    color: 'border-[#a855f7]/20 hover:border-[#a855f7]/40 hover:bg-[#a855f7]/5',
  },
  {
    title: 'Futuristic AI Tech',
    desc: 'Implement OpenAI and automated workflows to increase operating margins.',
    icon: <FiTrendingUp size={22} className="text-[#6366f1]" />,
    color: 'border-[#6366f1]/20 hover:border-[#6366f1]/40 hover:bg-[#6366f1]/5',
  },
  {
    title: 'Pixel-Perfect Designs',
    desc: 'Eye-catching glassmorphism interfaces customized for desktop and mobile.',
    icon: <FiCheckCircle size={22} className="text-[#10b981]" />,
    color: 'border-[#10b981]/20 hover:border-[#10b981]/40 hover:bg-[#10b981]/5',
  },
  {
    title: 'Secured Cloud Scale',
    desc: 'Secure deployment workflows protecting private data integrations.',
    icon: <FiShield size={22} className="text-[#3b82f6]" />,
    color: 'border-[#3b82f6]/20 hover:border-[#3b82f6]/40 hover:bg-[#3b82f6]/5',
  },
];

export default function WhyChooseUs() {
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
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_2fr] gap-16 items-center">
        
        {/* Left text */}
        <div className="flex flex-col">
          <span className="inline-block bg-[#6366f1]/12 border border-[#6366f1]/30 text-[#a5b4fc] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 w-fit">
            Highlights
          </span>
          <h2 className="font-['Outfit'] text-[clamp(2.2rem,4vw,3.2rem)] font-extrabold text-white tracking-tight leading-[1.2] mb-6">
            Why Partner with <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">CodeTykoons?</span>
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-6">
            We are dedicated to building modern products that elevate your business. We don't just write code; we deliver high-performance growth systems customized to your exact requirements.
          </p>
        </div>

        {/* Right cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feat, index) => (
            <div
              key={index}
              className={`bg-white/[0.01] border rounded-[22px] p-6 transition-all duration-500 flex flex-col gap-4 ${feat.color} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="w-10 h-10 rounded-xl bg-white/[0.03] flex items-center justify-center border border-white/5 select-none">
                {feat.icon}
              </div>
              <div>
                <h4 className="text-[17px] font-bold text-white mb-2 font-['Outfit']">{feat.title}</h4>
                <p className="text-white/50 text-[13px] leading-relaxed m-0">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
