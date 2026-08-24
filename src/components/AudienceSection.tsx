import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const audiences = [
  {
    emoji: "🧠",
    highlight: "Estudante",
    highlightClass: "text-neon-cyan",
    rest: " que quer compreender Português com clareza, revisar mais rápido e aprender de verdade.",
  },
  {
    emoji: "📝",
    highlight: "Concurseiro",
    highlightClass: "text-neon-pink",
    rest: " que precisa revisar o que mais cai, memorizar melhor e chegar à prova com segurança.",
  },
  {
    emoji: "👩‍🏫",
    highlight: "Professor",
    highlightClass: "text-neon-yellow",
    rest: " que busca recursos visuais prontos para explicar conteúdos complexos e enriquecer suas aulas.",
  },
];

const AudienceSection = () => {
  return (
    <section id="audiencia" className="section-padding">
      <div className="container-narrow">
        <div className="mb-12 flex justify-center">
          <motion.a
            href="https://pay.kiwify.com.br/IFakDkU"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex w-full max-w-sm animate-pulse-btn items-center justify-center gap-3 rounded-xl bg-primary px-5 py-4 text-center font-heading text-base font-bold text-primary-foreground shadow-lg shadow-primary/40 sm:w-auto sm:px-9 sm:text-lg md:px-12 md:py-5 md:text-xl"
          >
            Quero ter acesso agora
            <ArrowRight className="h-5 w-5" />
          </motion.a>
        </div>

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
            <span className="text-neon-yellow">é para você...</span>
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
