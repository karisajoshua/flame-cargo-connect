import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Ship, Container, Globe, DollarSign, Clock, CheckCircle, ArrowRight } from "lucide-react";
import seaFreightImage from "@/assets/service-sea-freight.jpg";

const features = [
  { icon: Container, title: "FCL & LCL", description: "Full and less-than-container load options" },
  { icon: Globe, title: "Global Routes", description: "Major shipping lanes worldwide" },
  { icon: DollarSign, title: "Cost-Effective", description: "Competitive rates for bulk cargo" },
  { icon: Clock, title: "Reliable Transit", description: "Scheduled sailings with tracking" },
];

const benefits = [
  "Full Container Load (FCL) shipping",
  "Less than Container Load (LCL)",
  "Break bulk cargo handling",
  "Roll-on/Roll-off (RoRo) services",
  "Refrigerated container options",
  "Hazardous cargo expertise",
];

const SeaFreight = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${seaFreightImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-accent rounded-lg">
                <Ship className="h-8 w-8 text-accent-foreground" />
              </div>
              <span className="text-accent font-semibold">Freight Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Sea Freight Forwarding
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Cost-effective ocean freight solutions for bulk shipments. Whether FCL or LCL, we handle your sea cargo with expertise.
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
              Reliable Ocean Freight Services
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Sea freight remains the most cost-effective way to move large volumes of cargo internationally. At BlueFlame Cargo Master, we leverage our strong relationships with major shipping lines to offer competitive rates and reliable service on all major trade routes.
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
                Comprehensive Ocean Shipping Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                From container shipping to break bulk cargo, our sea freight services are designed to meet diverse shipping needs with reliability and efficiency.
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
              <h3 className="text-2xl font-bold mb-6 text-foreground">Our Sea Freight Process</h3>
              <div className="space-y-6">
                {["Booking & Documentation", "Cargo Collection", "Port Handling", "Ocean Transit", "Destination Port", "Final Delivery"].map((step, index) => (
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Ship by Sea?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Get competitive rates for your ocean freight. Our team will find the best solution for your cargo.
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

export default SeaFreight;
