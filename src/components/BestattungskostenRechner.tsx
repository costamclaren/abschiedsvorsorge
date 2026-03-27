import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, ChevronRight, ChevronLeft, Phone, FileText, SlidersHorizontal, ListChecks } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

type Option = {
  label: string;
  cost: number;
  description?: string;
};

type Step = {
  title: string;
  subtitle: string;
  options: Option[];
  key: string;
  multiSelect?: boolean;
};

const steps: Step[] = [
  {
    title: "Welche Bestattungsart wird gewünscht?",
    subtitle:
      "Die Wahl der Bestattungsart hat großen Einfluss auf die Gesamtkosten.",
    key: "bestattungsart",
    options: [
      {
        label: "Erdbestattung",
        cost: 3500,
        description: "Klassische Beisetzung im Sarg auf dem Friedhof",
      },
      {
        label: "Feuerbestattung",
        cost: 2500,
        description: "Einäscherung mit anschließender Urnenbeisetzung",
      },
      {
        label: "Seebestattung",
        cost: 3000,
        description: "Beisetzung der Urne auf See",
      },
      {
        label: "Waldbestattung",
        cost: 2800,
        description: "Naturnahe Urnenbeisetzung im Bestattungswald",
      },
      {
        label: "Anonyme Bestattung",
        cost: 1000,
        description: "Einfache Beisetzung ohne Grabkennzeichnung",
      },
    ],
  },
  {
    title: "Was für eine Grabstelle ist gewünscht?",
    subtitle:
      "Die Art der Grabstelle beeinflusst die Friedhofsgebühren und laufenden Kosten.",
    key: "grabstelle",
    options: [
      {
        label: "Anonymes Grab",
        cost: 900,
        description: "Keine namentliche Kennzeichnung",
      },
      {
        label: "Reihengrab",
        cost: 1500,
        description: "Einzelgrab mit fester Ruhezeit",
      },
      {
        label: "Wahlgrab",
        cost: 2400,
        description: "Grabstelle frei wählbar, verlängerbar",
      },
      {
        label: "Gemeinschaftsgrab",
        cost: 2000,
        description: "Grabstelle in einer Gemeinschaftsanlage",
      },
      {
        label: "Baumbestattung",
        cost: 1900,
        description: "Urnenbeisetzung am Fuß eines Baumes",
      },
    ],
  },
  {
    title: "Soll eine Trauerfeier stattfinden?",
    subtitle:
      "Eine Trauerfeier bietet Raum für den gemeinsamen Abschied und das Gedenken.",
    key: "trauerfeier",
    options: [
      {
        label: "Große Trauerfeier",
        cost: 2500,
        description:
          "Mit Trauerredner, Blumenschmuck, Musik und Leichenschmaus",
      },
      {
        label: "Kleine Trauerfeier",
        cost: 1200,
        description: "Im engsten Familienkreis mit einfacher Gestaltung",
      },
      {
        label: "Stille Beisetzung",
        cost: 400,
        description: "Ohne Feier, nur die Beisetzung selbst",
      },
      {
        label: "Keine Trauerfeier",
        cost: 0,
        description: "Verzicht auf jegliche Feierlichkeit",
      },
    ],
  },
  {
    title: "Welche zusätzlichen Leistungen sind gewünscht?",
    subtitle:
      "Diese Posten können die Gesamtkosten einer Bestattung deutlich beeinflussen.",
    key: "zusatzleistungen",
    options: [
      {
        label: "Grabstein & Gravur",
        cost: 3000,
        description: "Individueller Grabstein mit Beschriftung",
      },
      {
        label: "Dauergrabpflege (20 Jahre)",
        cost: 7500,
        description: "Professionelle Pflege der Grabstelle",
      },
      {
        label: "Grabstein einfach",
        cost: 1000,
        description: "Standard-Grabstein ohne individuelle Gestaltung",
      },
      {
        label: "Keine Zusatzleistungen",
        cost: 0,
        description: "Nur die grundlegenden Bestattungskosten",
      },
    ],
  },
  {
    title: "Wie genau möchten Sie die Trauerfeier ausgestalten?",
    subtitle:
      "Die Hinterbliebenen müssen letztendlich entscheiden, wie die Trauerfeier ausgestaltet werden soll, damit sie dem verstorbenen Menschen gerecht wird.",
    key: "trauerfeierDetails",
    multiSelect: true,
    options: [
      { label: "Blumenschmuck", cost: 300 },
      { label: "Musikalische Begleitung", cost: 275 },
      { label: "Sargschmuck", cost: 200 },
      { label: "Trauerkranz", cost: 220 },
      { label: "Trauerredner", cost: 260 },
      { label: "Traueranzeige", cost: 450 },
      { label: "Trauerbrief (30 Personen)", cost: 100 },
      { label: "Sargträger", cost: 200 },
      { label: "Sterbekleidung", cost: 100 },
      { label: "Hygienische Versorgung", cost: 150 },
      { label: "Leichenschmaus (30 Personen)", cost: 800 },
      { label: "Aufbahrung / offener Sarg", cost: 300 },
    ],
  },
];

