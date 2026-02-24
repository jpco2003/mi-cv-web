import React, { useState } from 'react';
import { Hero } from './Hero';
import { Experience } from './Experience';
import { Projects } from './Projects';
import { Education } from './Education';
import { ContactView } from './ContactView';
import { User, Briefcase, Code2, GraduationCap, MessageSquare } from 'lucide-react';

export const PortfolioManager = () => {
  const [activeTab, setActiveTab] = useState('inicio');
  const [touchStart, setTouchStart] = useState(null);

  const tabs = [
    { id: 'inicio', label: 'Perfil', icon: <User size={18} /> },
    { id: 'experiencia', label: 'Experiencia', icon: <Briefcase size={18} /> },
    { id: 'proyectos', label: 'Proyectos', icon: <Code2 size={18} /> },
    { id: 'educacion', label: 'Educación', icon: <GraduationCap size={18} /> },
    { id: 'contacto', label: 'Contacto', icon: <MessageSquare size={18} /> },
  ];

  const tabOrder = tabs.map(tab => tab.id);

  // --- LÓGICA DE SWIPE OPTIMIZADA PARA iOS ---
  const handleTouchStart = (e) => {
    // Ahora guardamos tanto X (horizontal) como Y (vertical)
    setTouchStart({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    });
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    
    // Calculamos qué tanto se movió en ambos ejes
    const distanceX = touchStart.x - touchEndX;
    const distanceY = touchStart.y - touchEndY;
    const minSwipeDistance = 50; 

    // LA MAGIA PARA iOS: 
    // Solo cambiamos de pestaña si el deslizamiento fue MUCHO más horizontal que vertical
    if (Math.abs(distanceX) > Math.abs(distanceY)) {
      const currentIndex = tabOrder.indexOf(activeTab);

      // Deslizó a la izquierda (Avanzar)
      if (distanceX > minSwipeDistance && currentIndex < tabOrder.length - 1) {
        setActiveTab(tabOrder[currentIndex + 1]);
      }
      // Deslizó a la derecha (Retroceder)
      if (distanceX < -minSwipeDistance && currentIndex > 0) {
        setActiveTab(tabOrder[currentIndex - 1]);
      }
    }
    
    setTouchStart(null); 
  };

  return (
    // Agregamos 'touch-pan-y' que le dice a iOS: "Solo controla el scroll vertical, yo me encargo del horizontal"
    <div 
      className="min-h-screen pb-24 md:pb-20 overflow-x-hidden touch-pan-y" 
      onTouchStart={handleTouchStart} 
      onTouchEnd={handleTouchEnd}
    >
      
      {/* MENÚ */}
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

      {/* CONTENIDO */}
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