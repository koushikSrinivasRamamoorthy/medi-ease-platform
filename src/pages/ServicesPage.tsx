import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";
import { baseClinicData, servicesData } from "@/utils/structuredData";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HeartPulse, Stethoscope, Baby, Bone, Brain } from "lucide-react";

const ServicesPage = () => {
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

  return (
    <>
      <SEO 
        title="Medical Services at SVR Clinic – Comprehensive Healthcare in Mayiladuthurai, Tamil Nadu"
        description="Explore SVR Clinic's wide range of medical services in Mayiladuthurai, Tamil Nadu. From general medicine and preventive check-ups to chronic care and specialty treatments, we deliver quality healthcare tailored to your needs."
        canonical="/services"
        keywords="medical services Mayiladuthurai, cardiology Mayiladuthurai, ENT clinic Mayiladuthurai, pediatrics Mayiladuthurai, general surgery Mayiladuthurai, urology services Mayiladuthurai, family doctor Mayiladuthurai"
      />
      <StructuredData data={[baseClinicData, ...servicesData]} />
      
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <header>
              <h1 className="text-4xl font-bold mb-4">Our Medical Services</h1>
            </header>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive healthcare services delivered by our expert medical team using the latest technology and treatments in Mayiladuthurai, Tamil Nadu.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
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
      </div>
    </>
  );
};

export default ServicesPage;
