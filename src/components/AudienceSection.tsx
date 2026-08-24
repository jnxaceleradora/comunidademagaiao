import { motion } from "framer-motion";

const audiences = [
  {
    emoji: "🧠",
    highlight: "Estudante",
    highlightClass: "text-neon-cyan",
    rest: " que busca facilitar os estudos.",
  },
  {
    emoji: "📝",
    highlight: "Concurseiro",
    highlightClass: "text-neon-pink",
    rest: " que busca um material de revisão eficiente e com linguagem simplificada.",
  },
  {
    emoji: "👩‍🏫",
    highlight: "Professor",
    highlightClass: "text-neon-yellow",
    rest: " que deseja ter um material facilitado que o auxilie em sala de aula.",
  },
];

const AudienceSection = () => {
  return (
    <section id="audiencia" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="section-title">
            <span className="text-neon-pink">Este</span>{" "}
            <span className="text-neon-cyan">curso</span>{" "}
            <span className="text-neon-yellow">é para você que...</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {audiences.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-4 bg-card border border-border rounded-xl p-6"
            >
              <p className="text-foreground font-medium text-lg md:text-xl leading-relaxed">
                <span className="mr-2">{item.emoji}</span>
                <span className={`${item.highlightClass} font-semibold`}>{item.highlight}</span>
                {item.rest}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
