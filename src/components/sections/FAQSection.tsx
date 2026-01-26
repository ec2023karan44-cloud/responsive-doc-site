import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";

const faqs = [
  {
    question: "What is Digital Marketing?",
    answer:
      "Digital marketing is a form of online marketing that uses platforms like Google, social media, and websites to promote a business. AdCraftz creates easy, effective plans to engage users and boost leads, trusted as the best digital marketing agency in Hyderabad.",
  },
  {
    question: "What is a digital marketing agency?",
    answer:
      "A place where a group of expert people work for your brand to help it grow online. At AdCraftz, our dedicated team handles SEO, Ads, content and more—acting like an extension of your business to drive real results.",
  },
  {
    question: "What services do digital marketing agencies offer?",
    answer:
      "At AdCraftz, we offer: Search Engine Optimization (SEO), Pay-Per-Click Advertising (PPC), Social Media Marketing & Management, Content Creation & Blogging, Email Marketing, Web Design & Development, and Branding & Strategy Consulting. We create a customized digital marketing plan that truly fits your brand.",
  },
  {
    question: "How do I choose the right digital marketing agency?",
    answer:
      "Look for: Transparent communication—the agency should keep you updated and explain everything clearly. Real results—look for proven work, case studies, and actual growth stories. Understanding of your industry—they should know your market, your audience, and your challenges. Genuine reviews—see what real clients are saying.",
  },
  {
    question: "How much does hiring a digital marketing agency cost?",
    answer:
      "The cost depends on what services you need—like SEO, social media, ads, or a full marketing plan. Prices can vary based on your goals, industry, and how fast you want to grow. At AdCraftz, we offer customized plans that fit your budget and give you the best value.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <ScrollReveal className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-6">
              FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Frequently Asked{" "}
              <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Got questions? We've got answers.
            </p>
          </ScrollReveal>

          {/* Accordion */}
          <StaggerContainer staggerDelay={0.1}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <StaggerItem key={index}>
                  <AccordionItem
                    value={`item-${index}`}
                    className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-soft"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </StaggerItem>
              ))}
            </Accordion>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
