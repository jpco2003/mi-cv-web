import React from 'react';

export const Hero = ({ setSection }) => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[85vh] px-4 text-center overflow-hidden animate-in fade-in duration-700">
      
      {/* Fondo Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Foto */}
      <div className="relative mb-8 group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
        <img 
          src="/fotos/1749397393217.jpg" 
          alt="Juan Pablo Carrión" 
          className="relative w-48 h-48 rounded-full border-4 border-[#0a0a0a] object-cover shadow-2xl"
        />
      </div>

      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white">
        Juan Pablo <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Carrión</span>
      </h1>
      
      <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
        Ingeniero de Software & Consultor Especialista en <span className="text-white font-semibold">Zoho One</span>
      </p>

      {/* --- AQUÍ ESTÁ EL PÁRRAFO QUE FALTABA --- */}
      <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
        Transformo procesos manuales en sistemas automatizados. 
        Experto en integración de APIs y desarrollo Full Stack.
        Diseño soluciones tecnológicas que conectan negocios y optimizan resultados.
      </p>
      {/* ---------------------------------------- */}

      {/* Botones de acción rápida */}
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        <button onClick={() => setSection('contacto')} className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all shadow-lg hover:scale-105">
          Contáctame
        </button>
        <button onClick={() => setSection('proyectos')} className="px-8 py-3 rounded-full border border-gray-700 hover:border-white hover:bg-white/5 transition-all text-gray-300">
          Ver Proyectos
        </button>
      </div>

      {/* Stack Tecnológico */}
      <div className="mt-16 pt-8 border-t border-gray-900 w-full max-w-4xl">
        <p className="text-sm text-gray-500 mb-6 uppercase tracking-widest">Tecnologías Principales</p>
        <div className="flex flex-wrap justify-center gap-8 text-gray-300">
          <span className="font-bold hover:text-green-400 transition-colors cursor-default">Zoho One</span>
          <span className="font-bold hover:text-yellow-400 transition-colors cursor-default">JavaScript</span>
          <span className="font-bold hover:text-cyan-400 transition-colors cursor-default">Java</span>
          <span className="font-bold hover:text-green-500 transition-colors cursor-default">Node.js</span>
          <span className="font-bold hover:text-purple-400 transition-colors cursor-default">PHP</span>
        </div>
      </div>
    </section>
  );
};