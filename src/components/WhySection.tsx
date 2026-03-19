import { motion } from "framer-motion";
import { Heart, Euro, Clock, Users } from "lucide-react";

const reasons = [
  {
    icon: Euro,
    title: "Die Realität: Bestattungen kosten bis 10.000 €",
    description:
      "Seit 2004 gibt es kein gesetzliches Sterbegeld mehr. Friedhof, Bestatter, Grabpflege – Ihre Angehörigen tragen diese Last allein.",
  },
  {
    icon: Heart,
    title: "Ein letztes Geschenk an Ihre Familie",
    description:
      "In der Trauerzeit soll Ihre Familie Abschied nehmen dürfen – ohne sich gleichzeitig Gedanken über Rechnungen machen zu müssen.",
  },
  {
    icon: Clock,
    title: "Heute vorsorgen, morgen beruhigt sein",
    description:
      "Je früher Sie beginnen, desto geringer die Beiträge. Schon wenige Euro im Monat reichen für umfassenden Schutz.",
  },
  {
    icon: Users,
    title: "Persönlich. Unabhängig. An Ihrer Seite.",
    description:
      "Wir hören zu, verstehen Ihre Situation und finden gemeinsam den Tarif, der wirklich zu Ihnen passt.",
  },
];

const WhySection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Intro with image */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Vorsorge aus Liebe
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              Niemand denkt gerne an den Abschied. Aber wer vorsorgt, schenkt
              seinen Liebsten etwas Unbezahlbares: Ruhe in der schwersten Zeit.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-lg overflow-hidden shadow-elevated"
          >
            <img
              src="https://images.unsplash.com/photo-1447005497901-b3e9ee359928?w=800&q=80"
              alt="Älteres Ehepaar geht zusammen spazieren"
              className="w-full h-64 md:h-80 object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>

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