interface BestattungskostenRechnerProps {
  embedded?: boolean;
}

const BestattungskostenRechner = ({ embedded = false }: BestattungskostenRechnerProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, Option | null>>({});
  const [multiSelections, setMultiSelections] = useState<Record<string, Option[]>>({});
  const [showResult, setShowResult] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    vorname: "",
    nachname: "",
    email: "",
    telefon: "",
    geburtsdatum: "",
  });

  const currentStepData = steps[currentStep];
  const selectedOption = selections[currentStepData?.key] || null;
  const selectedMulti = multiSelections[currentStepData?.key] || [];

  const singleCost = Object.values(selections).reduce(
    (sum, opt) => sum + (opt?.cost || 0),
    0
  );
  const multiCost = Object.values(multiSelections).reduce(
    (sum, opts) => sum + opts.reduce((s, o) => s + o.cost, 0),
    0
  );
  const totalCost = singleCost + multiCost;

  const handleSelect = (option: Option) => {
    setSelections((prev) => ({
      ...prev,
      [currentStepData.key]: option,
    }));
  };

  const handleMultiToggle = (option: Option) => {
    setMultiSelections((prev) => {
      const current = prev[currentStepData.key] || [];
      const exists = current.some((o) => o.label === option.label);
      return {
        ...prev,
        [currentStepData.key]: exists
          ? current.filter((o) => o.label !== option.label)
          : [...current, option],
      };
    });
  };

  const canProceed = currentStepData?.multiSelect ? true : !!selectedOption;

  const handleNext = () => {
    if (!currentStepData.multiSelect && !selectedOption) return;
    if (currentStep < steps.length - 1) {
      setCurrentStep((s) => s + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (showResult) {
      setShowResult(false);
    } else if (currentStep > 0) {
      setCurrentStep((s) => s - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelections({});
    setMultiSelections({});
    setShowResult(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.vorname.trim() ||
      !formData.nachname.trim() ||
      !formData.email.trim() ||
      !formData.geburtsdatum.trim()
    ) {
      toast({
        title: "Bitte füllen Sie alle Pflichtfelder aus.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Vielen Dank für Ihre Anfrage!",
      description:
        "Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
    });
    setShowContactForm(false);
    setFormData({ vorname: "", nachname: "", email: "", telefon: "", geburtsdatum: "" });
  };

  const renderCalculator = () => (
    <>
      {!embedded && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calculator className="w-7 h-7 text-primary" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Bestattungskosten-Rechner
            </h2>
          </div>
          <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto">
            Ermitteln Sie in wenigen Schritten die voraussichtlichen Kosten
            einer Bestattung – und erfahren Sie, welche Versicherungssumme
            sinnvoll ist.
          </p>
        </motion.div>
      )}

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between text-xs font-body text-muted-foreground mb-2">
            <span>
              Schritt {showResult ? steps.length : currentStep + 1} von{" "}
              {steps.length}
            </span>
            <span>
              Zwischensumme:{" "}
              <span className="font-semibold text-foreground">
                {totalCost.toLocaleString("de-DE")} €
              </span>
            </span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary rounded-full"
              animate={{
                width: `${
                  showResult
                    ? 100
                    : ((currentStep + (canProceed ? 1 : 0.5)) /
                        steps.length) *
                      100
                }%`,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <div className="bg-card rounded-lg shadow-elevated p-6 md:p-8 min-h-[400px] flex flex-col">
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="flex-1 flex flex-col"
              >
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  {currentStepData.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm mb-6">
                  {currentStepData.subtitle}
                </p>

                <div className={`grid gap-3 flex-1 ${currentStepData.multiSelect ? "grid-cols-1 sm:grid-cols-2" : ""}`}>
                  {currentStepData.options.map((option) => {
                    const isSelected = currentStepData.multiSelect
                      ? selectedMulti.some((o) => o.label === option.label)
                      : selectedOption?.label === option.label;
                    return (
                      <button
                        key={option.label}
                        onClick={() =>
                          currentStepData.multiSelect
                            ? handleMultiToggle(option)
                            : handleSelect(option)
                        }
                        className={`text-left p-4 rounded-lg border-2 transition-all font-body ${
                          isSelected
                            ? "border-primary bg-primary/5 shadow-sm"
                            : "border-border hover:border-primary/40 hover:bg-secondary/30"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {currentStepData.multiSelect && (
                              <div
                                className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                                  isSelected
                                    ? "bg-primary border-primary"
                                    : "border-muted-foreground/40"
                                }`}
                              >
                                {isSelected && (
                                  <svg className="w-3 h-3 text-primary-foreground" viewBox="0 0 12 12" fill="none">
                                    <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                )}
                              </div>
                            )}
                            <div>
                              <span className="font-semibold text-foreground text-sm">
                                {option.label}
                              </span>
                              {option.description && (
                                <p className="text-muted-foreground text-xs mt-0.5">
                                  {option.description}
                                </p>
                              )}
                            </div>
                          </div>
                          <span className="text-primary font-semibold text-sm whitespace-nowrap ml-4">
                            + {option.cost.toLocaleString("de-DE")} €
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {currentStepData.multiSelect && (
                  <p className="text-xs text-muted-foreground font-body mt-2">
                    Mehrfachauswahl möglich – wählen Sie alle gewünschten Leistungen.
                  </p>
                )}

                <div className="flex justify-between mt-6 pt-4 border-t border-border">
                  <Button
                    variant="ghost"
                    onClick={handleBack}
                    disabled={currentStep === 0}
                    className="font-body"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Zurück
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={!canProceed}
                    className="bg-primary text-primary-foreground font-body"
                  >
                    {currentStep < steps.length - 1 ? "Weiter" : "Ergebnis anzeigen"}
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="flex-1 flex flex-col"
              >
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  Voraussichtliche Bestattungskosten
                </h3>
                <p className="text-muted-foreground font-body text-sm mb-6">
                  Basierend auf Ihren Angaben ergeben sich folgende
                  geschätzten Kosten:
                </p>

                <div className="space-y-3 mb-6">
                  {steps.map((step) => {
                    if (step.multiSelect) {
                      const multi = multiSelections[step.key] || [];
                      if (multi.length === 0) return null;
                      const multiTotal = multi.reduce((s, o) => s + o.cost, 0);
                      return (
                        <div key={step.key} className="py-2 border-b border-border last:border-b-0">
                          <span className="text-xs text-muted-foreground font-body">
                            {step.title.replace("?", "")}
                          </span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {multi.map((o) => (
                              <span key={o.label} className="text-xs bg-secondary px-2 py-0.5 rounded font-body text-foreground">
                                {o.label} (+{o.cost} €)
                              </span>
                            ))}
                          </div>
                          <div className="flex justify-end mt-1">
                            <span className="text-sm font-semibold text-foreground font-body">
                              {multiTotal.toLocaleString("de-DE")} €
                            </span>
                          </div>
                        </div>
                      );
                    }
                    const sel = selections[step.key];
                    return (
                      <div
                        key={step.key}
                        className="flex justify-between items-center py-2 border-b border-border last:border-b-0"
                      >
                        <div>
                          <span className="text-xs text-muted-foreground font-body">
                            {step.title.replace("?", "")}
                          </span>
                          <p className="text-sm font-semibold text-foreground font-body">
                            {sel?.label || "–"}
                          </p>
                        </div>
                        <span className="text-sm font-semibold text-foreground font-body">
                          {(sel?.cost || 0).toLocaleString("de-DE")} €
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="bg-primary/10 rounded-lg p-5 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="font-heading font-bold text-foreground text-lg">
                      Geschätzte Gesamtkosten
                    </span>
                    <span className="font-heading font-bold text-primary text-2xl">
                      {totalCost.toLocaleString("de-DE")} €
                    </span>
                  </div>
                  <p className="text-muted-foreground font-body text-xs mt-2">
                    Tatsächliche Kosten können je nach Region und individuellem
                    Wunsch abweichen.
                  </p>
                </div>

                <p className="text-foreground font-body text-sm mb-6 text-center">
                  Sichern Sie Ihre Familie jetzt ab – mit einer
                  Sterbegeldversicherung, die zu Ihnen passt.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <Button
                    className="bg-primary text-primary-foreground font-body h-12"
                    onClick={() => setShowContactForm(true)}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Angebot anfordern
                  </Button>
                  <Button
                    variant="outline"
                    className="font-body h-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href="tel:+492181-68717">
                      <Phone className="w-4 h-4 mr-2" />
                      Jetzt anrufen
                    </a>
                  </Button>
                </div>

                <div className="flex justify-between pt-4 border-t border-border">
                  <Button
                    variant="ghost"
                    onClick={handleBack}
                    className="font-body"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Zurück
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={handleReset}
                    className="font-body text-muted-foreground"
                  >
                    Rechner neu starten
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Contact form dialog */}
        <Dialog open={showContactForm} onOpenChange={setShowContactForm}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="font-heading text-xl">
                Persönliches Angebot anfordern
              </DialogTitle>
              <DialogDescription className="font-body">
                Empfohlene Versicherungssumme:{" "}
                <strong>{totalCost.toLocaleString("de-DE")} €</strong>
                <br />
                Wir erstellen Ihnen ein unverbindliches Angebot.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label htmlFor="vorname" className="font-body text-sm">
                    Vorname *
                  </Label>
                  <Input
                    id="vorname"
                    value={formData.vorname}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, vorname: e.target.value }))
                    }
                    placeholder="Max"
                    required
                    maxLength={100}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="nachname" className="font-body text-sm">
                    Nachname *
                  </Label>
                  <Input
                    id="nachname"
                    value={formData.nachname}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, nachname: e.target.value }))
                    }
                    placeholder="Mustermann"
                    required
                    maxLength={100}
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email" className="font-body text-sm">
                  E-Mail-Adresse *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, email: e.target.value }))
                  }
                  placeholder="max@beispiel.de"
                  required
                  maxLength={255}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="telefon" className="font-body text-sm">
                  Telefonnummer *
                </Label>
                <Input
                  id="telefon"
                  type="tel"
                  value={formData.telefon}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, telefon: e.target.value }))
                  }
                  placeholder="+49 123 456789"
                  required
                  maxLength={30}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="geburtsdatum" className="font-body text-sm">
                  Geburtsdatum *
                </Label>
                <Input
                  id="geburtsdatum"
                  type="date"
                  value={formData.geburtsdatum}
                  onChange={(e) =>
                    setFormData((p) => ({
                      ...p,
                      geburtsdatum: e.target.value,
                    }))
                  }
                  required
                />
              </div>
              <div className="flex flex-col gap-3 pt-2">
                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground font-body h-11"
                >
                  Unverbindliches Angebot anfordern
                </Button>
                <p className="text-center text-muted-foreground text-xs font-body">
                  Oder rufen Sie uns direkt an:{" "}
                  <a
                    href="tel:+492181-68717"
                    className="text-primary font-semibold hover:underline"
                  >
                    02181-68717
                  </a>
                </p>
              </div>
            </form>
          </DialogContent>
        </Dialog>
    </>
  );

  if (embedded) {
    return renderCalculator();
  }

  return (
    <section id="rechner" className="py-20 md:py-28 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        {renderCalculator()}
      </div>
    </section>
  );
};

export default BestattungskostenRechner;
