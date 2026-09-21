import type { NewsItem, TimelineItem, TeamMember, JoinStep } from "@/content/types";

export const news: NewsItem[] = [
  {
    date: "22 Ago 2026",
    title: "Inscrições abertas para o segundo semestre",
    excerpt: "Há vagas na Alcateia e na Tropa Escoteira. A primeira reunião pode ser experimental, sem compromisso.",
  },
  {
    date: "08 Ago 2026",
    title: "Projeto de arborização no bairro",
    excerpt: "Jovens do Ramo Sênior lideram o plantio de mudas nativas em parceria com moradores do Lindóia.",
  },
  {
    date: "19 Jul 2026",
    title: "Acampamento de inverno: o que aprendemos",
    excerpt: "Frio, fogueira e patrulhas autônomas. Um relato do campo que marcou o meio do ano.",
  },
];

export const timeline: TimelineItem[] = [
  {
    year: "1991",
    title: "A fundação",
    text: "Nasce o Grupo Escoteiro Arno Friedrich em Porto Alegre, com o propósito de oferecer aos jovens uma educação pelo movimento, pela natureza e pelo exemplo.",
  },
  {
    year: "1990s",
    title: "Raízes no Lindóia",
    text: "A sede se consolida junto ao Lindóia Tênis Clube. O grupo torna-se referência de vizinhança, serviço e formação de chefias.",
  },
  {
    year: "2000s",
    title: "Da Alcateia ao Clã",
    text: "Alcateia, Tropas e Clã passam a conviver no mesmo sábado, num ciclo contínuo do lobo ao pioneiro.",
  },
  {
    year: "Hoje",
    title: "Quatro ramos, uma trilha",
    text: "Alcateia, Tropas e Clã no mesmo sábado: Lobinho, Escoteiro, Sênior e Pioneiro — a progressão que o grupo oferece hoje, do lobo ao servir.",
  },
];

export const team: TeamMember[] = [
  {
    name: "Carlos Silva",
    role: "Chefe de Grupo",
    bio: "Coordena a unidade, as chefias e o diálogo com famílias e comunidade.",
  },
  {
    name: "Maria Oliveira",
    role: "Subchefe de Grupo",
    bio: "Apoia o programa educativo e o cuidado com cada jovem e cada ramo.",
  },
  {
    name: "Roberto Santos",
    role: "Diretor de Atividades",
    bio: "Desenha acampamentos, saídas e o calendário que dá ritmo ao ano escoteiro.",
  },
];

export const joinSteps: JoinStep[] = [
  {
    n: "01",
    title: "Conheça a sede",
    text: "Envie uma mensagem ou venha num sábado. Conversamos com a família e apresentamos o método.",
  },
  {
    n: "02",
    title: "Reunião experimental",
    text: "O jovem participa de uma tarde com o ramo correspondente à idade — sem uniforme, com curiosidade.",
  },
  {
    n: "03",
    title: "Ingresso",
    text: "Com a decisão tomada, formalizamos o registro anual na UEB — condição para a prática do Escotismo no Brasil — e preparamos a recepção na matilha, na patrulha ou no Clã.",
  },
];

export const marqueeWords = [
  "Honra",
  "Lealdade",
  "Boa Ação",
  "Fraternidade",
  "Cortesia",
  "Natureza",
  "Disciplina",
  "Alegria",
  "Respeito",
  "Pureza",
];
