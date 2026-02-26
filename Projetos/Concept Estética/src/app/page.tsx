import Hero from "@/components/Hero";
import TreatmentsGrid from "@/components/TreatmentsGrid";
import AuthoritySection from "@/components/AuthoritySection";
import FloatingCTA from "@/components/FloatingCTA";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Footer from "@/components/Footer";
import PortfolioBackButton from "@/components/PortfolioBackButton";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AuthoritySection />
      <BeforeAfterSlider />
      <TreatmentsGrid />
      <FloatingCTA />

      <Footer />
      <PortfolioBackButton />
    </main>
  );
}
