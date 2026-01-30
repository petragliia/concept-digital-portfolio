"use client"

import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function LeadCard({ lead }: { lead: any }) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({
        id: lead.id,
        data: {
            type: "Lead",
            lead
        }
    })

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.3 : 1
    }

    const value = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(lead.value))

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="touch-none">
            <Card className="cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow group border-l-4 border-l-primary/50">
                <CardHeader className="p-3 pb-0 space-y-0">
                    <CardTitle className="text-sm font-semibold line-clamp-2">{lead.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-3 pt-2 text-xs text-muted-foreground">
                    <div className="flex justify-between items-center mt-2">
                        <span className="font-bold text-primary">{value}</span>
                    </div>
                    {lead.contact && (
                        <div className="mt-2 flex items-center gap-1 text-[10px] text-muted-foreground/60">
                            <span>👤 {lead.contact.name}</span>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}
