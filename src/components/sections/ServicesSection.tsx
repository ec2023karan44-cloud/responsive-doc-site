import {
  Globe,
  Search,
  Share2,
  FileText,
  Target,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "Website Development & Maintenance",
    description:
      "We create visually stunning, responsive, and user-friendly websites tailored to your brand's identity. Plus ongoing maintenance to keep it secure and high-performing.",
    highlight: "Your audience judges your brand within seconds of landing on your website.",
  },
  {
    icon: Search,
    title: "SEO (Search Engine Optimization)",
    description:
      "Through powerful on-page optimization, off-page strategies, technical SEO, and local SEO, we boost your website's visibility and credibility.",
    highlight: "93% of online experiences begin with a search engine.",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "We craft engaging social media strategies that boost your presence and build genuine connections with your audience across Facebook, Instagram, and LinkedIn.",
    highlight: "Social media creates meaningful interactions that convert into loyal customers.",
  },
  {
    icon: FileText,
    title: "Content Management",
    description:
      "From blogs and website content to social media posts and ad copy, we deliver content that is relevant, persuasive, and valuable to your audience.",
    highlight: "Great content builds credibility, drives traffic, and turns visitors into customers.",
  },
  {
    icon: Target,
    title: "Paid Advertising (PPC & Social Ads)",
    description:
      "Whether it's Google Ads, Facebook Ads, Instagram Ads, or LinkedIn Ads, we create campaigns that drive immediate traffic, leads, and conversions.",
    highlight: "Paid ads offer instant visibility to the right people at the right time.",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    description:
      "Through Google My Business optimization, local keyword targeting, and citation building, we make sure you appear prominently in local search results.",
    highlight: "46% of all Google searches are looking for local information.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-6">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive{" "}
            <span className="gradient-text">Digital Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We offer end-to-end digital marketing services designed to elevate
            your brand and drive measurable results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card rounded-2xl p-6 border border-border card-hover overflow-hidden"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 gradient-bg opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-5">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {service.description}
                </p>

                <div className="p-3 rounded-lg bg-primary/5 border border-primary/10 mb-4">
                  <p className="text-sm text-primary font-medium">
                    💡 {service.highlight}
                  </p>
                </div>

                <Button
                  variant="ghost"
                  className="p-0 h-auto text-primary hover:text-primary/80 group/btn"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
