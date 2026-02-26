# PRD - Concept Imobiliária (Luxury Edition)

## 1. Visão Geral do Produto
Uma Landing Page de alta conversão focada no mercado imobiliário de luxo. O objetivo é transmitir exclusividade, confiança e sofisticação, incentivando o usuário a agendar uma visita ou entrar em contato via WhatsApp.

**Nicho:** Imóveis de Alto Padrão.
**USP (Proposta Única de Valor):** "Curadoria Exclusiva & Concierge Imobiliário" – Não vendemos apenas casas, entregamos estilos de vida.
**Público-Alvo:** Compradores exigentes (famílias, investidores) que buscam não apenas um imóvel, mas um símbolo de status e conforto.

---

## 2. Identidade Visual & UX (Sugerido)
Para o mercado de luxo, a estética deve ser "Invisible Design" – o design não deve gritar, deve acolher.

*   **Paleta de Cores:**
    *   **Primária:** *Deep Navy* ou *Charcoal* (Sofisticação, Confiança) - ex: `#0F172A`
    *   **Secundária:** *Champagne/Gold* (Exclusividade, Detalhe) - ex: `#C5A065`
    *   **Fundo:** *Off-White/Gelo* (Limpeza, Espaço) - ex: `#F8FAFC`
*   **Tipografia:**
    *   **Títulos:** *Playfair Display* ou *Cinzel* (Serifa clássica, elegante).
    *   **Corpo:** *Inter* ou *Lato* (Legibilidade moderna, limpa).
*   **Imagens:** Fotografia de altíssima resolução, ângulos amplos, iluminação natural, foco em detalhes de acabamento.
*   **Micro-interações:** Animações sutis (fade-in, parallax suave) para dar sensação de fluidez e "peso" premium.

---

## 3. Arquitetura da Informação (Sitemap)

### 3.1. Header (Sticky)
*   **Esquerda:** Logo "Concept Imobiliária" (Minimalista).
*   **Centro:** Links de navegação (Imóveis, Sobre, Contato).
*   **Direita:** CTA Primário "Agendar Consultoria" (Botão discreto, outline ou sólido elegante).

### 3.2. Hero Section (Dobra 1 - A mais importante)
*   **Fundo:** Vídeo em loop (slow motion de um interior luxuoso) ou Carrossel de Imagens Heroicas.
*   **Headline:** "O Cenário Perfeito para sua Nova História."
*   **Subheadline:** "Uma coleção exclusiva de imóveis de alto padrão selecionados para quem exige o extraordinário."
*   **CTA Principal:** "Ver Coleção Exclusiva" (Scroll para listings).
*   **CTA Secundário:** Botão Flutuante do WhatsApp (Sempre visível).

### 3.3. Destaques (Featured Collection)
*   Layout em Grid assimétrico ou Carrossel horizontal.
*   Cards de Imóveis:
    *   Foto Principal (Hover: Zoom suave ou troca de foto).
    *   Preço (Discreto, ou "Sob Consulta" para ultra-luxo).
    *   Bairro/Localização.
    *   Features (M², Quartos, Vagas) com ícones minimalistas.
    *   Botão: "Mais Detalhes".

### 3.4. O Diferencial (Why Us?)
*   Foco em "Concierge": Atendimento personalizado, transporte executivo para visitas, assessoria jurídica completa.
*   Ícones finos (outline) representando: Segurança, Exclusividade, Agilidade.

### 3.5. Social Proof (Prova Social)
*   "Imóveis Vendidos Recentemente" ou Depoimentos de clientes (com fotos reais, se possível, ou apenas nomes e bairros).
*   Números: "Mais de R$ 50mi em VGV negociados", "100+ Famílias Atendidas".

### 3.6. Lead Capture (Formulário)
*   Título: "Encontre o Imóvel dos Seus Sonhos (Off-Market)."
*   Campos: Nome, WhastApp, Tipo de Imóvel, Bairro de Interesse.
*   Botão: "Receber Consultoria Personalizada".

### 3.7. Footer
*   Links rápidos, Endereço (escritório nobre), Redes Sociais, Copyright.

---

## 4. Requisitos Funcionais
1.  **Formulário de Contato:** Integração com Email (via API Route/SendGrid ou simples `mailto` para MVP) e redirecionamento para WhatsApp.
2.  **WhatsApp Float:** Botão flutuante no canto inferior direito com mensagem pré-definida ("Olá, gostaria de saber mais sobre imóveis de alto padrão").
3.  **Responsividade:** Mobile-first obrigatório. O luxo deve ser acessível na palma da mão.
4.  **Performance:** Loading time < 2s (LCP). Imagens otimizadas (Next/Image).
5.  **SEO:** Meta tags configuradas para "Imóveis de Luxo [Cidade]", Schema Markup para Real Estate.

## 5. Requisitos Técnicos
*   **Framework:** Next.js (App Router).
*   **Estilização:** Tailwind CSS.
*   **Ícones:** Lucide React.
*   **Animações:** Framer Motion (uso moderado).
*   **Fontes:** Google Fonts (Playfair Display + Inter).

---
**Aprovação:**
O usuário deve aprovar este documento para iniciarmos a **Fase 3: Desenvolvimento**.
