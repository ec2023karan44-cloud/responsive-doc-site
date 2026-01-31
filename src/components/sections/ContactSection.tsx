import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function ContactSection() {
  return (
    <section id="contact" className="py-10 lg:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple/5 to-pink/10" />
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [-20, 20, -20],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-purple/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          x: [20, -20, 20],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-container relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-6">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Looking for the{" "}
            <span className="gradient-text">Best Digital Marketing Agency</span>{" "}
            in Hyderabad?
          </h2>
          <p className="text-lg text-muted-foreground">
            Let's discuss how we can help your business grow. Fill out the form
            and we'll get back to you within 24 hours.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="text-xl font-bold mb-5">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <a
                        href="mailto:hello@adcraftz.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        hello@adcraftz.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Phone</div>
                      <a
                        href="tel:+919876543210"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Location</div>
                      <p className="text-muted-foreground">
                        Hyderabad, Telangana, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Image */}
              <div className="bg-card rounded-2xl border border-border overflow-hidden h-60">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=300&fit=crop"
                  alt="Hyderabad Location Map"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right">
            <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-soft-lg">
              <h3 className="text-xl font-bold mb-2">Send us a Message</h3>
              <p className="text-muted-foreground mb-6">
                Fill out the form below and we'll get back to you soon.
              </p>

              <form className="space-y-7">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Input
                    placeholder="Your Name"
                    className="h-12 bg-secondary/50 border-border"
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="h-12 bg-secondary/50 border-border"
                  />
                </div>

                <Input
                  type="tel"
                  placeholder="Phone Number"
                  className="h-12 bg-secondary/50 border-border"
                />

                <Input
                  placeholder="Subject / Purpose"
                  className="h-12 bg-secondary/50 border-border"
                />

                <Textarea
                  placeholder="Your Message..."
                  className="min-h-[120px] bg-secondary/50 border-border resize-none"
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-12 gradient-bg text-primary-foreground hover:opacity-90 transition-opacity gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
