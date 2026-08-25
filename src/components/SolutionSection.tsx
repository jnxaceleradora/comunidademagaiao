import { motion } from "framer-motion";
import { Brain, Target, BookOpen, Rocket } from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "Aprenda mais em menos tempo",
    neon: "text-neon-cyan",
    desc: "Os mapas mentais organizam o conteúdo de forma visual, permitindo compreender assuntos complexos muito mais rápido do que lendo textos longos.",
  },
  {
    icon: Target,
    title: "Memorize com muito mais facilidade",
    neon: "text-neon-pink",
    desc: "Cores, conexões e palavras-chave ajudam o cérebro a criar associações, aumentando significativamente a retenção do conteúdo na hora da prova.",
  },
  {
    icon: BookOpen,
    title: "Revise em poucos minutos",
    neon: "text-neon-yellow",
    desc: "Em vez de reler dezenas de páginas, você revisa um assunto inteiro em apenas alguns minutos, economizando tempo e tornando o estudo muito mais eficiente.",
  },
  {
    icon: Rocket,
    title: "Estude com foco no que realmente importa",
    neon: "text-neon-lilac",
    desc: "Os mapas mentais destacam apenas os conceitos essenciais, eliminando informações desnecessárias e facilitando a compreensão e a resolução de questões.",
  },
];

const SolutionSection = () => {
  return (
    <section id="solucao" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="section-title">
            <span className="text-neon-pink">A forma </span>
            <span className="text-neon-cyan">inteligente</span>
            <span className="text-neon-pink"> de estudar </span>
            <span className="text-neon-yellow">Português</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mapas mentais transformam conteúdo denso em estruturas visuais que seu cérebro adora.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-lg hover:shadow-primary/5 transition-shadow group"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className={`font-heading text-lg font-semibold leading-snug ${item.neon}`}>
                  {item.title}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
