"use client";

import { useInventory } from "@/hooks/useInventory";
import LowStockAlert from "@/components/LowStockAlert";
import InventoryTable from "@/components/InventoryTable";
import QuickAddFAB from "@/components/QuickAddFAB";

export default function Home() {
    const { items, addItem, updateStock, isLoaded } = useInventory();

    // Calculate low stock count
    const lowStockCount = items.filter((i) => i.qty < 5).length;

    if (!isLoaded) {
        return <div className="p-4 text-center">Loading...</div>;
    }

    return (
        <main className="min-h-screen pb-24 bg-gray-50">
            <LowStockAlert count={lowStockCount} />

            <div className="max-w-4xl mx-auto p-4 pt-16">
                <header className="mb-6">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Concept Stock</h1>
                    <p className="text-gray-500">Inventory Management System</p>
                </header>

                <InventoryTable items={items} onUpdateStock={updateStock} />
            </div>

            <QuickAddFAB onAdd={addItem} />
        </main>
    );
}
