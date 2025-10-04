import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Calendar, Users } from "lucide-react";

interface ProminentCTAsProps {
  onBookAppointment: () => void;
}

const ProminentCTAs: React.FC<ProminentCTAsProps> = ({ onBookAppointment }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      const doctorsSection = document.getElementById('doctors');
      
      if (homeSection && doctorsSection) {
        const homeRect = homeSection.getBoundingClientRect();
        const doctorsRect = doctorsSection.getBoundingClientRect();
        
        // Show CTAs only when:
        // 1. User has scrolled past the home section (home section top is above viewport)
        // 2. AND the doctors section is visible or has been reached
        const hasScrolledPastHome = homeRect.bottom < window.innerHeight * 0.5;
        const isNearDoctorsSection = doctorsRect.top <= window.innerHeight;
        
        setIsVisible(hasScrolledPastHome && isNearDoctorsSection);
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
      {/* Order Medicine via WhatsApp */}
      <Button
        onClick={handleWhatsAppClick}
        className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg h-14 px-4 rounded-full animate-pulse"
        size="lg"
      >
        <MessageCircle className="h-5 w-5" />
      </Button>

      {/* Meet Our Doctors */}
      <Button 
        onClick={() => document.getElementById('doctors')?.scrollIntoView({behavior: 'smooth'})}
        className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg h-14 px-4 rounded-full"
        size="lg"
      >
        <Users className="h-5 w-5" />
      </Button>

      {/* Book Appointment Now */}
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