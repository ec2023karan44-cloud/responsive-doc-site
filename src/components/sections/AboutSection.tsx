import { CheckCircle, Target, Users, Zap } from "lucide-react";

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
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg-subtle opacity-50" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image/Visual */}
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main Image Container */}
              <div className="absolute inset-4 rounded-3xl gradient-bg opacity-20" />
              <div className="absolute inset-0 rounded-3xl bg-card border border-border shadow-soft-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-2xl gradient-bg flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary-foreground">A</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">AdCraftz</h3>
                    <p className="text-muted-foreground">
                      Your Digital Growth Partner
                    </p>
                  </div>
                </div>
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

          {/* Right - Content */}
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

            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="p-4 rounded-xl bg-secondary/50 border border-border"
                >
                  <feature.icon className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-1">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <blockquote className="border-l-4 border-primary pl-6 py-2 mt-6">
              <p className="text-lg italic text-muted-foreground">
                "At AdCraftz, your success isn't just a project—it's our
                mission."
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
