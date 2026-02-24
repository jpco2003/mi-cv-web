import React, { useState, useRef } from 'react';
import { Hero } from './Hero';
import { Experience } from './Experience';
import { Projects } from './Projects';
import { Education } from './Education';
import { ContactView } from './ContactView';
import { User, Briefcase, Code2, GraduationCap, MessageSquare } from 'lucide-react';

export const PortfolioManager = () => {
  const [activeTab, setActiveTab] = useState('inicio');

  // Usamos useRef para rastrear los dedos sin provocar re-renderizados lentos
  const touchStart = useRef(null);
  const touchEnd = useRef(null);

  const tabs = [
    { id: 'inicio', label: 'Perfil', icon: <User size={18} /> },
    { id: 'experiencia', label: 'Experiencia', icon: <Briefcase size={18} /> },
    { id: 'proyectos', label: 'Proyectos', icon: <Code2 size={18} /> },
    { id: 'educacion', label: 'Educación', icon: <GraduationCap size={18} /> },
    { id: 'contacto', label: 'Contacto', icon: <MessageSquare size={18} /> },
  ];

  const tabOrder = tabs.map(tab => tab.id);

  // --- 1. INICIO DEL TOQUE ---
  const onTouchStart = (e) => {
    touchEnd.current = null; // Reiniciamos el final
    touchStart.current = {
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    };
  };

  // --- 2. MOVIMIENTO DEL DEDO ---
  const onTouchMove = (e) => {
    // Actualizamos constantemente dónde está el dedo
    touchEnd.current = {
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    };
  };

  // --- 3. AL LEVANTAR EL DEDO (DECISIÓN) ---
  const onTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;

    // Distancia recorrida
    const distanceX = touchStart.current.x - touchEnd.current.x;
    const distanceY = touchStart.current.y - touchEnd.current.y;
    const minSwipeDistance = 50; // Mínimo píxeles para considerar swipe

    // LÓGICA ANTI-REBOTE:
    // 1. Debe ser un movimiento horizontal claro (más X que Y)
    // 2. Debe superar la distancia mínima
    if (Math.abs(distanceX) > Math.abs(distanceY)) {
      const isLeftSwipe = distanceX > minSwipeDistance;
      const isRightSwipe = distanceX < -minSwipeDistance;
      
      const currentIndex = tabOrder.indexOf(activeTab);

      if (isLeftSwipe && currentIndex < tabOrder.length - 1) {
        // Deslizar izquierda -> Siguiente pestaña
        setActiveTab(tabOrder[currentIndex + 1]);
      }

      if (isRightSwipe && currentIndex > 0) {
        // Deslizar derecha -> Pestaña anterior
        setActiveTab(tabOrder[currentIndex - 1]);
      }
    }
  };

  return (
    // Agregamos 'touch-pan-y' para mejorar la respuesta en móviles
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
        </nav>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <main className="pt-8 md:pt-28 px-4 max-w-7xl mx-auto">
        {activeTab === 'inicio' && <Hero setSection={setActiveTab} />}
        {activeTab === 'experiencia' && <Experience />}
        {activeTab === 'proyectos' && <Projects />}
        {activeTab === 'educacion' && <Education />}
        {activeTab === 'contacto' && <ContactView />}
      </main>

    </div>
  );
};