import {
  Settings,
  Eye,
  Users,
  Award,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";

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
    <section id="why-us" className="py-10 lg:py-20 bg-secondary/30 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-6">
            Why Choose Us
          </div> */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Why We're the{" "}
            <span className="gradient-text">Best Choice</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            At AdCraftz, we act as your strategic growth partner, not just a
            service provider.
          </p>
        </ScrollReveal>

        {/* Reasons Grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {reasons.map((reason) => (
            <StaggerItem key={reason.title}>
              <div className="group bg-card rounded-2xl p-6 border border-border card-hover text-center h-full">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>

                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Trust Indicators */}
        <ScrollReveal className="mt-16" delay={0.3}>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-60">
            <img
              src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=120&h=40&fit=crop&grayscale"
              alt="Client Logo"
              className="h-8 object-contain"
            />
            <img
              src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=40&fit=crop&grayscale"
              alt="Client Logo"
              className="h-8 object-contain"
            />
            <img
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=40&fit=crop&grayscale"
              alt="Client Logo"
              className="h-8 object-contain"
            />
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=120&h=40&fit=crop&grayscale"
              alt="Client Logo"
              className="h-8 object-contain"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
