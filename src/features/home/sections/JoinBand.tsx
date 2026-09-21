import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { images } from "@/content/images";
import Reveal from "@/shared/ui/Reveal";
import logo from "@/shared/assets/images/arno_logo.png";

export function JoinBand() {
  return (
    <section className="join-band">
      <div className="join-band__bg" style={{ backgroundImage: `url(${images.fire})` }} />
      <div className="join-band__veil" />
      <img src={logo} alt="" className="join-band__mark" aria-hidden="true" />
      <div className="container join-band__content">
        <Reveal>
          <span className="kicker">Seja escoteiro</span>
          <h2>Uma tarde. Uma patrulha. Uma vida diferente.</h2>
          <p>
            Ser escoteiro é ganhar amigos, aprender de verdade e tornar-se alguém melhor — ao ar livre, com propósito.
            Venha num sábado.
          </p>
          <div className="hero__actions">
            <Link to="/participe" className="btn btn-primary">
              Inscrever-se <FaArrowRight />
            </Link>
            <Link to="/agenda" className="btn btn-ghost">
              Ver a agenda
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
