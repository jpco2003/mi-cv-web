import React from 'react';
import { Code2, Cpu, Database, Globe, Layers, Server } from 'lucide-react'; 

export const Hero = ({ setSection }) => {
  
  // Lista de tus tecnologías con iconos y colores para el nuevo diseño
  const techStack = [
    { name: 'Zoho One / Creator', icon: <Layers size={16} />, color: 'group-hover:text-green-400 group-hover:border-green-400/50 group-hover:bg-green-400/10' },
    { name: 'JavaScript', icon: <Code2 size={16} />, color: 'group-hover:text-yellow-400 group-hover:border-yellow-400/50 group-hover:bg-yellow-400/10' },
    { name: 'React', icon: <Cpu size={16} />, color: 'group-hover:text-cyan-400 group-hover:border-cyan-400/50 group-hover:bg-cyan-400/10' },
    { name: 'Node.js', icon: <Server size={16} />, color: 'group-hover:text-green-500 group-hover:border-green-500/50 group-hover:bg-green-500/10' },
    { name: 'API REST / Integraciones', icon: <Globe size={16} />, color: 'group-hover:text-purple-400 group-hover:border-purple-400/50 group-hover:bg-purple-400/10' },
    { name: 'Bases de Datos', icon: <Database size={16} />, color: 'group-hover:text-blue-400 group-hover:border-blue-400/50 group-hover:bg-blue-400/10' },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[85vh] px-4 text-center overflow-hidden animate-in fade-in duration-700">
      
      {/* Fondo Glow de la página */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Foto de Perfil con nuevo efecto de pulso */}
      <div className="relative mb-8 group">
        {/* El div de abajo ahora tiene 'animate-pulse' para que respire suavemente */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
        <img 
          src="/fotos/1749397393217.jpg" 
          alt="Juan Pablo Carrión" 
          className="relative w-48 h-48 rounded-full border-4 border-[#0a0a0a] object-cover shadow-2xl transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white">
        Juan Pablo <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Carrión</span>
      </h1>
      
      <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
        Ingeniero de Software & Consultor Especialista en <span className="text-white font-semibold">Zoho One</span>
      </p>

      <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
        Transformo procesos manuales en sistemas automatizados. 
        Experto en integración de APIs (SAP, WhatsApp, OpenAI) y desarrollo Full Stack.
        Diseño soluciones tecnológicas que conectan negocios y optimizan resultados.
      </p>

      {/* Botones de acción rápida */}
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        <button onClick={() => setSection('contacto')} className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all shadow-lg hover:scale-105 active:scale-95">
          Contáctame
        </button>
        
        <button onClick={() => setSection('proyectos')} className="px-8 py-3 rounded-full border border-gray-700 hover:border-white hover:bg-white/5 transition-all text-gray-300 hover:scale-105 active:scale-95">
          Ver Proyectos
        </button>
      </div>

      {/* --- NUEVA SECCIÓN DE TECNOLOGÍAS (Estilo Badges Modernos) --- */}
      <div className="mt-20 pt-10 w-full max-w-5xl relative">
        {/* Línea separadora sutil */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        
        <p className="text-sm text-gray-500 mb-8 uppercase tracking-widest font-semibold">Arsenal Tecnológico</p>
        
        <div className="flex flex-wrap justify-center gap-4 text-gray-300">
          {techStack.map((tech, index) => (
            <div 
              key={index} 
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-800 bg-[#111] transition-all duration-300 cursor-default group hover:-translate-y-1 shadow-lg ${tech.color}`}
            >
              <span className="opacity-70 group-hover:opacity-100 transition-opacity">{tech.icon}</span>
              <span className="font-medium text-sm md:text-base">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
      {/* ------------------------------------------------------------- */}

    </section>
  );
};