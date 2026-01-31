import { Navbar } from "@/components/Navbar";
import { BannerSection } from "@/components/sections/BannerSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FunnelSection } from "@/components/sections/FunnelSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <BannerSection />
        {/* <HeroSection /> */}
        <AboutSection />
        <ServicesSection />
        <FunnelSection />
        <WhyChooseUsSection />
        <CaseStudiesSection />
        <ReviewsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
