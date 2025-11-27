import { Camera, Plug, Shield, Wifi, Home, Settings, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ icon, title, description, index }: ServiceCardProps) => {
  return (
    <div 
      className="group relative glass-card p-8 glow-border hover:border-primary/40 transition-all duration-500 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Service Number */}
      <div className="absolute top-4 right-4 text-5xl font-bold text-primary/5 font-mono">
        {String(index + 1).padStart(2, '0')}
      </div>
      
      {/* Icon */}
      <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center text-primary mb-6 group-hover:shadow-cyber transition-all duration-500">
        {icon}
        <div className="absolute inset-0 rounded-xl bg-primary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed mb-4">{description}</p>
      
      {/* Learn More Link */}
      <a href="#contact" className="inline-flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
        Learn more <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Camera className="w-6 h-6" />,
      title: "CCTV Installation",
      description: "HD & 4K surveillance systems with night vision, motion detection, and remote monitoring capabilities.",
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "IP Camera Networks",
      description: "Advanced IP-based camera systems with cloud storage, mobile access, and AI-powered analytics.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security Integration",
      description: "Complete security ecosystems including alarms, access control, and centralized monitoring.",
    },
    {
      icon: <Plug className="w-6 h-6" />,
      title: "Electrical Services",
      description: "Professional residential and commercial wiring with full code compliance and safety certification.",
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Smart Automation",
      description: "Intelligent home systems connecting lighting, security, and power management seamlessly.",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support, maintenance services, and rapid emergency response.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 text-xs font-mono text-primary border border-primary/30 rounded-full bg-primary/5 mb-4">
            SOLUTIONS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Advanced <span className="text-gradient">Technology</span> Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive security and electrical systems engineered for reliability, scalability, and peace of mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
