const logotext = "TYTO";
const meta = {
    title: "Tyto",
    description: "Eu sou Victor, a.k.a. Tyto, um Hacker Ético e Desenvolvedor Web.",
};

const introdata = {
    title: "Olá, meu nome é Victor,",
    animated: {
        first: "a.k.a. tyto",
        second: "a.k.a. tyto",
        third: "a.k.a. tyto",
    },
    description: "Sou um Engenheiro Físico com experiência em Segurança Ofensiva, Desenvolvimento Web e Engenharia de Dados. Estou sempre aberto a novas oportunidades e colaborações. Não exite em entrar em contato!",
    your_img_url: "/images/victor.jpg",
};

const dataabout = {
    title: "Sobre mim",
    aboutme1: "Atualmente trabalho como Desenvolvedor Júnior na DB Server. Sou terceiro na equipe de Governança de TI do Sicredi, a primeira instituição financeira cooperativa da América Latina. Nesta função, trabalho no desenvolvimento Front-End com React e TypeScript, desenvolvimento Back-End com Java e Spring Boot e construção de ETLs usando Python, SQL e Databricks.",
    aboutme2: "Além disso estou constantemente me aprimorando na área de Segurança Ofensiva, através de cursos, certificações, CTFs e mentorias com profissionais mais experientes."
};

const worktimeline = [
    {
        jobtitle: "Desenvolvedor Jr.",
        where: "DB Server",
        date: "2024 - Atualmente",
    },
    {
        jobtitle: "Trainee",
        where: "DB Server",
        date: "2023 - 2024",
    },
    {
        jobtitle: "Monitor de Educação Tecnológica",
        where: "ZOOM education for life",
        date: "2023 - 2023",
    },
    {
        jobtitle: "Assessor de Projetos",
        where: "Inovatos Consultoria Júnior",
        date: "2022 - 2022",
    }
];

const education = [{
        title: "Engenharia Eletrônica e de Telecomunicações | UFU | 2021 - 2024",
        description: "Cursei sete semestres de Engenharia Eletrônica e de Telecomunicações na Universidade Federal de Uberlândia, onde finalizei todas as disciplinas do eixo de Computação, as quais estavam inclusas: Introdução a Programação, Programação Orientada a Objetos, Engenharia de Software, Inteligência Artificial, Redes de Comunicação, dentre outras disciplinas dos eixos de Eletrônica, Controle e Telecomunicações.",
    },
    {
        title: "Eng. de Tecnologia da Informação | Obuda University | 2014 - 2015",
        description: "Fiz um intercâmbio de três semestres em Budapeste na Hungria pelo programa Ciências sem Fronteiras, onde cursei disciplinas de Tecnologia da Informação e Engenharia de Controle por um ano, além de um curso intensivo de Inglês por um semestre.",
    },
    {
        title: "Engenharia Física | UEMS | 2012 - 2019",
        description: "Sou formado em Engenharia Física pela Universidade Estadual de Mato Grosso do Sul. Neste curso, tive contato com várias disciplinas de Física, Matemática, Eletrônica e Engenharia de Controle. Esta graduação foi fundamental para meu desenvolvimento acadêmico e profissional, pois me ensinou aprender a aprender."
    }
];

const certifications = [{
    title: "DCPT | DESEC | Em progresso",
    description: "Atualmente estou me preparando para certificação DCPT através dos laboratórios do Pentest Experience, CTFs e módulos da Hack The Box Academy.",
}
];

const complementar_education = [
{
    title: "Pentest Experience v1 | DESEC | 2025",
    description: "Este curso é composto por vários laboratórios realísticos de Pentest, onde exercitei conceitos de Pentest de Infraestrutura, Pentest Web e Pentest Interno.",
},
{
    title: "Novo Pentest Profissional | DESEC | 2025",
    description: "Este curso aborda os fundamentos de Pentest, desde conceitos básicos de Redes, Sistemas Operacionais e Linguagens de Programação até conceitos avançados de Pentest de Infraestrutura, Pentest Web, Pentest Interno, Análise de Vulnerabilidades e Exploração de Binários.",
},
{
    title: "CCNA: Introduction to Networks | Cisco | 2023",
    description: "Este curso abordou os fundamentos de Redes e do protocolo TCP/IP, além de como configurar Switches e Routers Cisco em redes pequenas. Durante o curso, exercitei conceitos de roteamento e endereçamento IP utilizando o Packet Tracer e o Wireshark.",
},
{
    title: "Intensive Course of English and Hungarian | Obuda University | 2014",
    description: "Durante meu intercâmbio na Hungria, cursei um semestre intensivo de inglês e húngaro. Neste curso, elevei bastante o nível do meu inglês, além de aprender um pouco sobre a cultura e a língua húngara.",
},
];

const techniques = [
    {
        name: "Reconhecimento",
        value: 70,
    },
    {
        name: "Pentest de Infraestrutura",
        value: 70,
    },
    {
        name: "Pentest Web",
        value: 70,
    },
    {
        name: "Pós Exploração",
        value: 70,
    },
    {
        name: "Pentest Interno",
        value: 60,
    },
    {
        name: "Exploração de Binários",
        value: 50,
    }
];

const methodologies = [
    {
        name: "OWASP",
        value: 60,
    },
    {
        name: "PTES",
        value: 60,
    },
];

const languages = [
    {
        name: "Python",
        value: 90,
    },
    {
        name: "Java",
        value: 90,
    },
    {
        name: "Javascript",
        value: 70,
    },
    {
        name: "Bash Script",
        value: 70
    }
]


const portfolio = [
    {
        img: "/images/portfolio/linkaboo.png",
        description: "Script de Enumeração Linux focado em pós-exploração, ideal para mapear sistemas e identificar potenciais vetores de ataque.",
        link1: "https://github.com/tyto-sec/linkaboo",
        link1_text: "Github",
    },
        {
        img: "/images/portfolio/nmapalooza.png",
        description: "Este script automatiza o processo de escaneamento de uma rede em vários estágios utilizando Nmap.",
        link1: "https://github.com/tyto-sec/nmapalooza",
        link1_text: "Github",
    }
];


const contactConfig = {
    YOUR_EMAIL: "victorhfsilva@protonmail.com",
    description: "Entre em contato para discutir sobre oportunidades de trabalho e projetos. Estou sempre aberto a novas ideias e colaborações.",
};

const socialprofils = {
    github: "https://github.com/tyto-sec",
    linkedin: "https://www.linkedin.com/in/victorhfsilva/",
    youtube: "https://www.youtube.com/channel/UCIjNSUfEUkaFJRZbKBUjTzQ",
    twitter: "https://x.com/victor_hfsilva"
};

export {
    meta,
    dataabout,
    portfolio as dataportfolio,
    worktimeline,
    techniques,
    methodologies,
    languages,
    education,
    complementar_education,
    certifications,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};