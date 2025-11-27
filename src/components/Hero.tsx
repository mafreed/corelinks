import { Shield, Zap, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      style={{ background: "var(--hero-gradient)" }}
    >
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      
      {/* Scan Line Effect */}
      <div className="absolute inset-0 scan-line" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-5 py-2.5 mb-8 animate-fade-in-up border-primary/30">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-foreground/90 text-sm font-medium tracking-wide">
              System Online • Trusted Security Solutions
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up leading-tight" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">At the Core of</span>
            <br />
            <span className="text-gradient">Security</span>
            <span className="text-foreground"> & </span>
            <span className="text-gradient">Power</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Advanced CCTV surveillance and intelligent electrical solutions.
            Protecting your property with cutting-edge technology.
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
            {["HD Cameras", "Smart Systems", "24/7 Monitoring", "AI Analytics"].map((tag) => (
              <span key={tag} className="px-3 py-1 text-xs font-mono text-primary/80 border border-primary/30 rounded-full bg-primary/5">
                {tag}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" asChild className="group">
              <a href="#contact">
                Get Free Assessment
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="#services">
                <Shield className="w-5 h-5" />
                Explore Solutions
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5000+</div>
              <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Cameras Deployed</div>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block" />
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">99.9%</div>
              <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Uptime</div>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block" />
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">10+</div>
              <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Years Active</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
