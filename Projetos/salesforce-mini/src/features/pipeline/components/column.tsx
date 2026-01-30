"use client"

import { useSortable } from "@dnd-kit/sortable"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { LeadCard } from "./lead-card"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

interface ColumnProps {
    column: any
}

export function Column({ column }: ColumnProps) {
    // We use useSortable for the column itself if we want columns to be reorderable
    // But strictly for dropping items INTO it, standard SortableContext is enough if logic handles it
    // However, dragging to an empty column requires it to be a droppable zone

    const { setNodeRef } = useSortable({
        id: column.id,
        data: {
            type: "Column",
            column
        },
        disabled: true // Disable column reordering for now
    })

    return (
        <Card className="w-80 h-full flex flex-col bg-muted/50 rounded-lg border-2 border-transparent hover:border-border transition-colors h-[calc(100vh-120px)]" ref={setNodeRef}>
            <CardHeader className="p-4 pb-2 bg-background/50 rounded-t-lg">
                <CardTitle className="text-sm font-medium flex justify-between items-center">
                    {column.title}
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full border">
                        {column.items.length}
                    </span>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 p-2 flex flex-col gap-2 overflow-y-auto">
                <SortableContext items={column.items.map((i: any) => i.id)} strategy={verticalListSortingStrategy}>
                    {column.items.map((lead: any) => (
                        <LeadCard key={lead.id} lead={lead} />
                    ))}
                </SortableContext>
            </CardContent>
        </Card>
    )
}
