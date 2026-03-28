import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ioannisImg from "@/assets/ioannis-laloussis.jpg";
import lauraImg from "@/assets/laura-zabel.jpg";
import marcoImg from "@/assets/marco-costa.png";
import pierImg from "@/assets/pier-lio.png";

export const teamMembers = [
  {
    name: "Marco Costa",
    role: "Berater Bestattungsvorsorge",
    email: "bestattungsvorsorge@costa-mclaren.de",
    phone: "0176 70806065",
    image: marcoImg,
    imageClass: "scale-[1.35] translate-y-[2%]",
    description:
      "Marco hilft Ihnen, die richtige Absicherung für Ihre Familie zu finden – praxisnah, ehrlich und auf Augenhöhe.",
  },
  {
    name: "Laura Zabel",
    role: "Beraterin Bestattungsvorsorge",
    email: "bestattungsvorsorge@costa-mclaren.de",
    phone: "02181 68717",
    image: lauraImg,
    description:
      "Laura begleitet Sie durch die Vorsorgeplanung und sorgt dafür, dass keine Frage offenbleibt – herzlich und erreichbar.",
  },
  {
    name: "Ioannis Laloussis",
    role: "Berater Bestattungsvorsorge",
    email: "bestattungsvorsorge@costa-mclaren.de",
    phone: "0176 48075401",
    image: ioannisImg,
    description:
      "Ioannis nimmt sich Zeit für Ihre Fragen und findet eine Lösung, die zu Ihnen passt – diskret und verlässlich.",
  },
  {
    name: "Pier Lio",
    role: "Berater Bestattungsvorsorge",
    email: "bestattungsvorsorge@costa-mclaren.de",
    phone: "0151 18613739",
    image: pierImg,
    imageClass: "scale-[1.05] -translate-x-[8%]",
    description:
      "Pier Lio steht Ihnen mit Engagement und Einfühlungsvermögen zur Seite – kompetent und zuverlässig.",
  },
];

interface TeamSectionProps {
  showLink?: boolean;
}

const TeamSection = ({ showLink = true }: TeamSectionProps) => {
  return (
    <section id="team" className="py-20 md:py-28 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Ihre Ansprechpartner
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Persönlich, erfahren und immer für Sie da – lernen Sie die
            Menschen hinter unserer Bestattungsvorsorge kennen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden"
            >
              <div className="aspect-[3/4] bg-muted flex items-center justify-center overflow-hidden">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover object-top ${(member as any).imageClass || ""}`}
                  />
                ) : (
                  <span className="font-heading text-6xl font-bold text-muted-foreground/30">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                )}
              </div>
              <div className="p-8 flex flex-col">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-1 min-h-[3.75rem] flex items-start leading-tight">
                  {member.name}
                </h3>
                <p className="text-sm font-body text-accent font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                  {member.description}
                </p>
                <div className="flex flex-col gap-3 text-sm font-body">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-foreground hover:text-accent transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    {member.email}
                  </a>
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center gap-2 text-foreground hover:text-accent transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    {member.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
