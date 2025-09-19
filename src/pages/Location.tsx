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
  Accessibility
} from "lucide-react";

const Location = () => {
  const transportOptions = [
    {
      icon: Car,
      title: "By Car",
      description: "Free parking available for all patients and visitors",
      details: "Take Exit 12 from Highway 101, turn right on Medical Center Drive"
    },
    {
      icon: Bus,
      title: "Public Transit",
      description: "Multiple bus routes stop directly at our medical center",
      details: "Bus routes: 15, 22, 45 - Stop: Medical Center"
    },
    {
      icon: Navigation,
      title: "Rideshare",
      description: "Uber and Lyft pickup/dropoff zones available",
      details: "Designated rideshare area at main entrance"
    }
  ];

  const facilities = [
    {
      icon: ParkingCircle,
      title: "Free Parking",
      description: "500+ parking spaces available 24/7"
    },
    {
      icon: Accessibility,
      title: "Wheelchair Accessible",
      description: "Full accessibility throughout the facility"
    },
    {
      icon: Clock,
      title: "24/7 Emergency",
      description: "Emergency services available around the clock"
    }
  ];

  const departments = [
    { name: "Emergency Department", floor: "Ground Floor", hours: "24/7" },
    { name: "Cardiology", floor: "2nd Floor", hours: "Mon-Fri 8AM-6PM" },
    { name: "Neurology", floor: "3rd Floor", hours: "Tue-Sat 10AM-6PM" },
    { name: "Pediatrics", floor: "1st Floor", hours: "Mon-Thu 8AM-4PM" },
    { name: "Orthopedics", floor: "2nd Floor", hours: "Mon-Fri 7AM-3PM" },
    { name: "Laboratory", floor: "Ground Floor", hours: "Mon-Fri 6AM-8PM" },
    { name: "Radiology", floor: "Ground Floor", hours: "Mon-Sat 7AM-7PM" },
    { name: "Pharmacy", floor: "Ground Floor", hours: "Mon-Fri 8AM-6PM" }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Visit Our 
            <span className="text-primary"> Medical Center</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conveniently located in the heart of Healthcare City with easy access 
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
                {/* Google Maps Integration Placeholder */}
                <div className="bg-secondary/30 rounded-lg p-12 text-center mb-6">
                  <MapPin className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Interactive Map</h3>
                  <p className="text-muted-foreground">
                    Google Maps integration would be embedded here
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">MediCare+ Medical Center</h3>
                    <p className="text-muted-foreground">123 Medical Center Drive</p>
                    <p className="text-muted-foreground">Healthcare City, HC 12345</p>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button size="sm" onClick={() => window.open('https://maps.google.com/?q=123+Medical+Center+Drive', '_blank')}>
                      <Navigation className="mr-2 h-4 w-4" />
                      Get Directions
                    </Button>
                    <Button size="sm" variant="outline">
                      <Phone className="mr-2 h-4 w-4" />
                      Call (555) 123-4567
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Transportation Options */}
          <div>
            <h2 className="text-2xl font-bold mb-6">How to Get Here</h2>
            <div className="space-y-4">
              {transportOptions.map((option, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <option.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{option.title}</h3>
                        <p className="text-muted-foreground mb-2">{option.description}</p>
                        <p className="text-sm text-muted-foreground">{option.details}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Facilities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Facility Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <facility.icon className="h-6 w-6 text-accent" />
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

        {/* Department Directory */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Department Directory</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {departments.map((dept, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{dept.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge variant="outline">{dept.floor}</Badge>
                  <p className="text-sm text-muted-foreground">{dept.hours}</p>
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
            Our staff is here to help with directions, parking information, 
            and any questions about visiting our medical center.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <Phone className="mr-2 h-5 w-5" />
              Call for Directions
            </Button>
            <Button size="lg" variant="outline">
              <MapPin className="mr-2 h-5 w-5" />
              Download Parking Map
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;