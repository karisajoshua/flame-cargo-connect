import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Globe, Truck, Clock, Shield, ArrowRight, Package, Plane, Ship, CheckCircle2, MapPin, Headphones, Sparkles } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import WavyText from "@/components/WavyText";
import heroCargo1 from "@/assets/hero-cargo.jpg";
import heroCargo2 from "@/assets/hero-cargo-2.jpg";
import heroCargo3 from "@/assets/hero-cargo-3.jpg";
import heroCargo4 from "@/assets/hero-cargo-4.jpg";
import heroCargo5 from "@/assets/hero-cargo-5.jpg";

const heroTaglines = [
  "Global Reach. Local Expertise. Seamless Logistics.",
  "Your Cargo. Our Priority. Delivered On Time.",
  "Connecting Africa to the World.",
  "Fast. Reliable. Secure Shipping.",
];

const Home = () => {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );
  
  const fadePlugin = useRef(Fade());

  const heroImages = [heroCargo1, heroCargo2, heroCargo3, heroCargo4, heroCargo5];

  const features = [
    {
      icon: Globe,
      title: "Worldwide Coverage",
      description: "Seamless logistics across continents with our global partner network",
    },
    {
      icon: Truck,
      title: "End-to-End Service",
      description: "Complete supply chain solutions from pickup to final delivery",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "99.5% on-time performance record with real-time tracking",
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Full insurance coverage and regulatory compliance guaranteed",
    },
  ];

  const services = [
    {
      icon: Plane,
      title: "Air Freight",
      description: "Fast international shipping for time-sensitive cargo",
    },
    {
      icon: Ship,
      title: "Sea Freight",
      description: "Cost-effective ocean freight for bulk shipments",
    },
    {
      icon: Package,
      title: "Customs Clearance",
      description: "Expert handling of all customs documentation and compliance",
    },
  ];

  const testimonials = [
    {
      quote: "Blue Flame Cargo Master Int has been our logistics partner for over 3 years — they've never missed a deadline.",
      author: "Jane M.",
      company: "Nairobi Imports Ltd.",
    },
    {
      quote: "They handled our international cargo with precision. Highly recommend!",
      author: "Mark D.",
      company: "Dubai Global Trade",
    },
  ];

  return (
    <div>
      {/* Hero Section with Carousel */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Image Carousel */}
        <Carousel
          plugins={[fadePlugin.current, autoplayPlugin.current]}
          className="absolute inset-0"
          opts={{
            loop: true,
            duration: 30,
          }}
          onMouseEnter={autoplayPlugin.current.stop}
          onMouseLeave={autoplayPlugin.current.reset}
        >
          <CarouselContent className="-ml-0">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="pl-0">
                <div 
                  className="min-h-screen w-full bg-cover bg-center transition-opacity duration-1000"
                  style={{ backgroundImage: `url(${image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Content Overlay */}
        <div className="container relative z-10 mx-auto px-4 min-h-screen flex items-center">
          <div className="max-w-4xl text-primary-foreground pt-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-md mb-6 shadow-lg">
              <Sparkles className="h-4 w-4 text-accent" />
              Kenya-based logistics. Global capability.
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.02] tracking-tight min-h-[3.2em] md:min-h-[2.3em] drop-shadow-xl">
              <WavyText phrases={heroTaglines} interval={5000} />
            </h1>
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/85 max-w-2xl leading-relaxed">
              Trusted by businesses across Kenya and worldwide for fast, reliable, and secure logistics solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/quote">
                  Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-card/10 border-primary-foreground text-primary-foreground hover:bg-card/20"
                asChild
              >
                <Link to="/track">Track Your Cargo</Link>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/85">
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Air, sea & road freight</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Customs expertise</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Cargo tracking</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-1/2 hidden lg:block">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-2xl">
              <Link to="/quote" className="group flex items-center gap-4 p-6 hover:bg-secondary/60 transition-colors">
                <div className="rounded-xl bg-accent/10 p-3"><Package className="h-6 w-6 text-accent" /></div>
                <div><p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Start here</p><p className="font-semibold group-hover:text-accent">Request a freight quote</p></div>
              </Link>
              <Link to="/track" className="group flex items-center gap-4 border-x border-border/60 p-6 hover:bg-secondary/60 transition-colors">
                <div className="rounded-xl bg-primary/10 p-3"><MapPin className="h-6 w-6 text-primary" /></div>
                <div><p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">In transit</p><p className="font-semibold group-hover:text-accent">Track your shipment</p></div>
              </Link>
              <Link to="/contact" className="group flex items-center gap-4 p-6 hover:bg-secondary/60 transition-colors">
                <div className="rounded-xl bg-accent/10 p-3"><Headphones className="h-6 w-6 text-accent" /></div>
                <div><p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Need help?</p><p className="font-semibold group-hover:text-accent">Talk to our logistics team</p></div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="pt-28 pb-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14"
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent mb-3">Why Blue Flame</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Logistics built around your business</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine global reach with personalized service to deliver exceptional logistics solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="group p-7 border border-border/70 bg-card/80 shadow-sm hover:-translate-y-1 hover:shadow-xl hover:border-accent/40 transition-all duration-300"
                >
                  <div className="bg-accent/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-white transition-colors">
                    <Icon className="h-7 w-7 text-accent group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent mb-3">What we move</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Freight solutions without the friction</h2>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              Comprehensive logistics solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="group p-8 text-left bg-white/5 border-white/10 text-primary-foreground backdrop-blur-sm hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
                  <div className="bg-accent/15 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-primary-foreground/65">{service.description}</p>
                </Card>
              );
            })}
          </div>
          <div className="text-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">Trusted by businesses worldwide</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <div className="text-4xl text-accent mb-4">"</div>
                <p className="text-lg mb-4 italic">{testimonial.quote}</p>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.company}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Ship with Confidence?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Get a custom quote within 24 hours and experience logistics excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/quote">Request Your Quote</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20"
              asChild
            >
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
