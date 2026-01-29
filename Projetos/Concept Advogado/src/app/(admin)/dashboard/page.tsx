import { createClient } from '@/lib/supabase/server'
import { LeadCard } from '@/features/crm/components/LeadCard'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
    const supabase = await createClient()

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
        redirect('/auth/login')
    }

    const { data: leads, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false })

    if (error) {
        return <div>Erro ao carregar leads: {error.message}</div>
    }

    const groups = {
        'Novo': leads?.filter(l => l.status === 'Novo') || [],
        'Em Contato': leads?.filter(l => l.status === 'Em Contato') || [],
        'Cliente Fechado': leads?.filter(l => l.status === 'Cliente Fechado') || [],
        'Arquivado': leads?.filter(l => l.status === 'Arquivado') || [],
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-navy-900 mb-8">Gestão de Leads</h1>

            <div className="grid md:grid-cols-4 gap-6">
                {Object.entries(groups).map(([status, items]) => (
                    <div key={status} className="flex flex-col gap-4">
                        <div className="flex items-center justify-between pb-2 border-b-2 border-gold-500/20">
                            <h3 className="font-bold text-gray-700">{status}</h3>
                            <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">{items.length}</span>
                        </div>
                        {items.length === 0 ? (
                            <div className="text-sm text-gray-400 italic py-4 border border-dashed rounded text-center">
                                Vazio
                            </div>
                        ) : (
                            items.map(lead => (
                                <LeadCard key={lead.id} lead={lead} />
                            ))
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
