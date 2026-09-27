import adjunto from "@/assets/flashcard-adjunto-adnominal.webp";
import digrafo from "@/assets/flashcard-digrafo-difono.webp";
import senao from "@/assets/flashcard-senao-se-nao.webp";
import virgula from "@/assets/flashcard-nao-use-virgula.webp";
import pronomes from "@/assets/flashcard-entre-mim-e-voce.webp";
import cujo from "@/assets/flashcard-uso-do-cujo.webp";
import proclise from "@/assets/flashcard-proclise.webp";
import complemento from "@/assets/flashcard-complemento-nominal.webp";
import virgulaE from "@/assets/flashcard-virgula-antes-do-e.webp";

const images = [
  { src: adjunto, alt: "Adjunto adnominal" },
  { src: digrafo, alt: "Dígrafo e dífono" },
  { src: senao, alt: "Senão e se não" },
  { src: virgula, alt: "Quando não usar vírgula" },
  { src: pronomes, alt: "Entre mim e você" },
  { src: cujo, alt: "Regras do uso de cujo" },
  { src: proclise, alt: "Próclise obrigatória" },
  { src: complemento, alt: "Complemento nominal e objeto indireto" },
  { src: virgulaE, alt: "Vírgula antes do E" },
];

const FlashcardShowcase = () => (
  <div
    className="relative mt-6 overflow-hidden rounded-2xl motion-reduce:overflow-x-auto"
    role="region"
    aria-label="Exemplos dos flashcards incluídos no bônus"
    tabIndex={0}
  >
    <div className="flex w-max animate-marquee [animation-duration:70s] hover:[animation-play-state:paused] focus-within:[animation-play-state:paused] motion-reduce:animate-none">
      {[0, 1].map((copy) => (
        <div key={copy} aria-hidden={copy === 1 ? true : undefined} className="flex shrink-0 gap-4 pr-4">
          {images.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={copy === 0 ? `Flashcard — ${image.alt}` : ""}
              width={900}
              height={900}
              loading="lazy"
              decoding="async"
              className="block h-[260px] w-[260px] shrink-0 rounded-xl border border-primary/20 bg-white object-contain sm:h-[320px] sm:w-[320px]"
            />
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default FlashcardShowcase;
