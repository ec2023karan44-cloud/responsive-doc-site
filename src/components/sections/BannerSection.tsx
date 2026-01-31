import bannerImage from "@/assets/digital-marketing-banner.jpg";

export function BannerSection() {
  return (
    <section className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh] mt-16 overflow-hidden">
      <img
        src={bannerImage}
        alt="Digital Marketing"
        className="w-full h-full object-cover"
      />
      {/* Subtle gradient overlay for better blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/30" />
    </section>
  );
}
