import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import ioannisImg from "@/assets/ioannis-laloussis.jpg";
import lauraImg from "@/assets/laura-zabel.jpg";
import marcoImg from "@/assets/marco-costa.png";

const teamMembers = [
  {
    name: "Marco Costa",
    role: "Berater Bestattungsvorsorge",
    email: "bestattungsvorsorge@costa-mclaren.de",
    phone: "0176-70806065",
    image: marcoImg,
    description:
      "Marco Costa berät Sie persönlich und kompetent zu allen Fragen der Bestattungsvorsorge – vertrauensvoll und mit dem Blick fürs Wesentliche.",
  },
  {
    name: "Ioannis Laloussis",
    role: "Berater Bestattungsvorsorge",
    email: "bestattungsvorsorge@costa-mclaren.de",
    phone: "0176 48075401",
    image: ioannisImg,
    description:
      "Ioannis Laloussis berät Sie persönlich und einfühlsam zu allen Fragen rund um die Bestattungsvorsorge – kompetent und vertrauensvoll.",
  },
  {
    name: "Laura Zabel",
    role: "Beraterin Bestattungsvorsorge",
    email: "bestattungsvorsorge@costa-mclaren.de",
    phone: "02181-68717",
    image: lauraImg,
    description:
      "Laura Zabel steht Ihnen mit Empathie und Fachkompetenz zur Seite und begleitet Sie einfühlsam bei der Planung Ihrer Bestattungsvorsorge.",
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Ihre Ansprechpartner
            </h1>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              Persönlich, erfahren und immer für Sie da – lernen Sie die
              Menschen hinter unserer Abschiedsvorsorge kennen.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden"
              >
                <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center"
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
                <div className="p-8">
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-1">
                    {member.name}
                  </h2>
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
      <Footer />
    </div>
  );
};

export default Team;
