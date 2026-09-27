import { useState } from "react";
import pageOne from "@/assets/questoes-crase-pagina-1.webp";
import pageThree from "@/assets/questoes-crase-pagina-3.webp";

const QuestionsPreview = () => {
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="relative mt-6">
      <button
        type="button"
        aria-label="Alternar entre as páginas 1 e 3 das questões de crase"
        aria-pressed={showComments}
        onPointerEnter={(event) => {
          if (event.pointerType === "mouse") setShowComments(true);
        }}
        onPointerLeave={(event) => {
          if (event.pointerType === "mouse") setShowComments(false);
        }}
        onClick={(event) => {
          if (event.detail === 0 || !window.matchMedia("(hover: hover)").matches) {
            setShowComments((current) => !current);
          }
        }}
        onBlur={() => setShowComments(false)}
        className="relative block w-full overflow-hidden rounded-xl border border-primary/20 bg-white shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background"
      >
        <img
          src={pageOne}
          alt="Página 1 — Questões de crase da professora Marcela Gaião"
          aria-hidden={showComments}
          width={1132}
          height={1600}
          loading="lazy"
          decoding="async"
          className="block h-auto w-full"
        />
        <img
          src={pageThree}
          alt="Página 3 — Respostas comentadas das questões de crase"
          aria-hidden={!showComments}
          width={1132}
          height={1600}
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-300 motion-reduce:transition-none ${showComments ? "opacity-100" : "opacity-0"}`}
        />
      </button>
      <p className="mt-3 text-center text-sm text-muted-foreground">
        Passe o mouse ou toque na página para alternar entre as questões e os comentários.
      </p>
    </div>
  );
};

export default QuestionsPreview;
