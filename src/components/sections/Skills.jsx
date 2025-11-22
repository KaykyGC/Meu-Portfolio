import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';
// Mantenha suas importações de ícones aqui (FaPython, etc...)
// Se estiver usando a versão sem ícones por enquanto, tudo bem.
import { FaPython, FaReact, FaDatabase, FaRobot, FaChartBar } from 'react-icons/fa';
import { SiPandas } from 'react-icons/si';

export default function Skills() {
  const skills = [
    { name: "Python", level: "Avançado", color: "border-yellow-400", icon: FaPython, iconColor: "text-yellow-400" },
    { name: "Power BI", level: "Intermediário", color: "border-yellow-600", icon: FaChartBar, iconColor: "text-yellow-500" },
    { name: "Pandas", level: "Avançado", color: "border-purple-600", icon: SiPandas, iconColor: "text-purple-500" },
    { name: "React", level: "Intermediário", color: "border-blue-400", icon: FaReact, iconColor: "text-blue-400" },
    { name: "SQL", level: "Intermediário", color: "border-blue-600", icon: FaDatabase, iconColor: "text-blue-600" },
  ];

  return (
    <div className="w-full">
      
      <ScrollReveal>
        <h3 className="text-gray-800 text-3xl font-bold mb-8 pl-4 border-l-8 border-blue-500">
          Minhas Habilidades
        </h3>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <ScrollReveal key={index} delay={index * 100}>
            <div className={`bg-neutral-900 text-white p-6 rounded-2xl border-l-4 ${skill.color} hover:bg-neutral-800 transition-all duration-300 shadow-md h-full group`}>
              <div className="flex items-center gap-4 mb-2">
                <div className={`text-3xl ${skill.iconColor} transition-transform group-hover:scale-110`}>
                  <skill.icon />
                </div>
                <h4 className="font-bold text-xl">{skill.name}</h4>
              </div>
              <p className="text-gray-400 text-sm font-medium uppercase tracking-wide pl-1">
                {skill.level}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}