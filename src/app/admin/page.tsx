/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Users, Clock, MousePointerClick, TrendingDown, RefreshCw, AlertTriangle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, CartesianGrid } from 'recharts';
import { format, subDays, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface AnalyticsData {
    pageViews: any[];
    projectClicks: any[];
    formEvents: any[];
}

export default function AdminDashboard() {
    const [data, setData] = useState<AnalyticsData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            if (!supabase) throw new Error("Supabase não configurado.");

            // Pegar os últimos 30 dias para não sobrecarregar
            const thirtyDaysAgo = new Date();
            thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
            const dateStr = thirtyDaysAgo.toISOString();

            const [views, clicks, forms] = await Promise.all([
                supabase.from('page_views').select('*').gte('created_at', dateStr).order('created_at', { ascending: true }),
                supabase.from('project_clicks').select('*').gte('created_at', dateStr),
                supabase.from('form_events').select('*').gte('created_at', dateStr)
            ]);

            if (views.error) throw views.error;

            setData({
                pageViews: views.data || [],
                projectClicks: clicks.data || [],
                formEvents: forms.data || []
            });
        } catch (err: any) {
            console.error(err);
            setError(err.message || 'Erro ao buscar dados do Supabase. Verifique se as variáveis de ambiente e as tabelas foram criadas.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#020408] text-white flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <RefreshCw className="w-8 h-8 animate-spin text-digital-primary" />
                    <p className="text-gray-400 font-mono text-sm tracking-widest">CARREGANDO DADOS...</p>
                </div>
            </div>
        );
    }

    if (error || !data) {
        return (
            <div className="min-h-screen bg-[#020408] text-white p-8">
                <div className="max-w-4xl mx-auto bg-red-900/20 border border-red-500/50 rounded-xl p-8 text-center flex flex-col items-center gap-4">
                    <AlertTriangle className="w-12 h-12 text-red-500" />
                    <h2 className="text-xl font-bold">Erro de Conexão</h2>
                    <p className="text-red-200">{error}</p>
                    <button onClick={fetchData} className="px-6 py-2 bg-red-500/20 hover:bg-red-500/40 border border-red-500 rounded-lg transition-all mt-4">
                        Tentar Novamente
                    </button>
                    <p className="text-sm text-gray-400 mt-4 max-w-lg">
                        Lembre-se de criar o seu projeto no Supabase, colocar as chaves no <b>.env.local</b> e rodar o script SQL de configuração.
                    </p>
                </div>
            </div>
        );
    }

    // Cálculos e Métricas
    const totalViews = data.pageViews.length;
    
    // Tempo médio ignorando os bounces bizarros (< 2s) para uma métrica mais realista
    const validSessions = data.pageViews.filter(v => v.time_spent > 2);
    const avgTimeSeconds = validSessions.length > 0 
        ? Math.round(validSessions.reduce((acc, curr) => acc + curr.time_spent, 0) / validSessions.length)
        : 0;
    const avgTimeStr = `${Math.floor(avgTimeSeconds / 60)}m ${avgTimeSeconds % 60}s`;

    // Abandono de Formulário
    const formStarts = data.formEvents.filter(e => e.event_type === 'start').length;
    const formSubmits = data.formEvents.filter(e => e.event_type === 'submit').length;
    const abandonmentRate = formStarts > 0 ? Math.round(((formStarts - formSubmits) / formStarts) * 100) : 0;

    // Devices
    const mobileViews = data.pageViews.filter(v => v.device === 'Mobile').length;
    const desktopViews = totalViews - mobileViews;

    // Agrupando acessos por dia para o gráfico
    const viewsByDate = data.pageViews.reduce((acc: any, curr) => {
        const date = format(parseISO(curr.created_at), 'dd/MM', { locale: ptBR });
        acc[date] = (acc[date] || 0) + 1;
        return acc;
    }, {});

    // Preenchendo os últimos 7 dias mesmo se não tiver acesso
    const chartData = [];
    for (let i = 6; i >= 0; i--) {
        const date = format(subDays(new Date(), i), 'dd/MM', { locale: ptBR });
        chartData.push({ data: date, acessos: viewsByDate[date] || 0 });
    }

    // Ranking de Projetos
    const projectRankingMap = data.projectClicks.reduce((acc: any, curr) => {
        acc[curr.project_title] = (acc[curr.project_title] || 0) + 1;
        return acc;
    }, {});
    const projectRanking = Object.entries(projectRankingMap)
        .map(([name, clicks]) => ({ name, clicks }))
        .sort((a: any, b: any) => b.clicks - a.clicks)
        .slice(0, 5); // Top 5

    return (
        <div className="min-h-screen bg-[#020408] text-white p-6 lg:p-12 font-inter selection:bg-digital-primary/30">
            <div className="max-w-7xl mx-auto space-y-8">
                
                {/* Header */}
                <div className="flex justify-between items-end border-b border-white/10 pb-6">
                    <div>
                        <p className="text-digital-primary text-xs font-bold uppercase tracking-[0.2em] mb-2">Restrito</p>
                        <h1 className="text-3xl md:text-4xl font-bold font-montserrat">Dashboard <span className="text-gray-500">Analytics</span></h1>
                        <p className="text-gray-400 mt-2">Visão geral do tráfego e engajamento do seu portfólio nos últimos 30 dias.</p>
                    </div>
                    <button onClick={fetchData} className="hidden md:flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                        <RefreshCw className="w-4 h-4" /> Atualizar
                    </button>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <MetricCard 
                        title="Total de Visitantes" 
                        value={totalViews} 
                        icon={<Users className="w-5 h-5 text-digital-primary" />} 
                        subtitle={`${mobileViews} Mobile • ${desktopViews} Desktop`} 
                    />
                    <MetricCard 
                        title="Retenção Média" 
                        value={avgTimeStr} 
                        icon={<Clock className="w-5 h-5 text-digital-primary" />} 
                        subtitle={validSessions.length > 0 ? "Sessões ativas com > 2s" : "Dados insuficientes"} 
                    />
                    <MetricCard 
                        title="Projetos Abertos" 
                        value={data.projectClicks.length} 
                        icon={<MousePointerClick className="w-5 h-5 text-digital-primary" />} 
                        subtitle="Cliques totais em modais" 
                    />
                    <MetricCard 
                        title="Taxa de Abandono" 
                        value={`${abandonmentRate}%`} 
                        icon={<TrendingDown className="w-5 h-5 text-red-400" />} 
                        subtitle={`${formStarts} iniciaram • ${formSubmits} enviaram`} 
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Gráfico de Acessos Principais */}
                    <div className="lg:col-span-2 bg-[#0A0A0A] border border-white/5 rounded-2xl p-6">
                        <h3 className="text-lg font-bold mb-6 font-montserrat">Tráfego Diário (Últimos 7 dias)</h3>
                        <div className="h-72 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={chartData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                                    <XAxis dataKey="data" stroke="#666" tick={{ fill: '#666', fontSize: 12 }} axisLine={false} tickLine={false} />
                                    <YAxis stroke="#666" tick={{ fill: '#666', fontSize: 12 }} axisLine={false} tickLine={false} />
                                    <Tooltip 
                                        contentStyle={{ backgroundColor: '#111', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                                        itemStyle={{ color: '#c5a059' }}
                                    />
                                    <Line type="monotone" dataKey="acessos" stroke="#c5a059" strokeWidth={3} dot={{ r: 4, fill: '#0A0A0A', strokeWidth: 2 }} activeDot={{ r: 6 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Gráfico de Projetos Mais Clicados */}
                    <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 flex flex-col">
                        <h3 className="text-lg font-bold mb-6 font-montserrat">Projetos Mais Populares</h3>
                        {projectRanking.length > 0 ? (
                            <div className="flex-1 w-full flex items-end">
                                <ResponsiveContainer width="100%" height={260}>
                                    <BarChart data={projectRanking} layout="vertical" margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                                        <XAxis type="number" hide />
                                        <YAxis dataKey="name" type="category" width={110} stroke="#888" tick={{ fill: '#888', fontSize: 11 }} axisLine={false} tickLine={false} />
                                        <Tooltip 
                                            cursor={{fill: 'rgba(255,255,255,0.02)'}}
                                            contentStyle={{ backgroundColor: '#111', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                                            formatter={(value) => [`${value} cliques`, 'Cliques']}
                                        />
                                        <Bar dataKey="clicks" fill="url(#goldGradient)" radius={[0, 4, 4, 0]} barSize={20} />
                                        <defs>
                                            <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="0">
                                                <stop offset="0%" stopColor="#8a6e3d" />
                                                <stop offset="100%" stopColor="#c5a059" />
                                            </linearGradient>
                                        </defs>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        ) : (
                            <div className="flex-1 flex flex-col items-center justify-center text-gray-500 gap-2">
                                <MousePointerClick className="w-8 h-8 opacity-20" />
                                <p className="text-sm">Nenhum clique registrado ainda</p>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}

function MetricCard({ title, value, icon, subtitle }: { title: string, value: string | number, icon: React.ReactNode, subtitle: string }) {
    return (
        <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-digital-primary/30 transition-colors">
            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                {icon}
            </div>
            <div className="relative z-10">
                <p className="text-gray-400 text-sm font-medium mb-1">{title}</p>
                <h3 className="text-3xl font-bold text-white mb-2 font-montserrat">{value}</h3>
                <p className="text-xs text-gray-500">{subtitle}</p>
            </div>
            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-digital-primary/50 to-transparent w-full scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
        </div>
    );
}
