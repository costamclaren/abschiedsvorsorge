import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-heading text-base font-bold text-primary-foreground tracking-tight">Abschiedsvorsorge</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 font-body text-sm text-primary-foreground/80">
          {isHome ? (
            <>
              <a href="#rechner" className="hover:text-accent transition-colors">Rechner</a>
              <a href="#anbieter" className="hover:text-accent transition-colors">Anbieter</a>
              
            </>
          ) : (
            <Link to="/" className="hover:text-accent transition-colors">Startseite</Link>
          )}
          <Link to="/team" className="hover:text-accent transition-colors">Ansprechpartner</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
