import React, { useState, useRef } from 'react';
import { Hero } from './Hero';
import { Experience } from './Experience';
import { Projects } from './Projects';
import { Education } from './Education';
import { ContactView } from './ContactView';
import { User, Briefcase, Code2, GraduationCap, MessageSquare, Globe } from 'lucide-react';
import { translations } from '../translations'; // <-- IMPORTAMOS TU DICCIONARIO

export const PortfolioManager = () => {
  const [activeTab, setActiveTab] = useState('inicio');
  const [lang, setLang] = useState('es'); // <-- NUEVO: ESTADO DEL IDIOMA

  const touchStart = useRef(null);
  const touchEnd = useRef(null);

  // Cargamos los textos del menú dependiendo de si lang es 'es' o 'en'
  const t = translations[lang].nav;

  const tabs = [
    { id: 'inicio', label: t.inicio, icon: <User size={18} /> },
    { id: 'experiencia', label: t.experiencia, icon: <Briefcase size={18} /> },
    { id: 'proyectos', label: t.proyectos, icon: <Code2 size={18} /> },
    { id: 'educacion', label: t.educacion, icon: <GraduationCap size={18} /> },
    { id: 'contacto', label: t.contacto, icon: <MessageSquare size={18} /> },
  ];

  const tabOrder = tabs.map(tab => tab.id);

  // --- LÓGICA DE SWIPE (Mantenida intacta) ---
  const onTouchStart = (e) => {
    touchEnd.current = null;
    touchStart.current = { x: e.targetTouches[0].clientX, y: e.targetTouches[0].clientY };
  };

  const onTouchMove = (e) => {
    touchEnd.current = { x: e.targetTouches[0].clientX, y: e.targetTouches[0].clientY };
  };

  const onTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const distanceX = touchStart.current.x - touchEnd.current.x;
    const distanceY = touchStart.current.y - touchEnd.current.y;
    const minSwipeDistance = 50; 

    if (Math.abs(distanceX) > Math.abs(distanceY)) {
      const isLeftSwipe = distanceX > minSwipeDistance;
      const isRightSwipe = distanceX < -minSwipeDistance;
      const currentIndex = tabOrder.indexOf(activeTab);

      if (isLeftSwipe && currentIndex < tabOrder.length - 1) setActiveTab(tabOrder[currentIndex + 1]);
      if (isRightSwipe && currentIndex > 0) setActiveTab(tabOrder[currentIndex - 1]);
    }
  };

  // Función para alternar el idioma
  const toggleLanguage = () => {
    setLang(prevLang => prevLang === 'es' ? 'en' : 'es');
  };

  return (
    <div 
      className="min-h-screen pb-24 md:pb-20 overflow-x-hidden touch-pan-y" 
      onTouchStart={onTouchStart} 
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      
      {/* MENÚ FLOTANTE */}
      <div className="fixed bottom-4 md:bottom-auto md:top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav className="pointer-events-auto flex items-center gap-1 p-1 bg-[#1a1a1a]/90 backdrop-blur-md rounded-full border border-white/10 shadow-2xl overflow-x-auto max-w-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-2 px-5 py-3 md:py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap
                ${activeTab === tab.id 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'}
              `}
            >
              {tab.icon}
              <span className="hidden md:inline">{tab.label}</span>
            </button>
          ))}

          {/* LÍNEA SEPARADORA */}
          <div className="w-px h-6 bg-gray-700 mx-1"></div>

          {/* EL BOTÓN MÁGICO BILINGÜE */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-3 md:py-2 rounded-full text-sm font-bold text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-300"
            title="Cambiar Idioma / Change Language"
          >
            <Globe size={16} className="text-blue-400" />
            {lang.toUpperCase()}
          </button>
        </nav>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <main className="pt-8 md:pt-28 px-4 max-w-7xl mx-auto">
        {activeTab === 'inicio' && <Hero setSection={setActiveTab} lang={lang} />}
        {activeTab === 'experiencia' && <Experience lang={lang} />}
        {activeTab === 'proyectos' && <Projects lang={lang} />}
        {activeTab === 'educacion' && <Education lang={lang} />}
        {activeTab === 'contacto' && <ContactView lang={lang} />}
      </main>

    </div>
  );
};