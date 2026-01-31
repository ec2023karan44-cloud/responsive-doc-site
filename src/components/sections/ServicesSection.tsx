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
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";

const services = [
  {
    icon: Globe,
    title: "Website Development & Maintenance",
    description:
      "We create visually stunning, responsive, and user-friendly websites tailored to your brand's identity. Plus ongoing maintenance to keep it secure and high-performing.",
    highlight: "Your audience judges your brand within seconds of landing on your website.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=250&fit=crop",
  },
  {
    icon: Search,
    title: "SEO (Search Engine Optimization)",
    description:
      "Through powerful on-page optimization, off-page strategies, technical SEO, and local SEO, we boost your website's visibility and credibility.",
    highlight: "93% of online experiences begin with a search engine.",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=400&h=250&fit=crop",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "We craft engaging social media strategies that boost your presence and build genuine connections with your audience across Facebook, Instagram, and LinkedIn.",
    highlight: "Social media creates meaningful interactions that convert into loyal customers.",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=250&fit=crop",
  },
  {
    icon: FileText,
    title: "Content Management",
    description:
      "From blogs and website content to social media posts and ad copy, we deliver content that is relevant, persuasive, and valuable to your audience.",
    highlight: "Great content builds credibility, drives traffic, and turns visitors into customers.",
    image: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=400&h=250&fit=crop",
  },
  {
    icon: Target,
    title: "Paid Advertising (PPC & Social Ads)",
    description:
      "Whether it's Google Ads, Facebook Ads, Instagram Ads, or LinkedIn Ads, we create campaigns that drive immediate traffic, leads, and conversions.",
    highlight: "Paid ads offer instant visibility to the right people at the right time.",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=400&h=250&fit=crop",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    description:
      "Through Google My Business optimization, local keyword targeting, and citation building, we make sure you appear prominently in local search results.",
    highlight: "46% of all Google searches are looking for local information.",
    image: "https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?w=400&h=250&fit=crop",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-10 lg:py-20 bg-secondary/30">
      <div className="container">
        {/* Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
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
        </ScrollReveal>

        {/* Services Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <div className="group relative bg-card rounded-2xl border border-border card-hover overflow-hidden h-full flex flex-col">
                {/* Service Image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shadow-lg">
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">
                    {service.description}
                  </p>

                  <div className="p-3 rounded-lg bg-primary/5 border border-primary/10 mb-4">
                    <p className="text-sm text-primary font-medium">
                      💡 {service.highlight}
                    </p>
                  </div>

                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-primary hover:text-primary/80 group/btn self-start"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
