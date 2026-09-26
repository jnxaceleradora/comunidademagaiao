import { motion } from "framer-motion";
import { ArrowRight, Zap, Printer, Laptop, RefreshCw, Infinity as InfinityIcon } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Acesso imediato",
    titleClass: "text-[#bf1668]",
    description: "Receba seus mapas mentais no ato da compra, sem espera.",
  },
  {
    icon: Printer,
    title: "Pronto para impressão",
    titleClass: "text-[#856000]",
    description: "Arquivos otimizados para você imprimir e estudar no papel quando quiser.",
  },
  {
    icon: Laptop,
    title: "Flexibilidade de acesso",
    titleClass: "text-[#08788c]",
    description: "Estude no computador, celular ou tablet — onde e quando for melhor pra você.",
  },
  {
    icon: RefreshCw,
    title: "Atualizações gratuitas",
    titleClass: "text-[#8042ad]",
    description: "Sempre que o material for atualizado, você recebe a nova versão sem pagar nada a mais.",
  },
  {
    icon: InfinityIcon,
    title: "Acesso vitalício",
    titleClass: "text-[#365bb5]",
    description: "Pagou uma vez, acesse pra sempre. Volte ao material quantas vezes precisar.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="vantagens" className="section-padding bg-[#faf7fc] text-[#281a36]">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="section-title">
            <span className="text-[#08788c]">Vantagens</span>{" "}
            <span className="text-[#bf1668]">de adquirir</span>{" "}
            <span className="text-[#856000]">os mapas mentais</span>
          </h2>
          <p className="text-[#594b65] text-lg max-w-2xl mx-auto">
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
                className="bg-white border border-[#e5dbea] rounded-2xl p-6 flex flex-col items-start gap-4 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[#bf1668]" />
                </div>
                <h3 className={`font-heading text-xl md:text-2xl ${b.titleClass}`}>
                  {b.title}
                </h3>
                <p className="text-[#594b65] leading-relaxed">{b.description}</p>
              </motion.div>
            );
          })}
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
            Quero meus mapas agora
            <ArrowRight className="h-5 w-5 shrink-0" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
