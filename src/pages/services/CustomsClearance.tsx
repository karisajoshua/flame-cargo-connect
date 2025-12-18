import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileCheck, Shield, Clock, FileText, Scale, CheckCircle, ArrowRight } from "lucide-react";
import customsImage from "@/assets/service-customs.jpg";

const features = [
  { icon: FileText, title: "Documentation", description: "Complete paperwork handling" },
  { icon: Shield, title: "Compliance", description: "Full regulatory adherence" },
  { icon: Clock, title: "Fast Processing", description: "Minimize clearance delays" },
  { icon: Scale, title: "Duty Optimization", description: "Reduce costs legally" },
];

const benefits = [
  "Import & export clearance",
  "Tariff classification",
  "Duty & tax calculation",
  "Regulatory compliance",
  "Document preparation",
  "Bond & ATA Carnet services",
];

const CustomsClearance = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${customsImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-accent rounded-lg">
                <FileCheck className="h-8 w-8 text-accent-foreground" />
              </div>
              <span className="text-accent font-semibold">Customs Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Customs Clearance
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Smooth and fast customs processing, minimizing delays and penalties. Our experienced team handles all documentation and compliance requirements.
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
              Expert Customs Brokerage Services
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Navigating customs regulations can be complex and time-consuming. Our licensed customs brokers have the expertise to ensure your goods clear customs quickly and in full compliance with all regulations, saving you time and avoiding costly penalties.
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
                Full-Service Customs Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                From classification to clearance, we handle every aspect of the customs process to ensure your shipments move smoothly across borders.
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
              <h3 className="text-2xl font-bold mb-6 text-foreground">Our Customs Process</h3>
              <div className="space-y-6">
                {["Document Review", "Tariff Classification", "Duty Calculation", "Submission to Authorities", "Inspection Coordination", "Release & Delivery"].map((step, index) => (
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Customs Clearance Help?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Let our expert customs brokers handle your clearance needs. Fast, compliant, and hassle-free.
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

export default CustomsClearance;
