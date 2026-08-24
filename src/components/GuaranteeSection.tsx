import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section id="garantia" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-5 text-center sm:p-8 md:p-12"
        >
          <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-5" />
          <h3 className="font-heading text-2xl font-bold mb-3">
            <span className="text-neon-cyan">Garantia</span>{" "}
            <span className="text-neon-yellow">de</span>{" "}
            <span className="text-neon-pink">7 dias</span>
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Se dentro de 7 dias você sentir que os mapas mentais não contribuíram para seus estudos, devolvemos 100% do seu investimento. Sem burocracia, sem perguntas.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
