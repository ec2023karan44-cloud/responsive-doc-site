import bannerImage from "@/assets/digital-marketing-banner.jpg";
import { useState } from "react";
import {
  ArrowRight,
  Sparkles,
  User,
  Phone,
  Mail,
  Briefcase,
  Send,
  CheckCircle2,
} from "lucide-react";
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

export function BannerSection() {
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
    <section className="relative w-full min-h-[40vh] md:min-h-[60vh] lg:min-h-[92vh] mt-16 overflow-hidden">
      {/* Background Image */}
      <img
        src={bannerImage}
        alt="Digital Marketing"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="section-container relative z-10 pt-12 pb-20">
        {/* ================= HEADING ================= */}
        <div className="text-center max-w-4xl mx-auto mb-12 text-white">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-sm mb-6"
          >
            <motion.span
              className="w-2 h-2 rounded-full bg-primary"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <Sparkles className="w-4 h-4" />
            #2 Digital Marketing Agency in Hyderabad
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6"
          >
            Grow Your Business with{" "}
            <span className="gradient-text">Expert Digital Marketing</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg lg:text-xl text-white max-w-2xl mx-auto mb-6"
          >
            From strategy to execution, we craft digital journeys that turn
            clicks into customers.
          </motion.p>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-white"
              >
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>{benefit}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ================= FORM ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative">
            {/* Animated border */}
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

            <div className="relative bg-card rounded-2xl p-6 lg:p-8 shadow-2xl">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
                  {/* Name */}
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-2 block">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <User className="w-4 h-4 text-primary" />
                      </div>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full h-[50px] pl-[52px] pr-4 rounded-xl bg-secondary border border-border focus:ring-2 focus:ring-primary/20 outline-none text-sm"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-2 block">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Phone className="w-4 h-4 text-primary" />
                      </div>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full h-[50px] pl-[52px] pr-4 rounded-xl bg-secondary border border-border focus:ring-2 focus:ring-primary/20 outline-none text-sm"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-2 block">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Mail className="w-4 h-4 text-primary" />
                      </div>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full h-[50px] pl-[52px] pr-4 rounded-xl bg-secondary border border-border focus:ring-2 focus:ring-primary/20 outline-none text-sm"
                        required
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-2 block">
                      Select Service
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center z-10">
                        <Briefcase className="w-4 h-4 text-primary" />
                      </div>
                      <Select
                        value={formData.service}
                        onValueChange={(value) =>
                          setFormData({ ...formData, service: value })
                        }
                      >
                        <SelectTrigger className="h-[50px] pl-[52px] rounded-xl">
                          <SelectValue placeholder="Choose..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="seo">SEO Optimization</SelectItem>
                          <SelectItem value="social">
                            Social Media Marketing
                          </SelectItem>
                          <SelectItem value="ppc">PPC Advertising</SelectItem>
                          <SelectItem value="web">Web Development</SelectItem>
                          <SelectItem value="content">
                            Content Marketing
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Submit */}
                  <div>
                    <label className="text-xs font-medium text-transparent mb-2 block select-none">
                      Submit
                    </label>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full h-[50px] rounded-xl gradient-bg text-primary-foreground font-semibold flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Get Free Quote
                    </motion.button>
                  </div>
                </div>

                {/* Trust */}
                <div className="flex items-center justify-center gap-6 mt-6 pt-4 border-t border-border/50">
                  <span className="text-xs text-muted-foreground">🔒 100% Secure</span>
                  <span className="text-xs text-muted-foreground">⚡ Response in 24hrs</span>
                  <span className="text-xs text-muted-foreground">✓ No Spam Ever</span>
                </div>
              </form>
            </div>
          </div>
        </motion.div>

        {/* ================= CTA ================= */}
        <div className="text-center mt-10">
          <p className="text-white text-sm mb-4">
            Or schedule a detailed consultation with our experts
          </p>
          <Button
            size="lg"
            variant="outline"
            onClick={() => setIsModalOpen(true)}
            className="h-12 px-8 rounded-xl border-primary/40 hover:bg-primary hover:text-primary-foreground"
          >
            Book Free Consultation
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
