import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import bannerAsset from "@/assets/banner-hero.png.asset.json";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-20 md:pt-24 pb-16 md:pb-24 px-4 md:px-8">
      {/* Ambient neon glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent/15 blur-[120px]" />
      </div>

      <div className="container-narrow relative z-10">
        {/* Banner as hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-primary/30 mb-12"
        >
          <img
            src={bannerAsset.url}
            alt="Comunidade Magaião — Mapas Mentais, Questões e Resumos para Concursos"
            className="w-full h-auto block"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/40 rounded-full px-4 py-1.5 mb-6">
            <span className="font-heading text-sm md:text-base font-bold text-neon-yellow tracking-wide">
              +100 mapas mentais
            </span>
            <span className="text-foreground/80 text-sm md:text-base">para revisar</span>
          </div>
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
