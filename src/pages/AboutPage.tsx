import { SEO } from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Users, Award } from "lucide-react";

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We treat every patient with kindness, empathy, and respect"
    },
    {
      icon: Shield,
      title: "Quality Standards",
      description: "Maintaining highest medical standards in diagnosis and treatment"
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Highly qualified doctors with decades of combined experience"
    },
    {
      icon: Award,
      title: "Trusted Institution",
      description: "Respected healthcare provider in Mayiladuthurai since 1980"
    }
  ];

  return (
    <>
      <SEO 
        title="About SVR Clinic – Trusted Medical Care Since 1980 in Mayiladuthurai, Tamil Nadu"
        description="Learn about SVR Clinic's 40+ year legacy of providing quality, affordable healthcare in Mayiladuthurai, Tamil Nadu. Our experienced doctors and compassionate care have made us a trusted medical institution."
        canonical="/about"
        keywords="SVR Clinic history, about SVR Clinic Mayiladuthurai, medical clinic established 1980, trusted doctors Mayiladuthurai, healthcare institution Tamil Nadu"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-16 px-4 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About SVR Clinic</h1>
            <p className="text-xl text-primary-foreground/90">
              Serving Mayiladuthurai with Quality Healthcare Since 1980
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Established in 1980, Sri Vaitheswara Clinic (SVR Clinic) has been a cornerstone of healthcare in Mayiladuthurai, Tamil Nadu for over four decades. What began as a small medical practice has grown into a respected healthcare institution, trusted by thousands of families across the region.
              </p>
              
              <h2 className="text-3xl font-bold mb-6 mt-8">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Our mission is simple yet profound: to provide quality, affordable medical services for the people of Mayiladuthurai. We believe that excellent healthcare should be accessible to everyone, regardless of their economic background. This commitment drives everything we do, from maintaining competitive pricing on consultations and medicines to ensuring our facilities are welcoming and comfortable for all patients.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-8">What Sets Us Apart</h2>
              <p className="text-lg text-muted-foreground mb-4">
                SVR Clinic stands out for our team of experienced doctors who bring decades of combined medical expertise across multiple specialties. Our physicians are not just highly qualified professionals but compassionate caregivers who take the time to understand each patient's unique needs. As a respected institution in the community, we have built our reputation on trust, reliability, and consistently excellent patient outcomes.
              </p>
            </div>

            {/* Values Grid */}
            <div className="mt-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <IconComponent className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                            <p className="text-muted-foreground">{value.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
