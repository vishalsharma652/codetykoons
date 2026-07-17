'use client';
import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Hero() {
  const headingRef = useRef(null);

  useEffect(() => {
    const el = headingRef.current;
    if (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      setTimeout(() => {
        el.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 200);
    }
  }, []);

  return (
    <section className={styles.hero} id="home">
      <div className={styles.bgOrbs}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.orb3} />
      </div>

      <div className={styles.gridOverlay} />

      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Innovating the Digital World
        </div>

        <h1 className={styles.heading} ref={headingRef}>
          We Build <span className={styles.gradientText}>Digital Solutions</span><br />
          That Drive <span className={styles.gradientText2}>Results</span>
        </h1>

        <p className={styles.subheading}>
          From AI automation to stunning websites — CodeTykoons transforms your vision 
          into powerful digital experiences that grow your business.
        </p>

        <div className={styles.ctas}>
          <button className={styles.primaryBtn} id="hero-explore-btn" onClick={() => scrollTo('services')}>
            Explore Services
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <button className={styles.secondaryBtn} id="hero-contact-btn" onClick={() => scrollTo('contact')}>
            Contact Us
          </button>
        </div>

        <div className={styles.statsRow}>
          <div className={styles.statItem}>
            <span className={styles.statNum}>50+</span>
            <span className={styles.statLabel}>Projects Done</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNum}>4</span>
            <span className={styles.statLabel}>Core Services</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNum}>100%</span>
            <span className={styles.statLabel}>Client Focused</span>
          </div>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
}
