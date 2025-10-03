import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Shield, 
  Clock, 
  Users,
  Phone,
  MapPin,
  Calendar,
  MessageCircle,
  HeartPulse,
  Stethoscope,
  Baby,
  Bone,
  Brain
} from "lucide-react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Heart,
      title: "Expert Care",
      description: "Board-certified physicians with years of experience in their specialties providing personalized treatment."
    },
    {
      icon: Shield,
      title: "Advanced Technology",
      description: "State-of-the-art medical equipment and cutting-edge treatment methods for accurate diagnosis."
    },
    {
      icon: Clock,
      title: "Extended Hours",
      description: "Open daily from 8:00 AM to 10:00 PM for your convenience and urgent medical needs."
    },
    {
      icon: Users,
      title: "Patient-Centered",
      description: "Personalized care plans tailored to each patient's unique needs and health goals."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Patients Served" },
    { number: "6+", label: "Specialist Doctors" },
    { number: "15+", label: "Years of Service" },
    { number: "Daily", label: "Care Available" }
  ];

  const services = [
    { icon: HeartPulse, name: "Cardiology", description: "Comprehensive heart care" },
    { icon: Stethoscope, name: "ENT", description: "Ear, Nose & Throat specialist" },
    { icon: Baby, name: "Pediatrics", description: "Expert child healthcare" },
    { icon: Bone, name: "General Surgery", description: "Modern surgical treatments" },
    { icon: Brain, name: "Urology", description: "Specialized urinary care" },
    { icon: Stethoscope, name: "General Medicine", description: "Primary family care" }
  ];

  return (
    <>
      <SEO
        title="SVR Clinic – Trusted Medical Care in Mayiladuthurai, Tamil Nadu"
        description="Visit SVR Clinic in Mayiladuthurai, Tamil Nadu for compassionate, reliable healthcare. Our experienced doctors provide personalized treatment and preventive care for your family's well-being."
        keywords="SVR Clinic, Sri Vaitheswara Clinic, Mayiladuthurai clinic, Tamil Nadu healthcare, family doctor Mayiladuthurai, best clinic Mayiladuthurai, affordable healthcare Tamil Nadu"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="relative py-20 px-4 text-center text-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
            <div className="relative container mx-auto max-w-4xl">
              <Badge variant="secondary" className="mb-6">
                Trusted Healthcare Since 2010
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Sri Vaitheswara Clinic
                <span className="block text-accent mt-2">Your Family's Health Partner</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
                Expert doctors, affordable treatments, and quality medicines in Mayiladuthurai, Tamil Nadu. Comprehensive healthcare for your entire family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary" 
                  onClick={() => window.open('https://wa.me/917708060368?text=I%20want%20to%20book%20an%20appointment%20at%20SVR%20Clinic.%20Please%20call%20me%20back.', '_blank')}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Book via WhatsApp
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                  <Link to="/doctors">
                    <Users className="mr-2 h-5 w-5" />
                    Meet Our Doctors
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 bg-secondary/50">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Services */}
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Our Medical Services
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive healthcare services in Mayiladuthurai with experienced specialist doctors
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <service.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <CardTitle className="text-xl">{service.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-8">
                <Button size="lg" asChild>
                  <Link to="/services">
                    View All Services
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4 bg-muted/30">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Why Choose SVR Clinic?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Quality healthcare in Mayiladuthurai, Tamil Nadu with a patient-first approach
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="container mx-auto px-4 text-center max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Book your appointment today and experience trusted healthcare in Mayiladuthurai, Tamil Nadu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Appointment
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+917708060368">
                    <Phone className="mr-2 h-5 w-5" />
                    Call +91 77080 60368
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/location">
                    <MapPin className="mr-2 h-5 w-5" />
                    Visit Our Clinic
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
