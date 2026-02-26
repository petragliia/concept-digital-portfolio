# Product Requirements Document (PRD) - Landing Page Dentista Premium

## 1. Visão Geral do Projeto
Desenvolvimento de uma Landing Page de alta conversão para clínicas odontológicas. O design deve transmitir limpeza, modernidade e confiança ("Clean Health Aesthetic"), focado na captação de leads via WhatsApp e agendamento.
Este projeto faz parte do portfólio da agência "Concept Digital".

## 2. Análise de Interface (Baseada no Upload)
* **Estilo Visual:** Minimalista, uso extensivo de "whitespace" (espaço em branco).
* **Paleta de Cores:**
    * Primary: Royal Blue (`#0056D2`) - Botões e CTAs.
    * Secondary: Light Blue (`#E6F0FA`) - Backgrounds alternados.
    * Accent: Cyan/Teal (detalhes sutis).
    * Text: Dark Grey (`#1A1A1A`) para leitura, Branco para contraste.
* **Tipografia:**
    * Headings: Serifada moderna (Ex: *Playfair Display* ou *Merriweather*) para autoridade.
    * Body: Sans-serif limpa (Ex: *Inter* ou *Lato*) para legibilidade.
* **Shapes:** Bordas arredondadas suaves (Radius: `rounded-2xl` ou `rounded-3xl`).

## 3. Stack Tecnológica & Bibliotecas (Padrão Concept Digital)
* **Framework:** Next.js 14+ (App Router).
* **Estilização:** Tailwind CSS.
* **Animações:** Framer Motion (para "fade-in" dos elementos ao rolar a página).
* **Ícones:** Lucide-react (padrão leve e moderno).
* **Fontes:** `next/font/google`.

## 4. Estrutura de Componentes Identificados
A página deve ser dividida em componentes modulares para facilitar a manutenção:

1.  **Header/Navbar:**
    * Logo à esquerda.
    * Links de navegação (âncoras para seções).
    * Botão "Ligue Agora" (destaque sutil).
2.  **Hero Section:**
    * H1 de impacto ("Best Dental Care In Town").
    * Subtítulo persuasivo.
    * CTA Principal ("Request Appointment") com efeito de hover.
    * Imagem Hero (Recorte de profissional ou paciente feliz).
3.  **Features Grid (3 Cards):**
    * Ícones ilustrativos.
    * Títulos: Free Consultation, Expert Dentist, User Rating.
    * Efeito de *hover lift* (elevação ao passar o mouse).
4.  **About Section:**
    * Texto sobre a clínica.
    * Composição de imagem com elementos flutuantes (círculos/formas orgânicas).
    * Checklist de benefícios.
5.  **Services Section:**
    * Grid 2x3 ou 3x2.
    * Cards brancos com sombra suave (`shadow-lg`).
    * Ícones centralizados (Clareamento, Implantes, etc).
6.  **Testimonials (Prova Social):**
    * Layout de cards com avatares e estrelas.
7.  **Footer:**
    * Links rápidos, contato, endereço e direitos autorais.
8.  **Floating Action Button (FAB):**
    * Ícone do WhatsApp fixo no canto inferior direito (`z-50`).

## 5. Comportamentos Específicos
* **Responsividade:** Mobile-first. No mobile, o menu vira "hambúrguer" e os grids empilham (flex-col).
* **Smooth Scroll:** Ao clicar no menu, a página deve deslizar suavemente até a seção.
* **SEO:** Uso correto de tags semânticas (`<header>`, `<main>`, `<section>`, `<footer>`).