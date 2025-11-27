import { CheckCircle, Cpu, Lock, Zap } from "lucide-react";

const About = () => {
  const features = [
    "10+ years of industry expertise",
    "Certified technical specialists",
    "24/7 monitoring & support",
    "Transparent pricing model",
    "Latest security technology",
    "Fully licensed & insured",
  ];

  const highlights = [
    { icon: <Cpu className="w-6 h-6" />, label: "Smart Tech", value: "AI-Powered" },
    { icon: <Lock className="w-6 h-6" />, label: "Security", value: "Enterprise-Grade" },
    { icon: <Zap className="w-6 h-6" />, label: "Response", value: "< 2 Hours" },
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1 text-xs font-mono text-primary border border-primary/30 rounded-full bg-primary/5 mb-4">
              ABOUT US
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Engineering <span className="text-gradient">Trust</span> Through Technology
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Corelink Solutions has been pioneering security and electrical solutions for over a decade. 
              We combine cutting-edge technology with expert craftsmanship to deliver systems that protect 
              what matters most.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our certified team brings enterprise-level security to residential and commercial properties, 
              ensuring every installation exceeds industry standards for quality and reliability.
            </p>

            <ul className="grid sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 group">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-foreground/90 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Highlights */}
            <div className="flex flex-wrap gap-4">
              {highlights.map((item) => (
                <div key={item.label} className="glass-card px-5 py-3 flex items-center gap-3">
                  <div className="text-primary">{item.icon}</div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</div>
                    <div className="text-sm font-semibold text-foreground">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="glass-card p-8 relative overflow-hidden">
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 animate-shimmer" style={{ backgroundSize: "200% 100%" }} />
              
              <div className="relative">
                {/* Main Stats */}
                <div className="text-center mb-8">
                  <div className="text-8xl font-bold text-gradient font-mono mb-2">10+</div>
                  <div className="text-xl text-muted-foreground">Years of Excellence</div>
                </div>
                
                {/* Divider */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                </div>
                
                {/* Mini Stats */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-foreground font-mono">99.9%</div>
                    <div className="text-xs text-muted-foreground">Uptime</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground font-mono">500+</div>
                    <div className="text-xs text-muted-foreground">Sites</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground font-mono">24/7</div>
                    <div className="text-xs text-muted-foreground">Support</div>
                  </div>
                </div>
              </div>
              
              {/* Corner Decorations */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/30 rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/30 rounded-bl-lg" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-float" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/15 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
