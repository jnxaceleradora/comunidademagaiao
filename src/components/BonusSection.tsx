import { motion } from "framer-motion";
import { CheckCircle2, FileQuestion, GalleryHorizontalEnd, Gift } from "lucide-react";

const bonuses = [
  {
    icon: FileQuestion,
    label: "Bônus 1",
    title: "Módulo de questões comentadas",
    titleClass: "text-neon-cyan",
    description:
      "Pratique Língua Portuguesa com questões acompanhadas de comentários claros. Você entende o raciocínio de cada resposta, identifica as principais armadilhas e aprende a aplicar o conteúdo na prova.",
  },
  {
    icon: GalleryHorizontalEnd,
    label: "Bônus 2",
    title: "Módulo de flashcards",
    titleClass: "text-neon-yellow",
    description:
      "Revise conceitos importantes de forma rápida e ativa. Os flashcards ajudam a fortalecer a memória, recuperar informações com mais facilidade e aproveitar até os pequenos intervalos do dia para estudar.",
  },
];

const BonusSection = () => {
  return (
    <section id="bonus" className="section-padding bg-muted/30">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/30 bg-primary/15 shadow-lg shadow-primary/15">
            <Gift className="h-7 w-7 text-primary" />
          </div>
          <h2 className="section-title">
            <span className="text-neon-pink">Você ainda recebe</span>{" "}
            <span className="text-neon-cyan">2 bônus</span>{" "}
            <span className="text-neon-yellow">exclusivos</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Além dos mapas mentais, você leva mais dois recursos para praticar, revisar e memorizar melhor — sem pagar nada a mais por isso.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
          {bonuses.map((bonus, index) => {
            const Icon = bonus.icon;
            return (
              <motion.article
                key={bonus.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-3xl border border-primary/25 bg-gradient-to-br from-card via-card to-primary/10 p-6 shadow-xl shadow-primary/5 sm:p-8"
              >
                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-primary/10 blur-3xl" />
                <div className="relative mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/15">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-heading text-xs font-bold uppercase tracking-[0.16em] text-primary">
                    {bonus.label}
                  </span>
                </div>
                <h3 className={`relative mb-4 font-heading text-2xl font-bold sm:text-3xl ${bonus.titleClass}`}>
                  {bonus.title}
                </h3>
                <p className="relative text-base leading-relaxed text-foreground/85 sm:text-lg">
                  {bonus.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mt-8 flex max-w-3xl items-start gap-3 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-5 text-left sm:items-center sm:p-6"
        >
          <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-emerald-400 sm:mt-0" />
          <p className="font-heading text-base font-semibold leading-relaxed text-foreground sm:text-lg">
            Você investe em um único material e recebe um conjunto mais completo de estudo: mapas mentais, questões comentadas e flashcards pelo mesmo valor.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BonusSection;
