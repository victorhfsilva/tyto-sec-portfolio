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
    description: "Sou formado em Engenharia Física pela UEMS com graduação sanduíche em Engenharia de Tecnologia da Informação pela Óbuda University. Já minha experiência profissional está distribuída entre Segurança Ofensiva, Desenvolvimento de Software e Engenharia de Dados.",
    your_img_url: "/images/victor.jpg",
};

const dataabout = {
    title: "Sobre mim",
    aboutme1: "Atualmente trabalho como Engenheiro de Software do Sicredi na equipe de Governança de TI do Sicredi, a primeira instituição financeira cooperativa da América Latina. Nesta função, trabalho no desenvolvimento Front-End com React e TypeScript, desenvolvimento Back-End com Java e Spring Boot, construção de ETLs no Databricks e implementação de Pipelines de Dados em Python.",
    aboutme2: "Além disso estou constantemente me aprimorando na área de Segurança Ofensiva, através de cursos, certificações, CTFs e Bug Bounties."
};

const worktimeline = [
    {
        jobtitle: "Engenheiro de Software Jr.",
        where: "Sicredi",
        date: "2025 - Atualmente",
    },
    {
        jobtitle: "Desenvolvedor Jr.",
        where: "DB Server",
        date: "2024 - 2025",
    },
    {
        jobtitle: "Trainee",
        where: "DB Server",
        date: "2023 - 2024",
    }
];

const education = [
    {
        title: "Eng. de Tecnologia da Informação | Obuda University | 2014 - 2015",
        description: "Realizei uma graduação sanduíche em Budapeste pelo programa Ciências sem Fronteiras onde cursei 1 ano de Engenharia de Tecnologia da Informação e seis meses de um curso intensivo de inglês.",
    },
    {
        title: "Engenharia Física | UEMS | 2012 - 2019",
        description: "Sou formado em Engenharia Física pela Universidade Estadual de Mato Grosso do Sul."
    }
];

const certifications = [{
    title: "DCPT | DESEC | Em progresso",
    description: "Atualmente estou me preparando para certificação DCPT através de CTFs.",
},
{
    title: "CWHI | Hacking Club | Em progresso",
    description: "Estou no processo de estudos do Web Hacking na prática, o curso preparatório para CWHI.",
}
];

const complementar_education = [
{
    title: "Pentest Experience v1 | DESEC | 2025",
    description: "Este curso é composto por vários ambientes realísticos, onde exercitei conceitos de Pentest de Infraestrutura, Pentest Web e Pentest Interno.",
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
    description: "Durante meu intercâmbio na Hungria, cursei por um semestre um curso intensivo de inglês e húngaro. Neste curso, elevei bastante o nível do meu inglês, além de aprender um pouco sobre a cultura e a língua húngara através da imersão no país.",
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
        value: 70,
    },
    {
        name: "Exploração de Binários",
        value: 60,
    }
];

const methodologies = [
    {
        name: "OWASP",
        value: 70,
    },
    {
        name: "PTES",
        value: 70,
    },
    {
        name: "MITRE ATT&CK",
        value: 70,
    }
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
        value: 80,
    },
    {
        name: "Bash Script",
        value: 80
    },
    {
        name: "Golang",
        value: 70,
    },
    {
        name: "C",
        value: 70,
    },
    {
        name: "Powershell",
        value: 60,
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
    youtube: "https://youtube.com/@TytoSecurity",
    twitter: "https://x.com/tytosec",
    instagram: "https://instagram.com/tytosec",
    twitch: "https://twitch.tv/tytosec"
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