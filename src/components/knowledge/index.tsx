import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaDatabase,
  FaVuejs,
} from "react-icons/fa";
import {
  SiCapacitor,
  SiGraphql,
  SiPrisma,
  SiCypress,
  SiQuasar,
  SiNestjs,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

type Skill = {
  skill: {
    title: string;
    icon: React.ReactNode;
    description: string;
  };
};

const skills = [
  {
    title: "React",
    icon: <FaReact className="text-blue-500" />,
    description:
      "Uma biblioteca JavaScript popular para construir interfaces de usuário, particularmente para aplicações de página única. O React permite a criação de componentes reutilizáveis.",
  },
  {
    title: "Vue.js",
    icon: <FaVuejs className="text-green-600" />,
    description:
      "Um framework JavaScript progressivo para construir interfaces de usuário e aplicações de página única. Oferece um ecossistema flexível e adotável incrementalmente.",
  },
  {
    title: "Node.js",
    icon: <FaNodeJs className="text-green-500" />,
    description:
      "Um ambiente de execução JavaScript baseado no motor V8 do Chrome que permite construir aplicações de rede escaláveis e realizar operações no lado do servidor.",
  },
  {
    title: "Prisma",
    icon: <SiPrisma className="text-purple-500" />,
    description:
      "Um ORM (Mapeamento Objeto-Relacional) de código aberto que simplifica o acesso e a gestão de banco de dados com consultas seguras para tipos para vários bancos de dados.",
  },
  {
    title: "GraphQL",
    icon: <SiGraphql className="text-e535ab" />,
    description:
      "Uma linguagem de consulta para APIs que permite aos clientes solicitar dados específicos e obter uma resposta previsível, facilitando o trabalho com APIs.",
  },
  {
    title: "PostgreSQL",
    icon: <FaDatabase className="text-orange-500" />,
    description:
      "Um sistema de banco de dados objeto-relacional de código aberto poderoso, conhecido por sua robustez, extensibilidade e suporte para consultas complexas.",
  },
  {
    title: "Capacitor",
    icon: <SiCapacitor className="text-green-500" />,
    description:
      "Um runtime de aplicativo multiplataforma que permite construir aplicações web e executá-las como aplicações móveis nativas usando a mesma base de código.",
  },
  {
    title: "Quasar",
    icon: <SiQuasar className="text-blue-600" />,
    description:
      "Um framework Vue.js que permite construir sites responsivos, aplicativos web progressivos e aplicativos móveis com uma única base de código.",
  },
  {
    title: "Docker",
    icon: <FaDocker className="text-blue-500" />,
    description:
      "Uma plataforma para desenvolver, enviar e executar aplicações em contêineres leves, garantindo consistência em diferentes ambientes.",
  },
  {
    title: "React Native",
    icon: <TbBrandReactNative className="text-blue-500" />,
    description:
      "Um framework para criar aplicativos móveis nativos usando JavaScript e React. Ele permite criar apps multiplataforma para iOS e Android com um único código base.",
  },
  {
    title: "NestJS",
    icon: <SiNestjs className="text-red-600" />,
    description:
      "Um framework para construir aplicações web eficientes e escaláveis usando TypeScript e Node.js. Ele permite a criação de APIs robustas com uma arquitetura modular e uma base de código unificada",
  },
  {
    title: "Cypress",
    icon: <SiCypress className="text-cyan-500" />,
    description:
      "Uma ferramenta de teste front-end projetada para testes de ponta a ponta de aplicações web, fornecendo testes rápidos e confiáveis com uma interface amigável.",
  },
];

const SkillCard = React.memo(function SkillCard({ skill }: Skill) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-200 ease-in-out hover:scale-105 opacity-0 animate-fadeIn">
      <div className="flex items-center justify-center mb-4 text-4xl">
        {skill.icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
      <p className="text-gray-700">{skill.description}</p>
    </div>
  );
});

export function KnowledgeComponent(): JSX.Element {
  return (
    <section id="conhecimentos" className="p-8 md:px-24 md:py-12 bg-gray-100 ">
      <div className="container text-center max-w-5xl px-6 mx-auto ">
        <h2 className="text-3xl font-bold mb-12">
          Meus Conhecimentos e Habilidades
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <React.Fragment key={skill.title}>
              <SkillCard skill={skill} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
