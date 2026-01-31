import { ArrowRight, TrendingUp, Users, Eye, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";

const caseStudies = [
  {
    client: "TechStart Solutions",
    industry: "SaaS / Technology",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    challenge: "Low organic traffic and poor lead generation",
    results: [
      { metric: "Organic Traffic", before: "2,500/mo", after: "15,000/mo", increase: "+500%" },
      { metric: "Lead Generation", before: "50/mo", after: "280/mo", increase: "+460%" },
      { metric: "Conversion Rate", before: "1.2%", after: "4.8%", increase: "+300%" },
    ],
    testimonial: "AdCraftz transformed our digital presence completely. The results exceeded our expectations!",
    clientName: "Rajesh Kumar",
    clientRole: "CEO, TechStart Solutions",
  },
  {
    client: "FreshBite Restaurant",
    industry: "Food & Hospitality",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    challenge: "Struggling with local visibility and online orders",
    results: [
      { metric: "Local Searches", before: "500/mo", after: "3,200/mo", increase: "+540%" },
      { metric: "Online Orders", before: "120/mo", after: "850/mo", increase: "+608%" },
      { metric: "Google Reviews", before: "45", after: "280+", increase: "+522%" },
    ],
    testimonial: "Our restaurant is now the top-rated in the area. The local SEO strategy was game-changing!",
    clientName: "Priya Sharma",
    clientRole: "Owner, FreshBite Restaurant",
  },
  {
    client: "StyleHub Fashion",
    industry: "E-commerce / Retail",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    challenge: "High ad spend with low ROAS on paid campaigns",
    results: [
      { metric: "ROAS", before: "1.8x", after: "6.2x", increase: "+244%" },
      { metric: "Revenue", before: "₹5L/mo", after: "₹28L/mo", increase: "+460%" },
      { metric: "CPA", before: "₹450", after: "₹120", increase: "-73%" },
    ],
    testimonial: "The PPC optimization brought incredible returns. Best investment we've made in marketing!",
    clientName: "Arjun Reddy",
    clientRole: "Founder, StyleHub Fashion",
  },
];

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple/5 via-pink/3 to-orange/5 opacity-50" />
      
      <div className="section-container relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-6">
            Case Studies
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Real Results, <span className="gradient-text">Real Growth</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See how we've helped businesses across industries achieve remarkable digital success.
          </p>
        </ScrollReveal>

        {/* Case Studies */}
        <StaggerContainer className="space-y-12" staggerDelay={0.2}>
          {caseStudies.map((study, index) => (
            <StaggerItem key={study.client}>
              <div className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image Side */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-soft-lg">
                    <img
                      src={study.image}
                      alt={study.client}
                      className="w-full h-64 sm:h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-sm font-medium">
                        {study.industry}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2">{study.client}</h3>
                    <p className="text-muted-foreground">{study.challenge}</p>
                  </div>

                  {/* Before/After Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    {study.results.map((result) => (
                      <div
                        key={result.metric}
                        className="bg-card rounded-xl p-4 border border-border text-center"
                      >
                        <div className="text-xs text-muted-foreground mb-1">{result.metric}</div>
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <span className="text-sm text-muted-foreground line-through">{result.before}</span>
                          <ArrowRight className="w-3 h-3 text-primary" />
                          <span className="text-lg font-bold text-primary">{result.after}</span>
                        </div>
                        <div className="text-xs font-semibold text-green-500">{result.increase}</div>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <blockquote className="border-l-4 border-primary pl-4 py-2">
                    <p className="italic text-muted-foreground mb-2">"{study.testimonial}"</p>
                    <footer className="text-sm">
                      <span className="font-semibold">{study.clientName}</span>
                      <span className="text-muted-foreground"> — {study.clientRole}</span>
                    </footer>
                  </blockquote>

                  <Button variant="outline" className="gap-2">
                    View Full Case Study
                    <ArrowRight className="w-4 h-4" />
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
