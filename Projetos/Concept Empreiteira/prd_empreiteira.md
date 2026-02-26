# PRD - Concept Empreiteira: Landing Page de Alta Conversão

> **Versão:** 1.0  
> **Status:** Aprovado  
> **Responsável:** Product Manager (AI)  
> **Data:** 2026-02-05

---

## 1. Visão Geral do Produto
Desenvolvimento de uma Landing Page focada em conversão para uma empreiteira de médio/alto padrão. A página servirá como ponto central de tráfego pago e orgânico, transmitindo autoridade, segurança e qualidade técnica.

### 1.1 Objetivo
Capturar leads qualificados (proprietários de imóveis) interessados em obras e reformas, minimizando "curiosos" através de qualificação no formulário e copy persuasiva.

### 1.2 Público-Alvo
- **Primário:** Proprietários de imóveis residenciais e comerciais.
- **Dores:** Medo de atrasos, custos excedentes ("orçamento que dobra"), sujeira/bagunça e baixa qualidade técnica.
- **Desejos:** Transparência, cumprimento de prazos, limpeza e acabamento premium.

---

## 2. Requisitos Funcionais (Features)

### 2.1 Hero Section (A Dobra Principal)
- **Headline H1:** Forte promessa de valor (ex: "Sua obra entregue no prazo, sem surpresas no orçamento").
- **Subheadline:** Reforço de autoridade (ex: "Especialistas em reformas de alto padrão com gestão completa").
- **CTA Principal:** Botão "Solicitar Orçamento" com scroll suave para o formulário.
- **Visual:** Imagem de fundo de alta qualidade (obra finalizada) com overlay escuro para legibilidade, ou slider de antes/depois.

### 2.2 Prova Social (KPIs)
- Faixa de destaque logo abaixo do Hero.
- **Contadores:**
  - "10+ Anos de Experiência"
  - "500+ Projetos Entregues"
  - "Garantia em Contrato"

### 2.3 Grid de Serviços
- Layout em Cards (Grid 3 colunas desktop / 1 coluna mobile).
- **Itens:**
  - Construção Civil
  - Reformas Residenciais
  - Reformas Comerciais
  - Acabamentos Premium
- Cada card deve ter ícone representativo e breve descrição.

### 2.4 Diferenciais (Por que nós?)
- Foco em resolver as dores do cliente.
- **Itens:**
  - **Gestão de Resíduos:** Obra limpa e organizada.
  - **Equipe Própria:** Profissionais de confiança e uniformizados.
  - **Transparência:** Relatórios semanais e gestão de custos.
  - **Cronograma Garantido:** Penalidade por atraso em contrato.

### 2.5 Portfólio (Cases de Sucesso)
- Galeria ou Slider com 6 projetos selecionados.
- Formato "Antes x Depois" (idealmente slider interativo) ou fotos lado a lado.
- Legenda com: Tipo de obra, Localização e Prazo de execução.

### 2.6 Depoimentos
- Carrossel com 3 depoimentos.
- Foco em: "Paz de espírito", "Obra limpa", "Prazo cumprido".
- Nome do cliente e Bairro/Cidade.

### 2.7 FAQ (Perguntas Frequentes)
- Accordion para economizar espaço.
- **Perguntas Chave:**
  - "Vocês cobram pelo orçamento?"
  - "Atendem quais regiões?"
  - "Como funciona o pagamento?"
  - "Fornecem material ou apenas mão de obra?"

### 2.8 Formulário de Conversão (Lead Gen)
- Posicionado no final da página (Seção de Contato).
- **Campos Obrigatórios:**
  - Nome
  - WhatsApp
  - Tipo de Imóvel (Casa, Apê, Comercial)
  - Serviço Desejado (Construção, Reforma, Reparo)
- **Campos Opcionais:**
  - Metragem aproximada
  - Mensagem

### 2.9 Botão Flutuante (WhatsApp)
- Ícone do WhatsApp fixo no canto inferior direito.
- Link direto para API do WhatsApp com mensagem pré-preenchida ("Olá, vi o site e gostaria de um orçamento").

---

## 3. Requisitos Não-Funcionais (Técnicos & UX)

### 3.1 Stack Tecnológica
- **Framework:** Next.js (React) v14+ (App Router).
- **Estilização:** Tailwind CSS v3.4+.
- **Ícones:** Lucide React ou Heroicons.
- **Animações:** Framer Motion (para transições suaves e scroll reveal).

### 3.2 Performance (Core Web Vitals)
- **LCP (Largest Contentful Paint):** < 1.5s.
- **Imagens:** Uso obrigatório de formato `.webp` e atributo `loading="lazy"` (exceto Hero).
- **Fontes:** Next/Font (Google Fonts: Inter ou Montserrat) otimizadas no build.

### 3.3 Design System & UI
- **Estilo:** "Confiança-Tradicional com toque Moderno".
- **Paleta de Cores:**
  - Primária: Azul Marinho (Autoridade/Confiança) - ex: `bg-slate-900`.
  - Secundária: Cinza Concreto (Base/Neutro) - ex: `bg-gray-100`.
  - Acento: Laranja/Amarelo Obra (Call to Action) - ex: `text-amber-500` / `bg-orange-600`.
- **Tipografia:** Sans-serif robusta (Inter ou Montserrat).

### 3.4 Mobile-First
- Design pensado prioritariamente para telas verticais (smartphones).
- Botões de CTA com tamanho mínimo de 44x44px (área de toque).
- Navegação simplificada no mobile (Menu Hambúrguer ou apenas âncoras).

### 3.5 Rastreamento & SEO
- **Meta Tags:** Título, Descrição, Open Graph configurados.
- **Analytics:** Preparado para GTM (Google Tag Manager) / Pixel do Facebook.
- **Eventos:** Disparar eventos de conversão no click do WhatsApp e submit do Form.

---

## 4. Plano de Fases (Roadmap Sugerido)

1. **Setup:** Configuração do repo e ambiente Next.js.
2. **Componentização:** Criação dos componentes base (Button, Card, Section).
3. **Estrutura:** Montagem da Landing Page (seções estáticas).
4. **Interatividade:** Adição de slider, validação de form e animações.
5. **Polimento:** Otimização de performance e responsividade fina.
6. **Entrega:** Deploy na Vercel e teste de envio de leads.
