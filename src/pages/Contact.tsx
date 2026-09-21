import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    console.log("Contact form submitted:", formData);
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      content: "Jomo Kenyatta International Airport, Nairobi, Kenya",
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      content: ["+254 728 268 660", "+254 752 268 660", "+254 780 566 660", "+254 773 864 687"],
      link: "tel:+254728268660",
    },
    {
      icon: Mail,
      title: "Email Address",
      content: "info@bfcmil.co.ke",
      link: "mailto:info@bfcmil.co.ke",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon–Fri: 8:00 AM – 6:00 PM",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto text-primary-foreground/90">
            Have a question or need assistance? We're here to help. Reach out to us anytime.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="bg-accent/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">{info.title}</h3>
                  {Array.isArray(info.content) ? (
                    <div className="space-y-1">
                      {info.content.map((item, i) => (
                        <a key={i} href={`tel:${item.replace(/\s/g, '')}`} className="block text-sm text-muted-foreground hover:text-accent">
                          {item}
                        </a>
                      ))}
                    </div>
                  ) : info.link ? (
                    <a href={info.link} className="text-sm text-muted-foreground hover:text-accent">
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{info.content}</p>
                  )}
                </Card>
              );
            })}
          </div>

          {/* Contact Form & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    Your Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email Address <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="How can we help you?"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">
                    Message <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Map */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Our Location</h2>
              <div className="rounded-lg overflow-hidden h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.683639695886!2d36.92139931475396!3d-1.3192319990301088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a6bf7445dc1%3A0x940b7c9c3b2a6b6c!2sJomo%20Kenyatta%20International%20Airport!5e0!3m2!1sen!2ske!4v1702900000000!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Blue Flame Cargo Master Int Cargo Master Location - Jomo Kenyatta International Airport"
                ></iframe>
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Jomo Kenyatta International Airport, Nairobi, Kenya
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Quick answers to common questions</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">Do you handle international shipments?</h3>
              <p className="text-muted-foreground">
                Yes, we offer global freight forwarding services by air and sea to destinations worldwide.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">Can I track my cargo online?</h3>
              <p className="text-muted-foreground">
                Absolutely. Use our tracking page to get real-time updates on your shipment status.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">What documents are needed for customs clearance?</h3>
              <p className="text-muted-foreground">
                Required documents vary by country and cargo type. Our team will guide you through all necessary
                documentation for your specific shipment.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">How long does sea freight typically take?</h3>
              <p className="text-muted-foreground">
                Transit times vary by route, but typically range from 2-6 weeks depending on origin and destination.
                We'll provide exact timeframes in your quote.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
