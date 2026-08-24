import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import questoesAsset from "@/assets/curso-questoes.png.asset.json";
import literaturaAsset from "@/assets/curso-literatura-v2.png.asset.json";

const courses = [
  {
    image: questoesAsset.url,
    title: "Pack de questões da Magaião",
    titleClass: "text-neon-pink",
    description:
      "Mais de 1000 questões de Português com gabarito comentado, níveis variados e foco no que realmente cai em prova.",
    href: "https://pay.kiwify.com.br/lBGjHHJ",
  },
  {
    image: literaturaAsset.url,
    title: "Literatura com Magaião",
    titleClass: "text-neon-yellow",
    description:
      "Curso completo de Literatura, do básico ao avançado, para vestibulares, ENEM e concursos. Teoria clara e linguagem acessível.",
    href: "https://pay.kiwify.com.br/mh4lS76",
  },
];

const OtherCoursesSection = () => {
  return (
    <section id="outros-cursos" className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="section-title">
            <span className="text-neon-cyan">Conheça</span>{" "}
            <span className="text-neon-pink">os outros</span>{" "}
            <span className="text-neon-lilac">cursos</span>
          </h2>
          <p className="text-secondary-foreground/70 text-lg max-w-2xl mx-auto">
            Amplie sua preparação com os demais materiais da Magaião.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-auto block"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className={`font-heading text-2xl md:text-3xl font-bold mb-3 ${course.titleClass}`}>
                  {course.title}
                </h3>
                <p className="text-secondary-foreground/85 text-base leading-relaxed mb-6 flex-1">
                  {course.description}
                </p>
                <motion.a
                  href={course.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-heading font-semibold px-6 py-3 rounded-lg shadow-lg shadow-primary/25 animate-pulse-btn self-start"
                >
                  Quero este curso
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherCoursesSection;
