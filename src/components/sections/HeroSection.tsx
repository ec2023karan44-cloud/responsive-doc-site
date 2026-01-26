import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-bg-subtle" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              #1 Digital Marketing Agency in Hyderabad
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-fade-in stagger-1">
              Best{" "}
              <span className="gradient-text">Digital Marketing</span>{" "}
              Agency in Hyderabad
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-lg animate-fade-in stagger-2">
              From strategy to execution, we craft digital journeys that turn
              clicks into customers.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in stagger-3">
              <Button
                size="lg"
                className="gradient-bg text-primary-foreground hover:opacity-90 transition-opacity gap-2 h-12 px-8"
              >
                Get Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 h-12 px-8 border-border hover:bg-secondary"
              >
                <Play className="w-4 h-4" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4 animate-fade-in stagger-4">
              <div>
                <div className="text-3xl font-bold gradient-text">500+</div>
                <div className="text-sm text-muted-foreground">
                  Projects Delivered
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">98%</div>
                <div className="text-sm text-muted-foreground">
                  Client Satisfaction
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-sm text-muted-foreground">
                  Team Experts
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="animate-fade-in stagger-3">
            <div className="glass-effect rounded-2xl p-6 sm:p-8 shadow-soft-lg">
              <h3 className="text-xl font-bold mb-2">Get My Free Consultation</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Let's discuss how we can grow your business together
              </p>

              <form className="space-y-4">
                <Input
                  placeholder="Your Name"
                  className="h-12 bg-secondary/50 border-border"
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  className="h-12 bg-secondary/50 border-border"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="h-12 bg-secondary/50 border-border"
                />
                <Select>
                  <SelectTrigger className="h-12 bg-secondary/50 border-border">
                    <SelectValue placeholder="Select Service" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border-border">
                    <SelectItem value="seo">SEO Optimization</SelectItem>
                    <SelectItem value="social">Social Media Marketing</SelectItem>
                    <SelectItem value="ppc">PPC Advertising</SelectItem>
                    <SelectItem value="web">Website Development</SelectItem>
                    <SelectItem value="content">Content Marketing</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  type="submit"
                  className="w-full h-12 gradient-bg text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
