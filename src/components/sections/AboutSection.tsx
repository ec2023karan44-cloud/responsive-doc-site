import { CheckCircle, Target, Users, Zap } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";

const features = [
  {
    icon: Target,
    title: "Result-Oriented",
    description: "Strategies focused on measurable outcomes",
  },
  {
    icon: Users,
    title: "Strategic Partner",
    description: "We work as an extension of your team",
  },
  {
    icon: Zap,
    title: "Transparent",
    description: "Clear insights at every step",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-10 lg:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg-subtle opacity-50" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image/Visual */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Main Image */}
                <div className="absolute inset-4 rounded-3xl gradient-bg opacity-20" />
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-soft-lg border border-border">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop"
                    alt="AdCraftz Team"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-card rounded-2xl p-4 shadow-soft-lg border border-border animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Trusted</div>
                      <div className="text-xs text-muted-foreground">by 500+ clients</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-4 shadow-soft-lg border border-border animate-float" style={{ animationDelay: "1s" }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Fast Results</div>
                      <div className="text-xs text-muted-foreground">Within weeks</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Content */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary">
                About Us
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Welcome to{" "}
                <span className="gradient-text">AdCraftz</span>
              </h2>

              <p className="text-lg text-muted-foreground">
                The Best Digital Marketing Agency in Hyderabad. At AdCraftz, we
                believe every business deserves a powerful digital presence that
                drives real growth.
              </p>

              <p className="text-muted-foreground">
                We built AdCraftz with one simple vision: to make digital
                marketing transparent, result-oriented, and accessible for every
                business—whether small, growing, or established.
              </p>

              <StaggerContainer className="grid sm:grid-cols-3 gap-4 pt-4" staggerDelay={0.1}>
                {features.map((feature) => (
                  <StaggerItem key={feature.title}>
                    <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                      <feature.icon className="w-8 h-8 text-primary mb-3" />
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <blockquote className="border-l-4 border-primary pl-6 py-2 mt-6">
                <p className="text-lg italic text-muted-foreground">
                  "At AdCraftz, your success isn't just a project—it's our
                  mission."
                </p>
              </blockquote>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
