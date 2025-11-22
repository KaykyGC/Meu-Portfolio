import TypingEffect from '../ui/TypingEffect'; 
import imagemfoto from '../../assets/eu.jpeg'; 

export default function Top() {
  return (
    <div className="
      bg-white 
      w-full max-w-5xl 
      h-auto md:h-[550px]
      rounded - [2rem] md:rounded-[3rem]
      shadow-2xl 
      p-6 md:p-8
      flex flex-col md:flex-row
      gap-6 md:gap-10
      overflow-hidden items-center
      relative /* Adicionado relative para garantir que o style block não quebre nada visualmente */
    ">
      
      {/* --- CSS PERSONALIZADO PARA O BOUNCE SUTIL --- */}
      {/* Move a imagem 10px para cima e volta, num ciclo de 3 segundos */}
      <style>{`
        @keyframes subtle-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-subtle-float {
          animation: subtle-float 3s ease-in-out infinite;
        }
      `}</style>

      {/* --- IMAGEM --- */}
      <div className="
        w-full md:w-2/5
        h-64 md:h-full
        flex items-center justify-center flex-shrink-0
        py-4 /* Adicionei um pequeno padding vertical para a imagem não cortar no topo quando flutuar */
      ">
        <img
          src={imagemfoto} 
          alt="Foto de Perfil do Kayky"
          className="
            w-full h-full 
            object-cover 
            rounded-[1.5rem] md:rounded-[2rem] 
            shadow-md 
            
            /* --- MUDANÇA AQUI --- */
            /* Removido: transition-transform hover:scale-105 active:scale-105 */
            /* Adicionado: animate-subtle-float */
            animate-subtle-float
            
            cursor-pointer
          "
        />
      </div>

      {/* --- TEXTO (Sem alterações) --- */}
      <div className="
        w-full md:w-3/5
        flex flex-col justify-center h-full
      ">
        <h2 className="
          text-gray-800 font-bold 
          text-center md:text-left
          flex flex-col gap-3
        ">
          <div className="block text-2xl md:text-4xl">
             <TypingEffect text="Olá, eu sou o Kayky!" speed={80} />
          </div>
          <div className="block text-blue-600 text-xl md:text-3xl">
             <TypingEffect text="Desenvolvedor e Analista de Dados" speed={80} delay={2500} />
          </div>
        </h2>
      </div>

    </div>
  );
}