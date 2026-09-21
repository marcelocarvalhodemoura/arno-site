import { Link } from "react-router-dom";
import { FaEnvelope, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { site } from "@/content/identity";
import { footerNav } from "@/content/navigation";
import Logo from "@/shared/ui/Logo";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="container foot__grid">
        <div>
          <Logo />
          <p className="foot__lead">
            Um grupo de Porto Alegre pensado como referência de escotismo no Brasil: Método Educativo Escoteiro,
            natureza e formação de caráter — da Alcateia ao Clã Pioneiro.
          </p>
        </div>

        <div>
          <h3>Explore</h3>
          <ul>
            {footerNav.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Sede</h3>
          <p>
            <FaMapMarkerAlt /> {site.address}
            <br />
            {site.neighborhood} · {site.city}
          </p>
          <p>
            <FaPhone /> {site.phone}
          </p>
          <p>
            <FaEnvelope /> {site.email}
          </p>
          <p className="foot__meet">{site.meetings}</p>
        </div>
      </div>

      <div className="container foot__bottom">
        <p>
          © {new Date().getFullYear()} {site.name}. Movimento Escoteiro Brasileiro.
        </p>
        <div className="foot__social">
          <a href={site.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
