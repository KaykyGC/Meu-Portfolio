import Header from './components/sections/Header';
import Top from './components/sections/Top';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />

      <main className="flex-1 flex flex-col items-center gap-24 w-full pb-32 mt-10">
        
        {/* Wrapper do Topo */}
        <div className="w-full px-4 flex justify-center">
          <Top />
        </div>

        {/* Linha Azul Neon */}
        <div className="w-full h-[7px] bg-blue-500 "></div>

        {/* --- A GRANDE CAIXA UNIFICADA --- */}
        <div className="w-full px-4 flex justify-center">
          <div className="
            bg-white 
            w-full max-w
            rounded-[3rem] 
            shadow-2xl 
            p-8 md:p-16
            flex flex-col gap-16 
          ">
            
            {/* Seção 1: Skills */}
            <Skills />

            {/* Divisor Interno (Linha cinza suave) */}
            <br></br>
            <div className="w-full h-px bg-gray-200 " ></div>
            <br></br>
            

            {/* Seção 2: Projetos */}
            <Projects />

          </div>
        </div>
        
      </main>
    </div>
  );
}

export default App;