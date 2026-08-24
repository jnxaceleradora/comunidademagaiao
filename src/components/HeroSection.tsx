import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import marcelaHeroIntegrada from "@/assets/marcela-hero-integrada.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden px-3 pb-12 pt-4 sm:px-4 sm:pt-6 md:px-8 md:pb-20 md:pt-8">
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

          <div className="relative min-h-[650px] overflow-hidden sm:min-h-[690px] md:min-h-[720px] lg:min-h-[650px]">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-x-[8%] top-8 h-[480px] rounded-full bg-gradient-to-br from-primary/20 via-purple-600/15 to-accent/20 blur-[75px] lg:inset-y-[8%] lg:left-auto lg:right-[-3%] lg:h-auto lg:w-[62%]" />
              <img
                src={marcelaHeroIntegrada}
                alt="Marcela Gaião, especialista em Língua Portuguesa"
                className="absolute left-1/2 top-3 h-[430px] w-[112%] -translate-x-1/2 object-contain object-top opacity-40 saturate-75 sm:h-[470px] md:h-[500px] lg:left-auto lg:right-[-7%] lg:top-0 lg:h-full lg:w-[66%] lg:translate-x-0 lg:object-right-bottom lg:opacity-45"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/35 to-background lg:bg-gradient-to-r lg:from-background lg:via-background/75 lg:to-background/10" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,hsl(var(--background)/0.28)_68%,hsl(var(--background))_100%)]" />
            </div>

            <div className="relative z-10 flex min-h-[650px] items-end px-2 pb-5 pt-[320px] text-center sm:min-h-[690px] sm:px-4 sm:pt-[360px] md:min-h-[720px] md:px-8 md:pt-[400px] lg:min-h-[650px] lg:items-center lg:px-10 lg:py-14 lg:text-left">
              <div className="max-w-3xl lg:max-w-[58%]">
                <span className="mb-6 inline-flex w-fit rounded-full border border-primary/50 bg-background/55 px-4 py-2 font-heading text-xs font-bold uppercase tracking-[0.18em] text-neon-pink shadow-lg shadow-primary/15 backdrop-blur-md md:text-sm">
                  Método Magaião
                </span>
                <h1 className="mb-5 font-heading text-[2rem] font-extrabold leading-[1.04] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                  <span className="text-neon-cyan">Você não precisa estudar</span>{" "}
                  <span className="text-neon-yellow">Português</span>{" "}
                  <span className="text-neon-cyan">por horas</span>{" "}
                  <span className="text-neon-pink">para aprender de verdade.</span>
                </h1>
                <p className="mx-auto max-w-2xl text-lg leading-relaxed text-foreground/90 md:text-xl lg:mx-0">
                  Você precisa de um método que organize o conteúdo, facilite a memorização e mostre com clareza
                  o que realmente importa na hora da prova.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 flex justify-center md:mt-10">
          <motion.a
            href="https://pay.kiwify.com.br/IFakDkU"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex w-full max-w-sm animate-pulse-btn items-center justify-center gap-2 rounded-xl bg-primary px-4 py-4 text-center font-heading text-sm font-bold text-primary-foreground shadow-lg shadow-primary/45 sm:w-auto sm:max-w-none sm:gap-3 sm:px-8 sm:text-base md:px-12 md:py-5 md:text-xl"
          >
            Quero ter acesso aos mapas agora
            <ArrowRight className="h-5 w-5 shrink-0" />
          </motion.a>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
