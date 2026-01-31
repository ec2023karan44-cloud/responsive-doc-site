import { useState } from "react";
import { ArrowRight, Sparkles, User, Phone, Mail, Briefcase, Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ConsultationModal } from "@/components/ConsultationModal";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const benefits = [
    "Free Strategy Session",
    "No Hidden Charges", 
    "24/7 Support",
  ];

  return (
    <section
      id="home"
      className="relative py-16 lg:py-24"
    >
      <div className="container relative z-10">
        {/* Content Section */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-6"
          >
            <motion.span 
              className="w-2 h-2 rounded-full bg-primary"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <Sparkles className="w-4 h-4" />
            #1 Digital Marketing Agency in Hyderabad
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6"
          >
            Grow Your Business with{" "}
            <span className="gradient-text">Expert Digital Marketing</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-6"
          >
            From strategy to execution, we craft digital journeys that turn
            clicks into customers. Let us help you dominate the digital landscape.
          </motion.p>

          {/* Benefits List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap justify-center gap-6 mb-8"
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>{benefit}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Horizontal Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Form Container with Animated Border */}
          <div className="relative">
            <motion.div 
              className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-primary via-accent to-primary opacity-60"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ backgroundSize: "200% 200%" }}
            />
            
            <div className="relative bg-card rounded-2xl p-6 lg:p-8 shadow-2xl border border-border/50">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
                  {/* Name Field */}
                  <div className="relative group">
                    <label className="text-xs font-medium text-muted-foreground mb-2 block">Full Name</label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <User className="w-4 h-4 text-primary" />
                      </div>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-[52px] pr-4 py-3 rounded-xl bg-secondary/80 border border-border/80 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-sm text-foreground placeholder:text-muted-foreground"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="relative group">
                    <label className="text-xs font-medium text-muted-foreground mb-2 block">Phone Number</label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <Phone className="w-4 h-4 text-primary" />
                      </div>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-[52px] pr-4 py-3 rounded-xl bg-secondary/80 border border-border/80 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-sm text-foreground placeholder:text-muted-foreground"
                        required
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="relative group">
                    <label className="text-xs font-medium text-muted-foreground mb-2 block">Email Address</label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <Mail className="w-4 h-4 text-primary" />
                      </div>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-[52px] pr-4 py-3 rounded-xl bg-secondary/80 border border-border/80 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-sm text-foreground placeholder:text-muted-foreground"
                        required
                      />
                    </div>
                  </div>

                  {/* Service Select */}
                  <div className="relative group">
                    <label className="text-xs font-medium text-muted-foreground mb-2 block">Select Service</label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center z-10">
                        <Briefcase className="w-4 h-4 text-primary" />
                      </div>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => setFormData({ ...formData, service: value })}
                      >
                        <SelectTrigger className="w-full pl-[52px] pr-4 py-3 h-auto rounded-xl bg-secondary/80 border-border/80 focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm">
                          <SelectValue placeholder="Choose..." />
                        </SelectTrigger>
                        <SelectContent className="bg-popover border-border">
                          <SelectItem value="seo">SEO Optimization</SelectItem>
                          <SelectItem value="social">Social Media Marketing</SelectItem>
                          <SelectItem value="ppc">PPC Advertising</SelectItem>
                          <SelectItem value="web">Web Development</SelectItem>
                          <SelectItem value="content">Content Marketing</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="relative">
                    <label className="text-xs font-medium text-transparent mb-2 block select-none">Submit</label>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, boxShadow: "0 10px 30px -10px hsl(var(--primary) / 0.5)" }}
                      whileTap={{ scale: 0.98 }}
                      className="relative w-full group overflow-hidden rounded-xl gradient-bg h-[50px]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                      <div className="relative flex items-center justify-center gap-2 text-primary-foreground font-semibold text-sm">
                        <Send className="w-4 h-4" />
                        Get Free Quote
                      </div>
                    </motion.button>
                  </div>
                </div>

                {/* Security & Trust */}
                <div className="flex items-center justify-center gap-6 mt-6 pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>🔒</span>
                    <span>100% Secure</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>⚡</span>
                    <span>Response in 24hrs</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>✓</span>
                    <span>No Spam, Ever</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10"
        >
          <p className="text-muted-foreground text-sm mb-4">
            Or schedule a detailed consultation with our experts
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button
              size="lg"
              variant="outline"
              onClick={() => setIsModalOpen(true)}
              className="h-12 px-8 rounded-xl border-primary/30 hover:bg-primary/5"
            >
              <span className="flex items-center gap-2">
                Book Free Consultation
                <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Consultation Modal */}
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}
