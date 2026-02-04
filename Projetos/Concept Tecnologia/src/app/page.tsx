"use client";

import React, { useState } from "react";
import { useFinanceMetrics } from "@/hooks/useFinanceMetrics";
import { useStore } from "@/store/useStore";
import { SummaryCard } from "@/components/dashboard/SummaryCard";
import { ExpenseChart } from "@/components/dashboard/ExpenseChart";
import { TrendChart } from "@/components/dashboard/TrendChart";
import { GoalsCard } from "@/components/dashboard/GoalsCard";
import { DateFilter } from "@/components/dashboard/DateFilter";
import { TransactionList } from "@/components/transactions/TransactionList";
import { TransactionForm } from "@/components/transactions/TransactionForm";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import {
    ArrowDownCircle,
    ArrowUpCircle,
    DollarSign,
    Plus,
    Wallet
} from "lucide-react";

export default function DashboardPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const metrics = useFinanceMetrics();
    const { savingsGoal } = useStore();

    return (
        <main className="container mx-auto p-4 md:p-8 space-y-8 max-w-7xl">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Dashboard Financeiro</h1>
                    <p className="text-gray-500">Acompanhe suas finanças pessoais de forma simples.</p>
                </div>
                <div className="flex items-center gap-3">
                    <DateFilter />
                    <Button onClick={() => setIsModalOpen(true)} className="gap-2">
                        <Plus size={18} />
                        Nova Transação
                    </Button>
                </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <SummaryCard
                    title="Receita Mensal"
                    value={metrics.monthlyIncome}
                    icon={ArrowUpCircle}
                    variant="success"
                />
                <SummaryCard
                    title="Despesa Mensal"
                    value={metrics.monthlyExpense}
                    icon={ArrowDownCircle}
                    variant="danger"
                />
                <SummaryCard
                    title="Saldo Atual"
                    value={metrics.monthlyBalance}
                    icon={Wallet}
                    variant={metrics.isPositive ? "default" : "danger"}
                />
                <GoalsCard
                    currentSavings={Math.max(metrics.monthlyBalance, 0)}
                    goal={savingsGoal.target}
                />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <TrendChart />
                <ExpenseChart />
            </div>

            {/* Recent Transactions */}
            <div>
                <TransactionList />
            </div>

            {/* Add Transaction Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Nova Transação"
            >
                <TransactionForm onSuccess={() => setIsModalOpen(false)} />
            </Modal>
        </main>
    );
}
