import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Zap,
  Package,
  Globe,
  Home,
  Layers,
  FileText,
  MapPin,
  Clock,
  Shield,
  Phone,
  CheckCircle,
  Truck,
  ArrowRight,
} from "lucide-react";
import courierHero from "@/assets/courier-hero.jpg";
import courierExpress from "@/assets/courier-express.jpg";
import courierDocuments from "@/assets/courier-documents.jpg";

const courierServices = [
  {
    icon: Zap,
    title: "Express Courier",
    description:
      "Same-day and next-day delivery for urgent shipments. When time is critical, our express service ensures your packages reach their destination at lightning speed.",
    image: courierExpress,
  },
  {
    icon: Package,
    title: "Standard Courier",
    description:
      "Cost-effective delivery within 2-3 business days. Perfect for non-urgent packages that still need reliable, tracked delivery.",
    image: null,
  },
  {
    icon: Globe,
    title: "International Courier",
    description:
      "Worldwide document and parcel delivery through our global network. We handle customs and ensure smooth cross-border shipping.",
    image: null,
  },
  {
    icon: Home,
    title: "Door-to-Door Delivery",
    description:
      "Convenient pickup from your location and delivery right to the recipient's doorstep. No need to visit any drop-off points.",
    image: null,
  },
  {
    icon: Layers,
    title: "Bulk Courier",
    description:
      "Tailored solutions for businesses with high-volume shipping needs. Enjoy discounted rates and dedicated account management.",
    image: null,
  },
  {
    icon: FileText,
    title: "Document Courier",
    description:
      "Specialized handling for legal, medical, and financial documents. Secure, confidential, and with proof of delivery.",
    image: courierDocuments,
  },
];

const features = [
  {
    icon: MapPin,
    title: "Real-Time Tracking",
    description: "Track your shipment's location in real-time via SMS or our online portal.",
  },
  {
    icon: CheckCircle,
    title: "Proof of Delivery",
    description: "Digital confirmation with recipient signature and timestamp.",
  },
  {
    icon: Shield,
    title: "Insurance Coverage",
    description: "Optional insurance for valuable items and important documents.",
  },
  {
    icon: Package,
    title: "Secure Handling",
    description: "Professional handling with tamper-evident packaging options.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Choose pickup and delivery times that work for you.",
  },
  {
    icon: Phone,
    title: "24/7 Support",
    description: "Round-the-clock customer service for all your queries.",
  },
];

const steps = [
  {
    number: "01",
    title: "Request Pickup",
    description: "Book online, call us, or send a WhatsApp message to schedule your pickup.",
  },
  {
    number: "02",
    title: "Collection",
    description: "Our courier arrives at your location to collect your package.",
  },
  {
    number: "03",
    title: "Transit",
    description: "Your shipment moves through our network with real-time tracking.",
  },
  {
    number: "04",
    title: "Delivery",
    description: "Package delivered with confirmation and proof of delivery.",
  },
];

const coverageAreas = [
  {
    region: "Local (Kenya)",
    areas: ["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret", "All major towns"],
  },
  {
    region: "Regional (East Africa)",
    areas: ["Uganda", "Tanzania", "Rwanda", "Burundi", "South Sudan", "Ethiopia"],
  },
  {
    region: "International",
    areas: ["Europe", "Middle East", "Asia", "North America", "South America", "Australia"],
  },
];

const Courier = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${courierHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Fast & Reliable Courier Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
            From urgent documents to bulky packages, we deliver with speed, security, and a personal touch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/quote">Request Pickup</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white bg-white/10 text-white hover:bg-white hover:text-primary"
              asChild
            >
              <Link to="/track">Track Shipment</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Your Trusted Courier Partner
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              At BlueFlame Cargo Master, we understand that every delivery matters. Whether it's a critical business document, a special gift, or essential supplies, our courier services ensure your items reach their destination safely and on time. With years of experience in logistics, we've built a reputation for reliability, speed, and exceptional customer service.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">1000+</div>
                <div className="text-sm text-muted-foreground">Daily Deliveries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">99%</div>
                <div className="text-sm text-muted-foreground">On-Time Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Coverage Areas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Customer Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courier Service Types */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our Courier Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the service that best fits your delivery needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courierServices.map((service) => (
              <Card
                key={service.title}
                className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {service.image && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <CardContent className={`${service.image ? "pt-4" : "pt-6"} pb-6`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <service.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Why Choose Our Courier Service?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We go above and beyond to ensure your packages are delivered with care
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex items-start gap-4 p-6 bg-card rounded-lg border hover:shadow-md transition-shadow"
              >
                <div className="p-3 bg-primary/10 rounded-full shrink-0">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Simple, straightforward, and hassle-free delivery process
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center">
                <div className="text-6xl font-bold text-accent/30 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-primary-foreground/80">{step.description}</p>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 h-8 w-8 text-accent/50" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Coverage Areas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We deliver locally, regionally, and internationally
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {coverageAreas.map((area) => (
              <Card key={area.region} className="overflow-hidden">
                <div className="bg-accent text-accent-foreground p-4">
                  <h3 className="text-xl font-semibold text-center">{area.region}</h3>
                </div>
                <CardContent className="pt-6">
                  <ul className="space-y-2">
                    {area.areas.map((location) => (
                      <li key={location} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                        {location}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Truck className="h-16 w-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Ready to Send a Package?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get in touch today for a quote or to schedule a pickup. Our team is ready to help you with all your courier needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/quote">Get a Quote</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-muted-foreground">
              <a href="tel:+254728268660" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="h-5 w-5" />
                +254 728 268 660
              </a>
              <a href="mailto:info@bfcmil.co.ke" className="flex items-center gap-2 hover:text-accent transition-colors">
                <FileText className="h-5 w-5" />
                info@bfcmil.co.ke
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courier;
