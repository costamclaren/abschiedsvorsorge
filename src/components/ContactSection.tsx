import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="kontakt" className="py-20 md:py-28 bg-primary">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Kostenlose & unverbindliche Beratung
          </h2>
          <p className="text-primary-foreground/80 font-body text-lg mb-12 max-w-xl mx-auto">
            Lassen Sie sich von uns persönlich beraten – wir finden gemeinsam
            den passenden Tarif für Ihre Bestattungsvorsorge.
          </p>

          <div className="grid sm:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <span className="text-primary-foreground font-body font-semibold">
                Telefon
              </span>
              <a
                href="tel:+4900000000"
                className="text-primary-foreground/80 font-body text-sm hover:text-accent transition-colors"
              >
                +49 (0) 000 000 000
              </a>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <span className="text-primary-foreground font-body font-semibold">
                E-Mail
              </span>
              <a
                href="mailto:info@costa-mclaren.de"
                className="text-primary-foreground/80 font-body text-sm hover:text-accent transition-colors"
              >
                info@costa-mclaren.de
              </a>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <span className="text-primary-foreground font-body font-semibold">
                Standort
              </span>
              <span className="text-primary-foreground/80 font-body text-sm">
                Deutschland
              </span>
            </div>
          </div>

          <p className="text-primary-foreground/60 font-body text-xs">
            Costa & McLaren Versicherungsmakler GmbH – Ihr unabhängiger Partner
            für Bestattungsvorsorge
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
