'use client';

import { Eye, Heart, ShoppingCart, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const funnelStages = [
  {
    icon: Eye,
    stage: "Top of Funnel",
    title: "Awareness",
    description:
      "Eye-catching visuals, engaging videos, and high-impact messaging that introduce your brand and attract a wide, relevant audience.",
    color: "from-blue-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop",
  },
  {
    icon: Heart,
    stage: "Middle of Funnel",
    title: "Consideration",
    description:
      "Value-driven content, compelling ads, and retargeting strategies that educate, build trust, and nurture potential customers.",
    color: "from-purple-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=300&h=200&fit=crop",
  },
  {
    icon: ShoppingCart,
    stage: "Bottom of Funnel",
    title: "Conversion",
    description:
      "Strong call-to-action creatives, persuasive landing pages, and laser-focused campaigns designed to drive leads, sales, and measurable results.",
    color: "from-orange-500 to-red-500",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
  },
];

export function FunnelSection() {
  return (
    <section className="py-10 lg:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg-subtle" />

      <div className="section-container relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-6">
            Full-Funnel Marketing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Creative Work{" "}
            <span className="gradient-text">Across the Funnel</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We don't just run campaigns—we build complete digital journeys that
            guide your audience from awareness to conversion.
          </p>
        </ScrollReveal>

        {/* Funnel Visualization */}
        <div className="max-w-4xl mx-auto">
          <div className="relative space-y-6">
            {funnelStages.map((stage, index) => (
              <ScrollReveal key={stage.title} delay={index * 0.2}>
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.02, x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`bg-card rounded-2xl overflow-hidden border border-border shadow-soft transition-all duration-300 hover:shadow-soft-lg ${
                      index === 0
                        ? "mx-0"
                        : index === 1
                        ? "mx-4 sm:mx-8"
                        : "mx-8 sm:mx-16"
                    }`}
                  >
                    <div className="flex flex-col lg:flex-row">
                      {/* Image */}
                      <div className="lg:w-48 h-32 lg:h-auto overflow-hidden">
                        <img
                          src={stage.image}
                          alt={stage.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-6 sm:p-8 flex-1">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stage.color} flex items-center justify-center flex-shrink-0`}
                        >
                          <stage.icon className="w-8 h-8 text-white" />
                        </div>

                        <div className="flex-1">
                          <div className="text-sm font-medium text-primary mb-1">
                            {stage.stage}
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold mb-2">
                            {stage.title}
                          </h3>
                          <p className="text-muted-foreground">{stage.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Arrow */}
                  {index < funnelStages.length - 1 && (
                    <motion.div 
                      className="flex justify-center py-2"
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowDown className="w-6 h-6 text-muted-foreground/50" />
                    </motion.div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <ScrollReveal className="text-center mt-12" delay={0.6}>
          <p className="text-lg text-muted-foreground mb-4">
            With creativity, data-driven insights, and industry expertise, we ensure
            your audience doesn't just see your brand—they <strong>connect with it</strong>.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
