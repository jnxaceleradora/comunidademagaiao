import { motion } from "framer-motion";
import marcelaHeroIntegrada from "@/assets/marcela-hero-integrada.png";

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
          className="relative"
        >
          <div className="pointer-events-none absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-primary/15 blur-[120px]" />
          <div className="pointer-events-none absolute -right-20 top-1/4 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-[130px]" />

          <div className="relative grid items-center lg:min-h-[650px] lg:grid-cols-[1.05fr_0.95fr]">
            <div className="order-2 px-3 pb-4 pt-8 text-center md:px-10 lg:order-1 lg:flex lg:flex-col lg:justify-center lg:px-10 lg:py-14 lg:text-left">
              <span className="mb-6 hidden w-fit rounded-full border border-primary/50 bg-primary/10 px-4 py-2 font-heading text-xs font-bold uppercase tracking-[0.18em] text-neon-pink md:text-sm lg:inline-flex">
                Método Magaião
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

            <div className="relative order-1 h-[470px] lg:order-2 lg:h-[650px]">
              <div className="pointer-events-none absolute inset-x-[12%] bottom-[8%] h-[64%] rounded-full bg-gradient-to-br from-primary/30 via-purple-600/20 to-accent/30 blur-[55px]" />
              <img
                src={marcelaHeroIntegrada}
                alt="Marcela Gaião, especialista em Língua Portuguesa"
                className="relative z-10 h-full w-full object-contain object-bottom drop-shadow-[0_24px_45px_rgba(0,0,0,0.45)]"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20 bg-gradient-to-t from-background to-transparent" />
              <span className="absolute left-1/2 top-3 z-20 inline-flex -translate-x-1/2 rounded-full border border-primary/60 bg-background/75 px-4 py-2 font-heading text-xs font-bold uppercase tracking-[0.16em] text-neon-pink shadow-lg shadow-primary/20 backdrop-blur-md lg:hidden">
                Método Magaião
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
