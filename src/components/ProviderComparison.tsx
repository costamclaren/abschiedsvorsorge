import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const providers = [
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
  },
  {
    name: "DELA",
    tagline: "Niederländische Bestattungsvorsorge-Spezialisten seit 1937",
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
    highlight: "Spezialist für Bestattungsvorsorge",
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
            Wir arbeiten mit zwei erstklassigen Versicherern zusammen, um Ihnen
            die beste Sterbegeldversicherung zu vermitteln.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {providers.map((provider, index) => (
            <motion.div
              key={provider.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-background rounded-lg shadow-elevated overflow-hidden"
            >
              <div className="bg-primary p-6">
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
    </section>
  );
};

export default ProviderComparison;
