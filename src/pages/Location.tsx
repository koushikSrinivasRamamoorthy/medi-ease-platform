import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Navigation, 
  Car, 
  Bus, 
  Phone,
  Clock,
  ParkingCircle,
  Accessibility,
  MessageCircle,
  Building2
} from "lucide-react";

const Location = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const transportOptions = [
    {
      icon: Car,
      title: "By Car",
      description: "Easy access from Mayiladuthurai town center",
      details: "Located on Kamarajar Salai, Pattamangala Street. Parking available nearby."
    },
    {
      icon: Bus,
      title: "By Bus",
      description: "Well connected by local buses",
      details: "Multiple bus routes stop near Kamarajar Salai. Short walk to clinic."
    },
    {
      icon: Building2,
      title: "By Auto",
      description: "Auto rickshaws readily available",
      details: "Tell driver 'SVR Clinic, Pattamangala Street' or 'Pasupathi Street'"
    }
  ];

  const facilities = [
    {
      icon: Clock,
      title: "Extended Hours",
      description: "Open daily 8:00 AM – 10:00 PM for your convenience"
    },
    {
      icon: Accessibility,
      title: "Easy Access",
      description: "Ground floor clinic with easy accessibility for all patients"
    },
    {
      icon: ParkingCircle,
      title: "Nearby Parking",
      description: "Street parking available near the clinic"
    }
  ];

  const landmarks = [
    "Near Pattamangala Street",
    "Kamarajar Salai Main Road",
    "Close to Pasupathi Street",
    "Mayiladuthurai Town Center"
  ];

  return (
    <>
      <SEO
        title="SVR Clinic Location – Find Us in Mayiladuthurai, Tamil Nadu"
        description="Visit SVR Clinic at our convenient location in Mayiladuthurai, Tamil Nadu. Get directions by car, bus, or train, with parking and accessibility available for patients."
        keywords="SVR Clinic location, Mayiladuthurai clinic address, Sri Vaitheswara Clinic directions, how to reach SVR Clinic, clinic near me Mayiladuthurai Tamil Nadu"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="py-16">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-16">
              <header>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Visit 
                  <span className="text-primary"> SVR Clinic</span>
                </h1>
              </header>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Conveniently located in Mayiladuthurai, Tamil Nadu with easy access 
                and modern facilities designed for your comfort.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Map Section */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="mr-2 h-5 w-5" />
                      Our Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/* Google Maps Embed */}
                    <div className="mb-6 rounded-lg overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.6!2d79.655!3d11.1039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDA2JzE0LjAiTiA3OcKwMzknMTguMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="SVR Clinic Location in Mayiladuthurai, Tamil Nadu"
                      />
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-lg">Sri Vaitheswara Clinic (SVR Clinic)</h3>
                        <p className="text-lg text-muted-foreground">Pattamangala St, Pasupathi Street</p>
                        <p className="text-lg text-muted-foreground">Kamarajar Salai</p>
                        <p className="text-lg text-muted-foreground">Mayiladuthurai, Tamil Nadu 609001</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-3">
                        <Button 
                          size="sm" 
                          onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=11.1039,79.6550', '_blank')}
                        >
                          <Navigation className="mr-2 h-4 w-4" />
                          Get Directions
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <a href="tel:+917708060368">
                            <Phone className="mr-2 h-4 w-4" />
                            Call +91 77080 60368
                          </a>
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => window.open('https://wa.me/917708060368?text=I%20need%20directions%20to%20SVR%20Clinic', '_blank')}
                        >
                          <MessageCircle className="mr-2 h-4 w-4" />
                          WhatsApp
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Nearby Landmarks */}
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Nearby Landmarks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {landmarks.map((landmark, index) => (
                        <li key={index} className="flex items-center text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                          {landmark}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Transportation Options */}
              <div>
                <h2 className="text-2xl font-bold mb-6">How to Reach Us</h2>
                <div className="space-y-4 mb-8">
                  {transportOptions.map((option, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <option.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-1">{option.title}</h3>
                            <p className="text-muted-foreground mb-2">{option.description}</p>
                            <p className="text-sm text-muted-foreground">{option.details}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Contact Hours */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="mr-2 h-5 w-5" />
                      Opening Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Monday – Sunday</span>
                        <Badge variant="secondary">8:00 AM – 10:00 PM</Badge>
                      </div>
                      <div className="pt-3 border-t">
                        <p className="text-sm text-muted-foreground">
                          Extended hours for your convenience. Walk-ins welcome, but appointments recommended for specialist consultations.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Facilities */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">Clinic Features</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {facilities.map((facility, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mx-auto w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                        <facility.icon className="h-6 w-6 text-accent" aria-hidden="true" />
                      </div>
                      <CardTitle className="text-xl">{facility.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{facility.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="text-center bg-primary/5 rounded-lg p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Need Help Finding Us?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our staff at SVR Clinic, Mayiladuthurai is here to help with directions 
                and any questions about visiting our medical center.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Contact Us
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/doctors">
                    View Our Doctors
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Location;
