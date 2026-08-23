import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, ChevronDown, FileText, Type, Link2, PenTool, MoreHorizontal, GitBranch, Layers, Sparkles, Palette, Network, MessageCircle, Mic } from "lucide-react";

const topics = [
  {
    icon: FileText,
    name: "Interpretação de Texto",
    neon: "text-neon-pink",
    subtopics: [
      "Dicas de interpretação",
      "Compreensão x Interpretação",
      "Inferir x Depreender",
      "Análise do discurso",
      "Tipos de discurso",
      "Intertextualidade",
      "Citação x Paráfrase",
      "Paródia x Alusão",
      "Tipologia textual",
      "Gêneros textuais",
    ],
  },
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
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const selectedTopic = topics.find((topic) => topic.name === activeTopic);

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

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {topics.map((topic, i) => (
            <motion.button
              key={topic.name}
              type="button"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => topic.subtopics && setActiveTopic(activeTopic === topic.name ? null : topic.name)}
              aria-expanded={topic.subtopics ? activeTopic === topic.name : undefined}
              className={`group relative rounded-xl border bg-card p-5 text-center transition-all ${
                topic.subtopics
                  ? "cursor-pointer hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                  : "cursor-default border-border"
              } ${activeTopic === topic.name ? "border-primary/60 shadow-lg shadow-primary/10" : "border-border"}`}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/15 transition-colors">
                <topic.icon className="w-5 h-5 text-primary" />
              </div>
              <span className={`inline-flex items-center gap-2 font-heading font-semibold text-base md:text-lg ${topic.neon}`}>
                {topic.name}
                {topic.subtopics && (
                  <ChevronDown
                    className={`h-4 w-4 text-primary transition-transform duration-300 ${
                      activeTopic === topic.name ? "rotate-180" : ""
                    }`}
                  />
                )}
              </span>
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {selectedTopic?.subtopics && (
            <motion.div
              key={selectedTopic.name}
              initial={{ opacity: 0, height: 0, y: -8 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-5 rounded-2xl border border-primary/25 bg-gradient-to-br from-card via-card to-primary/10 p-6 shadow-xl shadow-primary/5 md:p-8">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="mb-1 font-heading text-xs font-semibold uppercase tracking-[0.18em] text-neon-cyan">
                      Conteúdos
                    </p>
                    <h3 className={`font-heading text-2xl font-bold md:text-3xl ${selectedTopic.neon}`}>
                      {selectedTopic.name}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveTopic(null)}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/25 bg-primary/10 text-primary transition-colors hover:bg-primary/20"
                    aria-label={`Fechar conteúdos de ${selectedTopic.name}`}
                  >
                    <ChevronDown className="h-5 w-5 rotate-180" />
                  </button>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {selectedTopic.subtopics.map((subtopic) => (
                    <div
                      key={subtopic}
                      className="flex items-start gap-3 rounded-xl border border-border/80 bg-background/45 p-4"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm font-medium leading-relaxed text-foreground/90 md:text-base">
                        {subtopic}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ContentsSection;
