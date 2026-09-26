import { motion } from "framer-motion";
import { Brain, Target, BookOpen, Rocket } from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "Aprenda mais em menos tempo",
    neon: "text-[#08788c]",
    desc: "Os mapas mentais organizam o conteúdo de forma visual, permitindo compreender assuntos complexos muito mais rápido do que lendo textos longos.",
  },
  {
    icon: Target,
    title: "Memorize com muito mais facilidade",
    neon: "text-[#bf1668]",
    desc: "Cores, conexões e palavras-chave ajudam o cérebro a criar associações, aumentando significativamente a retenção do conteúdo na hora da prova.",
  },
  {
    icon: BookOpen,
    title: "Revise em poucos minutos",
    neon: "text-[#856000]",
    desc: "Em vez de reler dezenas de páginas, você revisa um assunto inteiro em apenas alguns minutos, economizando tempo e tornando o estudo muito mais eficiente.",
  },
  {
    icon: Rocket,
    title: "Estude com foco no que realmente importa",
    neon: "text-[#8042ad]",
    desc: "Os mapas mentais destacam apenas os conceitos essenciais, eliminando informações desnecessárias e facilitando a compreensão e a resolução de questões.",
  },
];

const SolutionSection = () => {
  return (
    <section id="solucao" className="section-padding bg-[#faf7fc] text-[#281a36]">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="section-title">
            <span className="text-[#bf1668]">A forma </span>
            <span className="text-[#08788c]">inteligente</span>
            <span className="text-[#bf1668]"> de estudar </span>
            <span className="text-[#856000]">Português</span>
          </h2>
          <p className="text-[#594b65] text-lg max-w-2xl mx-auto">
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
              className="bg-white rounded-xl p-6 border border-[#e5dbea] shadow-sm hover:shadow-lg hover:shadow-primary/5 transition-shadow group"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                  <item.icon className="h-6 w-6 text-[#bf1668]" />
                </div>
                <h3 className={`font-heading text-lg font-semibold leading-snug ${item.neon}`}>
                  {item.title}
                </h3>
              </div>
              <p className="text-[#594b65] text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
