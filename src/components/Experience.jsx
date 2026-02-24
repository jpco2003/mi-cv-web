import React from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { Reveal } from './Reveal';
import { translations } from '../translations'; // <-- IMPORTAMOS DICCIONARIO

export const Experience = ({ lang }) => {
  // Obtenemos los textos de experiencia según el idioma (es/en)
  const t = translations[lang].experience;

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-center mb-16 text-white flex items-center justify-center gap-3">
        <Briefcase className="text-blue-500" /> {t.title}
      </h2>
      
      <div className="space-y-12 border-l-2 border-gray-800 ml-4 md:ml-0 md:pl-0">
        {/* Usamos t.jobs en lugar del array estático anterior */}
        {t.jobs.map((job, index) => (
          <Reveal key={index}>
            <div className="relative pl-8 md:pl-0 group">
              
              <div className="md:grid md:grid-cols-12 md:gap-8 items-start">
                
                <div className="hidden md:block md:col-span-3 md:text-right pt-4">
                  <span className="text-gray-400 font-mono text-sm block group-hover:text-gray-300 transition-colors">{job.period}</span>
                  <h3 className="text-blue-400 font-bold mt-1 text-lg group-hover:text-blue-300 transition-colors">{job.company}</h3>
                </div>

                <div className="absolute -left-[9px] top-5 md:left-auto md:right-auto md:relative md:col-span-1 md:flex md:justify-center md:pt-5">
                  <div className="h-4 w-4 rounded-full bg-gray-900 border-2 border-blue-600 transition-all duration-300 group-hover:bg-blue-500 group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] z-10"></div>
                </div>

                <div className="md:col-span-8">
                  <div className="bg-[#111] p-6 rounded-2xl border border-gray-800 transition-all duration-300 group-hover:border-blue-500/40 group-hover:bg-gray-900/60 shadow-lg">
                    
                    <div className="md:hidden mb-4 border-b border-gray-800 pb-3">
                      <span className="text-lg text-blue-400 font-bold block">{job.company}</span>
                      <span className="text-gray-500 text-xs font-mono mt-1 block flex items-center gap-2">
                        <Calendar size={12}/> {job.period}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-50 transition-colors">{job.role}</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">{job.description}</p>
                    
                    <ul className="space-y-3 bg-black/30 p-4 rounded-xl border border-white/5">
                      {job.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                          <CheckCircle2 size={16} className="text-blue-500 mt-0.5 shrink-0 group-hover:text-cyan-400 transition-colors" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                  </div>
                </div>

              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};