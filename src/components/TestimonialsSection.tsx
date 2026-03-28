import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Hildegard M.",
    age: 74,
    location: "Lüneburg",
    text: "Nach dem Tod meines Mannes wusste ich, wie wichtig Vorsorge ist. Frau Zabel war so einfühlsam – ich fühlte mich verstanden, nicht gedrängt. Jetzt bin ich beruhigt, dass meine Kinder nicht belastet werden.",
    stars: 5,
  },
  {
    name: "Thomas B.",
    age: 54,
    location: "Neuss",
    text: "Das Team hat mir alles ganz unkompliziert erklärt – kein Fachchinesisch, sondern klare Worte. Innerhalb einer Stunde war alles geregelt. So stelle ich mir gute Beratung vor.",
    stars: 5,
  },
  {
    name: "Werner K.",
    age: 68,
    location: "Rothenburg ob der Tauber",
    text: "Ich habe lange gezögert, mich mit dem Thema zu beschäftigen. Herr Laloussis hat mir alles in Ruhe erklärt und den passenden Tarif gefunden. Ein großes Gewicht ist von meinen Schultern gefallen.",
    stars: 5,
  },
  {
    name: "Sabine F.",
    age: 56,
    location: "Düsseldorf",
    text: "Pier Lio hat sich wirklich Zeit genommen und auf meine persönliche Situation eingegangen. Man merkt sofort, dass er mit Herzblut dabei ist. Ich fühle mich bestens aufgehoben.",
    stars: 5,
  },
  {
    name: "Ingeborg S.",
    age: 71,
    location: "Bad Pyrmont",
    text: "Meine Nachbarin hat mich empfohlen. Frau Zabel hat sich wirklich Zeit genommen und alles verständlich erklärt. Man merkt, dass hier Menschen arbeiten, denen es am Herzen liegt.",
    stars: 5,
  },
  {
    name: "Michael D.",
    age: 52,
    location: "Grevenbroich",
    text: "Meine Schwester und ich haben uns gemeinsam beraten lassen. Das Team war so warmherzig und hat sich um alles gekümmert – wir mussten uns um nichts mehr sorgen.",
    stars: 5,
  },
  {
    name: "Helmut R.",
    age: 76,
    location: "Celle",
    text: "Als mein Bruder starb, musste die Familie plötzlich über 8.000 € aufbringen. Herr Laloussis hat mir geholfen, eine Lösung zu finden, die zu meiner Rente passt. Meinen Kindern bleibt das jetzt erspart.",
    stars: 5,
  },
  {
    name: "Andrea W.",
    age: 58,
    location: "Mönchengladbach",
    text: "Pier Lio war unglaublich geduldig mit all meinen Fragen. Er hat mir verschiedene Optionen gezeigt und mich nie unter Druck gesetzt. So wünscht man sich das!",
    stars: 5,
  },
];

const TestimonialCard = ({ t }: { t: (typeof testimonials)[0] }) => (
  <div className="bg-card rounded-lg p-8 shadow-card relative flex-shrink-0 w-[360px] md:w-[420px]">
    <Quote className="w-8 h-8 text-primary/15 absolute top-6 right-6" />
    <div className="flex gap-1 mb-4">
      {Array.from({ length: t.stars }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
      ))}
    </div>
    <p className="text-foreground/85 font-body text-sm leading-relaxed mb-6 italic min-h-[5rem]">
      „{t.text}"
    </p>
    <div className="border-t border-border pt-4">
      <p className="font-heading font-semibold text-foreground text-sm">
        {t.name}
      </p>
      <p className="text-muted-foreground font-body text-xs">
        {t.age} Jahre · {t.location}
      </p>
    </div>
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Was unsere Kunden sagen
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Vertrauen entsteht durch ehrliche Gespräche. Lesen Sie, was
            Menschen berichten, die bereits vorgesorgt haben.
          </p>
        </motion.div>
      </div>

      {/* Marquee banner */}
      <div className="relative">
        <div className="flex animate-marquee gap-8 w-max">
          {[...testimonials, ...testimonials].map((t, index) => (
            <TestimonialCard key={`${t.name}-${index}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
