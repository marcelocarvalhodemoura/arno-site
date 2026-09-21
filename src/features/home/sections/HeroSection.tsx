import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import { images } from "@/content/images";
import { site } from "@/content/identity";
import { easeOut } from "@/shared/lib/motion";
import logo from "@/shared/assets/images/arno_logo.png";

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section className="hero" ref={heroRef}>
      <motion.div className="hero__bg" style={{ backgroundImage: `url(${images.night})`, y }} />
      <div className="hero__veil" />
      <div className="hero__glow" />
      <img src={logo} alt="" className="hero__mark" aria-hidden="true" />

      <motion.div className="hero__inner container" style={{ opacity }}>
        <motion.p
          className="kicker"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: easeOut }}
        >
          Porto Alegre · desde {site.founded}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.28, ease: easeOut }}
        >
          A aventura que
          <em> forma o caráter.</em>
        </motion.h1>

        <motion.p
          className="hero__lead"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.48, ease: easeOut }}
        >
          O {site.name} é um grupo de referência em escotismo: método, natureza e caráter — no bairro{" "}
          {site.neighborhood}, aberto a jovens de 6,5 a 21 anos, até a Partida do Clã.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.64, ease: easeOut }}
        >
          <Link to="/participe" className="btn btn-primary">
            Quero ser escoteiro <FaArrowRight />
          </Link>
          <Link to="/sobre" className="btn btn-ghost">
            Conhecer o grupo
          </Link>
        </motion.div>
      </motion.div>

      <a href="#trilha" className="hero__scroll" aria-label="Rolar para o conteúdo">
        <FaArrowDown />
        <span>Desça a trilha</span>
      </a>
    </section>
  );
}
