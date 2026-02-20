import React, { useState } from 'react';
import { Hero } from './Hero';
import { Experience } from './Experience';
import { Projects } from './Projects';
import { Education } from './Education';
import { ContactView } from './ContactView';
import { User, Briefcase, Code2, GraduationCap, MessageSquare } from 'lucide-react';

export const PortfolioManager = () => {
  const [activeTab, setActiveTab] = useState('inicio');
  const [touchStart, setTouchStart] = useState(null); // Guardará dónde pones el dedo al inicio

  const tabs = [
    { id: 'inicio', label: 'Perfil', icon: <User size={18} /> },
    { id: 'experiencia', label: 'Experiencia', icon: <Briefcase size={18} /> },
    { id: 'proyectos', label: 'Proyectos', icon: <Code2 size={18} /> },
    { id: 'educacion', label: 'Educación', icon: <GraduationCap size={18} /> },
    { id: 'contacto', label: 'Contacto', icon: <MessageSquare size={18} /> },
  ];

  // Extraemos solo los IDs para saber el orden de las pantallas
  const tabOrder = tabs.map(tab => tab.id);

  // --- 1. LÓGICA DE GESTOS TÁCTILES (SWIPE) ---
  const handleTouchStart = (e) => {
    // Registramos la posición X (horizontal) donde el dedo toca la pantalla
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    
    // Registramos dónde se levantó el dedo
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50; // Distancia mínima en píxeles para que cuente como un deslizamiento

    const currentIndex = tabOrder.indexOf(activeTab);

    // Si deslizó hacia la izquierda (positiva) y no está en la última pestaña
    if (distance > minSwipeDistance && currentIndex < tabOrder.length - 1) {
      setActiveTab(tabOrder[currentIndex + 1]);
    }
    // Si deslizó hacia la derecha (negativa) y no está en la primera pestaña
    if (distance < -minSwipeDistance && currentIndex > 0) {
      setActiveTab(tabOrder[currentIndex - 1]);
    }
    
    // Reiniciamos el estado para el siguiente gesto
    setTouchStart(null); 
  };

  return (
    // --- 2. AGREGAMOS LOS EVENTOS AL CONTENEDOR PRINCIPAL ---
    <div 
      className="min-h-screen pb-24 md:pb-20 overflow-x-hidden" 
      onTouchStart={handleTouchStart} 
      onTouchEnd={handleTouchEnd}
    >
      
      {/* --- 3. MENÚ: ABAJO EN MÓVILES, ARRIBA EN PC --- */}
      {/* Cambiamos las clases para que en móviles (bottom-4) esté abajo, y en pantallas medianas (md:top-4) suba */}
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

      {/* --- 4. CONTENIDO PRINCIPAL --- */}
      {/* Ajustamos el padding-top (pt) para que no haya espacio vacío arriba en móviles */}
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