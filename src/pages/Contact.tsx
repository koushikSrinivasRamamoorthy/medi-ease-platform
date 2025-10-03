import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Calendar,
  MessageCircle,
  Send
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    message: ""
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Sent!",
      description: "We'll contact you within 24 hours to confirm your appointment.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      preferredDate: "",
      preferredTime: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 77080 60368",
      subtitle: "Call us anytime",
      href: "tel:+917708060368"
    },
    {
      icon: Mail,
      title: "Email",
      details: "sri.v.clinic@gmail.com",
      subtitle: "General Inquiries",
      href: "mailto:sri.v.clinic@gmail.com"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "Pattamangala St, Pasupathi Street",
      subtitle: "Kamarajar Salai, Mayiladuthurai, Tamil Nadu 609001",
      href: null
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon – Sun",
      subtitle: "8:00 AM – 10:00 PM",
      href: null
    }
  ];

  const services = [
    "General Medicine",
    "Cardiology",
    "ENT (Ear Nose Throat)", 
    "Pediatrics",
    "General Surgery",
    "Urology",
    "Medicine Order",
    "Health Checkup"
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", 
    "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"
  ];

  return (
    <>
      <SEO
        title="Contact SVR Clinic – Book Appointments in Mayiladuthurai, Tamil Nadu"
        description="Have questions or need an appointment at SVR Clinic in Mayiladuthurai, Tamil Nadu? Contact us via phone, email, or WhatsApp. We're here to support your healthcare needs."
        keywords="contact SVR Clinic, book appointment Mayiladuthurai, Sri Vaitheswara Clinic contact, healthcare Tamil Nadu, clinic phone number Mayiladuthurai"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="py-16">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-16">
              <header>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Contact 
                  <span className="text-primary"> SVR Clinic</span>
                </h1>
              </header>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to take the next step in your healthcare journey in Mayiladuthurai? Book an appointment 
                or contact us with any questions you may have.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="mr-2 h-5 w-5" />
                      Book an Appointment
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="service">Service Needed</Label>
                          <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem key={service} value={service}>
                                  {service}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="date">Preferred Date</Label>
                          <Input
                            id="date"
                            type="date"
                            value={formData.preferredDate}
                            onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                            min={new Date().toISOString().split('T')[0]}
                          />
                        </div>
                        <div>
                          <Label htmlFor="time">Preferred Time</Label>
                          <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange("preferredTime", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                            <SelectContent>
                              {timeSlots.map((time) => (
                                <SelectItem key={time} value={time}>
                                  {time}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message">Additional Information</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          placeholder="Please describe your symptoms or any specific requests..."
                          rows={4}
                        />
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        <Send className="mr-2 h-4 w-4" />
                        Send Request
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="grid gap-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <info.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{info.title}</h3>
                            {info.href ? (
                              <a href={info.href} className="text-lg hover:text-primary transition-colors">
                                {info.details}
                              </a>
                            ) : (
                              <p className="text-lg">{info.details}</p>
                            )}
                            <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* WhatsApp Integration */}
                <Card className="bg-[#25D366]/5 border-[#25D366]/20">
                  <CardHeader>
                    <CardTitle className="flex items-center text-[#25D366]">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Quick Contact via WhatsApp
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Need immediate assistance or want to order medicine? Contact us directly on WhatsApp for quick responses from SVR Clinic, Mayiladuthurai.
                    </p>
                    <div className="grid gap-3">
                      <Button 
                        className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white" 
                        onClick={() => window.open('https://wa.me/917708060368?text=I%20want%20to%20book%20an%20appointment%20at%20SVR%20Clinic.%20Please%20call%20me%20back.', '_blank')}
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Book Appointment
                      </Button>
                      <Button 
                        variant="outline"
                        className="w-full border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10" 
                        onClick={() => window.open('https://wa.me/917708060368?text=I%20want%20to%20order%20medicine%20from%20SVR%20Clinic', '_blank')}
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Order Medicine
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Additional Info */}
                <Card>
                  <CardHeader>
                    <CardTitle>Visit Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Located in the heart of Mayiladuthurai, Tamil Nadu. Easy access by car, bus, or auto rickshaw.
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/location">
                        <MapPin className="mr-2 h-4 w-4" />
                        View Location & Directions
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Contact;
