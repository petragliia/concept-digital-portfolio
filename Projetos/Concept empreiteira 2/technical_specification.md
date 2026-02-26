# Especificação Técnica: Concept Empreiteira (Design System & Arquitetura)

> **Documento de Referência Técnica**
> Baseado no PRD [prd_empreiteira.md](file:///Users/joaovitormartinspetraglia/Downloads/Concept%20Digital/Portfolio/Projetos/Concept%20empreiteira%202/prd_empreiteira.md) e requisições visuais de Dark Mode/Bento Grid.

## 1. Design System & Tokens (Tailwind CSS)

### 1.1 Cores (Palette)
Configuração a ser aplicada no `tailwind.config.js`.

| Token | Hex | Propósito |
| :--- | :--- | :--- |
| `primary` | `#0A0A0A` | Background Global (Rich Black). Evita o preto absoluto (#000) para manter profundidade. |
| `accent` | `#E5E5E5` | Texto Primário (Off-White). Alto contraste sem causar fadiga visual. |
| `highlight` | `#FFB800` | CTAs, Links Destaque e Bordas sutis de foco (Gold/Amber). |
| `glass-bg` | `rgba(255, 255, 255, 0.03)` | Fundo dos cards Bento e Navbar. |
| `glass-border` | `rgba(255, 255, 255, 0.1)` | Bordas sutis para separação de planos. |

### 1.2 Layout & Spacing
*   **Container Max**: `1280px` (padrão `max-w-7xl`).
*   **Grid System**: CSS Grid com suporte a `grid-cols-12` para flexibilidade do Bento Grid.
*   **Border Radius**:
    *   `rounded-3xl` (24px) para Cards Bento (visual moderno e amigável).
    *   `rounded-full` para Botões e Tags.

### 1.3 Efeitos (Visual FX)
*   **Glassmorphism Base**:
    ```css
    .glass-panel {
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    ```
*   **Neon Shadow (Hover)**:
    ```css
    .hover-glow:hover {
      box-shadow: 0 0 20px rgba(255, 184, 0, 0.15);
    }
    ```

---

## 2. Arquitetura de Componentes

### 2.1 Navbar (Fixed Glass)
*   **Comportamento**: `fixed top-0 w-full z-50`.
*   **Estilo**: Glassmorphism com transição de opacidade ao rolar.
*   **Props**:
    *   `isScrolled` (boolean): Ativa background mais opaco após 50px de scroll.

### 2.2 Bento Grid System
Implementação modular para a seção de serviços.

*   **Wrapper**: `div.grid.grid-cols-1.md:grid-cols-3.gap-4.auto-rows-[minmax(180px,auto)]`
*   **Componente `BentoCard`**:
    *   **Props**:
        *   `title` (string)
        *   `description` (string)
        *   `colSpan` (number[1-3]): Define largura (ex: `col-span-2`).
        *   `rowSpan` (number[1-2]): Define altura (ex: `row-span-2`).
        *   `bgImage` (string/Statickey): Imagem de fundo opcional.
    *   **Variantes**:
        *   *Feature*: Ícone + Texto.
        *   *Showcase*: Imagem full-bleed com texto sobreposto.

### 2.3 Interactive Button
*   **Base**: `bg-highlight text-primary font-bold px-8 py-3 rounded-full trantision-all duration-300`.
*   **Hover**: `scale-105` + `shadow-[0_0_20px_rgba(255,184,0,0.3)]`.
*   **Variants**: `solid` (Gold), `outline` (Glass com borda Gold), `ghost`.

---

## 3. Estratégia de Animação (Framer Motion)

### 3.1 Reveal On Scroll (Padrão Global)
Utilizar um Higher-Order Component (HOC) ou Wrapper `Reveal` para padronizar as entradas.

```tsx
// Exemplo de lógica de variante
const revealVariants = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};
```

### 3.2 Bento Hover Micro-interaction
*   **Scale**: Cards expandem levemente (1.02) ao hover.
*   **Border**: A cor da borda muda de `white/10` para `highlight/50`.

---

## 4. Otimização & Performance (Core Web Vitals)

### 4.1 Imagens (Next/Image)
Como o site é de uma empreiteira (muitas fotos pesadas), o controle de LCP é crítico.

*   **LCP (Largest Contentful Paint)**: A imagem do Hero **DEVE** ter a prop `priority={true}` e `loading="eager"`.
*   **Bento Grid Images**:
    *   `sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"`
    *   `placeholder="blur"` (gerar base64 blur data para carregamento suave).
    *   Formato: WebP ou AVIF (automático do Next.js).

### 4.2 Font Loading
*   Uso de `next/font/google` para injetar fontes no build time (Zero CLS).
*   Fontes: `Inter` (UI) e `Manrope` (Headlines) com `subset=['latin']`.

## 5. Implementação: Próximos Passos
1.  Atualizar `tailwind.config.js` com as cores e specs.
2.  Criar pasta `components/ui` para os novos componentes (BentoCard, GlassButton).
3.  Refatorar `page.tsx` para usar o novo layout Bento.
