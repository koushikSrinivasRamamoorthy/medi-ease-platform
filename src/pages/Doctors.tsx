import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Stethoscope, MessageCircle } from "lucide-react";

const Doctors = () => {
  const doctors = [
    {
      name: "Dr. Ramesh Babu M.S.",
      specialty: "ENT (Ear Nose Throat)",
      experience: "15+ years",
      education: "Professor, Vilupuram Medical College",
      specializations: ["Ear", "Nose", "Throat"],
      availability: "4:00 pm – 09:00 pm (Mon, Wed, Sat)",
      location: "ENT Clinic",
      fullNameWithSpecialty: "Dr. Ramesh Babu M.S. ENT"
    },
    {
      name: "Dr. Aswin Pandian M.B.B.S.",
      specialty: "General Medicine", 
      experience: "5+ years",
      education: "M.B.B.S.",
      specializations: ["Family Doctor", "Personalized Health Guidance"],
      availability: "8:00 am – 10:00 pm (Daily)",
      location: "General Medicine",
      fullNameWithSpecialty: "Dr. Aswin Pandian M.B.B.S. General Medicine"
    },
    {
      name: "Dr. G. Balan M.S.",
      specialty: "General Surgery",
      experience: "5+ years", 
      education: "MBBS, M.S. (General Surgery)",
      specializations: ["Laparoscopy", "Endoscopy", "Varicose Vein", "Expert Care for Lumps & Swellings"],
      availability: "1:00 pm – 06:30 pm (Daily)",
      location: "Surgery Department",
      fullNameWithSpecialty: "Dr. G. Balan MBBS, M.S. (General Surgery)"
    },
    {
      name: "Dr. S. Giridharan M.D. D.M.",
      specialty: "Cardiology",
      experience: "10+ years",
      education: "Professor, Mahatma Gandhi Medical College", 
      specializations: ["Full Heart Check-up", "Chest Pain & Emergencies", "Heart Rhythm & Valve Issues"],
      availability: "Friday 9:00 am – 5:00 pm",
      location: "Cardiology Wing",
      fullNameWithSpecialty: "Dr. S. Giridharan M.D. D.M (Cardiology)"
    },
    {
      name: "Dr. D. Siddarth Munusamy M.Ch.",
      specialty: "Urology",
      experience: "10+ years",
      education: "MS.M.Ch (Urology)", 
      specializations: ["Kidney Stone", "Bladder & Urinary Problems", "Prostate Health", "Male Fertility Problems"],
      availability: "Monday 9:00 am – 5:00 pm",
      location: "Urology Department",
      fullNameWithSpecialty: "Dr. D. Siddarth Munusamy MS.M.Ch (Urology)"
    },
    {
      name: "Dr. S. Sriranjini M.D.",
      specialty: "Pediatrics",
      experience: "5+ years",
      education: "M.D. Paediatrics", 
      specializations: ["Kids Speciality", "Complete Child Check-ups", "Vaccinations & Immunizations", "Childhood Illnesses", "Child Friendly Care"],
      availability: "4:00 pm – 9:00 pm (Daily)",
      location: "Pediatrics Wing",
      fullNameWithSpecialty: "Dr. S. Sriranjini M.D. Paediatrics (Kids Speciality)"
    }
  ];

  return (
    <>
      <SEO 
        title="Meet Our Doctors – Experienced Physicians in Mayiladuthurai, Tamil Nadu"
        description="Get to know SVR Clinic's team of dedicated doctors in Mayiladuthurai, Tamil Nadu. With expertise across specialties and a patient-first approach, we ensure you receive trusted, quality care."
        canonical="/doctors"
        keywords="doctors Mayiladuthurai, ENT specialist Mayiladuthurai, cardiologist Mayiladuthurai, pediatrician Mayiladuthurai, urologist Mayiladuthurai, general surgeon Mayiladuthurai, SVR Clinic doctors"
      />
      
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <header>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Meet Our Expert Doctors
              </h1>
            </header>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our team of highly qualified medical professionals is dedicated to providing you with the best healthcare experience in Mayiladuthurai, Tamil Nadu.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* First row - 3 doctors */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {doctors.slice(0, 3).map((doctor, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Stethoscope 
                        className="h-12 w-12 text-primary" 
                        aria-label={`Portrait of ${doctor.name}, medical specialist at Sri Vaitheswara Clinic Mayiladuthurai`}
                      />
                    </div>
                    <h2 className="text-xl font-bold">{doctor.name}</h2>
                    <p className="text-primary font-medium">{doctor.specialty}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-sm">
                      <p><strong>Experience:</strong> {doctor.experience}</p>
                      <p><strong>Education:</strong> {doctor.education}</p>
                      <p><strong>Available:</strong> {doctor.availability}</p>
                    </div>
                    <div className="min-h-[72px]">
                      <h3 className="font-medium mb-2">Specializations:</h3>
                      <div className="flex flex-wrap gap-1">
                        {doctor.specializations.map((spec, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">{spec}</Badge>
                        ))}
                      </div>
                    </div>
                    <Button 
                      onClick={() => window.open(`https://wa.me/917708060368?text=I want to book an appointment with ${encodeURIComponent(doctor.fullNameWithSpecialty)}. Please call me back to schedule an appointment.`, '_blank')}
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Book via WhatsApp
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Second row - 3 doctors */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {doctors.slice(3, 6).map((doctor, index) => (
                <Card key={index + 3} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Stethoscope 
                        className="h-12 w-12 text-primary" 
                        aria-label={`Portrait of ${doctor.name}, medical specialist at Sri Vaitheswara Clinic Mayiladuthurai`}
                      />
                    </div>
                    <h2 className="text-xl font-bold">{doctor.name}</h2>
                    <p className="text-primary font-medium">{doctor.specialty}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-sm">
                      <p><strong>Experience:</strong> {doctor.experience}</p>
                      <p><strong>Education:</strong> {doctor.education}</p>
                      <p><strong>Available:</strong> {doctor.availability}</p>
                    </div>
                    <div className="min-h-[72px]">
                      <h3 className="font-medium mb-2">Specializations:</h3>
                      <div className="flex flex-wrap gap-1">
                        {doctor.specializations.map((spec, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">{spec}</Badge>
                        ))}
                      </div>
                    </div>
                    <Button 
                      onClick={() => window.open(`https://wa.me/917708060368?text=I want to book an appointment with ${encodeURIComponent(doctor.fullNameWithSpecialty)}. Please call me back to schedule an appointment.`, '_blank')}
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Book via WhatsApp
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Doctors;