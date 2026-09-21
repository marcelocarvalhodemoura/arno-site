import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { ramos } from "@/content/branches";
import Reveal from "@/shared/ui/Reveal";

export function BranchesPreview() {
  return (
    <section className="section ramos-preview">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="kicker">Progressão</span>
            <h2>Quatro ramos, uma mesma bússola.</h2>
            <p className="lead">
              No Arno Friedrich funcionam Alcateia, Tropa Escoteira, Tropa Sênior e Clã Pioneiro. Cada ramo tem ênfase,
              lema e marco simbólico próprios, conforme o POR.
            </p>
          </Reveal>
        </div>

        <div className="ramos-preview__grid">
          {ramos.map((ramo, index) => (
            <Reveal key={ramo.id} delay={index * 0.08}>
              <Link to={`/ramos#${ramo.id}`} className={`ramo-card ramo-card--${ramo.tone}`}>
                <span className="ramo-card__ages">{ramo.ages}</span>
                <h3>{ramo.branch}</h3>
                <p>{ramo.summary}</p>
                <span className="ramo-card__go">
                  Explorar <FaArrowRight />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
