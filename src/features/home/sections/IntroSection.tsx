import { Link } from "react-router-dom";
import { FaArrowRight, FaCompass } from "react-icons/fa";
import { images } from "@/content/images";
import { site } from "@/content/identity";
import Reveal from "@/shared/ui/Reveal";

export function IntroSection() {
  return (
    <section className="section intro" id="trilha">
      <div className="container intro__grid">
        <Reveal>
          <span className="kicker">Por que existimos</span>
          <h2>Educação pelo movimento, não pelo discurso.</h2>
          <p className="lead">
            Escotismo é um método. Aqui, a criança, o adolescente e o jovem assumem o próprio desenvolvimento — com a
            Promessa, a Lei, as equipes e a natureza. O Arno Friedrich vive o Programa Educativo da UEB, sábado a
            sábado, no sul do Brasil.
          </p>
          <ul className="intro__points">
            <li>
              <FaCompass /> Método Educativo Escoteiro da UEB
            </li>
            <li>
              <FaCompass /> Quatro ramos, da Alcateia ao Clã Pioneiro
            </li>
            <li>
              <FaCompass /> Sede no Lindóia, porta aberta à cidade
            </li>
          </ul>
          <Link to="/ramos" className="btn btn-dark">
            Ver os ramos <FaArrowRight />
          </Link>
        </Reveal>

        <Reveal delay={0.12} className="intro__visual">
          <div className="intro__photo" style={{ backgroundImage: `url(${images.camp})` }} />
          <div className="intro__card">
            <span>Reuniões</span>
            <strong>{site.meetings}</strong>
            <em>{site.addressExtra}</em>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
