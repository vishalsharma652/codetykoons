'use client';
import Image from 'next/image';
import { FiMail, FiPhone } from 'react-icons/fi';

function scrollTo(id: string) {
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
    <footer className="relative py-16 px-8 mt-8">
      <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#6366f1]/40 to-transparent" />
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.4fr] gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4 md:col-span-2 lg:col-span-1">
            <button onClick={() => scrollTo('home')} className="flex items-center gap-2 bg-none border-none cursor-pointer p-0 font-inherit w-fit" aria-label="Go to Home">
              <Image src="/logo.jpeg" alt="CodeTykoons" width={44} height={44} className="rounded-lg object-contain" />
              <span className="font-['Outfit'] text-[22px] font-bold text-white tracking-tight">
                Code<span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">Tykoons</span>
              </span>
            </button>
            <p className="text-white/50 text-[14px] leading-relaxed max-w-[300px] m-0">
              Innovating the digital world — one solution at a time. Your trusted partner for technology, growth, and automation.
            </p>
            <div className="flex flex-col gap-2">
              <a href="mailto:CodeTykoons@gmail.com" className="flex items-center gap-2 text-white/60 text-[14px] hover:text-[#a5b4fc] transition-colors duration-300" id="footer-email">
                <FiMail size={16} className="shrink-0 text-[#6366f1]" />
                CodeTykoons@gmail.com
              </a>
              <a href="tel:+917597971807" className="flex items-center gap-2 text-white/60 text-[14px] hover:text-[#a5b4fc] transition-colors duration-300" id="footer-phone">
                <FiPhone size={16} className="shrink-0 text-[#6366f1]" />
                +91 7597971807
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h4 className="font-['Outfit'] text-[16px] font-bold text-white mb-5">Quick Links</h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button onClick={() => scrollTo(link.id)} className="bg-none border-none cursor-pointer text-white/50 text-[14px] hover:text-white p-0 text-left transition-colors duration-300 relative w-fit after:content-[''] after:absolute after:bottom-[-1px] after:left-0 after:w-0 after:h-[1px] after:bg-gradient-to-r after:from-[#6366f1] after:to-[#a855f7] hover:after:w-full after:transition-all after:duration-300">{link.label}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col">
            <h4 className="font-['Outfit'] text-[16px] font-bold text-white mb-5">Services</h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              {services.map((s) => (
                <li key={s.label}>
                  <button onClick={() => scrollTo(s.id)} className="bg-none border-none cursor-pointer text-white/50 text-[14px] hover:text-white p-0 text-left transition-colors duration-300 relative w-fit after:content-[''] after:absolute after:bottom-[-1px] after:left-0 after:w-0 after:h-[1px] after:bg-gradient-to-r after:from-[#6366f1] after:to-[#a855f7] hover:after:w-full after:transition-all after:duration-300">{s.label}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-4">
            <h4 className="font-['Outfit'] text-[16px] font-bold text-white mb-5">Ready to Start?</h4>
            <p className="text-white/55 text-[14px] m-0">Let's turn your ideas into reality.</p>
            <button onClick={() => scrollTo('contact')} className="inline-block bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white py-3 px-6 rounded-xl font-semibold text-[14px] transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_35px_rgba(99,102,241,0.5)] hover:-translate-y-0.5 text-center cursor-pointer border-none" id="footer-cta-btn">
              Get a Free Quote
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center py-8 border-t border-white/5 flex-wrap gap-2 text-center mt-12">
          <span className="text-white/35 text-[13px]" suppressHydrationWarning>
            © {new Date().getFullYear()} CodeTykoons. All rights reserved.
          </span>
          <span className="text-white/35 text-[13px] ml-2">
            Made with ❤️ in India
          </span>
        </div>
      </div>
    </footer>
  );
}
