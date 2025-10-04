import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";
import { baseClinicData } from "@/utils/structuredData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation } from "lucide-react";

const LocationPage = () => {
  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+91 77080 60368", href: "tel:+917708060368" },
    { icon: Mail, label: "Email", value: "sri.v.clinic@gmail.com", href: "mailto:sri.v.clinic@gmail.com" },
    { icon: MapPin, label: "Address", value: "Pattamangala St, Pasupathi Street, Kamarajar Salai, Mayiladuthurai, Tamil Nadu 609001, India", href: null },
    { icon: Clock, label: "Hours", value: "Mon – Sun, 8:00 AM – 10:00 PM", href: null }
  ];

  return (
    <>
      <SEO 
        title="SVR Clinic Location – Find Us in Mayiladuthurai, Tamil Nadu"
        description="Visit SVR Clinic at our convenient location in Mayiladuthurai, Tamil Nadu. Get directions by car, bus, or train, with parking and accessibility available for patients."
        canonical="/location"
        keywords="SVR Clinic location, SVR Clinic address, directions to SVR Clinic, Mayiladuthurai clinic location, how to reach SVR Clinic"
      />
      <StructuredData data={baseClinicData} />
      
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <header>
              <h1 className="text-4xl font-bold mb-4">Visit Our Clinic</h1>
            </header>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conveniently located in Mayiladuthurai with easy access and ample parking.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Google Map */}
            <Card>
              <CardContent className="p-0">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.1636496821343!2d79.64969647561085!3d11.101178389068064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a55211c97157d45%3A0xf89a4bef459ed673!2sSri%20Vaitheswara%20Clinic!5e0!3m2!1sen!2sde!4v1758693593697!5m2!1sen!2sde" 
                  width="100%" 
                  height="450" 
                  style={{border:0}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-t-lg"
                  title="Sri Vaitheswara Clinic location map in Mayiladuthurai, Tamil Nadu"
                />
                <div className="p-6">
                  <Button 
                    onClick={() => window.open("https://www.google.com/maps/dir/?api=1&destination=SVR+Clinic+Mayiladuthurai", "_blank")}
                    className="w-full" 
                  >
                    <Navigation className="mr-2 h-4 w-4" />
                    Get Directions
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
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
                  <div className="flex items-center space-x-4">
                    <MessageCircle className="h-8 w-8 flex-shrink-0" />
                    <div className="flex-1">
                      <h2 className="font-semibold">WhatsApp Medicine Orders</h2>
                      <p className="text-white/90 text-sm">Order medicines and get instant consultation via WhatsApp</p>
                    </div>
                    <Button 
                      onClick={() => window.open("https://wa.me/917708060368?text=Hi! I would like to order medicines.", "_blank")}
                      variant="secondary"
                      className="bg-white text-[#25D366] hover:bg-white/90"
                    >
                      Chat Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationPage;
