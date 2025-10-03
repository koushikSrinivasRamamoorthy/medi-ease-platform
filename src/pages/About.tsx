import { useEffect } from "react";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Users, Award, Shield, Calendar } from "lucide-react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We treat every patient with empathy, respect, and the highest standard of medical care."
    },
    {
      icon: Shield,
      title: "Trust & Integrity",
      description: "Building long-lasting relationships through honest, transparent, and ethical healthcare practices."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to continuous improvement and delivering the best medical outcomes for our patients."
    },
    {
      icon: Users,
      title: "Patient-Centered",
      description: "Your health and wellbeing are at the heart of everything we do."
    }
  ];

  return (
    <>
      <SEO
        title="About SVR Clinic – Trusted Medical Care in Mayiladuthurai, Tamil Nadu"
        description="Learn about Sri Vaitheswara Clinic (SVR Clinic) in Mayiladuthurai, Tamil Nadu. Our mission is to provide compassionate, affordable healthcare with experienced doctors and quality treatments."
        keywords="about SVR Clinic, Sri Vaitheswara Clinic history, Mayiladuthurai clinic, Tamil Nadu healthcare"
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 px-4 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
            <div className="container mx-auto max-w-4xl text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About Sri Vaitheswara Clinic
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90">
                Your trusted family healthcare partner in Mayiladuthurai, Tamil Nadu since 2010
              </p>
            </div>
          </section>

          {/* Our Story */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-4">
                  Established in 2010, Sri Vaitheswara Clinic (SVR Clinic) has been serving the Mayiladuthurai community with dedication and excellence. What began as a small family clinic has grown into a trusted medical center, providing comprehensive healthcare services to thousands of families across Tamil Nadu.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Located at Pattamangala St, Pasupathi Street, Kamarajar Salai in Mayiladuthurai, we are conveniently accessible to residents throughout the region. Our clinic is built on the foundation of providing affordable, quality healthcare without compromising on medical excellence.
                </p>
                <p className="text-lg text-muted-foreground">
                  Over the years, we have assembled a team of highly qualified specialist doctors across various fields including Cardiology, ENT, Pediatrics, General Surgery, Urology, and General Medicine. Our commitment to patient care, combined with modern medical equipment and treatments, makes us the preferred choice for families seeking reliable healthcare in Mayiladuthurai.
                </p>
              </div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="py-16 px-4 bg-muted/30">
            <div className="container mx-auto max-w-6xl">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Our Mission</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      To provide accessible, affordable, and high-quality healthcare services to the people of Mayiladuthurai and surrounding areas. We strive to make expert medical care available to everyone, regardless of their economic background, through personalized treatment plans and compassionate care.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Our Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      To be the most trusted and preferred healthcare destination in Tamil Nadu, known for our medical excellence, patient-centered approach, and commitment to improving community health. We envision a healthier Mayiladuthurai where quality healthcare is within everyone's reach.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <value.icon className="h-8 w-8 text-primary" aria-hidden="true" />
                      </div>
                      <CardTitle>{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 bg-muted/30">
            <div className="container mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold mb-6">
                Experience Quality Healthcare
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Visit SVR Clinic for trusted medical care by experienced doctors in Mayiladuthurai, Tamil Nadu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Appointment
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/doctors">
                    <Users className="mr-2 h-5 w-5" />
                    Meet Our Doctors
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

export default About;
