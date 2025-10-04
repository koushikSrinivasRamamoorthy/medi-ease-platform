import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";
import { baseClinicData } from "@/utils/structuredData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const ContactPage = () => {
  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+91 77080 60368", href: "tel:+917708060368" },
    { icon: Mail, label: "Email", value: "sri.v.clinic@gmail.com", href: "mailto:sri.v.clinic@gmail.com" },
    { icon: MapPin, label: "Address", value: "Pattamangala St, Pasupathi Street, Kamarajar Salai, Mayiladuthurai, Tamil Nadu 609001, India", href: null },
    { icon: Clock, label: "Hours", value: "Mon – Sun, 8:00 AM – 10:00 PM", href: null }
  ];

  return (
    <>
      <SEO 
        title="Contact SVR Clinic – Book Appointments in Mayiladuthurai, Tamil Nadu"
        description="Have questions or need an appointment at SVR Clinic in Mayiladuthurai, Tamil Nadu? Contact us via phone, email, or WhatsApp. We're here to support your healthcare needs."
        canonical="/contact"
        keywords="contact SVR Clinic, book appointment Mayiladuthurai, SVR Clinic phone number, SVR Clinic WhatsApp, clinic appointment Mayiladuthurai"
      />
      <StructuredData data={baseClinicData} />
      
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <header>
              <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            </header>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get in touch with SVR Clinic in Mayiladuthurai. We're here to answer your questions and help you schedule appointments.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index}>
                  <CardContent className="flex items-center space-x-4 p-6">
                    <IconComponent className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h2 className="font-semibold">{info.label}</h2>
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
                <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
                  <MessageCircle className="h-12 w-12 flex-shrink-0" />
                  <div className="flex-1 text-center sm:text-left">
                    <h2 className="font-semibold text-xl mb-2">Book Appointment via WhatsApp</h2>
                    <p className="text-white/90">Get instant responses and book appointments quickly through WhatsApp</p>
                  </div>
                  <Button 
                    onClick={() => window.open("https://wa.me/917708060368?text=Hi! I would like to book an appointment.", "_blank")}
                    variant="secondary"
                    className="bg-white text-[#25D366] hover:bg-white/90"
                    size="lg"
                  >
                    Chat Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Medicine Order CTA */}
            <Card className="bg-accent/10">
              <CardContent className="p-6 text-center">
                <h2 className="font-semibold text-xl mb-2">Order Medicines Online</h2>
                <p className="text-muted-foreground mb-4">
                  Order medicines via WhatsApp and get them delivered to your doorstep
                </p>
                <Button 
                  onClick={() => window.open("https://wa.me/917708060368?text=I want to order medicine from SVR Clinic", "_blank")}
                  className="bg-accent hover:bg-accent/90"
                  size="lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Order Medicine via WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
