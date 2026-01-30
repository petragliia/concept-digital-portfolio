import { create } from 'zustand'

export type Lead = {
    id: string
    title: string
    value: number
    status: string
    // Add other minimal fields needed for board
}

export type Column = {
    id: string
    title: string
    leads: Lead[]
}

interface PipelineState {
    columns: Column[]
    setColumns: (columns: Column[]) => void
    moveLead: (leadId: string, sourceColId: string, destColId: string, sourceIndex: number, destIndex: number) => void
}

export const usePipelineStore = create<PipelineState>((set) => ({
    columns: [],
    setColumns: (columns) => set({ columns }),
    moveLead: (leadId, sourceColId, destColId, sourceIndex, destIndex) =>
        set((state) => {
            const newColumns = [...state.columns]

            const sourceCol = newColumns.find(c => c.id === sourceColId)
            const destCol = newColumns.find(c => c.id === destColId)

            if (!sourceCol || !destCol) return state

            // If moving within same column
            if (sourceColId === destColId) {
                const [movedLead] = sourceCol.leads.splice(sourceIndex, 1)
                sourceCol.leads.splice(destIndex, 0, movedLead)
            } else {
                // Moving to different column
                const [movedLead] = sourceCol.leads.splice(sourceIndex, 1)
                movedLead.status = destCol.title // Update status (optimistic)
                destCol.leads.splice(destIndex, 0, movedLead)
            }

            return { columns: newColumns }
        })
}))
