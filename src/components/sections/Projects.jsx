import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Imports das imagens (Use seus nomes corretos aqui para não dar erro!)
// IMPORTANTE: Se você ainda não tem as imagens, COMENTE as linhas abaixo e use o código sem a tag <img>
import imgHospital from '../../assets/proj-hospital.jpg';
import imgDados from '../../assets/proj-dados.jpg';
import imgPortfolio from '../../assets/proj-portfolio.jpg';
import imgHibernate from '../../assets/proj-hibernate.png';

export default function Projects() {
  const projects = [
    {
      title: "Análise de Atendimentos Hospitalares",
      description: "Dashboard interativo para identificar padrões de atendimentos, acompanhamento mensal e KPIs financeiros usando Power BI.",
      techs: ["Power BI", "DAX", "Excel"],
      status: "Concluído",
      image: imgHospital,
      liveUrl: "https://app.powerbi.com/view?r=eyJrIjoiMDNjNzJkNmEtZmZhYS00YTM0LThlYWQtNzM1ZTdmOWU4ZDFlIiwidCI6ImNlYWQ1NmU3LWU5MWEtNDFkMC1iMGU3LTE4N2JiMzgwNjFiZiIsImMiOjR9" // SEU LINK AQUI
    },
    {
      title: "Gerador de Dados Sintéticos (ETL)",
      description: "Pipeline em Python que gera dados realistas de saúde, aplica regras de negócio e carrega em banco SQL.",
      techs: ["Python", "Faker", "SQL"],
      status: "Concluído",
      image: imgDados,
      githubUrl: "https://github.com/KaykyGC/ProjetoContasMedicas",
      liveUrl: "#" // Não tem demo ao vivo, então pode ser '#' ou vazio
    },
    {
      title: "Meu Portfólio Pessoal",
      description: "Interface moderna desenvolvida para apresentar projetos. Conta com animações (ScrollReveal), modo escuro e responsividade.",
      techs: ["React", "Tailwind CSS", "Vite"],
      status: "Concluído",
      image: imgPortfolio,
      githubUrl: "https://github.com/kayky/meu-portfolio",
      liveUrl: "#"
    },
    {
      title: "Hibernate Integration",
      description: "Projeto de backend focado em persistência de dados e mapeamento objeto-relacional (ORM) robusto.",
      techs: ["Java", "SQL", "Hibernate"],
      status: "Em andamento",
      image: imgHibernate,
      githubUrl: "https://github.com/KaykyGC/Hibernate",
    }
  ];

  return (
    <div className="w-full">
      
      <ScrollReveal>
        <h3 className="text-gray-800 text-3xl font-bold mb-10 pl-4 border-l-8 border-blue-500">
          Meus Projetos
        </h3>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ScrollReveal key={index} delay={index * 150}>
            <div className="
              flex flex-col h-full 
              bg-white border border-gray-200 
              rounded-2xl overflow-hidden 
              hover:shadow-xl hover:-translate-y-1 
              active:scale-[0.98]
              transition-all duration-300 
              group cursor-pointer
            ">
              
              <div className="h-64 overflow-hidden relative border-b border-gray-100">
                 {/* Se as imagens estiverem ok, mantenha esta tag <img> */}
                 <img 
                   src={project.image} 
                   alt={`Preview do projeto ${project.title}`}
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-active:scale-105"
                 />
                 <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 group-active:opacity-10 transition-opacity duration-300"></div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-bold text-lg text-gray-800 leading-tight">
                    {project.title}
                  </h4>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap border ${
                    project.status === "Em andamento" 
                      ? "bg-yellow-50 text-yellow-700 border-yellow-200" 
                      : "bg-blue-50 text-blue-700 border-blue-200"
                  }`}>
                    {project.status}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techs.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-50 text-gray-600 text-[11px] rounded border border-gray-200 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto border-t border-gray-50 pt-4">
                  
                  {/* LINK CÓDIGO (GitHub) */}
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <FaGithub /> <span className="text-xs">Código</span>
                  </a>
                  
                  {/* LINK VER PROJETO (Demo) */}
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <FaExternalLinkAlt /> <span className="text-xs">Ver Projeto</span>
                  </a>

                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}