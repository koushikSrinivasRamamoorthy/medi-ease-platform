import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SEO } from "@/components/SEO";
import Header from "./components/Header";
import ProminentCTAs from "./components/ProminentCTAs";
import CalendlyModal from "./components/CalendlyModal";
import Doctors from "./pages/Doctors";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import LocationPage from "./pages/LocationPage";
import AboutPage from "./pages/AboutPage";

// Alias for cleaner code
const DoctorsPage = Doctors;
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  Heart, 
  Users, 
  Clock, 
  Award, 
  Shield, 
  Stethoscope,
  Brain,
  Baby,
  Bone,
  HeartPulse,
  Eye,
  Syringe,
  Zap,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Calendar,
  Car,
  Bus,
  Train,
  Plane
} from "lucide-react";

const queryClient = new QueryClient();

const App = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<{name: string, calendlyUrl: string} | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: ""
  });
  const { toast } = useToast();

  const doctors = [
    {
      name: "Dr. Ramesh Babu M.S.",
      specialty: "ENT (Ear Nose Throat)",
      experience: "15+ years",
      education: "Professor, Vilupuram Medical College",
      specializations: ["Ear", "Nose", "Throat"],
      availability: "4:00 pm – 09:00 pm (Mon, Wed, Sat)",
      location: "ENT Clinic",
      calendlyUrl: "https://calendly.com/svrclinic-ent",
      fullNameWithSpecialty: "Dr. Ramesh Babu M.S. ENT"
    },
    {
      name: "Dr. Aswin Pandian M.B.B.S.",
      specialty: "General Medicine", 
      experience: "5+ years",
      education: "M.B.B.S.",
      specializations: ["Family Doctor", "Personalized Health Guidance"],
      availability: "8:00 am – 10:00 pm (Daily)",
      location: "General Medicine",
      calendlyUrl: "https://calendly.com/svrclinic-general",
      fullNameWithSpecialty: "Dr. Aswin Pandian M.B.B.S. General Medicine"
    },
    {
      name: "Dr. G. Balan M.S.",
      specialty: "General Surgery",
      experience: "5+ years", 
      education: "MBBS, M.S. (General Surgery)",
      specializations: ["Laparoscopy", "Endoscopy", "Varicose Vein", "Expert Care for Lumps & Swellings"],
      availability: "1:00 pm – 06:30 pm (Daily)",
      location: "Surgery Department",
      calendlyUrl: "https://calendly.com/svrclinic-surgery",
      fullNameWithSpecialty: "Dr. G. Balan MBBS, M.S. (General Surgery)"
    },
    {
      name: "Dr. S. Giridharan M.D. D.M.",
      specialty: "Cardiology",
      experience: "10+ years",
      education: "Professor, Mahatma Gandhi Medical College", 
      specializations: ["Full Heart Check-up", "Chest Pain & Emergencies", "Heart Rhythm & Valve Issues"],
      availability: "Friday 9:00 am – 5:00 pm",
      location: "Cardiology Wing",
      calendlyUrl: "https://calendly.com/svrclinic-cardiology",
      fullNameWithSpecialty: "Dr. S. Giridharan M.D. D.M (Cardiology)"
    },
    {
      name: "Dr. D. Siddarth Munusamy M.Ch.",
      specialty: "Urology",
      experience: "10+ years",
      education: "MS.M.Ch (Urology)", 
      specializations: ["Kidney Stone", "Bladder & Urinary Problems", "Prostate Health", "Male Fertility Problems"],
      availability: "Monday 9:00 am – 5:00 pm",
      location: "Urology Department",
      calendlyUrl: "https://calendly.com/svrclinic-urology",
      fullNameWithSpecialty: "Dr. D. Siddarth Munusamy MS.M.Ch (Urology)"
    },
    {
      name: "Dr. S. Sriranjini M.D.",
      specialty: "Pediatrics",
      experience: "5+ years",
      education: "M.D. Paediatrics", 
      specializations: ["Kids Speciality", "Complete Child Check-ups", "Vaccinations & Immunizations", "Childhood Illnesses", "Child Friendly Care"],
      availability: "4:00 pm – 9:00 pm (Daily)",
      location: "Pediatrics Wing",
      calendlyUrl: "https://calendly.com/svrclinic-pediatrics",
      fullNameWithSpecialty: "Dr. S. Sriranjini M.D. Paediatrics (Kids Speciality)"
    }
  ];

  const services = [
    {
      icon: HeartPulse,
      title: "Cardiology",
      description: "Comprehensive heart care with state-of-the-art diagnostic and treatment options.",
      features: ["Full Heart Check-up", "Chest Pain & Emergencies", "Heart Rhythm & Valve Issues", "Expert Care"],
      badge: "Specialist"
    },
    {
      icon: Stethoscope,
      title: "ENT (Ear Nose Throat)", 
      description: "Expert treatment for ear, nose, and throat conditions with modern equipment.",
      features: ["Ear Problems", "Nasal Issues", "Throat Infections", "ENT Surgery"],
      badge: "Professor"
    },
    {
      icon: Baby,
      title: "Pediatrics",
      description: "Complete healthcare for children with child-friendly care and environment.",
      features: ["Complete Child Check-ups", "Vaccinations & Immunizations", "Childhood Illnesses", "Child Friendly Care"],
      badge: "Child-Friendly"
    },
    {
      icon: Bone,
      title: "General Surgery",
      description: "Modern surgical treatments including laparoscopy and minimally invasive procedures.",  
      features: ["Laparoscopy", "Endoscopy", "Varicose Vein", "Lumps & Swellings"],
      badge: "Modern Surgery"
    },
    {
      icon: Brain,
      title: "Urology",
      description: "Specialized care for kidney, bladder, and urinary system problems.",
      features: ["Kidney Stone", "Bladder & Urinary Problems", "Prostate Health", "Male Fertility"],
      badge: "Specialized Care"
    },
    {
      icon: Stethoscope,
      title: "General Medicine",
      description: "Primary care services with personalized health guidance for the whole family.",
      features: ["Family Doctor", "Personalized Health Guidance", "Preventive Care", "Health Checkups"],
      badge: "Family Care"
    }
  ];

  const facilities = [
    { icon: Zap, title: "Emergency Services", description: "24/7 emergency medical care with rapid response team" },
    { icon: Syringe, title: "Diagnostic Imaging", description: "MRI, CT, X-Ray, and Ultrasound services available daily" },
    { icon: Heart, title: "Laboratory Services", description: "Comprehensive lab testing with same-day results" },
    { icon: Shield, title: "Pharmacy", description: "Full-service pharmacy with medication delivery options" }
  ];

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+91 77080 60368", href: "tel:+917708060368" },
    { icon: Mail, label: "Email", value: "sri.v.clinic@gmail.com", href: "mailto:sri.v.clinic@gmail.com" },
    { icon: MapPin, label: "Address", value: "Pattamangala St, Pasupathi Street, Kamarajar Salai, Mayiladuthurai, Tamil Nadu 609001, India", href: "#location" },
    { icon: Clock, label: "Hours", value: "Mon – Sun, 8:00 AM – 10:00 PM", href: null }
  ];

  const handleBookAppointment = (doctor?: typeof doctors[0]) => {
    if (doctor) {
      setSelectedDoctor({name: doctor.name, calendlyUrl: doctor.calendlyUrl});
    } else {
      setSelectedDoctor({name: "General Consultation", calendlyUrl: "https://calendly.com/medicare-clinic"});
    }
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Appointment Request Sent!",
      description: "We'll contact you within 24 hours to confirm your appointment."
    });
    setFormData({ name: "", email: "", phone: "", service: "", date: "", time: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // HomePage component (full single-page layout)
  const HomePage = () => (
    <>
      <SEO 
        title="SVR Clinic – Trusted Medical Care in Mayiladuthurai, Tamil Nadu"
        description="Visit SVR Clinic in Mayiladuthurai, Tamil Nadu for compassionate, reliable healthcare. Our experienced doctors provide personalized treatment and preventive care for your family's well-being."
        canonical="/"
        keywords="SVR Clinic, Sri Vaitheswara Clinic, medical clinic Mayiladuthurai, doctors Mayiladuthurai, healthcare Tamil Nadu, family clinic, affordable treatment Mayiladuthurai"
      />
      <div className="min-h-screen bg-background">
          
          {/* Hero Section */}
          <section id="home" className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
            <div className="container mx-auto px-4 py-12 md:py-20">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                  Sri Vaitheswara Clinic
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 animate-fade-in">
                  Your trusted family healthcare partner in Mayiladuthurai. Expert doctors, affordable treatments, and quality medicines for comprehensive medical care.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
                  <Button 
                    onClick={() => window.open('https://wa.me/917708060368?text=I%20want%20to%20order%20medicine%20from%20SVR%20Clinic', '_blank')}
                    size="default"
                    className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 py-3 h-auto"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Order Medicine via WhatsApp
                  </Button>
                  <Button 
                    onClick={() => document.getElementById('doctors')?.scrollIntoView({behavior: 'smooth'})}
                    variant="outline" 
                    size="default"
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-6 py-3 h-auto"
                  >
                    <Users className="mr-2 h-4 w-4" />
                    Meet Our Doctors
                  </Button>
                  <Button 
                    onClick={() => document.getElementById('doctors')?.scrollIntoView({behavior: 'smooth'})}
                    size="default" 
                    className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 h-auto"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Appointment Now
                  </Button>
                </div>
              </div>
            </div>
            
          </section>

          {/* Doctors Section */}
          <section id="doctors" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <header>
                <h2 className="text-4xl font-bold mb-4">Meet Our Expert Doctors</h2>
              </header>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our team of highly qualified medical professionals is dedicated to providing you with the best healthcare experience.
              </p>
            </div>
              
              {/* Updated layout: 3 cards on top row, 3 cards on bottom row */}
              <div className="max-w-6xl mx-auto">
                {/* First row - 3 doctors */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  {doctors.slice(0, 3).map((doctor, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                      <CardHeader className="text-center">
                        <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <Stethoscope 
                            className="h-12 w-12 text-primary" 
                            aria-label={`Portrait of ${doctor.name}, medical specialist at Sri Vaitheswara Clinic Mayiladuthurai`}
                          />
                        </div>
                        <CardTitle className="text-xl">{doctor.name}</CardTitle>
                        <CardDescription className="text-primary font-medium">{doctor.specialty}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2 text-sm">
                          <p><strong>Experience:</strong> {doctor.experience}</p>
                          <p><strong>Education:</strong> {doctor.education}</p>
                          <p><strong>Available:</strong> {doctor.availability}</p>
                        </div>
                        <div className="min-h-[72px]">
                          <h4 className="font-medium mb-2">Specializations:</h4>
                          <div className="flex flex-wrap gap-1">
                            {doctor.specializations.map((spec, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">{spec}</Badge>
                            ))}
                          </div>
                        </div>
                        <Button 
                          onClick={() => window.open(`https://wa.me/917708060368?text=I%20want%20to%20book%20an%20appointment%20with%20${encodeURIComponent(doctor.fullNameWithSpecialty)}. Please call me back to schedule an appointment.`, '_blank')}
                          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                        >
                          <MessageCircle className="mr-2 h-4 w-4" />
                          Book via WhatsApp
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                {/* Second row - 3 doctors */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {doctors.slice(3, 6).map((doctor, index) => (
                    <Card key={index + 3} className="group hover:shadow-lg transition-all duration-300">
                      <CardHeader className="text-center">
                        <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <Stethoscope 
                            className="h-12 w-12 text-primary" 
                            aria-label={`Portrait of ${doctor.name}, medical specialist at Sri Vaitheswara Clinic Mayiladuthurai`}
                          />
                        </div>
                        <CardTitle className="text-xl">{doctor.name}</CardTitle>
                        <CardDescription className="text-primary font-medium">{doctor.specialty}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2 text-sm">
                          <p><strong>Experience:</strong> {doctor.experience}</p>
                          <p><strong>Education:</strong> {doctor.education}</p>
                          <p><strong>Available:</strong> {doctor.availability}</p>
                        </div>
                        <div className="min-h-[72px]">
                          <h4 className="font-medium mb-2">Specializations:</h4>
                          <div className="flex flex-wrap gap-1">
                            {doctor.specializations.map((spec, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">{spec}</Badge>
                            ))}
                          </div>
                        </div>
                        <Button 
                          onClick={() => window.open(`https://wa.me/917708060368?text=I%20want%20to%20book%20an%20appointment%20with%20${encodeURIComponent(doctor.fullNameWithSpecialty)}. Please call me back to schedule an appointment.`, '_blank')}
                          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                        >
                          <MessageCircle className="mr-2 h-4 w-4" />
                          Book via WhatsApp
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-8 md:py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <header>
                  <h2 className="text-4xl font-bold mb-4">Our Medical Services</h2>
                </header>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive healthcare services delivered by our expert medical team using the latest technology and treatments.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-4">
                          <IconComponent 
                            className="h-12 w-12 text-primary" 
                            aria-label={`${service.title} services at SVR Clinic Mayiladuthurai`}
                          />
                          <Badge className="bg-accent text-accent-foreground">{service.badge}</Badge>
                        </div>
                        <CardTitle className="text-base md:text-xl">{service.title}</CardTitle>
                        <CardDescription className="hidden md:block">{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-center text-sm">
                              <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Location Section */}
          <section id="location" className="py-8 md:py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <header>
                  <h2 className="text-4xl font-bold mb-4">Visit Our Clinic</h2>
                </header>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Conveniently located in Mayiladuthurai with easy access and ample parking.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Google Map */}
                <Card>
                  <CardContent className="p-0">
    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.1636496821343!2d79.64969647561085!3d11.101178389068064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a55211c97157d45%3A0xf89a4bef459ed673!2sSri%20Vaitheswara%20Clinic!5e0!3m2!1sen!2sde!4v1758693593697!5m2!1sen!2sde" 
                      width="100%" 
                      height="450" 
                      style={{border:0}} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-t-lg"
                      title="Sri Vaitheswara Clinic location map in Mayiladuthurai, Tamil Nadu"
                    />
                    <div className="p-6">
                      <Button 
                        onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=SVR+Clinic+Mayiladuthurai', '_blank')}
                        className="w-full" 
                        variant="outline"
                      >
                        <MapPin className="mr-2 h-4 w-4" />
                        Get Directions
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Information */}
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <Card key={index}>
                        <CardContent className="flex items-center space-x-4 p-6">
                          <IconComponent className="h-8 w-8 text-primary flex-shrink-0" />
                          <div>
                            <h3 className="font-semibold">{info.label}</h3>
                            {info.href ? (
                              <a href={info.href} className="text-muted-foreground hover:text-primary transition-colors">
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-muted-foreground">{info.value}</p>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}

                  {/* WhatsApp CTA */}
                  <Card className="bg-[#25D366] text-white border-[#25D366]">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <MessageCircle className="h-8 w-8 flex-shrink-0" />
                        <div className="flex-1">
                          <h3 className="font-semibold">WhatsApp Medicine Orders</h3>
                          <p className="text-white/90 text-sm">Order medicines and get instant consultation via WhatsApp</p>
                        </div>
                        <Button 
                          onClick={() => window.open('https://wa.me/917708060368?text=Hi! I would like to order medicines.', '_blank')}
                          variant="secondary"
                          className="bg-white text-[#25D366] hover:bg-white/90"
                        >
                          Chat Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="h-8 w-8 bg-primary-foreground rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-sm">SVR</span>
              </div>
              <span className="font-bold text-xl">Sri Vaitheswara Clinic (SVR Clinic)</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Pattamangala St, Pasupathi Street, Kamarajar Salai, Mayiladuthurai, Tamil Nadu 609001, India
            </p>
            <p className="text-primary-foreground/60 text-sm">
              © 2025 <a href="https://www.farmlysoftware.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground underline">Farmlysoftware Pvt. Ltd.</a> All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Prominent CTAs - Vertical on Desktop */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* WhatsApp CTA */}
        <Button
          onClick={() => window.open("https://wa.me/917708060368?text=Hi! I would like to book an appointment and order medicines.", "_blank")}
          className="bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg h-14 px-6 rounded-full animate-pulse"
          size="lg"
        >
          <MessageCircle className="h-5 w-5 md:mr-2" />
          <span className="hidden md:inline">Order Medicine via WhatsApp</span>
        </Button>

        {/* Phone CTA */}
        <Button
          onClick={() => window.location.href = "tel:+917708060368"}
          className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg h-14 px-6 rounded-full"
          size="lg"
        >
          <Phone className="h-5 w-5 md:mr-2" />
          <span className="hidden md:inline">Call Now</span>
        </Button>

        {/* Book Appointment CTA */}
        <Button 
          onClick={() => document.getElementById("doctors")?.scrollIntoView({behavior: "smooth"})}
          className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg h-14 px-6 rounded-full animate-pulse"
          size="lg"
        >
          <Calendar className="h-5 w-5 md:mr-2" />
          <span className="hidden md:inline">Book Appointment</span>
        </Button>
      </div>

      {/* Calendly Modal */}
      <CalendlyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        doctorName={selectedDoctor?.name || ""}
        calendlyUrl={selectedDoctor?.calendlyUrl || ""}
      />
      </div>
    </>
  );

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/doctors" element={<DoctorsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/location" element={<LocationPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </TooltipProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
