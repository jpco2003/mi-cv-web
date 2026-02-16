import React from 'react';
import { GraduationCap, Award, Download, Globe, BookOpen } from 'lucide-react';

export const Education = () => {
  
  // Lista de certificados actualizada con UISEK
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
    <section className="max-w-6xl mx-auto px-6 py-20 border-t border-gray-900">
      
      <div className="grid md:grid-cols-2 gap-16">
        
        {/* COLUMNA IZQUIERDA: EDUCACIÓN FORMAL */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <GraduationCap className="text-blue-500" /> Educación
          </h2>

          <div className="space-y-10 border-l-2 border-gray-800 ml-3">
            
            {/* Universidad */}
            <div className="relative pl-8 group">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-[#0a0a0a] group-hover:scale-125 transition-transform"></div>
              <h3 className="text-xl font-bold text-white">Ingeniería de Software</h3>
              <p className="text-blue-400 font-medium">Universidad Internacional SEK</p>
              <p className="text-gray-500 text-sm mb-2">2025 - Actualidad (8avo Semestre)</p>
              <p className="text-gray-400">Formación avanzada en arquitectura de software, metodologías ágiles y bases de datos.</p>
            </div>

            {/* Instituto */}
            <div className="relative pl-8 group">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-600 border-4 border-[#0a0a0a] group-hover:border-blue-500 transition-colors"></div>
              <h3 className="text-xl font-bold text-white">Tecnología en Desarrollo de Software</h3>
              <p className="text-blue-400 font-medium">Instituto Universitario ISMAC</p>
              <p className="text-gray-500 text-sm mb-2">2023 (Egresado)</p>
              <p className="text-gray-400">Especialización práctica en desarrollo web y multimedia.</p>
            </div>

            {/* Colegio */}
            <div className="relative pl-8 group">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-600 border-4 border-[#0a0a0a] group-hover:border-blue-500 transition-colors"></div>
              <h3 className="text-xl font-bold text-white">Bachiller en Ciencias</h3>
              <p className="text-blue-400 font-medium">Unidad Educativa La Inmaculada</p>
              <p className="text-gray-500 text-sm">2021</p>
            </div>

          </div>
        </div>

        {/* COLUMNA DERECHA: CERTIFICACIONES */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Award className="text-yellow-500" /> Certificaciones
          </h2>

          <div className="grid gap-3">
            {certificates.map((cert, index) => (
              <div key={index} className="p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 hover:bg-gray-800 transition-all flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-black rounded-lg border border-gray-700">
                    {cert.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm md:text-base">{cert.title}</h4>
                    <p className="text-xs text-gray-400">{cert.issuer}</p>
                  </div>
                </div>
                <a 
                  href={cert.file} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg text-gray-400 group-hover:text-blue-400 group-hover:bg-blue-900/20 transition-all ml-2" 
                  title="Descargar Certificado"
                >
                  <Download size={18} />
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};