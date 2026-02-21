import React, { useEffect, useRef, useState } from 'react';

export const Reveal = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // IntersectionObserver detecta cuándo el elemento entra en la pantalla
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Hace la animación solo una vez
        }
      },
      {
        threshold: 0.1, // Se activa cuando el 10% de la tarjeta es visible
        rootMargin: "0px 0px -50px 0px" // Un pequeño margen para que se note el efecto al bajar
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
    >
      {children}
    </div>
  );
};