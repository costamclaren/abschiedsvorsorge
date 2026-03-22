import { motion } from "framer-motion";
import handsImg from "@/assets/hands.jpg";
import logoImg from "@/assets/logo.png";
import { Button } from "@/components/ui/button";


const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <img
        src={handsImg}
        alt="Hände als Symbol für Fürsorge und Verbundenheit"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
      />
      <div className="absolute inset-0 bg-primary/55" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Shield className="w-6 h-6 text-accent" />
            <span className="text-accent font-body text-sm font-semibold uppercase tracking-widest">
              Costa & McLaren Versicherungsmakler GmbH
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6">
            Weil Liebe auch
            <span className="block text-accent mt-2">über das Leben hinausgeht</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 font-body max-w-2xl mx-auto mb-10 leading-relaxed">
            Schenken Sie Ihrer Familie das Wertvollste: die Gewissheit, dass
            alles geregelt ist. Damit in der schwersten Zeit nur Trauer Platz
            hat – nicht finanzielle Sorgen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-body text-lg px-8 py-6 shadow-elevated"
              onClick={() =>
                document
                  .getElementById("rechner")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Kosten berechnen
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 font-body text-lg px-8 py-6"
              onClick={() =>
                document
                  .getElementById("kontakt")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Kostenlose Beratung
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
