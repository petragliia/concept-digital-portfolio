"use client"

import { Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactBar() {
    return (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t border-muted z-50 md:hidden flex gap-4 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
            <Button
                className="flex-1 bg-white border-2 border-primary text-primary hover:bg-muted font-semibold"
                variant="outline"
                onClick={() => window.open('tel:+5511999999999')}
            >
                <Phone className="w-4 h-4 mr-2" />
                Ligar
            </Button>

            <Button
                className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white border-none font-semibold shadow-lg"
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
            </Button>
        </div>
    )
}
