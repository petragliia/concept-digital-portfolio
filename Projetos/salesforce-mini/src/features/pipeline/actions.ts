"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function getPipeline() {
    const columns = await prisma.column.findMany({
        include: {
            items: {
                orderBy: { order: 'asc' }
            }
        },
        orderBy: { order: 'asc' }
    })

    return columns
}

export async function updateLeadStatusAndOrder(leadId: string, newStatus: string, newOrder: number, columnId: string) {
    try {
        await prisma.lead.update({
            where: { id: leadId },
            data: {
                status: newStatus,
                order: newOrder,
                columnId: columnId
            }
        })
        revalidatePath('/dashboard')
    } catch (error) {
        console.error("Failed to update lead order:", error)
        throw error
    }
}
