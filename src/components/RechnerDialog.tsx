import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Calculator } from "lucide-react";
import BestattungskostenRechner from "./BestattungskostenRechner";

interface RechnerDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RechnerDialog = ({ open, onOpenChange }: RechnerDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl flex items-center gap-2">
            <Calculator className="w-5 h-5 text-primary" />
            Bestattungskosten-Rechner
          </DialogTitle>
          <DialogDescription className="font-body">
            Ermitteln Sie in wenigen Schritten die voraussichtlichen Kosten einer Bestattung.
          </DialogDescription>
        </DialogHeader>
        <BestattungskostenRechner embedded />
      </DialogContent>
    </Dialog>
  );
};

export default RechnerDialog;
