import React, { useState } from 'react';
// Importamos todas tus secciones
import { Hero } from './Hero';
import { Experience } from './Experience';
import { Projects } from './Projects';
import { Education } from './Education';
import { ContactView } from './ContactView';
// Importamos iconos para el menú
import { User, Briefcase, Code2, GraduationCap, MessageSquare } from 'lucide-react';

export const PortfolioManager = () => {
  // Este es el "estado". Al principio vale 'inicio', así que muestra el Hero.
  const [activeTab, setActiveTab] = useState('inicio');

  // Configuración de los botones del menú
  const tabs = [
    { id: 'inicio', label: 'Perfil', icon: <User size={18} /> },
    { id: 'experiencia', label: 'Experiencia', icon: <Briefcase size={18} /> },
    { id: 'proyectos', label: 'Proyectos', icon: <Code2 size={18} /> },
    { id: 'educacion', label: 'Educación', icon: <GraduationCap size={18} /> },
    { id: 'contacto', label: 'Contacto', icon: <MessageSquare size={18} /> },
  ];

  return (
    <div className="min-h-screen pb-20">
      
      {/* MENÚ DE NAVEGACIÓN (FLOTANTE ARRIBA) */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
        <nav className="flex items-center gap-1 p-1 bg-[#1a1a1a]/90 backdrop-blur-md rounded-full border border-white/10 shadow-2xl overflow-x-auto max-w-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap
                ${activeTab === tab.id 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'}
              `}
            >
              {tab.icon}
              <span className="hidden md:inline">{tab.label}</span> {/* Texto oculto en móviles muy pequeños */}
            </button>
          ))}
        </nav>
      </div>

      {/* AQUÍ SE MUESTRA EL CONTENIDO SEGÚN EL BOTÓN QUE APRIETES */}
      <main className="pt-28 px-4 max-w-7xl mx-auto">
        {activeTab === 'inicio' && <Hero setSection={setActiveTab} />}
        {activeTab === 'experiencia' && <Experience />}
        {activeTab === 'proyectos' && <Projects />}
        {activeTab === 'educacion' && <Education />}
        {activeTab === 'contacto' && <ContactView />}
      </main>

    </div>
  );
};