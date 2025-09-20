import React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
  doctorName: string;
  calendlyUrl: string;
}

const CalendlyModal: React.FC<CalendlyModalProps> = ({ isOpen, onClose, doctorName, calendlyUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm animate-fade-in">
      <div className="fixed inset-4 md:inset-8 bg-card rounded-lg shadow-xl animate-scale-in overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Book Appointment with {doctorName}</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        <div className="h-[calc(100%-64px)]">
          <iframe
            src={calendlyUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            title={`Book appointment with ${doctorName}`}
          />
        </div>
      </div>
    </div>
  );
};

export default CalendlyModal;