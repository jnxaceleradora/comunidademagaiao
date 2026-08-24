import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBanner from "@/assets/banner-mapas-mentais-marcela.png";
import marcelaEditorial from "@/assets/marcela-editorial-v2.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-6 md:pt-8 pb-16 md:pb-24 px-4 md:px-8">
      {/* Ambient neon glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent/15 blur-[120px]" />
      </div>

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mb-12 overflow-hidden rounded-[2rem] border border-primary/35 bg-gradient-to-br from-[#160920] via-[#0b0717] to-[#07132d] shadow-2xl shadow-primary/20 md:mb-16"
        >
          <div className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-primary/20 blur-[100px]" />
          <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-accent/20 blur-[100px]" />

          <div className="relative grid items-center lg:grid-cols-[1.05fr_0.95fr]">
            <div className="px-7 py-10 text-center md:px-12 md:py-14 lg:px-16 lg:text-left">
              <span className="mb-6 inline-flex rounded-full border border-primary/50 bg-primary/10 px-4 py-2 font-heading text-xs font-bold uppercase tracking-[0.18em] text-neon-pink md:text-sm">
                Método Mapas Mentais
              </span>
              <h1 className="mb-6 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
                <span className="text-neon-cyan">Você não precisa estudar Português por horas</span>{" "}
                <span className="text-neon-yellow">para aprender de verdade.</span>
              </h1>
              <p className="mx-auto max-w-xl text-lg leading-relaxed text-foreground/85 md:text-xl lg:mx-0">
                Você precisa de um método que organize o conteúdo, facilite a memorização e mostre com clareza
                o que realmente importa na hora da prova.
              </p>
            </div>

            <div className="relative h-[470px] overflow-hidden border-t border-primary/20 lg:h-[650px] lg:border-l lg:border-t-0">
              <img
                src={marcelaEditorial}
                alt="Marcela Gaião, especialista em Língua Portuguesa"
                className="h-full w-full object-cover object-top"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/45 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto mb-12 md:mb-16 overflow-hidden rounded-2xl border border-primary/35 shadow-2xl shadow-primary/20"
        >
          <img
            src={heroBanner}
            alt="Mapas Mentais de Língua Portuguesa com Marcela Gaião"
            className="block h-auto w-full"
          />
          <a
            href="https://pay.kiwify.com.br/IFakDkU"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Quero ter acesso aos mapas agora"
            className="absolute bottom-[6.5%] left-[6%] flex h-[11.3%] w-[42.4%] animate-pulse-btn items-center justify-center gap-[2%] rounded-[1.35vw] bg-primary px-2 font-heading text-[clamp(0.45rem,1.45vw,1.25rem)] font-bold text-white shadow-lg shadow-primary/70 transition hover:brightness-110"
          >
            <span>Quero ter acesso aos mapas agora</span>
            <ArrowRight className="h-[1.25em] w-[1.25em] shrink-0" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
