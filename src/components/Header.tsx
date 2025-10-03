import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, MapPin } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "doctors", label: "Our Doctors" },
    { id: "services", label: "Services" },
    { id: "location", label: "Location" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <button onClick={() => scrollToSection('home')} className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">SVR</span>
          </div>
          <span className="font-bold text-xl">SVR Clinic</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Contact Info */}
        <div className="hidden lg:flex items-center space-x-4">
          <a href="tel:+917708060368" className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Phone className="h-4 w-4" />
            <span>+91 77080 60368</span>
          </a>
          <button 
            onClick={() => scrollToSection('location')}
            className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <MapPin className="h-4 w-4" />
            <span>Mayiladuthurai, TN</span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">SVR</span>
              </div>
              <span className="font-bold text-xl">SVR Clinic</span>
            </div>
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground text-left"
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="mt-6 pt-6 border-t">
              <a href="tel:+917708060368" className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-primary transition-colors mb-2">
                <Phone className="h-4 w-4" />
                <span>+91 77080 60368</span>
              </a>
              <button 
                onClick={() => scrollToSection('location')}
                className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                <MapPin className="h-4 w-4" />
                <span>Mayiladuthurai, TN</span>
              </button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;