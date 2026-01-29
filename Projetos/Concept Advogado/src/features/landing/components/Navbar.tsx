import Link from "next/link"

export function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-navy-900/80 backdrop-blur-xl border-b border-white/5 supports-[backdrop-filter]:bg-navy-900/60">
            <div className="container mx-auto px-6 h-20 flex justify-between items-center">
                <div className="text-2xl font-serif font-bold tracking-wider relative group cursor-default">
                    <span className="text-gold-500">CONCEPT</span>
                    <span className="text-white ml-2">LAW</span>
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full"></div>
                </div>
                <Link href="/auth/login">
                    <button className="relative overflow-hidden group bg-transparent border border-white/20 hover:border-gold-500 text-white font-medium py-2.5 px-6 transition-all duration-300">
                        <span className="relative z-10 group-hover:text-navy-900 transition-colors duration-300">ÁREA DO CLIENTE</span>
                        <div className="absolute inset-0 bg-gold-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></div>
                    </button>
                </Link>
            </div>
        </nav>
    )
}
