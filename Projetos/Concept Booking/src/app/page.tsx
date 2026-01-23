import { BookingWizard } from "@/components/booking/BookingWizard";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--pk-navy)] text-[var(--pk-text-primary)] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[var(--pk-navy-light)] to-transparent pointer-events-none" />
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[var(--pk-gold)]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-light tracking-widest text-[var(--pk-gold)] uppercase mb-2">Concept</h1>
          <p className="text-sm font-medium tracking-[0.3em] text-[var(--pk-text-secondary)]">BOOKING EXPERIENCE</p>
        </header>

        <BookingWizard />
      </div>
    </main>
  );
}
