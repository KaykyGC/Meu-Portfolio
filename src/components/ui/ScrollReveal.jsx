import { useState, useEffect, useRef } from 'react';

export default function ScrollReveal({ children, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Se entrou na tela...
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // --- CHAVE DA ESTABILIDADE ---
          // Desliga o sensor IMEDIATAMENTE.
          // O elemento é animado e fica visível para sempre, sem chance de bugar.
          observer.unobserve(element); 
        }
        // Removemos o bloco 'else { setIsVisible(false) }'
      },
      { 
        threshold: 0.1 // Básico e funcional: dispara quando 10% do item aparece
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []); 

  return (
    <div
      ref={ref}
      // O delay CSS é mantido para que os cards apareçam em cascata
      style={{ 
        transitionDelay: `${delay}ms` 
      }}
      className={`
        transition-all duration-700 ease-out transform will-change-transform
        ${isVisible 
          ? 'opacity-100 translate-y-0'    // Visível
          : 'opacity-0 translate-y-16'     // Escondido, esperando
        }
      `}
    >
      {children}
    </div>
  );

}
