import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, BookOpen, CheckCircle2, ChevronDown, FileText, Link2, PenTool, MoreHorizontal, GitBranch, Layers, Sparkles, Palette, Network, MessageCircle, Mic } from "lucide-react";

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
  {
    icon: Link2,
    name: "Concordância",
    neon: "text-neon-yellow",
    subtopics: ["Concordância verbal", "Concordância nominal"],
  },
  {
    icon: PenTool,
    name: "Regência",
    neon: "text-neon-blue",
    subtopics: ["Regência verbal", "Regência nominal", "Crase"],
  },
  {
    icon: MoreHorizontal,
    name: "Pontuação",
    neon: "text-neon-lilac",
    subtopics: ["Regras de pontuação", "Uso da vírgula"],
  },
  {
    icon: GitBranch,
    name: "Sintaxe",
    neon: "text-neon-yellow",
    subtopics: [
      "Sintaxe do período simples",
      "Sintaxe do período composto",
      "Orações reduzidas",
      "Funções do QUE, SE e COMO",
    ],
  },
  {
    icon: Layers,
    name: "Morfologia",
    neon: "text-neon-blue",
    subtopics: [
      "Morfologia I - substantivo e adjetivo",
      "Morfologia II - classificação dos verbos",
      "Morfologia III - formas nominais dos verbos",
      "Morfologia IV - tempos e modos verbais",
      "Morfologia VI - pronomes",
      "Morfologia VII - artigo, advérbio, conjunção, numeral, preposição e interjeição",
    ],
  },
  {
    icon: Sparkles,
    name: "Estilística",
    neon: "text-neon-pink",
    subtopics: ["Elementos da comunicação", "Funções da linguagem", "Variação linguística"],
  },
  {
    icon: Palette,
    name: "Figuras de linguagem",
    neon: "text-neon-lilac",
    subtopics: ["Conotação x Denotação", "Figuras de linguagem"],
  },
  {
    icon: Network,
    name: "Coesão e coerência",
    neon: "text-neon-yellow",
    subtopics: ["Tipos de coesão", "Tipos de coerência"],
  },
  {
    icon: MessageCircle,
    name: "Semântica",
    neon: "text-neon-blue",
    subtopics: [
      "Conceitos",
      "Relações de sentido entre as palavras",
      "Homônimos x Parônimos",
      "Lista de parônimos",
    ],
  },
  {
    icon: Mic,
    name: "Fonética e Fonologia",
    neon: "text-neon-pink",
    subtopics: [
      "Fonética x Fonologia",
      "Fonologia",
      "Classificação dos fonemas",
      "Encontros vocálicos e consonantais",
      "Dígrafos x Dífonos",
      "Classificação das sílabas",
    ],
  },
  {
    icon: BookOpen,
    name: "Ortografia",
    neon: "text-neon-yellow",
    subtopics: [
      "Acentuação gráfica",
      "Uso dos porquês",
      "Uso do hífen",
      "Emprego das letras",
      "Uso de maiúsculas e minúsculas",
      "Expressões problemáticas",
      "Estrangeirismo, abreviação e sigla",
      "Vícios de linguagem",
    ],
  },
];

const ContentsSection = () => {
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

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
          <h2 className="section-title">
            <span className="text-neon-yellow">O que você vai encontrar</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Conteúdos essenciais de Língua Portuguesa mapeados para sua aprovação.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-4 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {topics.map((topic, i) => (
            <motion.div
              key={topic.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="min-w-0"
            >
              <button
                type="button"
                onClick={() => topic.subtopics && setActiveTopic(activeTopic === topic.name ? null : topic.name)}
                aria-expanded={topic.subtopics ? activeTopic === topic.name : undefined}
                aria-controls={topic.subtopics ? `subtopics-${i}` : undefined}
                className={`group relative w-full min-h-[145px] overflow-hidden rounded-2xl border bg-gradient-to-br from-card via-card to-primary/[0.08] p-4 text-center transition-all duration-300 sm:min-h-[168px] sm:p-5 ${
                  topic.subtopics
                    ? "cursor-pointer hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/15"
                    : "cursor-default border-border"
                } ${activeTopic === topic.name ? "border-primary/60 shadow-lg shadow-primary/10" : "border-border"}`}
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/10 blur-2xl transition-colors group-hover:bg-primary/20" />
                {topic.subtopics && (
                  <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-primary/20 bg-background/45 text-primary backdrop-blur-sm transition-colors group-hover:bg-primary/15">
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        activeTopic === topic.name ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                )}
                <div className="relative mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/25 to-accent/10 shadow-lg shadow-primary/10 transition-all duration-300 group-hover:scale-105 group-hover:border-primary/45 group-hover:shadow-primary/20">
                  <topic.icon className={`h-7 w-7 drop-shadow-[0_0_8px_currentColor] ${topic.neon}`} />
                </div>
                <span className={`relative inline-flex items-center font-heading font-semibold text-base leading-snug md:text-lg ${topic.neon}`}>
                  {topic.name}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {activeTopic === topic.name && topic.subtopics && (
                  <motion.div
                    id={`subtopics-${i}`}
                    initial={{ opacity: 0, height: 0, y: -8 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-3 space-y-2 rounded-2xl border border-primary/30 bg-gradient-to-br from-card via-card to-primary/10 p-3 shadow-lg shadow-primary/5 sm:p-4">
                      {topic.subtopics.map((subtopic) => (
                        <div
                          key={subtopic}
                          className="flex items-start gap-2.5 rounded-xl border border-border/80 bg-background/45 p-3"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span className="break-words text-sm font-medium leading-relaxed text-foreground/90">
                            {subtopic}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center md:mt-14">
          <motion.a
            href="https://pay.kiwify.com.br/IFakDkU"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex w-full max-w-sm animate-pulse-btn items-center justify-center gap-3 rounded-xl bg-primary px-5 py-4 text-center font-heading text-base font-bold text-primary-foreground shadow-lg shadow-primary/40 sm:w-auto sm:px-9 sm:text-lg md:px-12 md:py-5 md:text-xl"
          >
            Quero ter acesso aos mapas agora
            <ArrowRight className="h-5 w-5 shrink-0" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ContentsSection;
