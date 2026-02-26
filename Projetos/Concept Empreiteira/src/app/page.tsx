import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { Stats } from "@/components/sections/stats"
import { Services } from "@/components/sections/services"
import { Features } from "@/components/sections/features"
import { Portfolio } from "@/components/sections/portfolio"
import { Testimonials } from "@/components/sections/testimonials"
import { Faq } from "@/components/sections/faq"
import { Contact } from "@/components/sections/contact"
import { FloatingWhatsapp } from "@/components/ui/floating-whatsapp"
import { BackToPortfolio } from "@/components/ui/back-to-portfolio"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <Hero />
      <Stats />
      <Services />
      <Features />
      <Portfolio />
      <Testimonials />
      <Faq />
      <Contact />

      <Footer />
      <FloatingWhatsapp />
      <BackToPortfolio />
    </main>
  )
}
