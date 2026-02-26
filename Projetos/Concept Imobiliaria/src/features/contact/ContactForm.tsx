import { Button } from "@/components/ui/Button";

// KISS: Using simple HTML form with native validation for now, 
// as adding React Hook Form might fail YAGNI if simple validation is enough.
// Separation of Concerns: This component handles only the form UI and submission logic.

export function ContactForm() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, logic to send data would go here
        alert("Mensagem enviada! Entraremos em contato em breve.");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-xl w-full border border-gray-100"
        >
            <div className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nome Completo
                    </label>
                    <input
                        type="text"
                        id="name"
                        required
                        placeholder="Seu nome"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors bg-gray-50"
                    />
                </div>
                <div>
                    <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-2">
                        WhatsApp
                    </label>
                    <input
                        type="tel"
                        id="whatsapp"
                        required
                        placeholder="(11) 99999-9999"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors bg-gray-50"
                    />
                </div>
                <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                        Interesse
                    </label>
                    <select
                        id="interest"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors bg-gray-50"
                    >
                        <option value="">Selecione...</option>
                        <option value="comprar">Comprar Imóvel</option>
                        <option value="vender">Vender Imóvel</option>
                        <option value="investimento">Investimento</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Mensagem (Opcional)
                    </label>
                    <textarea
                        id="message"
                        rows={4}
                        placeholder="Conte-nos o que você busca..."
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors bg-gray-50"
                    />
                </div>
                <Button type="submit" fullWidth size="lg">
                    Receber Atendimento Personalizado
                </Button>
            </div>
        </form>
    );
}
