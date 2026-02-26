import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { StatsSection } from "./components/StatsSection";
import { ServiceBentoGrid } from "./components/ServiceBentoGrid";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactFooter } from "./components/ContactFooter";
import { FloatingButton } from "./components/FloatingButton";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col bg-primary text-accent selection:bg-highlight/30 selection:text-highlight">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ServiceBentoGrid />
      <ProjectsSection />
      <ContactFooter />
      <FloatingButton />
    </main>
  );
}
