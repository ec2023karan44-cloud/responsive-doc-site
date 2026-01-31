import { Star, Quote } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";

const reviews = [
  {
    text: "AdCraftz transformed our online presence completely. Their team understood our goals, built a solid strategy, and delivered leads consistently. Truly the best digital marketing agency we've worked with.",
    author: "Rajesh",
    role: "Business Owner",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
  },
  {
    text: "Transparent, responsive, and highly professional. They kept us updated at every step and delivered results better than what we expected. Our ad performance improved within just weeks.",
    author: "Priya",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
  },
  {
    text: "Exceptional creativity and execution. From website design to ad campaigns, the creativity and attention to detail were outstanding. Our brand visibility has grown significantly.",
    author: "Amit",
    role: "Startup Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
  },
  {
    text: "Reliable team with proven results. We saw a huge difference in our lead quality and conversions after partnering with AdCraftz. Their strategies actually work.",
    author: "Sunita",
    role: "E-commerce Manager",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=100&h=100&fit=crop&crop=face",
  },
  {
    text: "They feel more like a growth partner than an agency. The team is proactive, gives valuable insights, and genuinely cares about the success of our business. Highly recommended.",
    author: "Vikram",
    role: "CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    text: "Full-funnel marketing done right. AdCraftz handled everything—from awareness campaigns to remarketing—and our ROI has never been better. Worth every rupee.",
    author: "Deepika",
    role: "Brand Manager",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
  },
];

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-10 lg:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-teal/5 to-success/10" />

      <div className="section-container relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-6">
            Client Testimonials
          </div> */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            What Our{" "}
            <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it—hear from businesses we've helped grow.
          </p>
        </ScrollReveal>

        {/* Reviews Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {reviews.map((review, index) => (
            <StaggerItem key={index}>
              <div className="bg-card rounded-2xl p-6 border border-border card-hover h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Quote Icon */}
                {/* <Quote className="w-8 h-8 text-primary/30 mb-3" /> */}

                {/* Review Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                  "{review.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img
                    src={review.image}
                    alt={review.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <div className="font-semibold">{review.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {review.role}
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
