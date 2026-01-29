'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function submitLead(formData: FormData) {
    const supabase = await createClient()

    const name = formData.get('name') as string
    const company = formData.get('company') as string
    const email = formData.get('email') as string
    const message = `Empresa: ${company}` // Mapping company to message for now or add column

    // Basic validation
    if (!name || !email) {
        return { error: 'Nome e Email são obrigatórios.' }
    }

    // Insert into DB
    const { error } = await supabase
        .from('leads')
        .insert({
            name,
            email,
            message, // We might want to expand the table schema later to include 'company'
            status: 'Novo'
        })

    if (error) {
        console.error('Error inserting lead:', error)
        return { error: 'Erro ao salvar. Tente novamente.' }
    }

    revalidatePath('/dashboard')
    return { success: true }
}
