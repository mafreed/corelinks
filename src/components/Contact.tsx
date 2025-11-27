import { Mail, Phone, MapPin, Clock, Send, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "Available 24/7",
      detail: "Rapid response team",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "info@corelinksolutions.com",
      detail: "Quick reply guaranteed",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Coverage",
      value: "Your Local Area",
      detail: "Full service region",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Support",
      value: "24/7 Active",
      detail: "Always monitoring",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 text-xs font-mono text-primary border border-primary/30 rounded-full bg-primary/5 mb-4">
            CONTACT
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Start Your <span className="text-gradient">Security Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to upgrade your security infrastructure? Get a free consultation and custom quote.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            {/* Animated Border Glow */}
            <div className="absolute inset-0 rounded-xl opacity-50">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 animate-border-flow" style={{ backgroundSize: "200% 100%" }} />
            </div>
            
            <div className="relative">
              {/* Contact Info Grid */}
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {contactInfo.map((info) => (
                  <div key={info.label} className="group flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:shadow-cyber transition-all duration-500">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{info.label}</div>
                      <div className="font-semibold text-foreground">{info.value}</div>
                      <div className="text-sm text-muted-foreground">{info.detail}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="text-center pt-8 border-t border-border/50">
                <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-6">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>Free assessment • No obligations • Expert consultation</span>
                </div>
                
                <Button variant="hero" size="xl" asChild className="group">
                  <a href="mailto:info@corelinksolutions.com?subject=Security%20Inquiry&body=Hello%20Corelink%20Solutions%2C%0A%0AI%20am%20interested%20in%20your%20security%20and%20electrical%20services.%20Please%20contact%20me%20to%20discuss%20my%20requirements.%0A%0AThank%20you.">
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    Send Inquiry
                  </a>
                </Button>
                
                <p className="text-xs text-muted-foreground mt-4">
                  Response within 2 hours during business hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
