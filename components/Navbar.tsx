'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[50] py-4 transition-all duration-300 bg-[#070714]/92 backdrop-blur-md border-b border-[#6366f1]/15 ${scrolled ? 'py-[10px] bg-[#070714]/98 border-[#6366f1]/25 shadow-[0_4px_30px_rgba(0,0,0,0.4)]' : ''}`}>
        <div className="max-w-[1200px] mx-auto px-8 flex items-center justify-between">

          {/* Logo Link */}
          <Link href="/" className="flex items-center gap-[10px] p-0 text-decoration-none select-none" aria-label="Go to Home" onClick={() => setMenuOpen(false)}>
            <Image src="/logo.jpeg" alt="CodeTykoons Logo" width={40} height={40} className="rounded-lg object-contain" />
            <span className="font-['Outfit'] text-[22px] font-bold text-white tracking-tight">Code<span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">Tykoons</span></span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className={`font-inherit text-[15px] font-medium p-0 transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-3px] after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-[#6366f1] after:to-[#a855f7] after:transition-transform after:duration-300 after:rounded ${isActive ? 'text-white after:scale-x-100' : 'text-white/75 hover:text-white after:scale-x-0 hover:after:scale-x-100'}`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                href="/contact"
                className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white px-[22px] py-[8px] rounded-full font-semibold text-[14px] transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_35px_rgba(99,102,241,0.6)] hover:-translate-y-[2px] whitespace-nowrap inline-block text-center"
              >
                Get Started
              </Link>
            </li>
          </ul>

          {/* Hamburger — mobile only */}
          <button
            className="flex md:hidden flex-col gap-[5px] bg-none border-none cursor-pointer p-1 z-[1001]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            id="hamburger-btn"
          >
            <span className={`block w-[25px] h-[2.5px] bg-white rounded transition-all duration-300 ${menuOpen ? 'translate-y-[7.5px] rotate-45' : ''}`} />
            <span className={`block w-[25px] h-[2.5px] bg-white rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-[25px] h-[2.5px] bg-white rounded transition-all duration-300 ${menuOpen ? '-translate-y-[7.5px] -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer (Left Slide-in) */}
      <ul className={`fixed top-0 left-0 bottom-0 w-[75%] max-w-[280px] flex flex-col bg-[#070714]/98 backdrop-blur-lg p-8 pt-20 transition-transform duration-300 ease-in-out border-r border-[#6366f1]/20 shadow-[6px_0_30px_rgba(0,0,0,0.4)] z-[999] list-none md:hidden ${menuOpen ? 'translate-x-0 pointer-events-auto' : '-translate-x-full pointer-events-none'}`}>
        {navLinks.map((link) => {
          const isActive = pathname === link.path;
          return (
            <li key={link.path} className="w-full border-b border-white/5">
              <Link
                href={link.path}
                className={`block w-full py-4 text-left text-[16px] font-medium transition-colors ${isActive ? 'text-white' : 'text-white/75 hover:text-white'}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
        <li className="w-full mt-6">
          <Link
            href="/contact"
            className="block w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white py-3 rounded-full font-semibold text-center shadow-[0_0_20px_rgba(99,102,241,0.4)]"
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </Link>
        </li>
      </ul>

      {/* Overlay — click to close */}
      <div
        className={`fixed inset-0 bg-black/55 z-[998] transition-opacity duration-300 md:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
    </>
  );
}
