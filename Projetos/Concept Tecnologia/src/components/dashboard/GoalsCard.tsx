import { useStore } from "@/store/useStore";
import { formatCurrency } from "@/utils/currency";
import { Card } from "@/components/ui/Card";
import { CircleDollarSign, Target } from "lucide-react";

interface GoalsCardProps {
    currentSavings: number;
    goal: number;
}

export function GoalsCard({ currentSavings, goal }: GoalsCardProps) {
    const percentage = Math.min((currentSavings / goal) * 100, 100);

    return (
        <Card>
            <div className="flex items-center justify-between pb-2">
                <h3 className="text-sm font-medium text-gray-500">Meta de Economia</h3>
                <Target className="h-4 w-4 text-blue-600" />
            </div>
            <div className="text-2xl font-bold mb-2">
                {formatCurrency(currentSavings)} <span className="text-sm font-normal text-gray-500">/ {formatCurrency(goal)}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                    className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${Math.max(percentage, 0)}%` }}
                ></div>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-right">{percentage.toFixed(0)}% alcançado</p>
        </Card>
    );
}
