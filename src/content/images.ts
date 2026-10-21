import photoNatureza from "@/shared/assets/photos/natureza.jpg";
import photoTropa from "@/shared/assets/photos/tropa-lis.jpg";
import photoAperto from "@/shared/assets/photos/aperto.jpg";
import photoTrilhaPedra from "@/shared/assets/photos/trilha-pedra.jpg";
import photoGuaiba from "@/shared/assets/photos/vista-guaiba.jpg";
import photoPatrulha from "@/shared/assets/photos/patrulha.jpg";
import photoHero from "@/shared/assets/photos/hero-grupo.jpg";
import photoEntrada from "@/shared/assets/photos/grupo-entrada.jpg";
import photoSede from "@/shared/assets/photos/sede.jpg";
import photoAtividade from "@/shared/assets/photos/atividade.jpg";
import photoTrilhaJovens from "@/shared/assets/photos/trilha-jovens.jpg";
import photoRamoSenior from "@/shared/assets/photos/ramo-senior-escalada.jpg";
import photoRamoEscoteiro from "@/shared/assets/photos/ramo-escoteiro-nos.jpg";
import photoRamoPioneiro from "@/shared/assets/photos/ramo-pioneiro-cla.jpg";
import photoRamoLobinho from "@/shared/assets/photos/ramo-lobinho.jpg";
import photoTrilhaAlcateia from "@/shared/assets/photos/trilha-alcateia.jpg";
import photoMuralBP from "@/shared/assets/photos/chefias-mural-bp.jpg";
import photoFlorDeLis from "@/shared/assets/photos/clube-flor-de-lis.jpg";
import photoJogos from "@/shared/assets/photos/jogos-canecas.jpg";
import photoChefia from "@/shared/assets/photos/chefia.jpg";
import photoJogoPatrulhas from "@/shared/assets/photos/jogo-patrulhas-mata.jpg";

export const images = {
  forest: photoNatureza,
  camp: photoTropa,
  fire: photoAperto,
  hike: photoTrilhaPedra,
  lake: photoGuaiba,
  kids: photoPatrulha,
  night: photoHero,
  trail: photoEntrada,
  community: photoSede,
  map: photoAtividade,
  summit: photoTrilhaJovens,
  games: photoJogos,
  leaders: photoChefia,
  trailKids: photoTrilhaAlcateia,
  history: photoMuralBP,
  florDeLis: photoFlorDeLis,
  patrolGame: photoJogoPatrulhas,
};

/** Foto de cada ramo na página Ramos (posição = foco do recorte). */
export const branchPhotos: Record<string, { src: string; position: string; alt: string }> = {
  lobinho: {
    src: photoRamoLobinho,
    position: "30% 55%",
    alt: "Lobinho sorridente fazendo joinha ao lado de uma escotista, com a Alcateia ao fundo",
  },
  escoteiro: {
    src: photoRamoEscoteiro,
    position: "center 40%",
    alt: "Escoteiros da Tropa praticando nós com cordas, ao ar livre",
  },
  senior: {
    src: photoRamoSenior,
    position: "center 30%",
    alt: "Tropa Sênior e escotistas reunidos em frente a uma parede de escalada",
  },
  pioneiro: {
    src: photoRamoPioneiro,
    position: "center 35%",
    alt: "Jovens e escotistas uniformizados posando juntos em frente a uma casa",
  },
};
