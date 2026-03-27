import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import coupleBenchImg from "@/assets/couple-bench.jpg";

const ContactSection = () => {
  return (
    <section id="kontakt" className="relative">
      {/* Image banner */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={coupleBenchImg}
          alt="Älteres Paar auf einer Bank"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-primary/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground text-center px-6"
          >
            Wir sind für Sie da – persönlich und einfühlsam
          </motion.h2>
        </div>
      </div>

      {/* Contact info */}
      <div className="bg-primary py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-primary-foreground/80 font-body text-lg mb-12 max-w-xl mx-auto">
              Ein Gespräch kann so vieles erleichtern. Lassen Sie uns gemeinsam
              schauen, wie Sie Ihre Familie bestmöglich absichern können.
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
                  href="tel:+492181-68717"
                  className="text-primary-foreground/80 font-body text-sm hover:text-accent transition-colors"
                >
                  02181-68717
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
                  href="mailto:info@abschiedsvorsorge.de"
                  className="text-primary-foreground/80 font-body text-sm hover:text-accent transition-colors"
                >
                  info@abschiedsvorsorge.de
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
                  Poststr. 60, 41516 Grevenbroich
                </span>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
