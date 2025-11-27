import { useEffect, useState, useRef } from "react";
import { Camera, MapPin, Users, Award } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

const StatItem = ({ icon, value, suffix, label, delay }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const counter = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, value, delay]);

  return (
    <div
      ref={ref}
      className={`group relative p-8 glass-card glow-border transition-all duration-700 hover:border-primary/40 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Icon */}
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6 group-hover:shadow-cyber transition-all duration-500">
        {icon}
      </div>
      
      {/* Value */}
      <div className="text-5xl md:text-6xl font-bold text-foreground mb-2 font-mono">
        {count.toLocaleString()}
        <span className="text-primary">{suffix}</span>
      </div>
      
      {/* Label */}
      <div className="text-muted-foreground text-sm font-medium uppercase tracking-wider">{label}</div>
      
      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
        <div className="absolute top-2 right-2 w-2 h-2 bg-primary/50 rounded-full" />
        <div className="absolute top-2 right-6 w-1 h-1 bg-primary/30 rounded-full" />
        <div className="absolute top-6 right-2 w-1 h-1 bg-primary/30 rounded-full" />
      </div>
    </div>
  );
};

const Stats = () => {
  const stats = [
    { icon: <Camera className="w-7 h-7" />, value: 5000, suffix: "+", label: "CCTV Cameras" },
    { icon: <MapPin className="w-7 h-7" />, value: 500, suffix: "+", label: "Sites Secured" },
    { icon: <Users className="w-7 h-7" />, value: 1000, suffix: "+", label: "Happy Clients" },
    { icon: <Award className="w-7 h-7" />, value: 10, suffix: "+", label: "Years Active" },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 text-xs font-mono text-primary border border-primary/30 rounded-full bg-primary/5 mb-4">
            PERFORMANCE METRICS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Trusted by <span className="text-gradient">Thousands</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
