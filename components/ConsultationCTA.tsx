'use client';
import Link from 'next/link';

export default function ConsultationCTA() {
  return (
    <section className="py-16 px-8 relative overflow-hidden">
      <div className="max-w-[1000px] mx-auto bg-gradient-to-br from-[#6366f1]/10 to-[#a855f7]/10 border border-[#6366f1]/20 rounded-[32px] p-12 md:p-8 text-center relative">
        {/* Decorative glows */}
        <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-[#6366f1]/10 blur-[40px] pointer-events-none" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-[#a855f7]/10 blur-[40px] pointer-events-none" />

        <div className="relative z-10 max-w-[640px] mx-auto flex flex-col items-center gap-6">
          <h2 className="font-['Outfit'] text-[2.1rem] md:text-3xl font-extrabold text-white leading-tight">
            Ready to Scale Your Business with <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">Smart Digital Services?</span>
          </h2>
          <p className="text-white/60 text-[15px] leading-relaxed m-0">
            Schedule a free consultation call with CodeTykoons. Let's analyze your project blueprint and design custom automation systems built to scale.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white px-8 py-3.5 rounded-full font-bold text-base transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_35px_rgba(99,102,241,0.6)] hover:-translate-y-[2px]"
          >
            Claim Your Free Consultation Call
          </Link>
        </div>
      </div>
    </section>
  );
}
