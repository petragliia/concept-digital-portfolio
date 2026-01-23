import { Scale, Gavel, FileText, CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-gray-200 selection:bg-gold-500 selection:text-navy-900">
      {/* Navigation (Simple Brand) */}
      <nav className="fixed top-0 w-full z-50 bg-navy-900/90 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-serif font-bold text-gold-500 tracking-wider">
            CONCEPT <span className="text-white">LAW</span>
          </div>
          <button className="bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold py-2 px-6 rounded-sm transition-all duration-300">
            Fale Conosco
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Texture/Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-navy-900)_0%,_#000f20_100%)] z-0" />

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-0 mix-blend-overlay" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            <span className="block text-white">Defendendo seu</span>
            <span className="bg-gradient-to-r from-gold-400 to-gold-500 bg-clip-text text-transparent">
              Legado Empresarial
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light">
            Soluções jurídicas de elite para corporações que exigem excelência, discrição e resultados.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold py-4 px-8 rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300 transform hover:-translate-y-1">
              Agendar Consultoria
            </button>
            <button className="border border-white/20 hover:border-gold-500 hover:text-gold-500 text-white font-medium py-4 px-8 rounded-sm transition-all duration-300 backdrop-blur-sm">
              Conheça Nossa Firma
            </button>
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section className="py-24 bg-white text-navy-900 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-[0.2em] text-gold-500 uppercase mb-3">Nossa Expertise</h2>
            <h3 className="text-4xl font-serif font-bold text-navy-900">Áreas de Atuação</h3>
            <div className="w-24 h-1 bg-gold-500 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative p-10 border border-gray-200 bg-gray-50 hover:bg-navy-900 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-6 inline-block p-4 bg-navy-900 group-hover:bg-gold-500 text-gold-500 group-hover:text-navy-900 transition-colors duration-500 rounded-full">
                <Scale className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-serif font-bold mb-4 group-hover:text-white transition-colors duration-500">Direito Corporativo</h4>
              <p className="text-gray-600 group-hover:text-gray-300 leading-relaxed transition-colors duration-500">
                Estruturação societária, fusões e aquisições (M&A) e governança corporativa para garantir a longevidade do seu negócio.
              </p>
              <div className="mt-8 flex items-center text-navy-900 group-hover:text-gold-500 font-bold text-sm tracking-wide">
                SAIBA MAIS <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative p-10 border border-gray-200 bg-gray-50 hover:bg-navy-900 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-6 inline-block p-4 bg-navy-900 group-hover:bg-gold-500 text-gold-500 group-hover:text-navy-900 transition-colors duration-500 rounded-full">
                <Gavel className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-serif font-bold mb-4 group-hover:text-white transition-colors duration-500">Litígio Estratégico</h4>
              <p className="text-gray-600 group-hover:text-gray-300 leading-relaxed transition-colors duration-500">
                Representação em disputas complexas e arbitragem, protegendo os interesses da sua empresa com vigor e inteligência.
              </p>
              <div className="mt-8 flex items-center text-navy-900 group-hover:text-gold-500 font-bold text-sm tracking-wide">
                SAIBA MAIS <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative p-10 border border-gray-200 bg-gray-50 hover:bg-navy-900 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-6 inline-block p-4 bg-navy-900 group-hover:bg-gold-500 text-gold-500 group-hover:text-navy-900 transition-colors duration-500 rounded-full">
                <FileText className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-serif font-bold mb-4 group-hover:text-white transition-colors duration-500">Compliance & Contratos</h4>
              <p className="text-gray-600 group-hover:text-gray-300 leading-relaxed transition-colors duration-500">
                Análise minuciosa de riscos e elaboração de contratos sólidos para blindar suas operações de passivos futuros.
              </p>
              <div className="mt-8 flex items-center text-navy-900 group-hover:text-gold-500 font-bold text-sm tracking-wide">
                SAIBA MAIS <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEAD MAGNET SECTION */}
      <section className="py-24 bg-navy-900/50 relative">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-gold-500 font-bold tracking-widest uppercase mb-4 text-sm">Análise Exclusiva</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              Sua empresa está juridicamente blindada?
            </h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Agende uma <strong>Avaliação de Risco Gratuita</strong> com nossos especialistas seniores. Identificamos vulnerabilidades contratuais e regulatórias antes que se tornem problemas.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-300">
                <CheckCircle className="text-gold-500 w-5 h-5 mr-3" />
                Análise preliminar de contratos sociais
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="text-gold-500 w-5 h-5 mr-3" />
                Diagnóstico de conformidade trabalhista
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="text-gold-500 w-5 h-5 mr-3" />
                Mapeamento de riscos tributários
              </li>
            </ul>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white p-8 md:p-10 rounded-sm shadow-2xl border-t-4 border-gold-500">
              <h4 className="text-navy-900 font-serif font-bold text-2xl mb-2">Solicitar Diagnóstico</h4>
              <p className="text-gray-500 mb-6 text-sm">Preencha seus dados para contato confidencial.</p>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Nome Completo</label>
                  <input className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-navy-900 focus:outline-none rounded-sm bg-opacity-50 text-navy-900" type="text" id="name" placeholder="Ex: Dr. Roberto Silva" />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company">Empresa</label>
                  <input className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-navy-900 focus:outline-none rounded-sm bg-opacity-50 text-navy-900" type="text" id="company" placeholder="Ex: Silva & Associados Ltda" />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email Corporativo</label>
                  <input className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-navy-900 focus:outline-none rounded-sm bg-opacity-50 text-navy-900" type="email" id="email" placeholder="nome@empresa.com.br" />
                </div>
                <button className="w-full bg-navy-900 hover:bg-navy-800 text-white font-bold py-4 px-8 rounded-sm transition-colors duration-300 mt-2">
                  SOLICITAR AVALIAÇÃO
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#001021] text-white py-16 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-serif font-bold text-gold-500 tracking-wider mb-6">
                CONCEPT <span className="text-white">LAW</span>
              </div>
              <p className="text-gray-400 max-w-sm leading-relaxed mb-6">
                Compromisso inabalável com a excelência jurídica e a defesa dos interesses de nossos parceiros corporativos.
              </p>
              <div className="text-gold-500 font-bold">
                OAB/SP 123.456
              </div>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-6 text-white">Escritório</h5>
              <p className="text-gray-400 mb-2">Av. Paulista, 1000 - 15º Andar</p>
              <p className="text-gray-400 mb-2">São Paulo, SP - Brasil</p>
              <p className="text-gray-400 hover:text-gold-500 transition-colors cursor-pointer">+55 (11) 3000-0000</p>
              <p className="text-gray-400 hover:text-gold-500 transition-colors cursor-pointer">contato@conceptlaw.com.br</p>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-6 text-white">Links Rápidos</h5>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-gold-500 transition-colors cursor-pointer">Sobre Nós</li>
                <li className="hover:text-gold-500 transition-colors cursor-pointer">Áreas de Atuação</li>
                <li className="hover:text-gold-500 transition-colors cursor-pointer">Nossa Equipe</li>
                <li className="hover:text-gold-500 transition-colors cursor-pointer">Carreiras</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <p>&copy; 2024 Concept Law Partners. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <span className="hover:text-white cursor-pointer">Termos de Uso</span>
              <span className="hover:text-white cursor-pointer">Política de Privacidade</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
