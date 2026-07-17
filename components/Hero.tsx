'use client';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden px-8 py-32 md:py-16" id="home">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.18)_0%,transparent_70%)] -top-[100px] -left-[100px] animate-float-orb-1" aria-hidden="true" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.15)_0%,transparent_70%)] -bottom-[100px] -right-[100px] animate-float-orb-2" aria-hidden="true" />
        <div className="absolute w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.12)_0%,transparent_70%)] top-1/2 left-1/2 animate-pulse-orb" aria-hidden="true" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none z-0" aria-hidden="true" />

      <div className="relative z-10 text-center max-w-[820px] mx-auto">
        <div className="inline-flex items-center gap-2 bg-[#6366f1]/12 border border-[#6366f1]/30 px-4 py-1.5 rounded-full text-[13px] font-semibold text-[#a5b4fc] mb-6">
          <span className="w-2 h-2 rounded-full bg-[#6366f1] shadow-[0_0_8px_#6366f1] animate-pulse" />
          Innovating the Digital World
        </div>

        <h1 className="font-['Outfit'] text-[clamp(2.4rem,6vw,4.5rem)] font-extrabold text-white leading-[1.12] tracking-tight mb-6 animate-hero-fade">
          We Build <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">Digital Solutions</span><br />
          That Drive <span className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">Results</span>
        </h1>

        <p className="text-[clamp(1.05rem,2vw,1.2rem)] text-white/80 leading-[1.7] max-w-[600px] mx-auto mb-10">
          From AI automation to stunning websites — CodeTykoons transforms your vision 
          into powerful digital experiences that grow your business.
        </p>

        <div className="flex gap-4 justify-center flex-wrap mb-16">
          <Link href="/services" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white px-8 py-3.5 rounded-full font-bold text-base transition-all duration-300 shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:shadow-[0_0_50px_rgba(99,102,241,0.6)] hover:-translate-y-1 cursor-pointer border-none" id="hero-explore-btn">
            Explore Services
            <FiArrowRight size={18} />
          </Link>
          <Link href="/contact" className="inline-flex items-center bg-transparent text-white px-8 py-3.5 rounded-full font-bold text-base border border-white/20 transition-all duration-300 hover:bg-white/5 hover:border-white/40 hover:-translate-y-[2px] cursor-pointer" id="hero-contact-btn">
            Contact Us
          </Link>
        </div>

        <div className="flex items-center justify-center gap-8 flex-wrap">
          <div className="flex flex-col items-center">
            <span className="font-['Outfit'] text-[32px] font-extrabold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">50+</span>
            <span className="text-[11px] text-white/70 uppercase tracking-widest mt-1">Projects Done</span>
          </div>
          <div className="w-[1px] h-10 bg-white/15" aria-hidden="true" />
          <div className="flex flex-col items-center">
            <span className="font-['Outfit'] text-[32px] font-extrabold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">4</span>
            <span className="text-[11px] text-white/70 uppercase tracking-widest mt-1">Core Services</span>
          </div>
          <div className="w-[1px] h-10 bg-white/15" aria-hidden="true" />
          <div className="flex flex-col items-center">
            <span className="font-['Outfit'] text-[32px] font-extrabold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">100%</span>
            <span className="text-[11px] text-white/70 uppercase tracking-widest mt-1">Client Focused</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/55 text-[11px] tracking-widest z-10 animate-bounce">
        <div className="w-[22px] h-[34px] border-2 border-white/25 rounded-xl flex justify-center pt-1.5" aria-hidden="true">
          <div className="w-[3px] h-[8px] bg-white/40 rounded-full animate-ping" />
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
}
