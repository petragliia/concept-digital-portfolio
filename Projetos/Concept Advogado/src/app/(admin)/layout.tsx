import { SignOutButton } from '@/features/crm/components/SignOutButton'

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white border-b border-gray-200">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="font-serif font-bold text-navy-900 text-xl">
                        LegalConnect <span className="text-gold-500 text-sm font-sans uppercase tracking-widest ml-2">Admin</span>
                    </div>
                    <SignOutButton />
                </div>
            </header>
            <main className="container mx-auto px-6 py-8">
                {children}
            </main>
        </div>
    )
}
