import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg-subtle" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>

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

            {/* Map Placeholder */}
            <div className="bg-card rounded-2xl border border-border overflow-hidden h-64">
              <div className="w-full h-full bg-secondary/50 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-muted-foreground/50 mx-auto mb-2" />
                  <p className="text-muted-foreground">Hyderabad, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-soft-lg">
            <h3 className="text-xl font-bold mb-2">Send us a Message</h3>
            <p className="text-muted-foreground mb-6">
              Fill out the form below and we'll get back to you soon.
            </p>

            <form className="space-y-5">
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
        </div>
      </div>
    </section>
  );
}
