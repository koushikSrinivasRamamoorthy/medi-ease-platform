import { useState } from "react";
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Appointment Request Sent!",
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
      details: "(555) 123-4567",
      subtitle: "24/7 Emergency Line"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@medicareplus.com",
      subtitle: "General Inquiries"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "123 Medical Center Dr",
      subtitle: "Healthcare City, HC 12345"
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon-Fri: 8AM-6PM",
      subtitle: "Sat-Sun: 9AM-4PM"
    }
  ];

  const services = [
    "General Consultation",
    "Cardiology",
    "Neurology", 
    "Pediatrics",
    "Orthopedics",
    "Dermatology",
    "Internal Medicine",
    "Emergency Care"
  ];

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM"
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in 
            <span className="text-primary"> Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to take the next step in your healthcare journey? Book an appointment 
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
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
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
                    Book Appointment
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
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{info.title}</h3>
                        <p className="text-lg">{info.details}</p>
                        <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* WhatsApp Integration */}
            <Card className="bg-accent/5">
              <CardHeader>
                <CardTitle className="flex items-center text-accent">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Quick Contact via WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Need immediate assistance? Contact us directly on WhatsApp for quick responses.
                </p>
                <Button 
                  className="w-full bg-accent hover:bg-accent/90" 
                  onClick={() => window.open('https://wa.me/5551234567', '_blank')}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Calendly Integration Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>Online Scheduling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Book your appointment instantly using our online scheduling system.
                </p>
                <div className="bg-secondary/30 rounded-lg p-8 text-center">
                  <Calendar className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">
                    Calendly integration would be embedded here
                  </p>
                  <Button variant="outline" className="mt-4">
                    Open Scheduler
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;