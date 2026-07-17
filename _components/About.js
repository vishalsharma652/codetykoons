'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import styles from './About.module.css';

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
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(`.${styles.animItem}`).forEach((el, i) => {
              setTimeout(() => el.classList.add(styles.visible), i * 120);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.about} id="about" ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.leftCol}>
          <div className={`${styles.animItem} ${styles.imageWrapper}`}>
            <Image
              src="/logo.jpeg"
              alt="CodeTykoons"
              width={320}
              height={320}
              className={styles.aboutImage}
            />
            <div className={styles.imageBg} />
            <div className={styles.floatingBadge}>
              <span className={styles.badgeNum}>4+</span>
              <span className={styles.badgeLabel}>Years of Excellence</span>
            </div>
          </div>
        </div>

        <div className={styles.rightCol}>
          <span className={`${styles.animItem} ${styles.sectionTag}`}>About Us</span>
          <h2 className={`${styles.animItem} ${styles.sectionTitle}`}>
            Empowering Businesses with <span className={styles.gradientText}>Smart Technology</span>
          </h2>
          <p className={`${styles.animItem} ${styles.desc}`}>
            CodeTykoons is a full-service digital agency passionate about helping businesses grow through
            cutting-edge technology. We specialize in building impactful digital products — from beautiful
            websites to powerful AI-driven automations.
          </p>
          <p className={`${styles.animItem} ${styles.desc}`}>
            Our team of experts combines creativity with technical excellence to deliver solutions that not
            only look great but also perform exceptionally well. We treat every project as a partnership,
            ensuring your business goals are at the core of everything we build.
          </p>

          <div className={styles.valuesGrid}>
            {values.map((v) => (
              <div key={v.title} className={`${styles.animItem} ${styles.valueCard}`}>
                <span className={styles.valueIcon}>{v.icon}</span>
                <div>
                  <h4 className={styles.valueTitle}>{v.title}</h4>
                  <p className={styles.valueDesc}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
