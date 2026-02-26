import AnimatedBackground from "@/components/AnimatedBackground";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import BeforeAfter from "@/components/BeforeAfter";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import DemoBadge from "@/components/DemoBadge";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Header />
      <main>
        <Hero />
        <section id="servicos">
          <WhyChooseUs />
        </section>
        <section id="resultados">
          <BeforeAfter />
        </section>
      </main>
      <section id="contato">
        <Footer />
      </section>
      <FloatingWhatsApp />
      <DemoBadge />
    </div>
  );
};

export default Index;
