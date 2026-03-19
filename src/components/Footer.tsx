const Footer = () => {
  return (
    <footer className="bg-foreground py-10 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="font-body text-sm text-background/60">
          © {new Date().getFullYear()} Costa & McLaren Versicherungsmakler GmbH
          – Bestattungsvorsorge. Alle Rechte vorbehalten.
        </p>
        <p className="font-body text-xs text-background/40 mt-2">
          Vermittlung von Sterbegeldversicherungen der Hannoversche
          Lebensversicherung AG und DELA Lebensversicherungen N.V.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
