/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://pyhcxxjnxmxmvengmppk.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB5aGN4eGpuem14bXZlbmdtcHBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0NDQ1MjgsImV4cCI6MjA1ODA0MDUyOH0.2_1353Q56J41417-9042026-03-19T01:44:08-03:00';

// Criando o cliente apenas se tiver as chaves
export const supabase = supabaseUrl && supabaseKey
    ? createClient(supabaseUrl, supabaseKey)
    : null;

// Helper para registro seguro
export const trackEvent = async (table: string, data: any) => {
    if (!supabase) {
        console.warn(`[Analytics] Tentativa de gravar em '${table}' ignorada (chaves do Supabase não configuradas)`);
        return null;
    }

    try {
        const { error, data: result } = await supabase.from(table).insert([data]).select().single();
        if (error) throw error;
        return result;
    } catch (err) {
        console.error(`[Analytics] Falha ao registrar evento na tabela '${table}':`, err);
        return null;
    }
};

export const updateEvent = async (table: string, id: string, data: any) => {
    if (!supabase) return null;

    try {
        const { error, data: result } = await supabase.from(table).update(data).eq('id', id).select().single();
        if (error) throw error;
        return result;
    } catch (err) {
        console.error(`[Analytics] Falha ao atualizar evento na tabela '${table}':`, err);
        return null;
    }
}
