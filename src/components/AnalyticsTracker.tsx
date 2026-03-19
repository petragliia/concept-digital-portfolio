'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { trackEvent, updateEvent } from '@/lib/supabase';

export function AnalyticsTracker() {
    const pathname = usePathname();
    const currentSessionId = useRef<string | null>(null);
    const startTime = useRef<number>(Date.now());

    useEffect(() => {
        // Ignorar a página de admin para não poluir as métricas
        if (pathname?.startsWith('/admin')) return;

        let intervalId: NodeJS.Timeout;

        const initSession = async () => {
            startTime.current = Date.now();
            const result = await trackEvent('page_views', {
                path: pathname,
                time_spent: 0,
                device: typeof window !== 'undefined' && window.innerWidth < 768 ? 'Mobile' : 'Desktop',
            });
            
            if (result && result.id) {
                currentSessionId.current = result.id;
                
                // A cada 10 segundos, atualiza o tempo gasto na página
                intervalId = setInterval(() => {
                    const elapsedSeconds = Math.floor((Date.now() - startTime.current) / 1000);
                    updateEvent('page_views', result.id, { time_spent: elapsedSeconds });
                }, 10000);
            }
        };

        // Quando a rota mudar, para o tracking anterior e inicia um novo
        initSession();

        return () => {
            if (intervalId) clearInterval(intervalId);
            
            // Faz um update final se tivermos ID
            if (currentSessionId.current) {
                const elapsedSeconds = Math.floor((Date.now() - startTime.current) / 1000);
                updateEvent('page_views', currentSessionId.current, { time_spent: elapsedSeconds });
            }
            currentSessionId.current = null;
        };
    }, [pathname]);

    return null; // Componente invisível
}
