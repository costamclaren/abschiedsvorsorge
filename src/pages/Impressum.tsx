import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Impressum = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-background pt-28 pb-16 px-6">
        <div className="max-w-3xl mx-auto font-body text-foreground/80 space-y-10">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Impressum</h1>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-semibold text-foreground">Angaben gemäß § 5 DDG</h2>
            <p>Marco Costa<br />Poststr. 60<br />41516 Grevenbroich<br />Deutschland</p>
            <p>Telefon: 02181-68717<br />Internet: <a href="https://www.abschiedsvorsorge.de" target="_blank" rel="noopener noreferrer" className="text-primary underline">www.abschiedsvorsorge.de</a></p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-semibold text-foreground">Erlaubnis nach § 34d Abs. 1 GewO</h2>
            <p>Zugelassener Versicherungsmakler nach § 34d Abs. 1 GewO.</p>
            <p>Erlaubnisinhaber: Marco Costa<br />Registrierungsnummer: D-IOKH-XO71Q-75</p>
            <p>
              Erlaubnis- und Registerbehörde: Industrie- und Handelskammer Mittlerer Niederrhein<br />
              Nordwall 39, 47798 Krefeld<br />
              <a href="https://www.ihk-mittlerer-niederrhein.de" target="_blank" rel="noopener noreferrer" className="text-primary underline">www.ihk-mittlerer-niederrhein.de</a>
            </p>
            <p>
              Gemeinsame Registerstelle: Deutscher Industrie- und Handelskammertag (DIHK) e.V.<br />
              Breite Straße 29, 10178 Berlin<br />
              Telefon: 0180 6 00 58 50<br />
              <a href="https://www.vermittlerregister.info" target="_blank" rel="noopener noreferrer" className="text-primary underline">www.vermittlerregister.info</a>
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-semibold text-foreground">Berufshaftpflichtversicherung</h2>
            <p>
              Es besteht eine Berufshaftpflichtversicherung (Vermögensschadenhaftpflicht) gemäß § 34d Abs. 5 Nr. 3 GewO i.V.m. § 11 VersVermV bei:
            </p>
            <p>CGPA Europe Underwriting GmbH<br />Leopoldstraße 19<br />80802 München</p>
            <p>Räumlicher Geltungsbereich: Europäischer Wirtschaftsraum und Schweiz</p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-semibold text-foreground">Beteiligungen</h2>
            <p>
              Es bestehen keine direkten oder indirekten Beteiligungen über 10 % an Versicherungsunternehmen. Kein Versicherungsunternehmen hält eine Beteiligung über 10 % am Kapital des Erlaubnisinhabers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-semibold text-foreground">Berufsrechtliche Regelungen</h2>
            <p>
              Die maßgeblichen berufsrechtlichen Regelungen sind: § 34d Gewerbeordnung (GewO), §§ 59–68 Versicherungsvertragsgesetz (VVG), § 48b Versicherungsaufsichtsgesetz (VAG) sowie die Verordnung über die Versicherungsvermittlung und -beratung (VersVermV).
            </p>
            <p>
              Diese Bestimmungen sind abrufbar unter:{" "}
              <a href="https://www.gesetze-im-internet.de" target="_blank" rel="noopener noreferrer" className="text-primary underline">www.gesetze-im-internet.de</a>
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-semibold text-foreground">Schlichtungsstelle / Ombudsmann</h2>
            <p>Bei Streitigkeiten im Zusammenhang mit der Versicherungsvermittlung kann die zuständige Schlichtungsstelle angerufen werden:</p>
            <p>
              Versicherungsombudsmann e.V.<br />
              Postfach 08 06 32, 10006 Berlin<br />
              Telefon: 0800 3696000 (kostenfrei)<br />
              <a href="https://www.versicherungsombudsmann.de" target="_blank" rel="noopener noreferrer" className="text-primary underline">www.versicherungsombudsmann.de</a>
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-semibold text-foreground">Erstinformation nach § 15 VVG</h2>
            <p>
              Vor Aufnahme der Geschäftstätigkeit erhalten Kunden eine gesonderte Erstinformation gemäß § 15 VVG. Diese enthält alle wesentlichen Angaben zur Vermittlertätigkeit, zur Vergütung sowie zu Interessenkonflikten.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-semibold text-foreground">Haftungshinweis</h2>
            <p>
              Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden. Als Diensteanbieter bin ich gemäß § 5 DDG für eigene Inhalte nach den allgemeinen Gesetzen verantwortlich. Für externe Links übernehme ich keine Haftung; für den Inhalt verlinkter Seiten sind ausschließlich deren Betreiber verantwortlich.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
