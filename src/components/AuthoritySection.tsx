import { motion } from "framer-motion";
import { Award, BookOpen, Users, Target } from "lucide-react";
import marcelaPhoto from "@/assets/marcela.png";

const stats = [
  {
    icon: Award,
    title: "Quem sou?",
    titleClass: "text-neon-blue",
    image: marcelaPhoto,
    text: "Meu nome é Marcela Gaião. Sou professora especialista em Língua Portuguesa e servidora pública concursada há mais de 12 anos. Dediquei minha carreira ao ensino da língua e à preparação de estudantes para concursos e provas. Todo o material que você encontrará aqui foi elaborado com base na experiência de quem domina o conteúdo e sabe exatamente o que realmente importa para alcançar excelentes resultados.",
  },
  {
    icon: Users,
    title: "Aprovações",
    titleClass: "text-neon-yellow",
    text: "Há mais de 12 anos dedicando minha carreira ao ensino da Língua Portuguesa, tive o privilégio de contribuir para a preparação de milhares de alunos em busca da aprovação em concursos públicos e vestibulares. Ao longo dessa trajetória, acompanhei inúmeras histórias de sucesso de estudantes que conquistaram seus objetivos por meio de um estudo organizado, consistente e estratégico. Meu compromisso é oferecer um método que realmente funcione, tornando o aprendizado mais simples, eficiente e focado no que as provas exigem.",
  },
  {
    icon: BookOpen,
    title: "Método",
    titleClass: "text-neon-pink",
    text: "A diferença entre quem estuda e quem é aprovado está no método. Na Comunidade Magaião, cada resumo, mapa mental e questão foi pensado para acelerar seu aprendizado, facilitar a memorização e tornar a revisão muito mais eficiente. Você estuda com estratégia, ganha confiança e chega à prova realmente preparado.",
  },
  {
    icon: Target,
    title: "Foco",
    titleClass: "text-neon-lilac",
    text: "Nosso objetivo é mostrar que aprender Português pode ser mais fácil do que você imagina. Com materiais organizados, linguagem clara e muita prática, a Comunidade Magaião oferece tudo o que você precisa para estudar com confiança e conquistar a tão sonhada aprovação.",
  },
];

const AuthoritySection = () => {
  return (
    <section className="bg-secondary text-secondary-foreground section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            <span className="text-neon-yellow">Criado por quem</span>{" "}
            <span className="text-neon-pink">entende</span>{" "}
            <span className="text-neon-cyan">de concursos</span>
          </h2>
          <p className="text-secondary-foreground/70 text-lg max-w-2xl mx-auto">
            Material desenvolvido com base em experiência real em preparação e aprovação em concursos públicos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-2xl p-6"
            >
              <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className={`font-heading text-2xl md:text-3xl font-bold mb-3 ${stat.titleClass}`}>
                {stat.title}
              </h3>
              {stat.image && (
                <div className="mb-4 flex justify-center">
                  <img
                    src={stat.image}
                    alt="Marcela Gaião"
                    className="w-48 md:w-56 h-auto drop-shadow-[0_10px_25px_rgba(255,45,146,0.25)]"
                  />
                </div>
              )}
              <p className="text-secondary-foreground/85 text-base leading-relaxed">
                {stat.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
