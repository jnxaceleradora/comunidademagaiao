import { useState } from "react";
import pageOne from "@/assets/questoes-crase-pagina-1.webp";
import pageThree from "@/assets/questoes-crase-pagina-3.webp";

const QuestionsPreview = () => {
  const [split, setSplit] = useState(50);
  return (
    <div className="relative mt-6">
      <div className="relative isolate overflow-hidden rounded-xl border border-primary/20 bg-white shadow-lg focus-within:ring-2 focus-within:ring-primary">
        <img src={pageThree} alt="Página 2 — Respostas comentadas das questões de crase" width={1132} height={1600} loading="lazy" decoding="async" draggable={false} className="block h-auto w-full select-none" />
        <img src={pageOne} alt="Página 1 — Questões de crase da professora Marcela Gaião" width={1132} height={1600} loading="lazy" decoding="async" draggable={false} style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }} className="absolute inset-0 h-full w-full select-none object-contain" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-3 flex justify-between gap-2 px-3 text-xs font-bold">
          {split > 0 && <span className="rounded-full bg-[#281a36] px-3 py-2 text-white">Página 1</span>}
          {split < 100 && <span className="ml-auto rounded-full bg-[#281a36] px-3 py-2 text-white">Página 2</span>}
        </div>
        <div aria-hidden="true" style={{ left: `${split}%` }} className="pointer-events-none absolute inset-y-0 w-1 -translate-x-1/2 bg-primary shadow-lg">
          <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-primary text-2xl font-bold text-white shadow-xl">↔</span>
        </div>
        <input type="range" min={0} max={100} value={split} onChange={(event) => setSplit(Number(event.target.value))}
          aria-label="Arraste para revelar a página 1 ou a página 2"
          aria-valuetext={split === 100 ? "Página 1 completa" : split === 0 ? "Página 2 completa" : `${split}% da página 1 e ${100 - split}% da página 2`}
          className="absolute inset-0 m-0 h-full w-full cursor-ew-resize touch-pan-y opacity-0" />
      </div>
      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {[{ label: "Ver página 1", value: 100 }, { label: "Ver as duas", value: 50 }, { label: "Ver página 2", value: 0 }].map(({ label, value }) => (
          <button key={value} type="button" onClick={() => setSplit(value)} aria-pressed={split === value}
            className="min-h-11 rounded-lg border border-primary/40 px-3 py-2 text-sm font-semibold text-foreground hover:bg-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary aria-pressed:bg-primary/25">
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionsPreview;
