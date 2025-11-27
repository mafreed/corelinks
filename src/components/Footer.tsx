import logo from "@/assets/logo.jpg";
import { Shield } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer */}
        <div className="py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <img src={logo} alt="Corelink Solutions" className="h-14 w-auto rounded-lg" />
              <div className="absolute -inset-1 bg-primary/20 rounded-lg blur-lg opacity-50" />
            </div>
            <div>
              <div className="font-bold text-lg text-foreground">CORELINK <span className="text-primary font-light">Solutions</span></div>
              <div className="text-sm text-muted-foreground">At the Core of Security and Power</div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {["Home", "Services", "About", "Contact"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Status */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/20">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-mono text-muted-foreground">Systems Online</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Corelink Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Shield className="w-4 h-4 text-primary" />
            <span>Enterprise-Grade Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
