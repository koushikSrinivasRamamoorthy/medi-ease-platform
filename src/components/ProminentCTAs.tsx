import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Calendar } from "lucide-react";

interface ProminentCTAsProps {
  onBookAppointment: () => void;
}

const ProminentCTAs: React.FC<ProminentCTAsProps> = ({ onBookAppointment }) => {
  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp Business number
    const whatsappUrl = "https://wa.me/1234567890?text=Hi! I would like to book an appointment and order medicines.";
    window.open(whatsappUrl, '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+1234567890";
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 md:flex-row">
      {/* WhatsApp CTA */}
      <Button
        onClick={handleWhatsAppClick}
        className="bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg h-14 px-6 rounded-full animate-pulse"
        size="lg"
      >
        <MessageCircle className="mr-2 h-5 w-5" />
        <span className="hidden md:inline">Order Medicine via WhatsApp</span>
        <span className="md:hidden">WhatsApp</span>
      </Button>

      {/* Phone CTA */}
      <Button
        onClick={handlePhoneClick}
        className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg h-14 px-6 rounded-full"
        size="lg"
      >
        <Phone className="mr-2 h-5 w-5" />
        <span className="hidden md:inline">Call Now</span>
        <span className="md:hidden">Call</span>
      </Button>

      {/* Book Appointment CTA */}
      <Button
        onClick={onBookAppointment}
        className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg h-14 px-6 rounded-full animate-pulse"
        size="lg"
      >
        <Calendar className="mr-2 h-5 w-5" />
        <span className="hidden md:inline">Book Appointment</span>
        <span className="md:hidden">Book</span>
      </Button>
    </div>
  );
};

export default ProminentCTAs;