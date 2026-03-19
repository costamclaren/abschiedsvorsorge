import { motion } from "framer-motion";
import { Heart, Euro, Clock, Users } from "lucide-react";

const reasons = [
  {
    icon: Euro,
    title: "Bestattungen kosten 5.000–10.000 €",
    description:
      "Friedhofsgebühren, Bestatter, Grabpflege – die Kosten summieren sich schnell. Seit 2004 gibt es kein gesetzliches Sterbegeld mehr.",
  },
  {
    icon: Heart,
    title: "Liebste entlasten",
    description:
      "Sorgen Sie vor, damit Ihre Familie sich in der Trauerzeit nicht auch noch um Finanzen kümmern muss.",
  },
  {
    icon: Clock,
    title: "Je früher, desto günstiger",
    description:
      "Je jünger Sie bei Abschluss sind, desto niedriger sind Ihre monatlichen Beiträge – bei gleichem Schutz.",
  },
  {
    icon: Users,
    title: "Unabhängige Beratung",
    description:
      "Als Versicherungsmakler vergleichen wir für Sie die besten Tarife und finden die passende Lösung.",
  },
];

const WhySection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Warum Bestattungsvorsorge?
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Das Sterben in Deutschland ist teuer. Schützen Sie Ihre Angehörigen
            vor unerwarteten finanziellen Belastungen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg p-6 shadow-card text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
