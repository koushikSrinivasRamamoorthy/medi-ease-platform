import React, { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/Header";
import ProminentCTAs from "./components/ProminentCTAs";
import CalendlyModal from "./components/CalendlyModal";
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
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      experience: "15 years",
      education: "Harvard Medical School",
      specializations: ["Heart Surgery", "Cardiac Rehabilitation", "Preventive Cardiology"],
      availability: "Mon-Fri 9AM-5PM",
      location: "Main Campus",
      calendlyUrl: "https://calendly.com/drjohnson"
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Neurology", 
      experience: "12 years",
      education: "Johns Hopkins University",
      specializations: ["Stroke Treatment", "Epilepsy", "Memory Disorders"],
      availability: "Tue-Sat 10AM-6PM",
      location: "Neurology Wing",
      calendlyUrl: "https://calendly.com/drchen"
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrics",
      experience: "10 years", 
      education: "Stanford Medical School",
      specializations: ["Child Development", "Immunizations", "Adolescent Health"],
      availability: "Mon-Fri 8AM-4PM",
      location: "Children's Center",
      calendlyUrl: "https://calendly.com/drodriguez"
    },
    {
      name: "Dr. James Wilson",
      specialty: "Orthopedics",
      experience: "18 years",
      education: "Mayo Clinic College",
      specializations: ["Joint Replacement", "Sports Medicine", "Spine Surgery"],
      availability: "Mon-Thu 9AM-5PM",
      location: "Orthopedic Center",
      calendlyUrl: "https://calendly.com/drwilson"  
    },
    {
      name: "Dr. Lisa Thompson",
      specialty: "Dermatology",
      experience: "8 years",
      education: "UCLA Medical School", 
      specializations: ["Skin Cancer", "Cosmetic Dermatology", "Pediatric Skin"],
      availability: "Wed-Sun 10AM-6PM",
      location: "Dermatology Clinic",
      calendlyUrl: "https://calendly.com/drthompson"
    }
  ];

  const services = [
    {
      icon: HeartPulse,
      title: "Cardiology",
      description: "Comprehensive heart care with state-of-the-art diagnostic and treatment options.",
      features: ["ECG & Stress Testing", "Cardiac Catheterization", "Heart Surgery", "Preventive Care"],
      badge: "24/7 Emergency"
    },
    {
      icon: Brain,
      title: "Neurology", 
      description: "Advanced neurological care for brain, spine, and nervous system disorders.",
      features: ["MRI & CT Scans", "Stroke Treatment", "Epilepsy Management", "Memory Care"],
      badge: "Specialized Care"
    },
    {
      icon: Baby,
      title: "Pediatrics",
      description: "Complete healthcare for children from infancy through adolescence.",
      features: ["Well-Child Visits", "Immunizations", "Growth Monitoring", "Urgent Care"],
      badge: "Child-Friendly"
    },
    {
      icon: Bone,
      title: "Orthopedics",
      description: "Expert treatment for bones, joints, muscles, and sports-related injuries.",
      features: ["Joint Replacement", "Sports Medicine", "Physical Therapy", "Minimally Invasive Surgery"],
      badge: "Advanced Surgery"
    },
    {
      icon: Eye,
      title: "Dermatology",
      description: "Comprehensive skin care including medical, surgical, and cosmetic treatments.",
      features: ["Skin Cancer Screening", "Cosmetic Procedures", "Acne Treatment", "Pediatric Dermatology"],
      badge: "Latest Technology"
    },
    {
      icon: Stethoscope,
      title: "General Medicine",
      description: "Primary care services for adults with focus on preventive healthcare.",
      features: ["Annual Checkups", "Chronic Disease Management", "Preventive Screenings", "Health Counseling"],
      badge: "Preventive Focus"
    }
  ];

  const facilities = [
    { icon: Zap, title: "Emergency Services", description: "24/7 emergency medical care with rapid response team" },
    { icon: Syringe, title: "Diagnostic Imaging", description: "MRI, CT, X-Ray, and Ultrasound services available daily" },
    { icon: Heart, title: "Laboratory Services", description: "Comprehensive lab testing with same-day results" },
    { icon: Shield, title: "Pharmacy", description: "Full-service pharmacy with medication delivery options" }
  ];

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+91 77080 6036", href: "tel:+917708060362" },
    { icon: Mail, label: "Email", value: "info@svrclinic.com", href: "mailto:info@svrclinic.com" },
    { icon: MapPin, label: "Address", value: "Pattamangala St, Pasupathi Street, Kamarajar Salai, Mayiladuthurai, Tamil Nadu 609001, India", href: "#location" },
    { icon: Clock, label: "Hours", value: "Mon-Fri: 8AM-8PM, Sat-Sun: 9AM-5PM", href: null }
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

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="min-h-screen bg-background">
          <Header />
          
          {/* Hero Section */}
          <section id="home" className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
            <div className="container mx-auto px-4 py-20">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                  Sri Vaitheswara Clinic (SVR Clinic)
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 animate-fade-in">
                  Experience world-class healthcare with our team of expert doctors. Book appointments online, get WhatsApp consultations, and order medicines with home delivery.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
                  <Button 
                    onClick={() => document.getElementById('doctors')?.scrollIntoView({behavior: 'smooth'})}
                    size="lg" 
                    className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 h-auto"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Appointment Now
                  </Button>
                  <Button 
                    onClick={() => document.getElementById('doctors')?.scrollIntoView({behavior: 'smooth'})}
                    variant="outline" 
                    size="lg"
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-6 h-auto"
                  >
                    <Users className="mr-2 h-5 w-5" />
                    Meet Our Doctors
                  </Button>
                </div>
              </div>
            </div>
            
          </section>

          {/* Doctors Section */}
          <section id="doctors" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Meet Our Expert Doctors</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Our team of highly qualified medical professionals is dedicated to providing you with the best healthcare experience.
                </p>
              </div>
              
              {/* Inverted triangle layout: 3 cards on top row, 2 centered on bottom */}
              <div className="max-w-6xl mx-auto">
                {/* First row - 3 doctors */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  {doctors.slice(0, 3).map((doctor, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                      <CardHeader className="text-center">
                        <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <Stethoscope className="h-12 w-12 text-primary" />
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
                        <div>
                          <h4 className="font-medium mb-2">Specializations:</h4>
                          <div className="flex flex-wrap gap-1">
                            {doctor.specializations.map((spec, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">{spec}</Badge>
                            ))}
                          </div>
                        </div>
                        <Button 
                          onClick={() => handleBookAppointment(doctor)}
                          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                        >
                          <Calendar className="mr-2 h-4 w-4" />
                          Book Appointment
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                {/* Second row - 2 doctors centered */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {doctors.slice(3, 5).map((doctor, index) => (
                    <Card key={index + 3} className="group hover:shadow-lg transition-all duration-300">
                      <CardHeader className="text-center">
                        <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <Stethoscope className="h-12 w-12 text-primary" />
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
                        <div>
                          <h4 className="font-medium mb-2">Specializations:</h4>
                          <div className="flex flex-wrap gap-1">
                            {doctor.specializations.map((spec, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">{spec}</Badge>
                            ))}
                          </div>
                        </div>
                        <Button 
                          onClick={() => handleBookAppointment(doctor)}
                          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                        >
                          <Calendar className="mr-2 h-4 w-4" />
                          Book Appointment
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Our Medical Services</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive healthcare services delivered by our expert medical team using the latest technology and treatments.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-4">
                          <IconComponent className="h-12 w-12 text-primary" />
                          <Badge className="bg-accent text-accent-foreground">{service.badge}</Badge>
                        </div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
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
          <section id="location" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Visit Our Clinic</h2>
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
                    />
                    <div className="p-6">
                      <Button className="w-full" variant="outline">
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
                          onClick={() => window.open('https://wa.me/917708060362?text=Hi! I would like to order medicines.', '_blank')}
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
                  © 2025 Farmlysoftware Pvt. Ltd. All rights reserved.
                </p>
              </div>
            </div>
          </footer>

          {/* Prominent CTAs */}
          <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 md:flex-row">
            {/* WhatsApp CTA */}
            <Button
              onClick={() => window.open('https://wa.me/917708060362?text=Hi! I would like to book an appointment and order medicines.', '_blank')}
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg h-14 px-6 rounded-full animate-pulse"
              size="lg"
            >
              <MessageCircle className="h-5 w-5 md:mr-2" />
              <span className="hidden md:inline">Order Medicine via WhatsApp</span>
            </Button>

            {/* Phone CTA */}
            <Button
              onClick={() => window.location.href = "tel:+917708060362"}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg h-14 px-6 rounded-full"
              size="lg"
            >
              <Phone className="h-5 w-5 md:mr-2" />
              <span className="hidden md:inline">Call Now</span>
            </Button>

            {/* Book Appointment CTA */}
            <Button 
              onClick={() => document.getElementById('doctors')?.scrollIntoView({behavior: 'smooth'})}
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
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
