import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

interface KontaktDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const KontaktDialog = ({ open, onOpenChange }: KontaktDialogProps) => {
  const [formData, setFormData] = useState({
    vorname: "",
    nachname: "",
    email: "",
    telefon: "",
    geburtsdatum: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
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
      description: "Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
    });
    onOpenChange(false);
    setFormData({ vorname: "", nachname: "", email: "", telefon: "", geburtsdatum: "" });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl flex items-center gap-2">
            <Phone className="w-5 h-5 text-primary" />
            Kostenlose Beratung anfordern
          </DialogTitle>
          <DialogDescription className="font-body">
            Hinterlassen Sie Ihre Kontaktdaten – wir rufen Sie zurück.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="kontakt-vorname" className="font-body text-sm">
                Vorname *
              </Label>
              <Input
                id="kontakt-vorname"
                value={formData.vorname}
                onChange={(e) => setFormData((p) => ({ ...p, vorname: e.target.value }))}
                placeholder="Max"
                className="font-body"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="kontakt-nachname" className="font-body text-sm">
                Nachname *
              </Label>
              <Input
                id="kontakt-nachname"
                value={formData.nachname}
                onChange={(e) => setFormData((p) => ({ ...p, nachname: e.target.value }))}
                placeholder="Mustermann"
                className="font-body"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="kontakt-email" className="font-body text-sm">
              E-Mail *
            </Label>
            <Input
              id="kontakt-email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
              placeholder="max@beispiel.de"
              className="font-body"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="kontakt-telefon" className="font-body text-sm">
              Telefon
            </Label>
            <Input
              id="kontakt-telefon"
              type="tel"
              value={formData.telefon}
              onChange={(e) => setFormData((p) => ({ ...p, telefon: e.target.value }))}
              placeholder="0176 12345678"
              className="font-body"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="kontakt-geburtsdatum" className="font-body text-sm">
              Geburtsdatum *
            </Label>
            <Input
              id="kontakt-geburtsdatum"
              type="date"
              value={formData.geburtsdatum}
              onChange={(e) => setFormData((p) => ({ ...p, geburtsdatum: e.target.value }))}
              className="font-body"
            />
          </div>
          <Button type="submit" className="w-full font-body bg-primary text-primary-foreground hover:bg-primary/90">
            Beratung anfordern
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default KontaktDialog;
