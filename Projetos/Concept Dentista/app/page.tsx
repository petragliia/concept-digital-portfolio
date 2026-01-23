import { Hero } from "@/components/hero"
import { BeforeAfter } from "@/components/before-after"
import { SocialProof } from "@/components/social-proof"
import { ContactBar } from "@/components/contact-bar"

export default function Home() {
  return (
    <main className="min-h-screen pb-20 md:pb-0">
      <Hero />
      <BeforeAfter />
      <SocialProof />

      {/* Footer / Contact for Desktop */}
      <footer className="hidden md:block py-12 bg-muted/30 border-t border-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-6">Entre em contato</h2>
          <div className="flex justify-center gap-8">
            <div className="text-left">
              <h4 className="font-semibold text-primary mb-2">Concept Health</h4>
              <p className="text-muted-foreground">Av. Paulista, 1000 - Jardins</p>
              <p className="text-muted-foreground">São Paulo - SP</p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-primary mb-2">Contato</h4>
              <p className="text-muted-foreground">(11) 99999-9999</p>
              <p className="text-muted-foreground">contato@concepthealth.com.br</p>
            </div>
          </div>
          <div className="mt-12 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Concept Health. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Bar */}
      <ContactBar />
    </main>
  )
}
