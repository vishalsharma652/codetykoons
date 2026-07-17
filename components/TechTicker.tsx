'use client';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiPostgresql, SiVercel } from 'react-icons/si';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';

const techList = [
  { name: 'Next.js', icon: <SiNextdotjs size={24} />, color: 'text-white' },
  { name: 'React', icon: <FaReact size={24} />, color: 'text-[#61dafb]' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={24} />, color: 'text-[#38bdf8]' },
  { name: 'TypeScript', icon: <SiTypescript size={22} />, color: 'text-[#3178c6]' },
  { name: 'Node.js', icon: <FaNodeJs size={24} />, color: 'text-[#339933]' },
  { name: 'Vercel', icon: <SiVercel size={24} />, color: 'text-white' },
  { name: 'Python', icon: <FaPython size={24} />, color: 'text-[#3776ab]' },
  { name: 'PostgreSQL', icon: <SiPostgresql size={24} />, color: 'text-[#4169e1]' },
];

const doubleTechList = [...techList, ...techList];

export default function TechTicker() {
  return (
    <div className="w-full py-12 overflow-hidden relative select-none">
      {/* Premium Side Fading Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#070714] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#070714] to-transparent z-10 pointer-events-none" />

      {/* Marquee Train */}
      <div className="flex w-max animate-[marquee_45s_linear_infinite] gap-6 whitespace-nowrap hover:[animation-play-state:paused] py-2 px-6">
        {doubleTechList.map((tech, i) => (
          <div
            key={i}
            className="flex items-center gap-3.5 bg-white/[0.02] border border-white/[0.06] px-6 py-4 rounded-2xl transition-all duration-300 hover:border-[#6366f1]/40 hover:bg-[#6366f1]/5 hover:-translate-y-1 shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(99,102,241,0.2)] group cursor-pointer"
          >
            {/* Styled colored logo wrapper */}
            <div className={`transition-transform duration-300 group-hover:scale-110 ${tech.color} flex items-center justify-center`}>
              {tech.icon}
            </div>
            
            {/* Tech Name */}
            <span className="font-['Outfit'] text-[15px] font-bold uppercase tracking-wider text-white/55 group-hover:text-white transition-colors duration-300">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
