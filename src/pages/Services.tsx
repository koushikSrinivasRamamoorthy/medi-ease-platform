import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  HeartPulse,
  Stethoscope,
  Baby,
  Bone,
  Brain,
  Zap,
  Syringe,
  Heart,
  Shield,
  MessageCircle
} from "lucide-react";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: HeartPulse,
      title: "Cardiology",
      description: "Comprehensive heart care with state-of-the-art diagnostic and treatment options. Expert cardiac consultation available in Mayiladuthurai for all heart-related conditions.",
      features: ["Full Heart Check-up", "Chest Pain & Emergencies", "Heart Rhythm & Valve Issues", "Expert Care"],
      badge: "Specialist"
    },
    {
      icon: Stethoscope,
      title: "ENT (Ear Nose Throat)",
      description: "Expert treatment for ear, nose, and throat conditions with modern equipment. Specialized ENT care by experienced professors in Mayiladuthurai, Tamil Nadu.",
      features: ["Ear Problems", "Nasal Issues", "Throat Infections", "ENT Surgery"],
      badge: "Professor"
    },
    {
      icon: Baby,
      title: "Pediatrics",
      description: "Complete healthcare for children with child-friendly care and environment. Trusted pediatric services in Mayiladuthurai for all childhood illnesses and development.",
      features: ["Complete Child Check-ups", "Vaccinations & Immunizations", "Childhood Illnesses", "Child Friendly Care"],
      badge: "Child-Friendly"
    },
    {
      icon: Bone,
      title: "General Surgery",
      description: "Modern surgical treatments including laparoscopy and minimally invasive procedures. Expert surgical care in Mayiladuthurai with advanced techniques.",
      features: ["Laparoscopy", "Endoscopy", "Varicose Vein", "Lumps & Swellings"],
      badge: "Modern Surgery"
    },
    {
      icon: Brain,
      title: "Urology",
      description: "Specialized care for kidney, bladder, and urinary system problems. Comprehensive urological services in Mayiladuthurai, Tamil Nadu by experienced specialists.",
      features: ["Kidney Stone", "Bladder & Urinary Problems", "Prostate Health", "Male Fertility"],
      badge: "Specialized Care"
    },
    {
      icon: Stethoscope,
      title: "General Medicine",
      description: "Primary care services with personalized health guidance for the whole family. Trusted family doctors in Mayiladuthurai providing comprehensive medical care.",
      features: ["Family Doctor", "Personalized Health Guidance", "Preventive Care", "Health Checkups"],
      badge: "Family Care"
    }
  ];

  const facilities = [
    { 
      icon: Zap, 
      title: "Extended Services", 
      description: "Daily care from 8:00 AM to 10:00 PM with experienced medical professionals" 
    },
    { 
      icon: Syringe, 
      title: "Modern Equipment", 
      description: "State-of-the-art medical equipment for accurate diagnosis and treatment" 
    },
    { 
      icon: Heart, 
      title: "Quality Medicines", 
      description: "Affordable, genuine medicines available for all prescriptions" 
    },
    { 
      icon: Shield, 
      title: "Trusted Care", 
      description: "Over 15 years of trusted healthcare service in Mayiladuthurai" 
    }
  ];

  return (
    <>
      <SEO
        title="Medical Services at SVR Clinic – Comprehensive Healthcare in Mayiladuthurai, Tamil Nadu"
        description="Explore SVR Clinic's wide range of medical services in Mayiladuthurai, Tamil Nadu. From general medicine and preventive check-ups to chronic care and specialty treatments, we deliver quality healthcare tailored to your needs."
        keywords="medical services Mayiladuthurai, SVR Clinic services, healthcare Tamil Nadu, cardiology Mayiladuthurai, ENT doctor Mayiladuthurai, pediatrics Tamil Nadu, general surgery Mayiladuthurai, urology services"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="py-16">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-16">
              <header>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Our Medical Services in 
                  <span className="text-primary"> Mayiladuthurai</span>
                </h1>
              </header>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive healthcare services delivered by our expert medical team at SVR Clinic, Mayiladuthurai, Tamil Nadu. Quality care you can trust at affordable prices.
              </p>
            </div>

            {/* Medical Services */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12">Medical Specialties</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-4">
                          <IconComponent 
                            className="h-12 w-12 text-primary" 
                            aria-label={`${service.title} services at SVR Clinic Mayiladuthurai`}
                          />
                          <Badge className="bg-accent text-accent-foreground">{service.badge}</Badge>
                        </div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground">{service.description}</p>
                        <div>
                          <h4 className="font-semibold mb-2 text-sm">Services Include:</h4>
                          <ul className="space-y-1">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-center">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button 
                          className="w-full" 
                          variant="outline"
                          onClick={() => window.open('https://wa.me/917708060368?text=I%20want%20to%20book%20a%20consultation%20for%20' + encodeURIComponent(service.title) + '.%20Please%20call%20me%20back.', '_blank')}
                        >
                          <MessageCircle className="mr-2 h-4 w-4" />
                          Book Consultation
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Facilities & Support Services */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">Facilities & Support Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {facilities.map((facility, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mx-auto w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                        <facility.icon 
                          className="h-6 w-6 text-accent" 
                          aria-label={`${facility.title} at Sri Vaitheswara Clinic Mayiladuthurai`}
                        />
                      </div>
                      <CardTitle className="text-lg">{facility.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{facility.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-primary/5 rounded-lg p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Need Medical Assistance?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our healthcare coordinators at SVR Clinic, Mayiladuthurai are here to help you find the right specialist 
                and service for your medical needs. Contact us for personalized guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact">Schedule Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/doctors">View Our Doctors</Link>
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Services;
