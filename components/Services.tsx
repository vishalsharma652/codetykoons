'use client';
import { useEffect, useRef, useState } from 'react';
import { FiTrendingUp, FiCode, FiSmartphone, FiCpu, FiCheck } from 'react-icons/fi';
import Link from 'next/link';

const services = [
  {
    id: 'digital-marketing',
    icon: <FiTrendingUp size={26} />,
    title: 'Digital Marketing',
    description:
      'Supercharge your brand with data-driven SEO, social media campaigns, PPC ads, and content strategies that convert visitors into loyal customers.',
    features: ['SEO Optimization', 'Social Media Ads', 'Content Strategy', 'Analytics & Reporting'],
    gradient: 'from-[#6366f1] to-[#8b5cf6]',
    glow: 'rgba(99, 102, 241, 0.3)',
    textColor: 'text-[#6366f1]',
  },
  {
    id: 'website-development',
    icon: <FiCode size={26} />,
    title: 'Website Development',
    description:
      'We craft blazing-fast, visually stunning websites with modern frameworks that deliver exceptional user experiences across all devices.',
    features: ['Custom Design', 'Next.js / React', 'CMS Integration', 'Performance Optimized'],
    gradient: 'from-[#a855f7] to-[#ec4899]',
    glow: 'rgba(168, 85, 247, 0.3)',
    textColor: 'text-[#a855f7]',
  },
  {
    id: 'software-app',
    icon: <FiSmartphone size={26} />,
    title: 'Software App',
    description:
      'End-to-end software solutions — from mobile apps to enterprise platforms — built with scalable architecture and clean code.',
    features: ['Mobile Apps', 'Web Applications', 'API Development', 'Cloud Deployment'],
    gradient: 'from-[#3b82f6] to-[#06b6d4]',
    glow: 'rgba(59, 130, 246, 0.3)',
    textColor: 'text-[#3b82f6]',
  },
  {
    id: 'ai-automation',
    icon: <FiCpu size={26} />,
    title: 'AI Automation',
    description:
      'Harness the power of artificial intelligence to automate workflows, boost productivity, and unlock intelligent insights for your business.',
    features: ['Chatbots & Agents', 'Process Automation', 'ML Integration', 'AI-Powered Tools'],
    gradient: 'from-[#10b981] to-[#3b82f6]',
    glow: 'rgba(16, 185, 129, 0.3)',
    textColor: 'text-[#10b981]',
  },
];

export default function Services() {
  const [visibleIds, setVisibleIds] = useState<string[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleIds((prev) => [...new Set([...prev, entry.target.id])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.service-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 px-8 relative" id="services" ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#6366f1]/12 border border-[#6366f1]/30 text-[#a5b4fc] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4">
            What We Do
          </span>
          <h2 className="font-['Outfit'] text-[clamp(2rem,4vw,3rem)] font-extrabold text-white tracking-tight mb-4">
            Our <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-white/55 text-[17px] max-w-[500px] mx-auto leading-relaxed">
            We offer comprehensive digital solutions tailored to your unique business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const isVisible = visibleIds.includes(`service-${service.id}`);
            return (
              <div
                key={service.id}
                id={`service-${service.id}`}
                className={`service-card bg-white/[0.03] border border-white/[0.08] rounded-[20px] p-8 relative overflow-hidden transition-all duration-700 shadow-lg group hover:-translate-y-1.5 hover:border-[#6366f1]/35 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="absolute -top-[40px] -right-[40px] w-[150px] h-[150px] rounded-full filter blur-[50px] opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" style={{ background: service.glow }} />
                <div className={`w-[54px] h-[54px] rounded-[14px] flex items-center justify-center mb-5 bg-gradient-to-r ${service.gradient} text-white`}>
                  {service.icon}
                </div>
                <h3 className="font-['Outfit'] text-[1.3rem] font-bold text-white mb-3 tracking-tight">{service.title}</h3>
                <p className="text-white/55 text-[14px] leading-relaxed mb-5">{service.description}</p>
                <ul className="list-none p-0 m-0 mb-6 flex flex-col gap-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[14px] text-white/70">
                      <FiCheck className="text-[#10b981] shrink-0" size={14} />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-white/[0.07]">
                  <Link
                    href="/contact"
                    className={`font-semibold text-sm transition-all duration-300 hover:tracking-wide p-0 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent inline-block`}
                  >
                    Get Started →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
