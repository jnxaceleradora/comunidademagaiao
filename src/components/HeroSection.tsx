import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBanner from "@/assets/banner-mapas-mentais-marcela.png";
import marcelaLogo from "@/assets/logo-marcela-neon.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-6 md:pt-8 pb-16 md:pb-24 px-4 md:px-8">
      {/* Ambient neon glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent/15 blur-[120px]" />
      </div>

      <div className="container-narrow relative z-10">
        <motion.img
          src={marcelaLogo}
          alt="Logo CM"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 h-24 w-24 rounded-full object-cover shadow-lg shadow-primary/25 md:h-28 md:w-28"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 md:mb-16 overflow-hidden rounded-2xl border border-primary/35 shadow-2xl shadow-primary/20"
        >
          <img
            src={heroBanner}
            alt="Mapas Mentais de Língua Portuguesa com Marcela Gaião"
            className="block h-auto w-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            <span className="text-neon-pink">Pare</span>{" "}
            <span className="text-neon-yellow">de estudar</span>{" "}
            <span className="text-neon-cyan">Português</span>{" "}
            <span className="text-neon-pink">do jeito</span>{" "}
            <span className="text-neon-yellow">errado!</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            Mapas mentais estratégicos que organizam, simplificam e aceleram sua preparação para concursos.
          </p>
          <motion.a
            href="https://pay.kiwify.com.br/IFakDkU"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-heading font-semibold text-lg px-8 py-4 rounded-lg shadow-lg shadow-primary/40 animate-pulse-btn"
          >
            Quero Acessar os Mapas Mentais
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
