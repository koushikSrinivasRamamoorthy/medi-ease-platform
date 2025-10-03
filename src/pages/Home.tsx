import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Shield, 
  Clock, 
  Users, 
  Award,
  Phone,
  MapPin,
  Calendar
} from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: Heart,
      title: "Expert Care",
      description: "Board-certified physicians with years of experience in their specialties."
    },
    {
      icon: Shield,
      title: "Advanced Technology",
      description: "State-of-the-art medical equipment and cutting-edge treatment methods."
    },
    {
      icon: Clock,
      title: "24/7 Emergency",
      description: "Round-the-clock emergency services for urgent medical needs."
    },
    {
      icon: Users,
      title: "Patient-Centered",
      description: "Personalized care plans tailored to each patient's unique needs."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Patients Served" },
    { number: "15+", label: "Specialist Doctors" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Emergency Care" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
        <div className="relative container mx-auto max-w-4xl">
          <Badge variant="secondary" className="mb-6">
            Trusted Healthcare Since 2010
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your Health, Our 
            <span className="text-accent"> Priority</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Providing comprehensive healthcare services with compassion, expertise, and cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Link>
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

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose MediCare+?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine medical expertise with compassionate care to provide the best healthcare experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
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
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Book your appointment today and take the first step towards better health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Call (555) 123-4567
              </Link>
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
    </div>
  );
};

export default Home;