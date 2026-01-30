const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
    // Create columns
    const columns = [
        { title: 'Novo Lead', order: 0 },
        { title: 'Qualificação', order: 1 },
        { title: 'Proposta', order: 2 },
        { title: 'Negociação', order: 3 },
        { title: 'Fechado', order: 4 },
    ]

    for (const col of columns) {
        const createdCol = await prisma.column.create({
            data: {
                title: col.title,
                order: col.order
            }
        })

        // Create dummy leads
        if (col.order === 0) {
            await prisma.lead.create({
                data: {
                    title: 'Empresa ABC Ltda',
                    value: 5000.00,
                    status: col.title,
                    columnId: createdCol.id,
                    order: 0,
                }
            })
        }
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
