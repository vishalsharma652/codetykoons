'use client';
import { useEffect, useRef } from 'react';
import styles from './Services.module.css';

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

const services = [
  {
    id: 'digital-marketing',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: 'Digital Marketing',
    description:
      'Supercharge your brand with data-driven SEO, social media campaigns, PPC ads, and content strategies that convert visitors into loyal customers.',
    features: ['SEO Optimization', 'Social Media Ads', 'Content Strategy', 'Analytics & Reporting'],
    gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    glow: 'rgba(99, 102, 241, 0.3)',
  },
  {
    id: 'website-development',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: 'Website Development',
    description:
      'We craft blazing-fast, visually stunning websites with modern frameworks that deliver exceptional user experiences across all devices.',
    features: ['Custom Design', 'Next.js / React', 'CMS Integration', 'Performance Optimized'],
    gradient: 'linear-gradient(135deg, #a855f7, #ec4899)',
    glow: 'rgba(168, 85, 247, 0.3)',
  },
  {
    id: 'software-app',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
    title: 'Software App',
    description:
      'End-to-end software solutions — from mobile apps to enterprise platforms — built with scalable architecture and clean code.',
    features: ['Mobile Apps', 'Web Applications', 'API Development', 'Cloud Deployment'],
    gradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
    glow: 'rgba(59, 130, 246, 0.3)',
  },
  {
    id: 'ai-automation',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/>
        <circle cx="7.5" cy="14.5" r="1.5"/>
        <circle cx="16.5" cy="14.5" r="1.5"/>
      </svg>
    ),
    title: 'AI Automation',
    description:
      'Harness the power of artificial intelligence to automate workflows, boost productivity, and unlock intelligent insights for your business.',
    features: ['Chatbots & Agents', 'Process Automation', 'ML Integration', 'AI-Powered Tools'],
    gradient: 'linear-gradient(135deg, #10b981, #3b82f6)',
    glow: 'rgba(16, 185, 129, 0.3)',
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.services} id="services" ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>What We Do</span>
          <h2 className={styles.sectionTitle}>
            Our <span className={styles.gradientText}>Services</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            We offer comprehensive digital solutions tailored to your unique business needs.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, i) => (
            <div
              key={service.id}
              id={`service-${service.id}`}
              className={styles.card}
              ref={(el) => (cardsRef.current[i] = el)}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={styles.cardGlow} style={{ background: service.glow }} />
              <div className={styles.iconBox} style={{ background: service.gradient }}>
                {service.icon}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
              <ul className={styles.featureList}>
                {service.features.map((f) => (
                  <li key={f} className={styles.featureItem}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <div className={styles.cardFooter}>
                <button
                  onClick={() => scrollTo('contact')}
                  className={styles.learnMore}
                  style={{ color: 'transparent', backgroundImage: service.gradient, WebkitBackgroundClip: 'text', backgroundClip: 'text' }}
                >
                  Get Started →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
