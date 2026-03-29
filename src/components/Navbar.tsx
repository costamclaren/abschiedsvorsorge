import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [open, setOpen] = useState(false);

  const navLinks = isHome ? (
    <>
      <a href="#rechner" className="hover:text-accent transition-colors" onClick={() => setOpen(false)}>Rechner</a>
      <a href="#anbieter" className="hover:text-accent transition-colors" onClick={() => setOpen(false)}>Anbieter</a>
    </>
  ) : (
    <Link to="/" className="hover:text-accent transition-colors" onClick={() => setOpen(false)}>Startseite</Link>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-heading text-lg font-bold text-primary-foreground tracking-tight">Bestattungsvorsorge</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 font-body text-base text-primary-foreground/80">
          {navLinks}
          <Link to="/team" className="hover:text-accent transition-colors">Ansprechpartner</Link>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="text-primary-foreground p-2" aria-label="Menü öffnen">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-primary border-primary-foreground/10 w-64">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="flex flex-col gap-6 mt-8 font-body text-lg text-primary-foreground/90">
                {navLinks}
                <Link to="/team" className="hover:text-accent transition-colors" onClick={() => setOpen(false)}>Ansprechpartner</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
