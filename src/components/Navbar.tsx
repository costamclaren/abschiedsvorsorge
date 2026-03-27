const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-heading text-2xl font-bold text-primary-foreground tracking-tight">MC</span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-body text-sm text-primary-foreground/80">
          <a
            href="#rechner"
            className="hover:text-accent transition-colors"
          >
            Rechner
          </a>
          <a
            href="#anbieter"
            className="hover:text-accent transition-colors"
          >
            Anbieter
          </a>
          <a
            href="#kontakt"
            className="hover:text-accent transition-colors"
          >
            Kontakt
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
