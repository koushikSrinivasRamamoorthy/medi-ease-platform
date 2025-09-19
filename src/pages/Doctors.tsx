import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, Award, Clock, MapPin } from "lucide-react";

const Doctors = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      experience: "15+ years",
      education: "Harvard Medical School",
      image: "/api/placeholder/300/400",
      specializations: ["Heart Surgery", "Preventive Cardiology", "Heart Disease"],
      availability: "Mon - Fri: 9:00 AM - 5:00 PM",
      location: "Cardiology Wing - Floor 2"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Neurologist",
      experience: "12+ years",
      education: "Johns Hopkins University",
      image: "/api/placeholder/300/400",
      specializations: ["Brain Surgery", "Stroke Treatment", "Epilepsy"],
      availability: "Tue - Sat: 10:00 AM - 6:00 PM",
      location: "Neurology Department - Floor 3"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrician",
      experience: "10+ years",
      education: "Stanford Medical School",
      image: "/api/placeholder/300/400",
      specializations: ["Child Development", "Vaccinations", "Pediatric Care"],
      availability: "Mon - Thu: 8:00 AM - 4:00 PM",
      location: "Pediatrics Wing - Floor 1"
    },
    {
      id: 4,
      name: "Dr. David Wilson",
      specialty: "Orthopedic Surgeon",
      experience: "18+ years",
      education: "Mayo Clinic College",
      image: "/api/placeholder/300/400",
      specializations: ["Joint Replacement", "Sports Medicine", "Trauma Surgery"],
      availability: "Mon - Fri: 7:00 AM - 3:00 PM",
      location: "Orthopedics Department - Floor 2"
    },
    {
      id: 5,
      name: "Dr. Lisa Thompson",
      specialty: "Dermatologist",
      experience: "8+ years",
      education: "UCLA Medical School",
      image: "/api/placeholder/300/400",
      specializations: ["Skin Cancer", "Cosmetic Dermatology", "Acne Treatment"],
      availability: "Wed - Sun: 11:00 AM - 7:00 PM",
      location: "Dermatology Clinic - Floor 1"
    },
    {
      id: 6,
      name: "Dr. Robert Kumar",
      specialty: "Internal Medicine",
      experience: "20+ years",
      education: "Cleveland Clinic",
      image: "/api/placeholder/300/400",
      specializations: ["Diabetes Care", "Hypertension", "Preventive Medicine"],
      availability: "Mon - Sat: 9:00 AM - 5:00 PM",
      location: "Internal Medicine - Floor 2"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our Expert 
            <span className="text-primary"> Medical Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our board-certified physicians bring years of experience and specialized expertise 
            to provide you with the highest quality healthcare.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {doctors.map((doctor) => (
            <Card key={doctor.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[3/4] bg-gradient-to-br from-secondary/50 to-primary/10 flex items-center justify-center">
                <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center">
                  <Award className="w-16 h-16 text-primary" />
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{doctor.name}</h3>
                    <p className="text-primary font-semibold">{doctor.specialty}</p>
                  </div>
                  <Badge variant="secondary">{doctor.experience}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{doctor.education}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Specializations</h4>
                  <div className="flex flex-wrap gap-1">
                    {doctor.specializations.map((spec, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    {doctor.availability}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    {doctor.location}
                  </div>
                </div>

                <Button className="w-full" asChild>
                  <Link to="/contact">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Appointment
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-secondary/30 rounded-lg p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Can't Find the Right Specialist?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our medical team includes many more specialists. Contact us to discuss your specific needs 
            and we'll connect you with the right healthcare professional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;