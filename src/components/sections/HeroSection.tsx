import { useState } from "react";
import { ArrowRight, Sparkles, User, Phone, Mail, Briefcase, Send, CheckCircle2, Zap } from "lucide-react";
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
      className="relative min-h-screen flex items-center pt-20 pb-12"
    >
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 items-center">
          
          {/* LEFT SIDE - Content (Takes more space) */}
          <div className="flex-1 text-center lg:text-left lg:pr-8">
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
              #1 Digital Marketing Agency
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
            >
              Best{" "}
              <span className="gradient-text">Digital Marketing</span>{" "}
              Agency in Hyderabad
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8"
            >
              From strategy to execution, we craft digital journeys that turn
              clicks into customers. Let us help you dominate the digital landscape.
            </motion.p>

            {/* Benefits List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Button
                  size="lg"
                  onClick={() => setIsModalOpen(true)}
                  className="relative group overflow-hidden gradient-bg text-primary-foreground h-14 px-10 text-lg font-semibold rounded-xl shadow-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <span className="relative flex items-center gap-2">
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT SIDE - Compact Premium Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full lg:w-auto shrink-0"
          >
            <div className="relative w-full max-w-[340px] mx-auto">
              {/* Animated Border Glow */}
              <motion.div 
                className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-primary via-accent to-primary opacity-75"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ backgroundSize: "200% 200%" }}
              />
              
              {/* Form Container */}
              <div className="relative bg-card rounded-2xl p-5 shadow-2xl border border-border/50">
                {/* Form Header */}
                <div className="text-center mb-5">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent mb-3"
                  >
                    <Zap className="w-5 h-5 text-primary-foreground" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-lg font-bold text-foreground"
                  >
                    Get Free Quote
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-xs text-muted-foreground mt-1"
                  >
                    Response within 24 hours
                  </motion.p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-3">
                  {/* Name Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="relative group"
                  >
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-focus-within:from-primary/30 group-focus-within:to-accent/30 transition-all">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-13 pr-3 py-3 pl-[52px] rounded-xl bg-secondary/80 border border-border/80 focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all outline-none text-sm text-foreground placeholder:text-muted-foreground"
                      required
                    />
                  </motion.div>

                  {/* Phone Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 }}
                    className="relative group"
                  >
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-focus-within:from-primary/30 group-focus-within:to-accent/30 transition-all">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-13 pr-3 py-3 pl-[52px] rounded-xl bg-secondary/80 border border-border/80 focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all outline-none text-sm text-foreground placeholder:text-muted-foreground"
                      required
                    />
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0 }}
                    className="relative group"
                  >
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-focus-within:from-primary/30 group-focus-within:to-accent/30 transition-all">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-13 pr-3 py-3 pl-[52px] rounded-xl bg-secondary/80 border border-border/80 focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all outline-none text-sm text-foreground placeholder:text-muted-foreground"
                      required
                    />
                  </motion.div>

                  {/* Service Select */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1 }}
                    className="relative group"
                  >
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center z-10 group-focus-within:from-primary/30 group-focus-within:to-accent/30 transition-all">
                      <Briefcase className="w-4 h-4 text-primary" />
                    </div>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => setFormData({ ...formData, service: value })}
                    >
                      <SelectTrigger className="w-full pl-[52px] pr-3 py-3 h-auto rounded-xl bg-secondary/80 border-border/80 focus:border-primary focus:ring-1 focus:ring-primary/30 text-sm">
                        <SelectValue placeholder="Select Service" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover border-border">
                        <SelectItem value="seo">SEO Optimization</SelectItem>
                        <SelectItem value="social">Social Media</SelectItem>
                        <SelectItem value="ppc">PPC Advertising</SelectItem>
                        <SelectItem value="web">Web Development</SelectItem>
                        <SelectItem value="content">Content Marketing</SelectItem>
                      </SelectContent>
                    </Select>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="pt-1"
                  >
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, boxShadow: "0 10px 30px -10px hsl(var(--primary) / 0.5)" }}
                      whileTap={{ scale: 0.98 }}
                      className="relative w-full group overflow-hidden rounded-xl gradient-bg"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                      <div className="relative flex items-center justify-center gap-2 py-3 text-primary-foreground font-semibold text-sm">
                        <Send className="w-4 h-4" />
                        Get Quote Now
                      </div>
                    </motion.button>
                  </motion.div>
                </form>

                {/* Security Badge */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3 }}
                  className="flex items-center justify-center gap-1.5 text-[10px] text-muted-foreground mt-4"
                >
                  <span className="w-3 h-3">🔒</span>
                  <span>100% Secure & Confidential</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Consultation Modal */}
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}
