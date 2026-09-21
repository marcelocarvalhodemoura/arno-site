import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { primaryNav } from "@/content/navigation";
import { easeOut } from "@/shared/lib/motion";
import Logo from "@/shared/ui/Logo";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || !isHome || open;

  return (
    <motion.header
      className={`nav ${solid ? "nav--solid" : "nav--ghost"}`}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: easeOut }}
    >
      <div className="nav__bar">
        <Link to="/" className="nav__logo" aria-label="Página inicial">
          <Logo />
        </Link>

        <nav className="nav__desktop" aria-label="Principal">
          {primaryNav.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) => `nav__link ${isActive ? "is-active" : ""}`}
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/participe" className="btn btn-primary nav__cta">
            Participe
          </Link>
        </nav>

        <button
          className="nav__toggle"
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            className="nav__mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            aria-label="Menu móvel"
          >
            {primaryNav.map((link, index) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index }}
              >
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) => `nav__m-link ${isActive ? "is-active" : ""}`}
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}
            <Link to="/participe" className="btn btn-primary">
              Quero ser escoteiro
            </Link>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
