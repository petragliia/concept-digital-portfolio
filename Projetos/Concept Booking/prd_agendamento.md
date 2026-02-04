# PRD - Sistema de Agendamento Profissional

**Autor:** Antigravity (Product Manager AI)  
**Data:** 03 de Fevereiro de 2026  
**Status:** Rascunho Inicial (Aguardando Aprovação)

---

## 1. Visão Geral
O objetivo deste produto é implementar um sistema robusto e intuitivo que permita a clientes agendarem horários com prestadores de serviço de forma autônoma. O sistema deve minimizar atritos (friction) no processo de conversão e garantir a integridade dos dados (sem conflitos de horário).

## 2. Pesquisa Técnica & Decisões Arquiteturais

### 2.1. Manipulação de Tempo: `date-fns`
**Análise:**
A biblioteca `date-fns` foi selecionada como a solução padrão para manipulação de datas e horários.
*   **Por que?**: Diferente do Moment.js (que é mutável e pesado), o `date-fns` oferece funções puras, imutáveis e suporta *tree-shaking* nativo. Isso resulta em um bundle JavaScript significativamente menor.
*   **Aplicação no Projeto**:
    *   `format`: Para exibir datas amigáveis (ex: "Segunda-feira, 3 de Fev").
    *   `addMinutes` / `addHours`: Para calcular horários de fim de serviço.
    *   `isBefore` / `isAfter`: Para validação de bloqueio de horários passados.
    *   `startOfToday`: Para garantir que o calendário inicie na data correta.
    *   `areIntervalsOverlapping`: Essencial para verificar conflitos de agenda no backend/frontend.

### 2.2. Gerenciamento de Estado: `zustand`
**Análise:**
Para gerenciar o "Fluxo de Agendamento" (Wizard), o `zustand` é a escolha ideal devido à sua simplicidade e performance (renderização seletiva sem "Context Hell").

**Estrutura de Estado Proposta (Store):**
```typescript
interface BookingState {
  step: 'service' | 'professional' | 'date' | 'review';
  selectedService: Service | null;
  selectedProfessional: Professional | null;
  selectedDate: Date | null;
  selectedTimeSlot: string | null; // ex: "14:30"
  
  // Actions
  selectService: (service: Service) => void;
  selectProfessional: (prof: Professional) => void;
  setDate: (date: Date) => void;
  setTimeSlot: (time: string) => void;
  reset: () => void;
}
```
*   **Vantagem**: Persistência fácil (middleware `persist`) caso o usuário recarregue a página sem perder o progresso.

### 2.3. Padrões de UI para Calendários
**Pesquisa UX/UI:**
*   **Visualização de Grade (Grid)**:
    *   Para agendamentos curtos, grids de **30 em 30 minutos** são o padrão da indústria (ex: Calendly, Google Calendar).
    *   Layout responsivo: 
        *   *Desktop*: Grid de 2 colunas ou mais.
        *   *Mobile*: Lista vertical scrollável ou botões em Grid (`grid-cols-4`).
*   **Navegação**:
    *   Uso de "Sticky Headers" para o dia/mês atual.
    *   Setas de navegação claras (< Anterior | Próximo >).
*   **Estados Visuais**:
    *   **Disponível**: Cor primária ou neutra, cursor pointer.
    *   **Selecionado**: Cor de destaque (Brand Color), texto branco.
    *   **Indisponível/Passado**: Cinza claro, opacidade reduzida, cursor `not-allowed`.

## 3. Requisitos Funcionais

### 3.1. Essenciais (MVP)
1.  **Bloqueio de Horários Passados**:
    *   O sistema deve detectar a hora atual do usuário e desabilitar automaticamente qualquer slot anterior a `Date.now()`.
2.  **Seleção Hierárquica**:
    *   Usuário seleciona o serviço -> Sistema filtra profissionais que realizam aquele serviço.
    *   Usuário seleciona data -> Sistema exibe apenas slots disponíveis para aquele profissional naquele dia.
3.  **Resumo do Agendamento (Review)**:
    *   Antes do "Confirmar", deve haver uma tela modal ou passo final exibindo:
        *   Serviço Escolhido (ex: Corte de Cabelo)
        *   Profissional (ex: João Silva)
        *   Data e Hora (ex: 03/02 às 14:30)
        *   Preço estimado.
4.  **Feedback de Sucesso**:
    *   Tela de confirmação clara com opção de "Adicionar ao Google Calendar".

### 3.2. Regras de Negócio
*   **Duração Variável**: Se um serviço dura 60min e os slots são de 30min, o sistema deve bloquear 2 slots consecutivos.
*   **Concorrência**: Se dois usuários tentarem agendar o mesmo horário no mesmo milissegundo, o backend deve tratar (Optimistic UI no front, validação final no back).

## 4. Próximos Passos (Perguntas em Aberto)
Para avançar para a fase de implementação, precisamos definir:
1.  **Autenticação**: O cliente precisa de login ou pode agendar como convidado (apenas Nome/Zap)?
2.  **Integração**: Haverá sincronização com Google Calendar dos profissionais?
3.  **Pagamentos**: O agendamento exige sinal (depósito) ou pagamento integral online?

---
**Aprovação:** 
[ ] Aprovado para Design
[ ] Aprovado para Desenvolvimento
