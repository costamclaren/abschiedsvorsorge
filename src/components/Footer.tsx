import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground py-10 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="font-body text-sm text-background/60">
          © {new Date().getFullYear()} Abschiedsvorsorge. Alle Rechte vorbehalten.
        </p>
        <Link to="/impressum" className="font-body text-xs text-background/40 mt-3 inline-block hover:text-background/60 transition-colors underline">
          Impressum
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
