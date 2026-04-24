import type { Metadata } from "next";
import { CTASection } from "../components/home/CTASection";
import { FooterSection } from "../components/home/FooterSection";
import { HeroSection } from "../components/home/HeroSection";
import { IndustriesSection } from "../components/home/IndustriesSection";
import { InsightsSection } from "../components/home/InsightsSection";
import { ServicesSection } from "../components/home/ServicesSection";
import { TopNavigation } from "../components/home/TopNavigation";
import { getInsights } from "../lib/api/insights";
import { getServices } from "../lib/api/services";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "HELCO | Institutional Stability & Strategic Insights",
  description:
    "HELCO delivers institutional advisory, strategic intelligence, and long-horizon financial guidance for high-stakes organizations.",
};

export default async function HomePage() {
  const [services, insights] = await Promise.all([getServices(), getInsights()]);

  return (
    <>
      <TopNavigation />
      <main className="w-full pb-20 pt-20">
        <HeroSection />
        <div className="flex w-full flex-col gap-16 px-4 sm:gap-20 sm:px-8 lg:px-14 xl:px-20 2xl:px-24">
          <ServicesSection services={services} />
          <IndustriesSection />
          <InsightsSection insights={insights} />
          <CTASection />
        </div>
      </main>
      <FooterSection />
    </>
  );
}
