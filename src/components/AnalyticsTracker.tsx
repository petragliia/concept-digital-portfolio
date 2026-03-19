'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { trackEvent, updateEvent } from '@/lib/supabase';

export function AnalyticsTracker() {
    const pathname = usePathname();
    const currentSessionId = useRef<string | null>(null);
    const startTime = useRef<number>(Date.now());
    const maxScroll = useRef<number>(0);

    useEffect(() => {
        // Ignorar a página de admin para não poluir as métricas
        if (pathname?.startsWith('/admin')) return;

        let intervalId: NodeJS.Timeout;

        const handleScroll = () => {
            const h = document.documentElement;
            const b = document.body;
            const st = 'scrollTop' in h ? h.scrollTop : b.scrollTop;
            const sh = 'scrollHeight' in h ? h.scrollHeight : b.scrollHeight;
            
            // Protect against dividing by zero on very short pages
            const scrollableHeight = sh - h.clientHeight;
            if (scrollableHeight <= 0) return;
            
            const pct = Math.round((st / scrollableHeight) * 100);
            if (pct > maxScroll.current) maxScroll.current = pct > 100 ? 100 : pct;
        };

        const initSession = async () => {
            startTime.current = Date.now();
            maxScroll.current = 0; // reset for new route
            
            window.addEventListener('scroll', handleScroll, { passive: true });

            const result = await trackEvent('page_views', {
                path: pathname,
                time_spent: 0,
                max_scroll: maxScroll.current,
                device: typeof window !== 'undefined' && window.innerWidth < 768 ? 'Mobile' : 'Desktop',
            });
            
            if (result && result.id) {
                currentSessionId.current = result.id;
                
                // A cada 10 segundos, atualiza o tempo e a rolagem máxima
                intervalId = setInterval(() => {
                    const elapsedSeconds = Math.floor((Date.now() - startTime.current) / 1000);
                    updateEvent('page_views', result.id, { 
                        time_spent: elapsedSeconds,
                        max_scroll: maxScroll.current 
                    });
                }, 10000);
            }
        };

        // Quando a rota mudar, para o tracking anterior e inicia um novo
        initSession();

        return () => {
            if (intervalId) clearInterval(intervalId);
            window.removeEventListener('scroll', handleScroll);
            
            // Faz um update final se tivermos ID
            if (currentSessionId.current) {
                const elapsedSeconds = Math.floor((Date.now() - startTime.current) / 1000);
                updateEvent('page_views', currentSessionId.current, { 
                    time_spent: elapsedSeconds,
                    max_scroll: maxScroll.current 
                });
            }
            currentSessionId.current = null;
        };
    }, [pathname]);

    return null; // Componente invisível
}
