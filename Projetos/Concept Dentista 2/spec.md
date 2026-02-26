# spec.md - Technical Specification (Concept Dentista Premium)

## 1. Visão Geral
Este documento define a especificação técnica para a Landing Page "Concept Dentista Premium". O projeto será construído com **Next.js 14+ (App Router)**, estilizado com **Tailwind CSS** e usará **Framer Motion** para animações, seguindo a arquitetura de componentes modulares.

---

## 2. Estrutura de Pastas (Next.js App Router)

```
/concept-dentista
├── /app
│   ├── /fonts             # Configuração de fontes (Google Fonts)
│   ├── layout.tsx         # Layout Root (HTML, Body, Metadata, Header, Footer)
│   ├── page.tsx           # Página Principal (Composição das Seções)
│   ├── globals.css        # Reset CSS, Variáveis Tailwind, Estilos Globais
│   └── favicon.ico        # Ícone do site
├── /components
│   ├── /layout            # Componentes de Estrutura
│   │   ├── Header.tsx     # Navbar Responsiva
│   │   └── Footer.tsx     # Rodapé com Links
│   ├── /sections          # Seções da Página (Page Blocks)
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   └── Testimonials.tsx
│   └── /ui                # Componentes Reutilizáveis (Atomic Design)
│       ├── Button.tsx     # Botões (Primary, Outline, Ghost)
│       ├── SectionTitle.tsx # Títulos de Seção Padronizados
│       ├── Card.tsx       # Container de Card Base
│       └── WhatsappFAB.tsx # Floating Action Button
├── /constants
│   └── index.ts           # Dados estáticos (Menu links, Textos, Arrays de dados)
├── /public
│   ├── /images            # Imagens otimizadas (WebP)
│   └── /icons             # SVGs personalizados (se não usar Lucide apenas)
├── tailwind.config.ts     # Configuração de Cores, Fontes e Bordas
└── next.config.mjs
```

---

## 3. Especificação dos Componentes

### 3.1. UI Components (Reutilizáveis)

#### `Button.tsx`
*   **Responsabilidade:** Botão padrão interativo.
*   **Props:**
    *   `variant`: `'primary' | 'secondary' | 'outline' | 'ghost'`
    *   `size`: `'sm' | 'md' | 'lg'`
    *   `children`: `ReactNode`
    *   `onClick?`: `() => void`
    *   `href?`: `string` (se for link)
    *   `className?`: `string` (para customização extra)
*   **Estilo:** Baseado nas cores Primary (`#0056D2`) e Hover states.

#### `SectionTitle.tsx`
*   **Responsabilidade:** Cabeçalho padrão para seções (Sobre, Serviços, Depoimentos).
*   **Props:**
    *   `subtitle`: `string` (Texto menor, cor primária)
    *   `title`: `string` (H2, serifa, cor escura)
    *   `alignment`: `'left' | 'center'`
*   **Estilo:** Tipografia consistente (Serifa para título, Sans para subtítulo).

#### `WhatsappFAB.tsx`
*   **Responsabilidade:** Botão flutuante do WhatsApp.
*   **Props:** Nenhuma (Link hardcoded ou via constants).
*   **Comportamento:** `position: fixed`, `bottom-4`, `right-4`, `z-50`. Animação sutil de "pulse".

### 3.2. Layout Components

#### `Header.tsx`
*   **Responsabilidade:** Navegação principal e menu mobile.
*   **Lógica:**
    *   State `isOpen` para controlar menu mobile (hambúrguer).
    *   Scroll listener para mudar background quando rolar a página (efeito "sticky glassmorphism").
    *   Mapeia links do `/constants`.

#### `Footer.tsx`
*   **Responsabilidade:** Links finais de navegação e copyright.
*   **Conteúdo:** Logo, Links Rápidos, Contato, Redes Sociais.

### 3.3. Section Components (Blocos da Página)

#### `Hero.tsx`
*   **Responsabilidade:** Primeira impressão, chamada para ação imediata.
*   **Conteúdo:** Grid 2 colunas (Texto à esq, Imagem à dir).
*   **Props:** Estático (texto hardcoded ou via constants).
*   **Animação:** Fade-in up no texto, Fade-in na imagem.

#### `Features.tsx`
*   **Responsabilidade:** Mostrar os 3 diferenciais principais logo abaixo do Hero.
*   **Props:** Array de features (ícone, título, desc).
*   **Grid:** 1 col (mobile) -> 3 cols (desktop).
*   **Card Style:** Ícone colorido, título negrito, hover lift.

#### `About.tsx`
*   **Responsabilidade:** Apresentar a clínica e gerar autoridade.
*   **Layout:** Imagem composta à esquerda (com elementos flutuantes), Texto à direita.
*   **Props:** Nenhuma.
*   **Checklist:** Ícones de "check" azuis nos benefícios.

#### `Services.tsx`
*   **Responsabilidade:** Listar tratamentos oferecidos.
*   **Props:** Array de serviços (importado de constants).
*   **Grid:** 2x3 ou 3x2.
*   **Card:** Fundo branco, sombra leve, ícone centralizado, título simples.

#### `Testimonials.tsx`
*   **Responsabilidade:** Prova social.
*   **Props:** Array de depoimentos (`{ name, role, photo, content, stars }`).
*   **Layout:** Grid ou Carrossel simples (CSS scroll-snap ou Framer Motion drag).

---

## 4. Dados e Configurações (`/constants/index.ts`)

Centralizar textos para facilitar manutenção:

```typescript
export const MENU_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Sobre', href: '#about' },
  { label: 'Serviços', href: '#services' },
  { label: 'Depoimentos', href: '#testimonials' },
];

export const SERVICES = [
  { title: 'Clareamento Dental', icon: 'Sparkles', desc: '...' },
  { title: 'Implantes', icon: 'Tooth', desc: '...' },
  // ...
];

export const CONTACT_INFO = {
  whatsapp: '5511999999999',
  address: 'Rua Exemplo, 123 - SP',
};
```

## 5. Diretrizes de Estilização (Tailwind Theme)

Configurar `tailwind.config.ts` com as cores do PRD:

*   **Colors:**
    *   `primary`: `#0056D2`
    *   `secondary`: `#E6F0FA`
    *   `accent`: Cyan/Teal
    *   `dark`: `#1A1A1A`
*   **Fonts:**
    *   `sans`: `Inter` ou `Lato` (Google Fonts)
    *   `serif`: `Playfair Display` ou `Merriweather` (Google Fonts)
*   **Border Radius:**
    *   Padrão: `rounded-2xl`

---

## 6. Próximos Passos (Implementação)

1.  **Setup Inicial:** Criar projeto Next.js e configurar Tailwind/Fontes.
2.  **Componentes Base:** Criar `Button`, `SectionTitle` e arquivo de `constants`.
3.  **Estrutura:** Implementar `Header` e `Footer`.
4.  **Seções:** Desenvolver seções uma a uma (Hero -> Features -> About...).
5.  **Refino:** Adicionar animações Framer Motion e checar responsividade.
