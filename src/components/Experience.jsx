import React from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export const Experience = () => {
  const jobs = [
    {
      role: "Desarrollador / Analista Técnico",
      company: "Digital Strategy",
      period: "Sept 2024 - Actual",
      description: "Consultoría tecnológica sobre el ecosistema Zoho One. Diseño y ejecución de soluciones orientadas a procesos comerciales.",
      achievements: [
        "Desarrollo de automatizaciones avanzadas en Zoho CRM y Creator usando Deluge.",
        "Integración de APIs RESTful con WhatsApp Business, SAP y sistemas externos.",
        "Implementación de Chatbots con IA (OpenAI) para atención al cliente."
      ]
    },
    {
      role: "Auxiliar de Multimedia",
      company: "Instituto Universitario ISMAC",
      period: "Oct 2022 - Feb 2023",
      description: "Coordinación y creación de contenidos para la plataforma educativa danteva.net.",
      achievements: [
        "Edición y producción con Adobe Premiere Pro y Illustrator.",
        "Aseguramiento de calidad (QA) de la plataforma antes del lanzamiento."
      ]
    },
    {
      role: "Soporte Técnico & Redes",
      company: "Independiente",
      period: "2021 - 2023",
      description: "Instalación y configuración de infraestructura de red.",
      achievements: [
        "Cableado estructurado y configuración de routers.",
        "Diagnóstico y solución de problemas de hardware y conectividad."
      ]
    }
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-center mb-12 text-white flex items-center justify-center gap-3">
        <Briefcase className="text-blue-500" /> Experiencia Profesional
      </h2>
      
      <div className="space-y-12 border-l-2 border-gray-800 ml-4 md:ml-0 md:pl-0">
        {jobs.map((job, index) => (
          <div key={index} className="relative pl-8 md:pl-0">
            {/* Diseño Desktop: Grid de 2 columnas */}
            <div className="md:grid md:grid-cols-12 md:gap-8">
              
              {/* Columna Izquierda: Fechas (Solo Desktop) */}
              <div className="hidden md:block md:col-span-3 md:text-right pt-1">
                <span className="text-gray-400 font-mono text-sm">{job.period}</span>
                <h3 className="text-blue-400 font-bold mt-1">{job.company}</h3>
              </div>

              {/* Punto Central de la Línea de Tiempo */}
              <div className="absolute -left-[9px] top-0 md:left-auto md:right-auto md:relative md:col-span-1 md:flex md:justify-center">
                <div className="h-4 w-4 rounded-full bg-blue-600 border-4 border-[#0a0a0a] shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
              </div>

              {/* Columna Derecha: Detalles */}
              <div className="md:col-span-8">
                {/* Cabecera Móvil */}
                <div className="md:hidden mb-2">
                  <span className="text-sm text-blue-400 font-bold">{job.company}</span>
                  <span className="text-gray-500 text-xs ml-2">| {job.period}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{job.role}</h3>
                <p className="text-gray-400 mb-4">{job.description}</p>
                
                <ul className="space-y-2">
                  {job.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                      <CheckCircle2 size={16} className="text-blue-500 mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};