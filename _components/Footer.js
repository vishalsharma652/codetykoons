'use client';
import Image from 'next/image';
import styles from './Footer.module.css';

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

const services = [
  { label: 'Digital Marketing', id: 'services' },
  { label: 'Website Development', id: 'services' },
  { label: 'Software App', id: 'services' },
  { label: 'AI Automation', id: 'services' },
];

const quickLinks = [
  { label: 'Home', id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'About Us', id: 'about' },
  { label: 'Contact', id: 'contact' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topBorder} />
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brandCol}>
            <button onClick={() => scrollTo('home')} className={`${styles.logo} ${styles.logoBtn}`} aria-label="Go to Home">
              <Image src="/logo.jpeg" alt="CodeTykoons" width={44} height={44} className={styles.logoImg} />
              <span className={styles.logoText}>
                Code<span className={styles.accent}>Tykoons</span>
              </span>
            </button>
            <p className={styles.tagline}>
              Innovating the digital world — one solution at a time. Your trusted partner for technology, growth, and automation.
            </p>
            <div className={styles.contactInfo}>
              <a href="mailto:CodeTykoons@gmail.com" className={styles.contactItem} id="footer-email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                CodeTykoons@gmail.com
              </a>
              <a href="tel:+917597971807" className={styles.contactItem} id="footer-phone">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                +91 7597971807
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button onClick={() => scrollTo(link.id)} className={styles.link}>{link.label}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Services</h4>
            <ul className={styles.linkList}>
              {services.map((s) => (
                <li key={s.label}>
                  <button onClick={() => scrollTo(s.id)} className={styles.link}>{s.label}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className={styles.ctaCol}>
            <h4 className={styles.colTitle}>Ready to Start?</h4>
            <p className={styles.ctaText}>Let's turn your ideas into reality.</p>
            <button onClick={() => scrollTo('contact')} className={styles.ctaBtn} id="footer-cta-btn">
              Get a Free Quote
            </button>
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.copyright}>
            © {new Date().getFullYear()} CodeTykoons. All rights reserved.
          </span>
          <span className={styles.madeWith}>
            Made with ❤️ in India
          </span>
        </div>
      </div>
    </footer>
  );
}
