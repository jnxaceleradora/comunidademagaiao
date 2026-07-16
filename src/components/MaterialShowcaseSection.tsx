import { motion } from "framer-motion";
import mapa1 from "@/assets/mapa-1.png.asset.json";
import mapa2 from "@/assets/mapa-2.png.asset.json";
import mapa3 from "@/assets/mapa-3.png.asset.json";
import mapa4 from "@/assets/mapa-4.png.asset.json";
import mapa5 from "@/assets/mapa-5.png.asset.json";
import mapa6 from "@/assets/mapa-6.png.asset.json";
import mapa7 from "@/assets/mapa-7.png.asset.json";

const images = [
  { src: mapa1.url, alt: "Mapa mental — Variação Linguística" },
  { src: mapa2.url, alt: "Mapa mental — Homônimos e Parônimos" },
  { src: mapa3.url, alt: "Mapa mental — Coerência Textual" },
  { src: mapa4.url, alt: "Mapa mental — Tipos de Texto" },
  { src: mapa5.url, alt: "Mapa mental — Expressões Problemáticas" },
  { src: mapa6.url, alt: "Mapa mental — Lista de Parônimos" },
  { src: mapa7.url, alt: "Mapa mental — Regência Nominal" },
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
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            <span className="text-neon-cyan">Veja</span>{" "}
            <span className="text-neon-pink">como é</span>{" "}
            <span className="text-neon-yellow">nosso material</span>
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
              className="w-[280px] sm:w-[360px] md:w-[480px] shrink-0 rounded-2xl overflow-hidden border border-border shadow-lg shadow-primary/10 bg-card"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto block"
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
