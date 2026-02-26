"use client"

import { MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export function FloatingWhatsapp() {
    return (
        <motion.a
            href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20vi%20o%20site%20e%20gostaria%20de%20um%20or%C3%A7amento"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center hover:scale-110"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring" }}
            whileHover={{ y: -5 }}
        >
            <MessageCircle className="h-8 w-8" fill="white" />
            <span className="sr-only">Falar no WhatsApp</span>
        </motion.a>
    )
}
