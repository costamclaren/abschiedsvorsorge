import { motion } from "framer-motion";
import { Check, Star, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredProviders = [
  {
    name: "Hannoversche",
    tagline: "Drei flexible Tarife – Basis, Plus & Exklusiv",
    features: [
      "Versicherungssumme 3.000 – 25.000 €",
      "Ohne Gesundheitsprüfung",
      "Sofortschutz ab Antragseingang (Unfalltod)",
      "Flexible Wartezeit: 12–36 Monate",
      "Beitragsfrei ab Wunschalter (65–95 Jahre)",
      "Flex-Option: Summe während Laufzeit anpassbar",
      "Plus/Exklusiv: Doppelte Summe bei Unfalltod",
      "Exklusiv: Beitragsbefreiung bei Pflegebedürftigkeit",
    ],
    highlight: "Eintrittsalter ab 40 Jahren",
    featured: true,
  },
  {
    name: "DELA",
    tagline: "Niederländische Abschiedsvorsorge-Spezialisten seit 1937",
    features: [
      "Versicherungssumme bis 25.000 €",
      "Ohne Gesundheitsfragen",
      "Doppelte Versicherungssumme bei Unfalltod",
      "Kostenlose Kindermitversicherung (3.000 €)",
      "Rückholung bei Tod im Ausland inklusive",
      "Sofortschutz bei Unfalltod",
      "Über 4 Mio. Kunden in Europa",
      "Flexible Beitragszahlungsdauer",
    ],
    highlight: "Spezialist für Abschiedsvorsorge",
    featured: true,
  },
];

const additionalProviders = [
  {
    name: "ERGO",
    tagline: "Sterbegeldversicherung vom deutschen Traditionsversicherer",
    features: [
      "Versicherungssumme 500 – 20.000 €",
      "Ohne Gesundheitsfragen",
      "Wartezeit 36 Monate (entfällt bei Unfalltod)",
      "Beitragszahlung bis max. Alter 85",
      "Garantierte Versicherungssumme",
    ],
    highlight: "Bekannte deutsche Marke",
  },
  {
    name: "Signal Iduna",
    tagline: "Einer der größten deutschen Versicherungskonzerne",
    features: [
      "Versicherungssumme 2.500 – 20.000 €",
      "Ohne Gesundheitsfragen",
      "Sofortschutz bei Unfalltod",
      "Überschussbeteiligung möglich",
      "Flexible Beitragszahlungsdauer",
    ],
    highlight: "Starker Rundum-Schutz",
  },
  {
    name: "Allianz",
    tagline: "Weltweit führender Versicherungskonzern",
    features: [
      "Versicherungssumme ab 1.000 €",
      "Ohne Gesundheitsprüfung",
      "Sofortschutz bei Unfalltod",
      "Überschussbeteiligung möglich",
      "Beitragszahlung flexibel wählbar",
    ],
    highlight: "Höchste Finanzkraft",
  },
  {
    name: "Hanse Merkur",
    tagline: "Traditionsversicherer aus Hamburg seit 1875",
    features: [
      "Versicherungssumme 2.000 – 15.000 €",
      "Ohne Gesundheitsfragen",
      "Sofortschutz bei Unfalltod",
      "Überschussbeteiligung möglich",
      "Flexible Beitragszahlung",
    ],
    highlight: "Über 145 Jahre Erfahrung",
  },
  {
    name: "Stuttgarter",
    tagline: "Württembergischer Traditionsversicherer seit 1908",
    features: [
      "Versicherungssumme 2.500 – 20.000 €",
      "Ohne Gesundheitsfragen",
      "Sofortschutz bei Unfalltod",
      "Überschussbeteiligung möglich",
      "Beitragszahlung bis Alter 85 wählbar",
    ],
    highlight: "Solide Finanzstärke",
  },
  {
    name: "Ideal Versicherung",
    tagline: "Berliner Traditionsversicherer seit 1912",
    features: [
      "Versicherungssumme 2.500 – 15.000 €",
      "Ohne Gesundheitsfragen",
      "Wartezeit 3 Jahre",
      "Sofortschutz bei Unfalltod",
      "Flexible Beitragszahlung",
    ],
    highlight: "Über 100 Jahre Erfahrung",
  },
  {
    name: "LV 1871",
    tagline: "Münchner Versicherungsverein auf Gegenseitigkeit",
    features: [
      "Versicherungssumme 2.000 – 25.000 €",
      "Ohne Gesundheitsprüfung",
      "Sofortleistung bei Unfalltod",
      "Überschussbeteiligung möglich",
      "Beitragszahlungsdauer wählbar",
    ],
    highlight: "Starke Überschussbeteiligung",
  },
];

const ProviderComparison = () => {
  return (
    <section id="anbieter" className="py-20 md:py-28 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Unsere Anbieter im Überblick
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Wir arbeiten mit erstklassigen Versicherern zusammen, um Ihnen die
            beste Sterbegeldversicherung zu vermitteln.
          </p>
        </motion.div>

        {/* Featured providers - Hannoversche & DELA */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-6 justify-center">
            <Award className="w-5 h-5 text-accent" />
            <span className="font-heading font-semibold text-foreground text-lg">
              Unsere Top-Empfehlungen
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {featuredProviders.map((provider, index) => (
              <motion.div
                key={provider.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-background rounded-lg shadow-elevated overflow-hidden ring-2 ring-accent/30"
              >
                <div className="bg-primary p-6 relative">
                  <div className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full font-body">
                    Empfohlen
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-primary-foreground">
                    {provider.name}
                  </h3>
                  <p className="text-primary-foreground/80 font-body mt-1 text-sm">
                    {provider.tagline}
                  </p>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-5 bg-accent/15 rounded-md px-4 py-2">
                    <Star className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-sm font-body font-semibold text-foreground">
                      {provider.highlight}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {provider.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm font-body text-foreground"
                      >
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body"
                    onClick={() =>
                      document
                        .getElementById("kontakt")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Jetzt beraten lassen
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional providers */}
        <div className="mt-16">
          <h3 className="text-xl font-heading font-semibold text-foreground text-center mb-8">
            Weitere Anbieter in unserem Portfolio
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalProviders.map((provider, index) => (
              <motion.div
                key={provider.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-lg shadow-card overflow-hidden"
              >
                <div className="bg-primary/80 p-4">
                  <h4 className="text-lg font-heading font-bold text-primary-foreground">
                    {provider.name}
                  </h4>
                  <p className="text-primary-foreground/70 font-body text-xs mt-1 line-clamp-2">
                    {provider.tagline}
                  </p>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-3 bg-accent/10 rounded-md px-3 py-1.5">
                    <Star className="w-3 h-3 text-accent flex-shrink-0" />
                    <span className="text-xs font-body font-semibold text-foreground">
                      {provider.highlight}
                    </span>
                  </div>
                  <ul className="space-y-2 mb-5">
                    {provider.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-xs font-body text-foreground"
                      >
                        <Check className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full font-body text-xs"
                    onClick={() =>
                      document
                        .getElementById("kontakt")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Mehr erfahren
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Even more providers - compact list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-sm font-body text-muted-foreground mb-4">
            Außerdem vermitteln wir Tarife von:
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {[
              "Solidar",
              "Deutsche Familienversicherung",
              "Nürnberger",
              "Volkswohlbund",
              "HDH",
              "Süddeutsche Lebensversicherung",
              "Bayerische Beamtenversicherung",
            ].map((name) => (
              <span
                key={name}
                className="bg-background text-foreground text-xs font-body px-4 py-2 rounded-full shadow-card border border-border"
              >
                {name}
              </span>
            ))}
            <span className="bg-accent/15 text-accent text-xs font-body font-semibold px-4 py-2 rounded-full">
              u.&thinsp;v.&thinsp;m.
            </span>
          </div>
          <p className="text-xs text-muted-foreground font-body mt-4">
            Sprechen Sie uns an – wir finden den passenden Tarif für Ihre Situation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProviderComparison;
