# PRD - Concept Empreiteira: Landing Page de Alto Padrão

> **Visão Geral**: Landing Page premium para uma empreiteira de luxo, desenhada para transmitir autoridade, exclusividade e segurança. O design utiliza uma estética "Dark Mode Sofisticada" com elementos de vidro e grids modernos.

## 1. Identidade Visual & UX

### Estética: Dark Mode Sofisticada
*   **Background**: Base em `Preto Profundo (#0A0A0A)` ou `Cinza Grafite (#121212)` com gradientes radiais muito sutis em tons de cinza azulado ou dourado pálido para dar profundidade (sem ser chamativo).
*   **Iluminação**: Efeitos de luz focada (spotlights) atrás de elementos chave para guiar o olhar.

### Componentes & UI
*   **Glassmorphism**: Cards com background translúcido (`bg-white/5` ou `bg-black/40`), *backdrop-blur* acentuado (12px+), e bordas finíssimas (`border-white/10`).
*   **Bento Grid**: Layout modular assimétrico para a seção de serviços, evocando organização e modernidade.
*   **Tipografia**:
    *   *Headlines*: Fontes Sans-serif geométricas e extra-bold (Ex: `Inter`, `Plus Jakarta Sans` ou `Manrope`). Letter-spacing ajustado (tight).
    *   *Body*: Sans-serif limpa e legível, com bom contraste (cinza claro sobre fundo escuro, não branco puro).
*   **Interatividade**: Hover effects suaves que aumentam o brilho da borda ou a opacidade do background. Parallax suave no scroll.

---

## 2. Estrutura de Seções & Conteúdo

### 2.1. Hero Section: Impacto Imediato
*   **Layout**: Split Screen (Texto à esquerda, Imagem à direita) ou Centralizado com Imagem de Fundo Darkened.
*   **Imagem**: Fotografia de uma obra de alto padrão (interior luxuoso ou fachada imponente).
    *   *Efeito*: Máscara de recorte moderna (ex: arco ou forma geométrica suave) ou fade-out nas bordas integrando com o fundo preto.
*   **Headline**: 
    > "Construímos o cenário da sua melhor fase."
    > *Sub*: "Engenharia de precisão e acabamentos de elite para quem não aceita o 'bom o suficiente'."
*   **CTAs**:
    *   Primário: "Iniciar Projeto Exclusivo" (Botão com gradiente sutil ou glow, texto bold).
    *   Secundário: "Ver Portfolio" (Outline button ou link discreto com ícone de seta).

### 2.2. Social Proof Bar (Barra de Confiança)
*   **Visual**: Faixa discreta, *low contrast*.
*   **Conteúdo**: Logos de parceiros renomados, certificações de qualidade (ISO, Green Building), ou fornecedores de luxo.
*   **Estilo**: Logos monocromáticos em cinza escuro/médio (`opacity-40` -> `hover:opacity-80`).

### 2.3. Serviços: A "Bento Grid"
Uma grade composta por blocos de diferentes tamanhos, estilo *dashboard* ou *Apple-style features*.

*   **Card 1 (Grande - Destaque): Construção Residencial**
    *   Imagem de fundo sutil, título forte.
    *   *Copy*: "Do alicerce ao acabamento. Gestão 360º para obras zero stress."
*   **Card 2 (Médio): Reformas de Alto Padrão**
    *   Foco em transformação. Ícone ou foto de antes/depois interativa.
    *   *Copy*: "Reinvente seu espaço com inteligência arquitetônica."
*   **Card 3 (Pequeno): Design & Interiores**
    *   Ícone de luxo.
    *   *Copy*: "Harmonia visual e funcionalidade."
*   **Card 4 (Pequeno): Consultoria**
    *   *Copy*: "Viabilidade técnica e legal."

### 2.4. Diferenciais (Why Us)
*   **Layout**: Lista horizontal ou grid 2x2.
*   **Ícones**: Linear Icons (traço fino, elegante), cor branca ou acento dourado/prata metálico.
*   **Itens**:
    1.  **Engenharia de Precisão**: "Cronogramas seguidos à risca."
    2.  **Acabamento Premium**: "Materiais nobres e instalação impecável."
    3.  **Gestão Transparente**: "Acompanhe tudo via app exclusivo."
    4.  **Limpeza & Organização**: "Obras que respeitam seu ambiente."

### 2.5. CTA Final & Contato
*   **Visual**: Fundo levemente mais claro ou card flutuante centralizado.
*   **Headline**: "Pronto para elevar seu padrão de viver?"
*   **Formulário Integrado**: 
    *   Campos minimalistas (apenas linha inferior ou fundo muito sutil).
    *   Inputs: Nome, WhatsApp, Tipo de Projeto.
*   **Botão Final**: "Solicitar Consultoria Gratuita".

---

## 3. Copywriting Estratégico: Som & Tom
*   **Tom**: Seguro, Sofisticado, Direto, Pouco Adjetivado (Show, don't tell).
*   **Palavras-chave**: Precisão, Elite, Legado, Exclusividade, Transparência, Concreto.
*   **Gatilhos Mentais**: 
    *   *Exclusividade*: "Para poucos", "Projetos selecionados".
    *   *Segurança*: "Garantia estendida", "Engenheiros certificados".

## 4. Requisitos Técnicos
*   **Framework**: Next.js + Tailwind CSS.
*   **Animações**: Framer Motion (para entrada suave dos elementos e hover interactions nos cards Bento).
*   **Responsividade**: Mobile-first. A Bento Grid deve se transformar em uma pilha elegante (stack) no mobile.
*   **Performance**: Imagens em polímeros WebP/AVIF, Lazy loading.
