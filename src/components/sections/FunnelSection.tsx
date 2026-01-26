import { Eye, Heart, ShoppingCart, ArrowDown } from "lucide-react";

const funnelStages = [
  {
    icon: Eye,
    stage: "Top of Funnel",
    title: "Awareness",
    description:
      "Eye-catching visuals, engaging videos, and high-impact messaging that introduce your brand and attract a wide, relevant audience.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Heart,
    stage: "Middle of Funnel",
    title: "Consideration",
    description:
      "Value-driven content, compelling ads, and retargeting strategies that educate, build trust, and nurture potential customers.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: ShoppingCart,
    stage: "Bottom of Funnel",
    title: "Conversion",
    description:
      "Strong call-to-action creatives, persuasive landing pages, and laser-focused campaigns designed to drive leads, sales, and measurable results.",
    color: "from-orange-500 to-red-500",
  },
];

export function FunnelSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg-subtle" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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
        </div>

        {/* Funnel Visualization */}
        <div className="max-w-4xl mx-auto">
          <div className="relative space-y-6">
            {funnelStages.map((stage, index) => (
              <div key={stage.title} className="relative">
                <div
                  className={`bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-soft transition-all duration-300 hover:shadow-soft-lg ${
                    index === 0
                      ? "mx-0"
                      : index === 1
                      ? "mx-4 sm:mx-8"
                      : "mx-8 sm:mx-16"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
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

                {/* Arrow */}
                {index < funnelStages.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowDown className="w-6 h-6 text-muted-foreground/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">
            With creativity, data-driven insights, and industry expertise, we ensure
            your audience doesn't just see your brand—they <strong>connect with it</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
