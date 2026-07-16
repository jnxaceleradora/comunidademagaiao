import { motion } from "framer-motion";
import { FileText, Type, Link2, PenTool, AlertCircle, MoreHorizontal, GitBranch, Layers, Sparkles, Palette, Network, MessageCircle, Mic } from "lucide-react";

const topics = [
  { icon: FileText, name: "Interpretação de Texto", neon: "text-neon-pink" },
  { icon: Type, name: "Classes Gramaticais", neon: "text-neon-lilac" },
  { icon: Link2, name: "Concordância", neon: "text-neon-yellow" },
  { icon: PenTool, name: "Regência", neon: "text-neon-blue" },

  { icon: MoreHorizontal, name: "Pontuação", neon: "text-neon-lilac" },
  { icon: GitBranch, name: "Sintaxe", neon: "text-neon-yellow" },
  { icon: Layers, name: "Morfologia", neon: "text-neon-blue" },
  { icon: Sparkles, name: "Estilística", neon: "text-neon-pink" },
  { icon: Palette, name: "Figuras de linguagem", neon: "text-neon-lilac" },
  { icon: Network, name: "Coesão e coerência", neon: "text-neon-yellow" },
  { icon: MessageCircle, name: "Semântica", neon: "text-neon-blue" },
  { icon: Mic, name: "Fonética e Fonologia", neon: "text-neon-pink" },
];

const ContentsSection = () => {
  return (
    <section id="conteudo" className="section-padding bg-muted/50">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            <span className="text-neon-cyan">O que você</span>{" "}
            <span className="text-neon-pink">vai</span>{" "}
            <span className="text-neon-yellow">encontrar</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Conteúdos essenciais de Língua Portuguesa mapeados para sua aprovação.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {topics.map((topic, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-card rounded-xl border border-border p-5 text-center hover:border-primary/30 hover:shadow-md transition-all group cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/15 transition-colors">
                <topic.icon className="w-5 h-5 text-primary" />
              </div>
              <span className={`font-heading font-semibold text-base md:text-lg ${topic.neon}`}>{topic.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentsSection;
