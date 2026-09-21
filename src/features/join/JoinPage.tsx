import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { images, joinSteps, site } from "@/content";
import { JoinForm } from "@/features/join/JoinForm";
import { mapEmbedUrl } from "@/shared/lib/format";
import PageHero from "@/shared/ui/PageHero";
import Reveal from "@/shared/ui/Reveal";
import "./join.css";

export default function JoinPage() {
  const mapSrc = mapEmbedUrl(`${site.address} Porto Alegre`);

  return (
    <div className="contact">
      <PageHero
        kicker="Participe"
        title="A porta da sede está aberta."
        subtitle="Crianças a partir de 6,5 anos, jovens até completar 22 anos, famílias e voluntários. Três passos para entrar na trilha."
        image={images.community}
      />

      <section className="section">
        <div className="container steps">
          {joinSteps.map((step, index) => (
            <Reveal key={step.n} delay={index * 0.08} className="step">
              <span>{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section contact__split">
        <div className="container contact__grid">
          <Reveal>
            <span className="kicker">Fale conosco</span>
            <h2>Escreva — ou venha no sábado.</h2>
            <div className="contact__facts">
              <p>
                <FaMapMarkerAlt />
                <span>
                  {site.address}
                  <br />
                  {site.neighborhood} · {site.city}
                  <br />
                  {site.addressExtra}
                </span>
              </p>
              <p>
                <FaPhone /> {site.phone}
              </p>
              <p>
                <FaEnvelope /> {site.email}
              </p>
              <p className="contact__meet">{site.meetings}</p>
            </div>
            <div className="contact__map">
              <iframe
                title="Mapa da sede"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={mapSrc}
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="contact__form">
            <h3>Envie uma mensagem</h3>
            <JoinForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
