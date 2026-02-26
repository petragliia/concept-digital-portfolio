# Especificação Técnica (spec_estetica.md)

Este documento serve como mapa técnico para a construção da Landing Page de Estética de Luxo.

## 1. Estrutura de Componentes

### `Hero.tsx`
- **Função**: Criar uma primeira impressão impactante de luxo e sofisticação.
- **Requisitos Visuais**:
  - Imagem de fundo em alta definição (qualidade editorial).
  - Efeito parallax suave ao rolar a página.
  - Título com tipografia Serifada elegante (ex: "Revele sua melhor versão").
  - Subtítulo discreto e CTA principal.

### `TreatmentsGrid.tsx`
- **Função**: Apresentar os procedimentos disponíveis de forma organizada e interativa.
- **Comportamento**:
  - Layout em Grid responsivo.
  - **Cards Interativos**: Ao clicar ou passar o mouse (hover), o card deve expandir ou abrir um pequeno modal com detalhes do procedimento.
  - Animações sutis de entrada.

### `AuthoritySection.tsx`
- **Função**: Gerar confiança e autoridade para o profissional.
- **Layout**: Duas colunas (layout dividido).
  - **Coluna 1**: Foto profissional de alta qualidade (recorte ou estúdio).
  - **Coluna 2**: Mini-biografia, qualificações e filosofia de trabalho.

### `FloatingCTA.tsx`
- **Função**: Manter a conversão sempre acessível sem ser intrusiva.
- **Lógica**:
  - O botão deve permanecer oculto no topo da página.
  - Deve aparecer (fade-in) após o usuário rolar **300px** para baixo.
  - Deve fixar-se no canto inferior direito (ou centralizado no mobile).

## 2. Design System

### Paleta de Cores
A paleta deve evocar calma, luxo e limpeza.

- **Bege Savana** (`#F5F5DC`): Usado para fundos de seções ou overlays suaves.
- **Dourado Champanhe** (`#D4AF37`): Cor de destaque para botões, bordas, ícones e linhas finas.
- **Branco Puro** (`#FFFFFF`): Fundo principal e cartões, garantindo "respiro" e limpeza visual.

### Tipografia
Combinação clássica de Serif e Sans-serif para equilíbrio entre elegância e legibilidade.

- **Títulos (Display)**: Fonte Serifada.
  - *Sugestão*: `Playfair Display`, `Cormorant Garamond` ou `Cinzel`.
  - Uso: H1, H2, H3.
- **Corpo (Body)**: Fonte Sans-serif.
  - *Sugestão*: `Montserrat`, `Lato` ou `Raleway`.
  - Uso: Parágrafos, botões e textos de apoio.
