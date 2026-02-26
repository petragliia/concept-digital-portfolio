# Documento de Especificação Técnica e Funcional (SDD) - Concept Imobiliária

> **Status:** Rascunho para Aprovação
> **Baseado em:** Respostas da Fase 1 (PRD)

Este documento detalha a estrutura, o conteúdo (Copywriting), o design visual e os comportamentos funcionais da Landing Page "Concept Imobiliária" (Edição Luxo).

---

## 1. Arquitetura da Informação & Fluxo (AIDA)

A estrutura da página foi desenhada seguindo o modelo **AIDA (Atenção, Interesse, Desejo, Ação)** para maximizar a conversão de leads qualificados.

| Ordem | Seção | Objetivo (AIDA) | Elementos Chave |
| :--- | :--- | :--- | :--- |
| **1** | **Hero Section** | **Atenção** | Vídeo/Img Impactante + Headline Forte + CTA Claro. |
| **2** | **Sobre / Conceito** | **Interesse** | Storytelling breve sobre exclusividade e "Arte de Viver". |
| **3** | **Coleção Exclusiva** | **Interesse** | Vitrine de imóveis selecionados (Listings). |
| **4** | **Diferenciais** | **Desejo** | Por que nós? (Concierge, Off-market, Jurídico). |
| **5** | **Prova Social** | **Desejo/Confiança** | Números e Depoimentos (se houver). |
| **6** | **Contato Premium** | **Ação** | Formulário e WhatsApp para conversão final. |
| **7** | **Footer** | **Retenção** | Links úteis, Branding e Contato secundário. |

---

## 2. Estrutura de Copywriting (Detalhado)

### 2.1. Hero Section (Atenção)
*   **Headline (H1):** "O Cenário Perfeito para a Sua Nova História."
*   **Subheadline:** "Curadoria exclusiva de imóveis de alto padrão. Onde a arquitetura encontra a arte de viver bem."
*   **CTA Primário:** "Explorar Coleção" (Scroll suave para a seção #colecao).
*   **Gatilho Emocional:** Pertencimento e Exclusividade.

### 2.2. O Conceito (Interesse)
*   **Título (H2):** "Mais que Imóveis, Legados."
*   **Copy:** "Na Concept Imobiliária, entendemos que um lar é a extensão da sua personalidade. Oferecemos um serviço de *Concierge Imobiliário* para quem não busca apenas metros quadrados, mas sim um estilo de vida inegociável."
*   **Visual:** Texto elegante com muito espaço em branco, talvez acompanhado de uma imagem de detalhe arquitetônico (ex: mármore, fechadura dourada).

### 2.3. Coleção Exclusiva (Interesse)
*   **Título (H2):** "Curadoria Concept"
*   **Subtítulo:** "Selecionados rigorosamente para os padrões mais exigentes."
*   **Cards de Imóveis:**
    *   **Etiqueta:** "Exclusive" ou "Novo"
    *   **Título:** "Mansão Jardins", "Penthouse Vista Mar"
    *   **Detalhes:** Bairro nobre • Área M² • Suítes
    *   **Preço:** "Sob Consulta" (mantém a exclusividade) ou Valor formatado.
    *   **CTA do Card:** "Ver Detalhes"

### 2.4. Diferenciais (Desejo)
*   **Título (H2):** "Por que a Concept?"
*   **Destaques:**
    1.  **Acesso Off-Market:** "Imóveis que você não encontra nos portais comuns."
    2.  **Concierge Jurídico:** "Assessoria completa para uma transação blindada e sigilosa."
    3.  **Experiência Private:** "Atendimento no seu tempo, onde você estiver."

### 2.5. Contato / Lead Magnet (Ação)
*   **Título (H2):** "Agende uma Consultoria Private."
*   **Subtítulo:** "Nossos especialistas estão prontos para encontrar o imóvel que define o seu momento."
*   **Formulário:**
    *   Campos: Nome, WhatsApp, Bairro de Interesse.
    *   **Botão (CTA Final):** "Receber Atendimento Personalizado"
*   **CTA WhatsApp:** "Prefere falar agora? Chame no WhatsApp."

---

## 3. Guia de Estilo Sugerido (UI Kit)

### 3.1. Paleta de Cores
*   **Primary (Sophistication):** `#0F172A` (Slate 900) - Uso em Textos, Fundos de destaque, Botões primários.
*   **Secondary (Luxury Gold):** `#C5A065` (Gold Metallic) - Uso em Ícones, Bordas finas, Detalhes de hover, Links.
*   **Background (Clean):** `#F8FAFC` (Slate 50) - Fundo geral da página.
*   **Surface (Cards):** `#FFFFFF` (White) - Fundo de cards com sombra suave.

### 3.2. Tipografia
*   **Headings (H1, H2, H3):** *Playfair Display* (Serif). Transmite elegância, tradição e luxo.
    *   *Peso:* 700 (Bold) ou 400 (Regular) dependendo do tamanho.
*   **Body Text:** *Lato* ou *Inter* (Sans-serif). Garante leitura fácil e modernidade.
    *   *Peso:* 400 (Regular) e 300 (Light).

### 3.3. Imagens e Ícones
*   **Estilo Fotográfico:** Alta definição, iluminação natural, ângulos retos, "Golden Hour". Evitar fotos com distorção ("olho de peixe").
*   **Ícones:** *Lucide React* com traço fino (stroke-width: 1 ou 1.5) na cor Dourada (`#C5A065`).

### 3.4. Sombras e Bordas
*   **Shadows:** Suaves e difusas (`box-shadow: 0 10px 40px -10px rgba(0,0,0,0.08)`). Nada marcado.
*   **Border Radius:** Moderado (`rounded-lg` ou `rounded-xl`). Luxo moderno aceita curvas suaves, mas não "bolinhas".

---

## 4. Funcionalidades e Comportamento

### 4.1. Navegação (Header)
*   **Comportamento:** Sticky (fixo) ao rolar a página.
*   **Transição:** Fundo transparente no topo -> Fundo sólido (`#F8FAFC` ou Blur) ao rolar.

### 4.2. Botões e CTAs
*   **Primary Button:** Fundo `#0F172A`, Texto Branco. Hover: Leve clareamento ou borda dourada. Efeito de escala sutil (`scale-105`).
*   **Secondary Button (Outline):** Borda `#0F172A`, Texto `#0F172A`. Hover: Fundo `#0F172A`, Texto Branco.

### 4.3. Cards de Imóveis
*   **Hover:** A imagem do imóvel deve ter um leve *zoom in* (`scale-110` interno) suave. O card pode subir levemente (`-translate-y-2`).

### 4.4. Formulário
*   **Validação:** Feedback em tempo real (borda vermelha para erro, verde para sucesso).
*   **Ação de Envio:**
    *   1. Loading state no botão ("Enviando...").
    *   2. Redirecionamento para WhatsApp com mensagem pré-preenchida OU Exibição de modal de "Sucesso".

### 4.5. Floating Action Button (WhatsApp)
*   **Posição:** Canto inferior direito, fixo.
*   **Animação:** `Pulse` suave a cada 5-10 segundos para chamar atenção sem ser intrusivo.
