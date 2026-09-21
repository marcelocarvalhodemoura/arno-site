import { Link } from "react-router-dom";
import { activities } from "@/content/activities";
import Reveal from "@/shared/ui/Reveal";

export function MosaicSection() {
  return (
    <section className="section mosaic">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="kicker">Vivência</span>
            <h2>O programa em movimento.</h2>
          </Reveal>
        </div>
        <div className="mosaic__grid">
          {activities.slice(0, 4).map((item, index) => (
            <Reveal key={item.id} delay={index * 0.06} className={`mosaic__cell mosaic__cell--${index + 1}`}>
              <Link to="/atividades" className="mosaic__card">
                <img src={item.image} alt="" />
                <div>
                  <small>{item.tag}</small>
                  <h3>{item.title}</h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
