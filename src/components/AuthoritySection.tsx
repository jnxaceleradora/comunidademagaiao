import { motion } from "framer-motion";
import { Award } from "lucide-react";
import marcelaPhoto from "@/assets/marcela-profissional-source.webp";

const AuthoritySection = () => {
  return (
    <section className="bg-secondary text-secondary-foreground section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="section-title">
            <span className="text-neon-yellow">Criado por quem</span>{" "}
            <span className="text-neon-pink">entende</span>{" "}
            <span className="text-neon-cyan">de concursos</span>
          </h2>
          <p className="text-secondary-foreground/70 text-lg max-w-2xl mx-auto">
            Material desenvolvido com base em experiência real em preparação e aprovação em concursos públicos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-background/80 via-secondary-foreground/[0.04] to-primary/10 shadow-2xl shadow-primary/10"
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
          <div className="relative grid items-center lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative min-h-[420px] overflow-hidden lg:min-h-[560px]">
              <img
                src={marcelaPhoto}
                alt="Marcela Gaião, professora especialista em Língua Portuguesa"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-background/75" />
              <div className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-background/75 px-4 py-2 backdrop-blur-md">
                <span className="font-heading text-sm font-semibold text-neon-yellow">+12 anos de experiência</span>
              </div>
            </div>

            <div className="relative p-7 md:p-10 lg:p-14">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/15">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-neon-cyan">
                Minha experiência
              </p>
              <h3 className="mb-6 font-heading text-3xl font-bold text-neon-blue md:text-4xl">
                Eu sou Marcela Gaião
              </h3>
              <p className="text-base leading-relaxed text-secondary-foreground/90 md:text-lg">
                Atuo há mais de 12 anos como professora especialista em Língua Portuguesa e servidora pública concursada. Nesse período, construí uma sólida experiência no ensino e na preparação de candidatos para concursos e provas.
              </p>
              <p className="mt-4 text-base leading-relaxed text-secondary-foreground/80 md:text-lg">
                Com base nessa vivência, desenvolvi uma metodologia própria para transformar conteúdos complexos em explicações claras, revisões estratégicas e materiais direcionados ao que realmente é cobrado. Crio cada conteúdo da Comunidade Magaião com rigor técnico e conhecimento prático, ajudando meus alunos a estudar com mais clareza, segurança e propósito.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AuthoritySection;
