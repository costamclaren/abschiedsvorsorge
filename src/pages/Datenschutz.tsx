import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Datenschutz = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-background pt-28 pb-16 px-6">
        <div className="max-w-3xl mx-auto font-body text-foreground/80 space-y-10">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Datenschutzerklärung</h1>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-semibold text-foreground">Verantwortlicher im Sinne der DSGVO</h2>
            <p>Marco Costa<br />Poststr. 60<br />41516 Grevenbroich Deutschland</p>
            <p>Telefon: 02181-68717<br />Internet: <a href="https://www.abschiedsvorsorge.de" target="_blank" rel="noopener noreferrer" className="text-primary underline">www.abschiedsvorsorge.de</a></p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-semibold text-foreground">Grundsätze der Datenverarbeitung</h2>
            <p>Personenbezogene Daten werden ausschließlich im Einklang mit der Datenschutz-Grundverordnung (DSGVO) und dem Bundesdatenschutzgesetz (BDSG) verarbeitet. Es werden nur die Daten erhoben, die für den jeweiligen Zweck tatsächlich erforderlich sind (Grundsatz der Datensparsamkeit, Art. 5 DSGVO).</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-lg font-semibold text-foreground">Welche Daten verarbeitet werden und warum</h2>

            <div className="space-y-2">
              <h3 className="font-heading text-base font-semibold text-foreground italic">Kontaktaufnahme</h3>
              <p>Bei Kontaktaufnahme per Telefon oder Kontaktformular werden die mitgeteilten Daten (z. B. Name, Telefonnummer, Anfrage) gespeichert, um die Anfrage zu bearbeiten. Eine Weitergabe an Dritte erfolgt nicht.</p>
              <p className="text-sm">Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).</p>
            </div>

            <div className="space-y-2">
              <h3 className="font-heading text-base font-semibold text-foreground italic">Beratung, Vertragsanbahnung und Bestandsbetreuung</h3>
              <p>Im Rahmen der Versicherungsvermittlung werden personenbezogene Daten verarbeitet, die für Beratung, Risikobeurteilung, Vertragsanbahnung und laufende Bestandsbetreuung erforderlich sind. Dazu gehören insbesondere Name, Anschrift, Geburtsdatum, Kontaktdaten sowie Angaben zum Versicherungsbedarf und zur persönlichen oder wirtschaftlichen Situation.</p>
              <p className="text-sm">Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung bzw. vorvertragliche Maßnahmen) sowie § 34d GewO.</p>
            </div>

            <div className="space-y-2">
              <h3 className="font-heading text-base font-semibold text-foreground italic">Besondere Kategorien personenbezogener Daten</h3>
              <p>Für bestimmte Versicherungssparten (z. B. Berufsunfähigkeit, Krankenversicherung, Lebensversicherung) ist die Verarbeitung besonderer Kategorien personenbezogener Daten erforderlich, insbesondere Gesundheitsdaten. Diese werden ausschließlich auf Grundlage ausdrücklicher Einwilligung gemäß Art. 9 Abs. 2 lit. a DSGVO oder soweit gesetzlich zulässig nach Art. 9 Abs. 2 lit. b DSGVO verarbeitet. Die Einwilligung kann jederzeit mit Wirkung für die Zukunft widerrufen werden. Führt ein Widerruf dazu, dass der Vertragszweck nicht mehr erfüllt werden kann, endet die Verpflichtung zur weiteren Betreuung automatisch.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-lg font-semibold text-foreground">Weitergabe von Daten an Dritte</h2>
            <p>Zur Erfüllung der Aufgaben als Versicherungsmakler ist die Weitergabe personenbezogener Daten an folgende Empfänger erforderlich oder möglich:</p>

            <div className="space-y-2">
              <h3 className="font-heading text-base font-semibold text-foreground italic">Versicherungsunternehmen</h3>
              <p>Zur Einholung von Angeboten, Antragstellung und Vertragsabwicklung werden Daten an die jeweils in Frage kommenden Versicherungsgesellschaften übermittelt. Dies ist zur Erfüllung des Maklervertrags zwingend erforderlich.</p>
            </div>

            <div className="space-y-2">
              <h3 className="font-heading text-base font-semibold text-foreground italic">Maklerpools und Servicegesellschaften</h3>
              <p>Soweit zur Abwicklung Kooperationspartner, Maklerpools oder Servicegesellschaften eingesetzt werden, erfolgt die Datenweitergabe im hierfür erforderlichen Umfang. Mit diesen Dienstleistern bestehen Auftragsverarbeitungsverträge gemäß Art. 28 DSGVO.</p>
            </div>

            <div className="space-y-2">
              <h3 className="font-heading text-base font-semibold text-foreground italic">Rechts- und Steuerberater</h3>
              <p>Im Rahmen der rechtlichen oder steuerlichen Prüfung von Ansprüchen können Daten an zur Verschwiegenheit verpflichtete Berufsträger weitergegeben werden.</p>
            </div>

            <div className="space-y-2">
              <h3 className="font-heading text-base font-semibold text-foreground italic">Bestandsübertragung</h3>
              <p>Im Falle einer Übertragung des Versicherungsbestands an einen anderen Makler oder Rechtsnachfolger werden Daten im hierfür notwendigen Umfang übermittelt. Besondere Kategorien personenbezogener Daten, insbesondere Gesundheitsdaten, werden dabei nicht an potenzielle Erwerber übermittelt. Betroffene werden über eine Bestandsübertragung gesondert informiert.</p>
            </div>

            <p>Eine Weitergabe zu Werbezwecken oder an sonstige Dritte ohne Rechtsgrundlage findet nicht statt.</p>
            <p className="text-sm">Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung), Art. 6 Abs. 1 lit. c DSGVO (gesetzliche Verpflichtung) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-lg font-semibold text-foreground">Nutzung der Website</h2>

            <div className="space-y-2">
              <h3 className="font-heading text-base font-semibold text-foreground italic">Server-Logfiles</h3>
              <p>Beim Besuch dieser Website werden automatisch technische Daten in Server-Logfiles gespeichert (IP-Adresse, Browser, Datum und Uhrzeit, aufgerufene Seiten). Diese Daten sind keiner bestimmten Person direkt zuordenbar und werden nicht mit anderen Datenquellen zusammengeführt.</p>
              <p className="text-sm">Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am störungsfreien Betrieb).</p>
            </div>

            <div className="space-y-2">
              <h3 className="font-heading text-base font-semibold text-foreground italic">Cookies</h3>
              <p>Diese Website kann Cookies verwenden. Soweit nicht technisch zwingend erforderlich, werden Cookies nur mit ausdrücklicher Einwilligung gesetzt. Die Verwendung von Cookies kann jederzeit in den Browsereinstellungen deaktiviert werden.</p>
              <p className="text-sm">Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO.</p>
            </div>

            <div className="space-y-2">
              <h3 className="font-heading text-base font-semibold text-foreground italic">Terminbuchung (Calendly)</h3>
              <p>Für die Online-Terminbuchung wird der Dienst Calendly (Calendly LLC, 271 17th Street NW, Atlanta, USA) eingesetzt. Bei der Nutzung werden Name und Kontaktdaten an Calendly übermittelt. Weitere Informationen sind der Datenschutzerklärung von Calendly unter <a href="https://www.calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary underline">www.calendly.com/privacy</a> zu entnehmen.</p>
              <p className="text-sm">Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.</p>
            </div>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-semibold text-foreground">Datenübermittlung in Drittstaaten</h2>
            <p>Soweit Dienstleister eingesetzt werden, die Daten außerhalb des Europäischen Wirtschaftsraums verarbeiten (z. B. Calendly, USA), wird sichergestellt, dass ein angemessenes Datenschutzniveau gewährleistet ist, insbesondere durch EU-Standardvertragsklauseln gemäß Art. 46 DSGVO.</p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-semibold text-foreground">Speicherdauer</h2>
            <p>Personenbezogene Daten werden nur so lange gespeichert, wie es für den jeweiligen Zweck erforderlich ist. Für Versicherungsverträge und damit zusammenhängende Unterlagen gelten handels- und steuerrechtliche Aufbewahrungsfristen von in der Regel bis zu zehn Jahren. Im Falle eines Widerspruchs gegen die Datenverarbeitung werden Daten gesperrt, soweit eine vollständige Löschung gesetzlichen Aufbewahrungspflichten entgegenstünde — etwa zur Verteidigung gegen Haftungsansprüche wegen Falschberatung.</p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-semibold text-foreground">Ihre Rechte als betroffene Person</h2>
            <p>Sie haben nach der DSGVO folgende Rechte:</p>
            <p>Auskunft über gespeicherte Daten (Art. 15 DSGVO), Berichtigung unrichtiger Daten (Art. 16 DSGVO), Löschung Ihrer Daten (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO), Datenübertragbarkeit (Art. 20 DSGVO), Widerspruch gegen bestimmte Verarbeitungen (Art. 21 DSGVO) sowie den Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO).</p>
            <p>Zur Ausübung Ihrer Rechte wenden Sie sich bitte schriftlich an die oben genannte Anschrift oder per Telefon unter 02181-68717.</p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-semibold text-foreground">Widerspruchsrecht</h2>
            <p>Soweit Daten auf Grundlage berechtigter Interessen (Art. 6 Abs. 1 lit. f DSGVO) verarbeitet werden, besteht das Recht, dieser Verarbeitung jederzeit zu widersprechen. Soweit die Verarbeitung zur Erfüllung des Maklervertrags erforderlich ist, kann ein Widerspruch zur Folge haben, dass eine weitere Betreuung nicht möglich ist.</p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-semibold text-foreground">Beschwerderecht bei der Aufsichtsbehörde</h2>
            <p>Es besteht das Recht, sich bei der zuständigen Datenschutzaufsichtsbehörde zu beschweren. Zuständige Behörde für Nordrhein-Westfalen:</p>
            <p>Landesbeauftragte für Datenschutz und Informationsfreiheit NRW<br />Postfach 20 04 44, 40102 Düsseldorf<br /><a href="https://www.ldi.nrw.de" target="_blank" rel="noopener noreferrer" className="text-primary underline">www.ldi.nrw.de</a></p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-semibold text-foreground">Online-Streitbeilegung</h2>
            <p>Die EU-Kommission stellt eine Plattform zur Online-Streitbeilegung bereit, erreichbar unter: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary underline">www.ec.europa.eu/consumers/odr</a></p>
          </section>

          <section className="space-y-2">
            <h2 className="font-heading text-lg font-semibold text-foreground">Aktualität dieser Erklärung</h2>
            <p>Diese Datenschutzerklärung hat den Stand: [Datum – bitte ergänzen]</p>
            <p>Änderungen der Datenverarbeitung oder neue gesetzliche Anforderungen können eine Anpassung erforderlich machen. Die jeweils aktuelle Fassung ist auf dieser Website abrufbar.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;
