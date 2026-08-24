import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section id="cta" className="section-padding bg-muted/50">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <Sparkles className="w-8 h-8 text-primary mx-auto mb-6" />
          <h2 className="section-title">
            <span className="text-neon-cyan">Estude com clareza.</span><br />
            <span className="text-neon-pink">Revise com estratégia.</span><br />
            <span className="text-neon-yellow">Evolua com método.</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Acesse agora os mapas mentais e transforme sua preparação em resultados.
          </p>
          <motion.a
            href="https://pay.kiwify.com.br/IFakDkU"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-heading font-semibold text-lg px-10 py-5 rounded-lg shadow-lg shadow-primary/25 animate-pulse-btn"
          >
            Garantir Acesso Agora
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
