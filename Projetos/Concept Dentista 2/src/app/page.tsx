import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import StatsCards from "@/components/landing/StatsCards";
import AboutSection from "@/components/landing/AboutSection";
import ServicesGrid from "@/components/landing/ServicesGrid";
import Testimonials from "@/components/landing/Testimonials";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <StatsCards />
      <AboutSection />
      <ServicesGrid />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
