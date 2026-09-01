import { motion } from "framer-motion";
import { Award, BookOpen, Target } from "lucide-react";
import marcelaPhoto from "@/assets/marcela-profissional-source.webp";

const stats = [
  {
    icon: BookOpen,
    title: "Método",
    titleClass: "text-neon-pink",
    eyebrow: "Clareza, fixação e revisão",
    text: "Estudar mais não basta: é preciso estudar com direção. Por isso, cada mapa mental, resumo e questão organiza a Língua Portuguesa em uma sequência clara para compreender, fixar e revisar. Você identifica o que realmente importa, reduz o excesso de informação e chega à prova com mais segurança para reconhecer padrões, evitar armadilhas e aplicar o conhecimento.",
  },
  {
    icon: Target,
    title: "Foco",
    titleClass: "text-neon-lilac",
    eyebrow: "Conteúdo que se transforma em resultado",
    text: "Na Comunidade Magaião, o foco é transformar conteúdos que parecem difíceis em aprendizado objetivo e aplicável. A linguagem é clara, sem abrir mão da profundidade: conceitos essenciais, pontos mais cobrados e revisão estratégica. Assim, você constrói uma base sólida em Português, estuda com constância e evolui com um método pensado para o desempenho na prova.",
  },
];

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
          className="relative mb-8 overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-background/80 via-secondary-foreground/[0.04] to-primary/10 shadow-2xl shadow-primary/10"
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

        <div className="grid gap-6 md:grid-cols-2">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-background/80 via-secondary-foreground/[0.04] to-primary/10 p-7 shadow-xl shadow-primary/5 md:p-9"
            >
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-primary/10 blur-3xl transition-colors group-hover:bg-primary/20" />
              <div className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/15">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="relative mb-2 font-heading text-xs font-semibold uppercase tracking-[0.16em] text-neon-cyan/90">
                {stat.eyebrow}
              </p>
              <h3 className={`relative mb-4 font-heading text-2xl font-bold md:text-3xl ${stat.titleClass}`}>
                {stat.title}
              </h3>
              <p className="relative text-base leading-relaxed text-secondary-foreground/85 md:text-lg">
                {stat.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
