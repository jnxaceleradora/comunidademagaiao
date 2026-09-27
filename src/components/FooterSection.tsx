import { Instagram } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground/60 py-8 px-6 border-t border-border">
      <div className="container-narrow text-center">
        <p className="font-heading font-extrabold text-2xl md:text-3xl tracking-wide mb-2">
          <span className="text-neon-pink">Comunidade</span>{' '}
          <span className="text-neon-blue">Magaião</span>
        </p>
        <a
          href="https://www.instagram.com/comunidademagaiao?stkn=MXFvd3d5N3M4N2x3Mw%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram @comunidademagaiao (abre em nova aba)"
          className="mb-3 inline-flex min-h-11 items-center gap-2 rounded-md px-2 text-sm font-semibold text-secondary-foreground transition-colors hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <Instagram className="h-5 w-5" aria-hidden="true" />
          <span>@comunidademagaiao</span>
        </a>
        <p className="text-xs">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
