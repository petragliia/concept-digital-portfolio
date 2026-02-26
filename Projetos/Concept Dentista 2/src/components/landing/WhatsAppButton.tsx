import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/5513999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all hover:scale-110 flex items-center justify-center animate-bounce-slow"
            aria-label="Fale conosco no WhatsApp"
        >
            <MessageCircle size={32} fill="white" className="text-white" />
        </a>
    );
}
