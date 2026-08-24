import { motion } from "framer-motion";
import { Zap, Printer, Laptop, RefreshCw, Infinity as InfinityIcon } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Acesso imediato",
    titleClass: "text-neon-pink",
    description: "Receba seus mapas mentais no ato da compra, sem espera.",
  },
  {
    icon: Printer,
    title: "Pronto para impressão",
    titleClass: "text-neon-yellow",
    description: "Arquivos otimizados para você imprimir e estudar no papel quando quiser.",
  },
  {
    icon: Laptop,
    title: "Flexibilidade de acesso",
    titleClass: "text-neon-cyan",
    description: "Estude no computador, celular ou tablet — onde e quando for melhor pra você.",
  },
  {
    icon: RefreshCw,
    title: "Atualizações gratuitas",
    titleClass: "text-neon-lilac",
    description: "Sempre que o material for atualizado, você recebe a nova versão sem pagar nada a mais.",
  },
  {
    icon: InfinityIcon,
    title: "Acesso vitalício",
    titleClass: "text-neon-blue",
    description: "Pagou uma vez, acesse pra sempre. Volte ao material quantas vezes precisar.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="vantagens" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="section-title">
            <span className="text-neon-cyan">Vantagens</span>{" "}
            <span className="text-neon-pink">de adquirir</span>{" "}
            <span className="text-neon-yellow">os mapas mentais</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Praticidade e resultado desde o primeiro clique.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card border border-border rounded-2xl p-6 flex flex-col items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className={`font-heading text-xl md:text-2xl ${b.titleClass}`}>
                  {b.title}
                </h3>
                <p className="text-foreground/85 leading-relaxed">{b.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
