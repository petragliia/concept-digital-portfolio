"use client"

import { useState, useEffect } from "react"
import {
    DndContext,
    DragOverlay,
    closestCorners,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragStartEvent,
    DragOverEvent,
    DragEndEvent
} from "@dnd-kit/core"
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable"
import { Column } from "./column"
import { LeadCard } from "./lead-card"
import { createPortal } from "react-dom"
import { updateLeadStatusAndOrder } from "../actions"

interface KanbanBoardProps {
    initialData: any[]
}

export function KanbanBoard({ initialData }: KanbanBoardProps) {
    const [columns, setColumns] = useState<any[]>(initialData)
    const [activeId, setActiveId] = useState<string | null>(null)
    const [mounted, setMounted] = useState(false)

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    )

    useEffect(() => {
        setMounted(true)
        setColumns(initialData)
    }, [initialData])

    if (!mounted) return null

    function findColumn(id: string) {
        return columns.find((col) => col.id === id) ||
            columns.find((col) => col.items.some((item: any) => item.id === id))
    }

    function handleDragStart(event: DragStartEvent) {
        setActiveId(event.active.id as string)
    }

    function handleDragOver(event: DragOverEvent) {
        const { active, over } = event
        if (!over) return

        const activeId = active.id
        const overId = over.id

        const activeColumn = findColumn(activeId as string)
        const overColumn = findColumn(overId as string)

        if (!activeColumn || !overColumn || activeColumn === overColumn) {
            return
        }

        // Visual update logic during drag (optional but recommended for smooth UX)
        // For MVP, we might skip complex visual reordering during drag-over unless needed
    }

    async function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event
        const activeId = active.id as string
        const overId = over?.id

        if (!overId) {
            setActiveId(null)
            return
        }

        const activeColumn = findColumn(activeId)
        const overColumn = findColumn(overId as string)

        if (activeColumn && overColumn) {
            // Logic for changing column
            if (activeColumn.id !== overColumn.id) {
                // Moved to another column
                await updateLeadStatusAndOrder(activeId, overColumn.title, 0, overColumn.id)

                // In a real app we would update local state here accurately
                // For now, let's trigger a refresh or simplistic optimistic update
                const newColumns = [...columns]
                const sourceCol = newColumns.find(c => c.id === activeColumn.id)
                const destCol = newColumns.find(c => c.id === overColumn.id)

                if (sourceCol && destCol) {
                    const itemIndex = sourceCol.items.findIndex((i: any) => i.id === activeId)
                    const [item] = sourceCol.items.splice(itemIndex, 1)
                    item.status = destCol.title
                    destCol.items.push(item) // push to end or specific index
                    setColumns(newColumns)
                }
            }
        }

        setActiveId(null)
    }

    function findLead(id: string) {
        for (const col of columns) {
            const item = col.items.find((i: any) => i.id === id)
            if (item) return item
        }
        return null
    }

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCorners}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDragEnd={handleDragEnd}
        >
            <div className="flex h-full gap-4 overflow-x-auto p-4 min-h-[500px]">
                {columns.map((col) => (
                    <Column key={col.id} column={col} />
                ))}
            </div>
            {createPortal(
                <DragOverlay>
                    {activeId ? <LeadCard lead={findLead(activeId)} /> : null}
                </DragOverlay>,
                document.body
            )}
        </DndContext>
    )
}
