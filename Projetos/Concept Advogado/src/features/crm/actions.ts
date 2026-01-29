'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function updateLeadStatus(leadId: string, newStatus: string) {
    const supabase = await createClient()

    const { error } = await supabase
        .from('leads')
        .update({ status: newStatus })
        .eq('id', leadId)

    if (error) {
        return { error: 'Failed to update status' }
    }

    revalidatePath('/dashboard')
    return { success: true }
}

export async function signOut() {
    const supabase = await createClient()
    await supabase.auth.signOut()
    revalidatePath('/', 'layout')
}
