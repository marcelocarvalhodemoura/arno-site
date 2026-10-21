import { images } from "@/content/images";
import type { Activity } from "@/content/types";

export const activities: Activity[] = [
  {
    id: 1,
    title: "Acampamentos",
    tag: "Campo",
    description:
      "Noites sob as estrelas, fogueira, cozinha de campo e a patrulha funcionando como uma pequena comunidade.",
    image: images.camp,
  },
  {
    id: 2,
    title: "Serviço à comunidade",
    tag: "Cidadania",
    description:
      "Ações concretas no bairro Lindóia e em Porto Alegre: mutirões, campanhas e projetos pensados pelos jovens.",
    image: images.community,
  },
  {
    id: 3,
    title: "Trilhas e expedições",
    tag: "Aventura",
    description: "Caminhadas, orientação e desafios progressivos — do parque urbano à serra gaúcha.",
    image: images.trailKids,
  },
  {
    id: 4,
    title: "Técnicas e especialidades",
    tag: "Saber",
    description: "Primeiros socorros, nós, pioneirias, astronomia, comunicação e dezenas de especialidades da UEB.",
    image: images.map,
  },
  {
    id: 5,
    title: "Jogos escoteiros",
    tag: "Método",
    description: "O jogo como ferramenta educativa: estratégia, corpo, imaginação e o prazer de estar junto.",
    image: images.games,
  },
  {
    id: 6,
    title: "Guardiões da natureza",
    tag: "Ambiente",
    description: "Plantio, educação ambiental e o compromisso da Lei: ser bom para os animais e as plantas.",
    image: images.forest,
  },
];
