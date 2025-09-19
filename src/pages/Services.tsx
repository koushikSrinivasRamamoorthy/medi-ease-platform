import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Brain, 
  Baby, 
  Bone, 
  Eye, 
  Stethoscope,
  Activity,
  Shield,
  Clock,
  Award
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Cardiology",
      description: "Comprehensive heart care including diagnostics, treatment, and preventive care for all cardiovascular conditions.",
      features: ["ECG & Stress Testing", "Heart Surgery", "Preventive Cardiology", "Emergency Cardiac Care"],
      badge: "24/7 Emergency"
    },
    {
      icon: Brain,
      title: "Neurology",
      description: "Advanced neurological care for brain, spine, and nervous system disorders with cutting-edge technology.",
      features: ["Brain Imaging", "Stroke Treatment", "Epilepsy Management", "Memory Disorders"],
      badge: "Advanced Technology"
    },
    {
      icon: Baby,
      title: "Pediatrics",
      description: "Complete healthcare for children from newborns to adolescents with specialized pediatric expertise.",
      features: ["Well-Child Visits", "Vaccinations", "Growth Monitoring", "Pediatric Surgery"],
      badge: "Child-Friendly"
    },
    {
      icon: Bone,
      title: "Orthopedics",
      description: "Expert treatment for bone, joint, and muscle conditions including sports injuries and joint replacement.",
      features: ["Joint Replacement", "Sports Medicine", "Fracture Care", "Physical Therapy"],
      badge: "Sports Medicine"
    },
    {
      icon: Eye,
      title: "Ophthalmology",
      description: "Complete eye care services from routine exams to advanced surgical procedures for vision correction.",
      features: ["Eye Exams", "Cataract Surgery", "LASIK", "Glaucoma Treatment"],
      badge: "Laser Surgery"
    },
    {
      icon: Stethoscope,
      title: "Internal Medicine",
      description: "Primary care for adults focusing on prevention, diagnosis, and treatment of various medical conditions.",
      features: ["Annual Physicals", "Chronic Disease Management", "Preventive Care", "Health Screenings"],
      badge: "Primary Care"
    }
  ];

  const facilities = [
    {
      icon: Activity,
      title: "Emergency Services",
      description: "24/7 emergency care with fully equipped trauma center and emergency room."
    },
    {
      icon: Shield,
      title: "Diagnostic Imaging",
      description: "State-of-the-art MRI, CT, X-ray, and ultrasound services for accurate diagnosis."
    },
    {
      icon: Clock,
      title: "Laboratory Services",
      description: "Full-service lab with rapid results for blood work, cultures, and diagnostic tests."
    },
    {
      icon: Award,
      title: "Surgical Center",
      description: "Modern operating rooms with advanced surgical equipment and experienced surgical teams."
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive 
            <span className="text-primary"> Healthcare Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From primary care to specialized treatments, we offer a full range of medical services 
            with the latest technology and compassionate care.
          </p>
        </div>

        {/* Medical Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Medical Specialties</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary">{service.badge}</Badge>
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
                  <Button className="w-full" variant="outline" asChild>
                    <Link to="/contact">Book Consultation</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
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
                    <facility.icon className="h-6 w-6 text-accent" />
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
            Need Help Choosing the Right Service?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our healthcare coordinators are here to help you find the right specialist and service 
            for your medical needs. Contact us for personalized guidance.
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
    </div>
  );
};

export default Services;