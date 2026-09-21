import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { events } from "@/content/events";
import { news } from "@/content/group";
import { eventDateParts } from "@/shared/lib/format";
import Reveal from "@/shared/ui/Reveal";

export function NewsPreview() {
  return (
    <section className="section news-home">
      <div className="container news-home__layout">
        <div>
          <Reveal>
            <span className="kicker">Agenda & notícias</span>
            <h2>O que vem pela frente.</h2>
            <p className="lead">
              O calendário é o pulso do grupo. Confira os próximos encontros e as últimas histórias da trilha.
            </p>
            <Link to="/agenda" className="btn btn-outline">
              Abrir agenda <FaArrowRight />
            </Link>
          </Reveal>

          <div className="news-home__events">
            {events.slice(0, 3).map((event, index) => {
              const date = eventDateParts(event.date);
              return (
                <Reveal key={event.id} delay={index * 0.08} className="mini-event">
                  <time>
                    {date.day}
                    <small>{date.month}</small>
                  </time>
                  <div>
                    <strong>{event.title}</strong>
                    <span>{event.time}</span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <div className="news-home__cards">
          {news.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08} className="news-card">
              <small>{item.date}</small>
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
