import ConsultlyLogo from "../images/logos/consultly.svg";
import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";

export const RESUME_DATA = {
  name: "Marcos Vinícius Hellmann Delfino",
  initials: "MH",
  location: "Armazém, Santa Catarina, Brasil",
  locationLink: "https://www.google.com/maps/place/Armaz%C3%A9m",
  about:
    "Desenvolvedor Full Stack focado em construir produtos com atenção extra aos detalhes",
  summary:
    "Desenvolvedor de software experiente com habilidades em JavaScript, Flutter e PHP. Tenho experiência em desenvolvimento de aplicativos móveis e web, bem como em soluções de back-end. Meu objetivo é trabalhar em uma empresa inovadora onde eu possa aplicar minhas habilidades de programação para criar soluções de alta qualidade, contribuindo para o sucesso da empresa.",
  avatarUrl: "https://github.com/marcosvhd1.png",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "marcosvhd1@gmail.com",
    tel: "+5548996351582",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/marcosvhd1",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/marcos-hellmann-2776b6229/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/vinihd7",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Universidade do Sul de Santa Catarina",
      degree: "Bacharelado em Ciência da Computação",
      start: "2017",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Cubo Sistemas",
      link: "https://www.cubosis.com.br/",
      badges: ["Presencial"],
      title: "Help Desk",
      logo: '',
      start: "Julho 2020",
      end: "Março 2022",
      description:
        "Criar tutorias e manuais para facilitar o uso do sistema, além de resolução de problemas, com foco na satisfação dos clientes.",
    },
    {
      company: "Cubo Sistemas",
      link: "https://www.cubosis.com.br/",
      badges: ["Remoto"],
      title: "Desenvolvedor",
      logo: '',
      start: "Março 2022",
      end: "Dezembro 2023",
      description:
        "Desenvolvimento de software utilizando as linguagens de programação JavaScript, Flutter e PHP, comunicando com bancos de dados SQL e NoSQL.",
    },
    {
      company: "",
      link: "",
      badges: [],
      title: "",
      logo: '',
      start: "",
      end: "",
      description:
        "1. Sistema em React para emissão de notas fiscais eletrônicas. Para esse projeto utilizei a lib Chakra UI para o front-end e o framework AdonisJS para back-end. A comunicação com a SEFAZ foi feita em back-end PHP pela lib SPEDNFE.",
    },
    {
      company: "",
      link: "",
      badges: [],
      title: "",
      logo: '',
      start: "",
      end: "",
      description:
        "2. Sistema em Flutter de apoio para o OSPlus5 para auxiliar clientes em atendimentos externos. O app salva as informações localmente, porém quando há acesso a internet, sincroniza as informações pelo Firebase RTDB.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Flutter",
    "Dart",
    "PHP",
  ],
} as const;
