import { motion } from "framer-motion";

const problems = [
  {
    emoji: "📖",
    title: "Você consome conteúdo, mas não aprende de verdade",
    neon: "text-neon-cyan",
    desc: "Ler apostilas e assistir a aulas sem uma estratégia faz com que o cérebro esqueça rapidamente o que foi estudado. Informação não organizada dificilmente vira conhecimento.",
  },
  {
    emoji: "⏳",
    title: "Você passa horas estudando, mas quase não revisa",
    neon: "text-neon-yellow",
    desc: "Sem revisões frequentes, a curva do esquecimento faz você perder grande parte do conteúdo em poucos dias. Estudar muito não significa aprender mais.",
  },
  {
    emoji: "❌",
    title: "Você estuda teoria, mas pratica pouco",
    neon: "text-neon-pink",
    desc: "Resolver questões é o que revela seus erros e fixa o conteúdo. Quem passa a maior parte do tempo apenas lendo costuma ter dificuldade na hora da prova.",
  },
  {
    emoji: "🎯",
    title: "Seu método de estudo não favorece a memorização",
    neon: "text-neon-lilac",
    desc: "Anotações longas e resumos enormes dificultam a revisão. Métodos visuais, mapas mentais e questões ajudam o cérebro a encontrar rapidamente as informações importantes e a lembrar delas quando mais precisa.",
  },
];

const ProblemSection = () => {
  return (
    <section id="problema" className="bg-secondary text-secondary-foreground section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            <span className="text-neon-pink">Por que você estuda</span>{" "}
            <span className="text-neon-yellow">e mesmo assim</span>{" "}
            <span className="text-neon-cyan">não evolui?</span>
          </h2>
          <p className="text-secondary-foreground/70 text-lg max-w-2xl mx-auto">
            Se você sente que estuda muito, mas retém pouco; o problema pode não ser o esforço — é o método.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-secondary-foreground/5 rounded-xl p-6 border border-secondary-foreground/10"
            >
              <h3 className={`font-heading font-semibold text-lg mb-3 ${item.neon}`}>
                <span className="mr-2">{item.emoji}</span>
                {item.title}
              </h3>
              <p className="text-secondary-foreground/80 text-base leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
