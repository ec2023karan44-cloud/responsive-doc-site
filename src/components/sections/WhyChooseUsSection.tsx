import {
  Settings,
  Eye,
  Users,
  Award,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const reasons = [
  {
    icon: Settings,
    title: "Tailored Solutions",
    description:
      "We don't believe in one-size-fits-all. Every strategy is custom-crafted to match your brand's goals, audience, and industry needs.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "No hidden metrics or confusing reports. You get clear insights and complete visibility into every step of your digital growth.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description:
      "A passionate, experienced team by your side—focused on your success, proactive with ideas, and always ready to support.",
  },
  {
    icon: Award,
    title: "Proven Success",
    description:
      "Backed by consistent results and happy clients across industries, our performance speaks louder than promises.",
  },
  {
    icon: Sparkles,
    title: "Cutting-Edge Creativity",
    description:
      "From innovative designs to compelling content, we blend creativity with strategy to make your brand truly unforgettable.",
  },
  {
    icon: TrendingUp,
    title: "Full-Funnel Expertise",
    description:
      "We optimize every stage of the customer journey—awareness, engagement, and conversion—to deliver maximum ROI.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-6">
            Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Why We're the{" "}
            <span className="gradient-text">Best Choice</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            At AdCraftz, we act as your strategic growth partner, not just a
            service provider.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group bg-card rounded-2xl p-6 border border-border card-hover text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>

              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
