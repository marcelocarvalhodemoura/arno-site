import { Link } from "react-router-dom";
import { FaCalendarPlus, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import PageHero from "@/shared/ui/PageHero";
import Reveal from "@/shared/ui/Reveal";
import { images, site } from "@/content";
import { downloadIcs } from "@/shared/lib/agenda";
import { eventDateParts, eventRangeLabel } from "@/shared/lib/format";
import { useAgenda } from "@/shared/hooks/useAgenda";
import "./calendar.css";

export default function Calendar() {
  const { events, loading } = useAgenda();
  const defaultLocation = `${site.address}, ${site.neighborhood}, ${site.city}`;

  return (
    <div className="cal">
      <PageHero
        kicker="Agenda"
        title="O ano escoteiro, sábado a sábado."
        subtitle="Reuniões, acampamentos, serviço e formação: os próximos encontros do grupo, atualizados direto do calendário das chefias."
        image={images.summit}
      />

      <section className="section">
        <div className="container cal__layout">
          <div className="cal__list" aria-busy={loading}>
            {events.length === 0 && !loading && (
              <div className="event event--empty">
                <div className="event__body">
                  <h3>Novas datas em breve.</h3>
                  <p>
                    As chefias estão fechando o próximo calendário. Enquanto
                    isso, as reuniões seguem todo sábado — {site.meetings.toLowerCase()}.
                  </p>
                </div>
              </div>
            )}
            {events.map((event, i) => {
              const date = eventDateParts(event.date);
              return (
                <Reveal key={event.id} delay={Math.min(i, 6) * 0.06} className="event">
                  <div className="event__date">
                    <strong>{date.day}</strong>
                    <span>{date.month}</span>
                  </div>
                  <div className="event__body">
                    <small>{event.tag}</small>
                    <h3>{event.title}</h3>
                    {event.description && <p>{event.description}</p>}
                    <div className="event__meta">
                      {(event.time || event.endDate) && (
                        <span>
                          <FaClock /> {event.endDate ? eventRangeLabel(event.date, event.endDate) : event.time}
                        </span>
                      )}
                      {event.location && (
                        <span>
                          <FaMapMarkerAlt /> {event.location}
                        </span>
                      )}
                      <button
                        type="button"
                        className="event__save"
                        onClick={() => downloadIcs(event, defaultLocation)}
                      >
                        <FaCalendarPlus /> Salvar na minha agenda
                      </button>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <aside className="cal__side">
            <Reveal>
              <h3>Ritmo semanal</h3>
              <p>
                <strong>{site.meetings}</strong>
              </p>
              <p>
                <FaMapMarkerAlt /> {site.address}, {site.neighborhood}
              </p>
              <hr />
              <h3>O que levar</h3>
              <p>
                Uniforme completo nas reuniões formais. Em dias de chuva, o
                programa migra para o salão — a trilha não para.
              </p>
              <hr />
              <h3>Primeira visita</h3>
              <p>
                Famílias são bem-vindas. Crianças a partir de 6,5 anos e jovens
                até completar 22 anos. Agende pelo formulário ou apareça no
                início da tarde de sábado.
              </p>
              <Link to="/participe" className="btn btn-primary btn-full">
                Quero visitar
              </Link>
            </Reveal>
          </aside>
        </div>
      </section>
    </div>
  );
}
