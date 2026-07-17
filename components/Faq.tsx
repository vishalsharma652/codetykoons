'use client';
import { useState, useRef, useEffect } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqs = [
  {
    question: 'How does AI Automation benefit my business?',
    answer: 'AI automation streamlines repetitive tasks, integrates smart workflows, reduces operational costs, and minimizes human error. It allows your team to focus on strategic growth while algorithms handle lead routing, auto-responses, data syncing, and scheduling.',
  },
  {
    question: 'What is your website development process?',
    answer: 'We follow an agile, collaborative approach: Requirement gathering & UI/UX design -> Development using modern tech (Next.js/Tailwind) -> Optimization & SEO setup -> Client review & live deployment. You stay updated at every milestone.',
  },
  {
    question: 'Do you offer custom software app development?',
    answer: 'Yes! We build fully custom web and mobile applications tailored to your specific workflows. We use scalable databases and construct secure APIs so your software grows seamlessly alongside your client base.',
  },
  {
    question: 'How do we get started with CodeTykoons?',
    answer: 'Getting started is simple! Just head to the "Contact" section, fill out the form with your project details, and submit. Our team will analyze your requirements and get in touch with you within 24 hours to schedule a free consultation call.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-8 relative" id="faq" ref={sectionRef}>
      <div className="max-w-[800px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#6366f1]/12 border border-[#6366f1]/30 text-[#a5b4fc] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4">
            Questions
          </span>
          <h2 className="font-['Outfit'] text-[clamp(2rem,4vw,2.8rem)] font-extrabold text-white tracking-tight mb-4">
            Frequently Asked <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-white/55 text-base max-w-[480px] mx-auto leading-relaxed">
            Got questions? We have answers. Learn more about how we help your business thrive.
          </p>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border border-white/10 rounded-2xl overflow-hidden bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer border-none bg-transparent text-white font-semibold text-lg font-['Outfit'] gap-4 select-none"
                >
                  <span>{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-white/5 text-[#6366f1] transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#6366f1]/10' : ''}`}>
                    {isOpen ? <FiMinus size={18} /> : <FiPlus size={18} />}
                  </div>
                </button>
                
                <div
                  className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[300px] border-t border-white/5' : 'max-h-0'}`}
                >
                  <p className="p-6 text-white/60 text-[15px] leading-relaxed m-0 bg-white/[0.005]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
