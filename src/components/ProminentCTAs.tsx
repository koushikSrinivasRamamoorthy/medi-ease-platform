import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Calendar } from "lucide-react";

interface ProminentCTAsProps {
  onBookAppointment: () => void;
}

const ProminentCTAs: React.FC<ProminentCTAsProps> = ({ onBookAppointment }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const doctorsSection = document.getElementById('doctors');
      if (doctorsSection) {
        const rect = doctorsSection.getBoundingClientRect();
        // Only show CTAs when user has scrolled INTO the doctors section
        // This means the top of the section is at or above the middle of the screen
        const isInDoctorsSection = rect.top <= window.innerHeight / 2 && rect.bottom > window.innerHeight / 2;
        setIsVisible(isInDoctorsSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const whatsappUrl = "https://wa.me/917708060368?text=Hi! I would like to book an appointment and order medicines.";
    window.open(whatsappUrl, '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+917708060368";
  };

  // Only show on mobile and when doctors section is visible
  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-6 right-6 z-40 flex flex-col gap-3 animate-fade-in">
      {/* WhatsApp CTA */}
      <Button
        onClick={handleWhatsAppClick}
        className="bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg h-14 px-4 rounded-full animate-pulse"
        size="lg"
      >
        <MessageCircle className="h-5 w-5" />
      </Button>

      {/* Phone CTA */}
      <Button
        onClick={handlePhoneClick}
        className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg h-14 px-4 rounded-full"
        size="lg"
      >
        <Phone className="h-5 w-5" />
      </Button>

      {/* Book Appointment CTA */}
      <Button 
        onClick={() => document.getElementById('doctors')?.scrollIntoView({behavior: 'smooth'})}
        className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg h-14 px-4 rounded-full animate-pulse"
        size="lg"
      >
        <Calendar className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default ProminentCTAs;