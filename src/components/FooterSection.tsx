const FooterSection = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground/60 py-8 px-6 border-t border-border">
      <div className="container-narrow text-center">
        <p className="font-heading font-extrabold text-2xl md:text-3xl tracking-wide mb-2">
          <span className="text-neon-pink">Comunidade</span>{' '}
          <span className="text-neon-blue">Magaião</span>
        </p>
        <p className="text-xs">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
