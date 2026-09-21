import { metodo } from "@/content/method";
import Reveal from "@/shared/ui/Reveal";

export function MethodSection() {
  return (
    <section className="section metodo">
      <div className="container">
        <div className="section-head center">
          <Reveal>
            <span className="kicker">Método</span>
            <h2>O que torna o Método Educativo Escoteiro inconfundível.</h2>
          </Reveal>
        </div>
        <div className="metodo__grid">
          {metodo.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.07} className="metodo__item">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
