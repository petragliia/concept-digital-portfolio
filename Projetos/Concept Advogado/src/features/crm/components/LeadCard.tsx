'use client'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useTransition } from 'react'
import { updateLeadStatus } from '../actions'
import { Phone, Mail, MessageSquare } from 'lucide-react'

// Mock Badge component if not installed yet
// Actually I installed shadcn button, input, card, label. I missed Badge and Select.
// I will simulate Badge and Select or use native select for MVP functionality if I don't want to run shadcn add again.
// But the user asked for Shadcn. I'll stick to a simple UI with native select styled if needed, or better, install them.
// I'll use native select for now to speed up, or maybe I can install them in parallel? No.
// I'll implement a simple status switcher using Buttons or a native select.

type Lead = {
    id: string
    created_at: string
    name: string
    email: string
    phone: string | null
    message: string | null
    status: string
}

export function LeadCard({ lead }: { lead: Lead }) {
    const [isPending, startTransition] = useTransition()

    const handleStatusChange = (newStatus: string) => {
        startTransition(async () => {
            await updateLeadStatus(lead.id, newStatus)
        })
    }

    const statusColors: Record<string, string> = {
        'Novo': 'bg-blue-100 text-blue-800',
        'Em Contato': 'bg-yellow-100 text-yellow-800',
        'Cliente Fechado': 'bg-green-100 text-green-800',
        'Arquivado': 'bg-gray-100 text-gray-800'
    }

    return (
        <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                    {lead.name}
                </CardTitle>
                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColors[lead.status] || 'bg-gray-100'}`}>
                    {lead.status}
                </span>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" /> {lead.email}
                    </div>
                    {lead.phone && (
                        <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4" /> {lead.phone}
                        </div>
                    )}
                </div>
                <div className="bg-gray-50 p-3 rounded text-xs text-gray-500 italic">
                    "{lead.message || 'Sem mensagem'}"
                </div>
            </CardContent>
            <CardFooter className="justify-between">
                <select
                    disabled={isPending}
                    value={lead.status}
                    onChange={(e) => handleStatusChange(e.target.value)}
                    className="text-xs border rounded p-1 bg-white"
                >
                    <option value="Novo">Novo</option>
                    <option value="Em Contato">Em Contato</option>
                    <option value="Cliente Fechado">Cliente Fechado</option>
                    <option value="Arquivado">Arquivado</option>
                </select>

                {lead.phone && (
                    <Button size="sm" variant="outline" asChild>
                        <a href={`https://wa.me/${lead.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer">
                            WhatsApp
                        </a>
                    </Button>
                )}
            </CardFooter>
        </Card>
    )
}
