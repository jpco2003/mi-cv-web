import React from 'react';
import { GraduationCap, Award, Download, Globe, BookOpen } from 'lucide-react';
import { Reveal } from './Reveal';
import { translations } from '../translations';

export const Education = ({ lang }) => {
  const t = translations[lang].education;
  
  const certificates = [
    {
      title: "English Language Level B2",
      issuer: "Universidad Internacional SEK",
      file: "/certificados/English Language B2.pdf",
      icon: <Globe className="text-blue-400" size={20} />
    },
    {
      title: "Formación para el Empleo",
      issuer: "Universidad Internacional SEK",
      file: "/certificados/Formación para el Empleo.pdf", 
      icon: <BookOpen className="text-green-400" size={20} />
    },
    {
      title: "IT Essentials / Get Connected",
      issuer: "Cisco Networking Academy",
      file: "/certificados/Get Connected.pdf",
      icon: <Award className="text-yellow-500" size={20} />
    },
    {
      title: "Introducción a la Ciberseguridad",
      issuer: "Cisco Networking Academy",
      file: "/certificados/Cyberseguridad.pdf",
      icon: <Award className="text-red-500" size={20} />
    },
    {
      title: "NDG Linux Unhatched",
      issuer: "Linux Professional Institute",
      file: "/certificados/NDG Linux Unhatched.pdf",
      icon: <Award className="text-orange-500" size={20} />
    },
    {
      title: "Power BI: Inteligencia Empresarial",
      issuer: "Curso de Especialización",
      file: "/certificados/Power Bi.jpg",
      icon: <Award className="text-yellow-600" size={20} />
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 border-t border-gray-900 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-16">
        
        {/* COLUMNA IZQUIERDA: EDUCACIÓN FORMAL */}
        <div>
          <Reveal>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <GraduationCap className="text-blue-500" /> {t.titleEdu}
            </h2>
          </Reveal>

          <div className="space-y-10 border-l-2 border-gray-800 ml-3">
            {t.items.map((item, index) => (
              <Reveal key={index}>
                <div className="relative pl-8 group">
                  <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-900 border-2 ${index === 0 ? 'border-blue-600 group-hover:bg-blue-500 group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.6)]' : 'border-gray-600 group-hover:border-blue-500 group-hover:bg-blue-900'} transition-all duration-300`}></div>
                  <h3 className={`text-xl font-bold text-white transition-colors ${index === 0 ? 'group-hover:text-blue-50' : 'group-hover:text-gray-200'}`}>{item.degree}</h3>
                  <p className="text-blue-400 font-medium">{item.school}</p>
                  <p className="text-gray-500 text-sm mb-2 font-mono mt-1">{item.period}</p>
                  {item.desc && <p className="text-gray-400 leading-relaxed">{item.desc}</p>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* COLUMNA DERECHA: CERTIFICACIONES */}
        <div>
          <Reveal>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Award className="text-yellow-500" /> {t.titleCert}
            </h2>
          </Reveal>

          <div className="grid gap-4">
            {certificates.map((cert, index) => (
              <Reveal key={index}>
                <div className="p-4 rounded-xl bg-[#111] border border-gray-800 hover:border-blue-500/40 hover:bg-gray-900/60 shadow-lg transition-all flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-black rounded-lg border border-gray-800 group-hover:border-gray-600 transition-colors">
                      {cert.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm md:text-base group-hover:text-blue-100 transition-colors">{cert.title}</h4>
                      <p className="text-xs text-gray-400 font-mono mt-0.5">{cert.issuer}</p>
                    </div>
                  </div>
                  <a 
                    href={cert.file} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800/50 rounded-lg text-gray-400 group-hover:text-blue-400 group-hover:bg-blue-900/30 transition-all ml-2 border border-transparent group-hover:border-blue-900/50" 
                    title={t.downloadCert}
                  >
                    <Download size={18} />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};