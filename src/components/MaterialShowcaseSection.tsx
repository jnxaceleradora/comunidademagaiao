import { motion } from "framer-motion";
import mapaCoerenciaTextual from "@/assets/mapa-coerencia-textual.png";
import mapaOracoesSubordinadasReduzidas from "@/assets/mapa-oracoes-subordinadas-reduzidas.png";
import mapaExpressoesProblematicas from "@/assets/mapa-expressoes-problematicas.png";
import mapaRegenciaNominal from "@/assets/mapa-regencia-nominal.png";
import mapaTiposDeTexto from "@/assets/mapa-tipos-de-texto.png";

const images = [
  { src: mapaCoerenciaTextual, alt: "Mapa mental — Coerência Textual" },
  { src: mapaOracoesSubordinadasReduzidas, alt: "Mapa mental — Orações Subordinadas Reduzidas" },
  { src: mapaExpressoesProblematicas, alt: "Mapa mental — Expressões Problemáticas" },
  { src: mapaRegenciaNominal, alt: "Mapa mental — Regência Nominal" },
  { src: mapaTiposDeTexto, alt: "Mapa mental — Tipos de Texto" },
];

const MaterialShowcaseSection = () => {
  const loop = [...images, ...images];

  return (
    <section id="material" className="section-padding overflow-hidden">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="section-title">
            <span className="text-neon-lilac">Veja como é nosso material</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mapas mentais coloridos, visuais e prontos para acelerar sua revisão.
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex gap-6 animate-marquee w-max">
          {loop.map((img, i) => (
            <div
              key={i}
              className="w-[280px] h-[210px] sm:w-[360px] sm:h-[270px] md:w-[480px] md:h-[340px] shrink-0 rounded-2xl overflow-hidden border border-border shadow-lg shadow-primary/10 bg-white"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full block object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaterialShowcaseSection;
