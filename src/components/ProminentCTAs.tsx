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
      const homeSection = document.getElementById('home');
      const doctorsSection = document.getElementById('doctors');
      
      if (homeSection && doctorsSection) {
        const homeRect = homeSection.getBoundingClientRect();
        const doctorsRect = doctorsSection.getBoundingClientRect();
        
        // Only show CTAs when user has scrolled completely past the home section
        // AND is in or past the doctors section
        const hasScrolledPastHome = homeRect.bottom <= 0;
        const isInOrPastDoctors = doctorsRect.top <= window.innerHeight;
        
        setIsVisible(hasScrolledPastHome && isInOrPastDoctors);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOrderMedicine = () => {
    const whatsappUrl = "https://wa.me/917708060368?text=I%20want%20to%20order%20medicine%20from%20SVR%20Clinic";
    window.open(whatsappUrl, '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+917708060368";
  };

  // Only show on mobile and when doctors section is visible
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col md:flex-col gap-3 animate-fade-in">
      {/* Order Medicine via WhatsApp CTA */}
      <Button
        onClick={handleOrderMedicine}
        className="bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg h-14 px-4 rounded-full animate-pulse md:flex md:items-center md:justify-start md:w-auto md:px-6 md:rounded-lg"
        size="lg"
      >
        <MessageCircle className="h-5 w-5 md:mr-2" />
        <span className="hidden md:inline">Order Medicine</span>
      </Button>

      {/* Meet Our Doctors CTA */}
      <Button
        onClick={() => document.getElementById('doctors')?.scrollIntoView({behavior: 'smooth'})}
        className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg h-14 px-4 rounded-full md:flex md:items-center md:justify-start md:w-auto md:px-6 md:rounded-lg"
        size="lg"
      >
        <Phone className="h-5 w-5 md:mr-2" />
        <span className="hidden md:inline">Meet Our Doctors</span>
      </Button>

      {/* Book Appointment CTA */}
      <Button 
        onClick={() => document.getElementById('doctors')?.scrollIntoView({behavior: 'smooth'})}
        className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg h-14 px-4 rounded-full animate-pulse md:flex md:items-center md:justify-start md:w-auto md:px-6 md:rounded-lg"
        size="lg"
      >
        <Calendar className="h-5 w-5 md:mr-2" />
        <span className="hidden md:inline">Book Appointment</span>
      </Button>
    </div>
  );
};

export default ProminentCTAs;