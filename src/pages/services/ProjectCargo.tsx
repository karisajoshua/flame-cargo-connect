import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HardHat, Truck, Shield, MapPin, Wrench, CheckCircle, ArrowRight } from "lucide-react";
import projectCargoImage from "@/assets/service-project-cargo.jpg";

const features = [
  { icon: Wrench, title: "Heavy Lift", description: "Specialized equipment for oversized cargo" },
  { icon: MapPin, title: "Route Surveys", description: "Detailed planning for safe transport" },
  { icon: Shield, title: "Risk Management", description: "Comprehensive insurance coverage" },
  { icon: Truck, title: "Multi-Modal", description: "Combined transport solutions" },
];

const benefits = [
  "Heavy lift cargo handling",
  "Out-of-gauge shipments",
  "Turnkey project logistics",
  "Equipment installation support",
  "Permit and escort services",
  "Site delivery coordination",
];

const ProjectCargo = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${projectCargoImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-accent rounded-lg">
                <HardHat className="h-8 w-8 text-accent-foreground" />
              </div>
              <span className="text-accent font-semibold">Specialized Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Project Cargo Handling
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Heavy, oversized, or complex cargo? We've got the expertise and equipment to handle your most challenging project logistics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/quote">Get a Quote</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white bg-white/10 text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Expert Project Cargo Solutions
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Project cargo requires specialized knowledge, equipment, and meticulous planning. At BlueFlame Cargo Master, we bring decades of experience to every project, ensuring your heavy, oversized, or sensitive cargo reaches its destination safely and on schedule.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <div className="mx-auto w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Comprehensive Project Logistics
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                From power plant components to industrial machinery, we provide end-to-end project cargo solutions that cover every aspect of transport, from origin to final installation site.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-xl p-8 border">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Our Project Cargo Process</h3>
              <div className="space-y-6">
                {["Project Assessment", "Route Survey", "Equipment Planning", "Permits & Approvals", "Transport Execution", "Site Delivery"].map((step, index) => (
                  <div key={step} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <span className="font-medium text-foreground">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Have a Complex Cargo Project?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Our project cargo experts are ready to tackle your most challenging logistics requirements.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/quote" className="gap-2">
              Request a Quote <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ProjectCargo;
