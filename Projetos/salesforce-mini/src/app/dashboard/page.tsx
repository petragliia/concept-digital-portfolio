import { getPipeline } from "@/features/pipeline/actions"
import { KanbanBoard } from "@/features/pipeline/components/board"

export default async function DashboardPage() {
    const pipelineData = await getPipeline()

    return (
        <div className="h-full flex flex-col">
            <div className="p-4 border-b flex justify-between items-center bg-card">
                <h1 className="text-xl font-bold">Pipeline de Vendas</h1>
                {/* Add Filters/New Lead button here */}
            </div>
            <div className="flex-1 overflow-hidden">
                <KanbanBoard initialData={pipelineData} />
            </div>
        </div>
    )
}
