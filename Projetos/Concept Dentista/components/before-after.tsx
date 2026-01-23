"use client"

import ReactCompareImage from "react-compare-image"
import { motion } from "framer-motion"

export function BeforeAfter() {
    return (
        <section className="w-full py-20 bg-muted/20 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        Transformações <span className="text-primary">Reais</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Veja o impacto da harmonização facial e dos tratamentos estéticos na autoestima dos nossos pacientes.
                        Arraste para ver o antes e depois.
                    </p>
                </div>

                <div className="flex justify-center">
                    {/* 
                In a real scenario, we would map through multiple cases or have a carousel. 
                For this MVP/Landing Page, a single impressive hero comparison is efficient.
                I'm using placeholders from a reliable placeholder service or just colored blocks if offline.
                Since I cannot fetch external URLs reliably without knowing if I have access, I will use 
                placeholders that I can control or assume valid generic ones.
                Actually, standard best practice for these demos is to use Next.js public folder images.
                Since I can't put images there easily, I will use solid color divs? No, react-compare-image expects images.
                I will use a data URI for a simple placeholder or just referenced placeholders if I had them.
                
                Let's use a simple SVG data URI or online placeholder if allowed. 
                Plan B: Use local placeholder images if I could generate them, but I can't generate images files easily to disk without the tool (which I have but it's for UI designs, not photo content).
                
                I'll use "https://via.placeholder.com/600x400/e2e8f0/94a3b8?text=Antes" types if I assume internet.
                Given "Offline" preference usually, I'll try to be safe. But user didn't say fully offline.
                I'll use placeholder.com for now.
             */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full max-w-3xl aspect-[16/9] shadow-2xl rounded-2xl overflow-hidden border-4 border-white"
                    >
                        {/* 
                NOTE: Ideally these should be real images. 
             */}
                        <ReactCompareImage
                            leftImage="https://placehold.co/800x500/e2e8f0/1e293b?text=Antes"
                            rightImage="https://placehold.co/800x500/008080/ffffff?text=Depois"
                            sliderLineColor="#ffffff"
                            handleSize={40}
                            sliderLineWidth={2}
                        />

                        <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-md text-sm font-medium backdrop-blur-sm pointer-events-none">
                            Arraste o cursor &rarr;
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
