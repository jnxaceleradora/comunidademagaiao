import { motion } from "framer-motion";
import { Award, BookOpen, Users, Target } from "lucide-react";
import marcelaPhoto from "@/assets/marcela-profissional-source.jpg";

const stats = [
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

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-8 overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-background/80 via-secondary-foreground/[0.04] to-primary/10 shadow-2xl shadow-primary/10"
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
          <div className="relative grid items-center lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative min-h-[420px] overflow-hidden lg:min-h-[560px]">
              <img
                src={marcelaPhoto}
                alt="Marcela Gaião, professora especialista em Língua Portuguesa"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-background/75" />
              <div className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-background/75 px-4 py-2 backdrop-blur-md">
                <span className="font-heading text-sm font-semibold text-neon-yellow">+12 anos de experiência</span>
              </div>
            </div>

            <div className="relative p-7 md:p-10 lg:p-14">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/15">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-neon-cyan">
                Experiência que orienta
              </p>
              <h3 className="mb-6 font-heading text-3xl font-bold text-neon-blue md:text-4xl">
                Conheça Marcela Gaião
              </h3>
              <p className="text-base leading-relaxed text-secondary-foreground/90 md:text-lg">
                Sou professora especialista em Língua Portuguesa e servidora pública concursada há mais de 12 anos. Minha trajetória reúne experiência prática no ensino e na preparação de candidatos para concursos e provas.
              </p>
              <p className="mt-4 text-base leading-relaxed text-secondary-foreground/80 md:text-lg">
                Ao longo desse percurso, desenvolvi uma metodologia que transforma conteúdos complexos em explicações claras, revisões estratégicas e materiais focados no que realmente é cobrado. Cada conteúdo da Comunidade Magaião nasce desse domínio técnico e da experiência de quem conhece, na prática, o caminho entre o estudo e a aprovação.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
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
