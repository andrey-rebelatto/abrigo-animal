# Spec — Ajudar (`/ajudar`)

## Objetivo

Em uma frase: quem chega aqui entende que "ajudar" não é só dinheiro, escolhe o caminho que cabe no bolso e no tempo dele (PIX, doação material, padrinho recorrente, voluntariado), e completa a ação em menos de 60 segundos sem sair da página.

## Persona-alvo

- **Primária**: doador de passagem — viu um post no Instagram, quer ajudar **agora**, não quer fricção. Precisa do PIX copia-e-cola visível.
- **Secundária**: doador recorrente em potencial (padrinho) — quer comparar valores (R$ 30, 80, 150) e entender o que cada um vira.
- **Terciária**: doador de itens (ração, cobertor) — precisa saber o que é útil, o que não é, e onde entregar.

## CTA primário / secundário

- **Primário**: `Copiar chave PIX` → ação inline (não leva pra outra página, copia no clipboard com feedback).
- **Secundário**: `Virar padrinho` → `/caofilhado` (ou formulário inline se preferirmos).

Hierarquia: PIX resolve a doação única (maior volume). Apadrinhamento é a conversão valiosa (recorrente) — tem peso próprio mas vem depois.

## Motivação

O que o site atual erra:

- CTA "Doe agora" leva pra uma página com texto corrido e o PIX enterrado no meio de parágrafos — fricção absurda pra quem veio com intenção.
- Não existe distinção entre doação única, recorrente e material. Tudo misturado.
- Sem transparência de destino ("pra onde vai R$ 80?"). Quem doa no escuro, doa uma vez só.
- Botões com contraste 2,39:1 (problema #5 da auditoria).

O que o novo design corrige:

- PIX é a primeira coisa visível depois do hero — chave, QR code, botão copiar. Fim.
- Três blocos claros: **Doar** (único), **Apadrinhar** (recorrente), **Doar itens** (material) — cada um com escopo isolado.
- Cada valor sugerido mostra o que vira ("R$ 30 = 1 saco de ração", "R$ 80 = castração").
- Contraste em todos os CTAs ≥ 4,5:1 (AA).

## Conteúdo obrigatório

- [ ] Hero com 1 frase e número-âncora ("R$ 148 mil foram recebidos em 2025. Transparente, item a item.").
- [ ] **Bloco 1 — PIX**: chave copia-e-cola, QR code, botão "Copiar chave" com feedback visual de copiado.
- [ ] Sugestões de valor com tradução concreta (3 tiers: R$ 30 / R$ 80 / R$ 150) — não é botão, é tabela visual.
- [ ] **Bloco 2 — Apadrinhar**: 3 planos mensais (R$ 30 / 80 / 150), CTA pra `/caofilhado`.
- [ ] **Bloco 3 — Doar itens**: lista do que é aceito (ração, remédio específico, cobertor, jornal) e do que **não** é (brinquedos usados de outros pets, roupa). Endereço e horário de entrega.
- [ ] Bloco "Pra onde vai": mini versão da transparência da página Sobre (3 números grandes), com link pra detalhe.
- [ ] Footer institucional.

## Estados de interface

| Estado | Quando aparece | Comportamento |
|---|---|---|
| Vazio | — | Não aplicável. |
| Carregando | — | Não aplicável. |
| Erro | Copy falha (sem permissão de clipboard) | Fallback: o input da chave PIX fica selecionado, com nota "Pressione Ctrl+C / segure e copie". Nunca "deu erro". |
| Sucesso | Default | Ao copiar, botão vira "Copiado!" por 2s, depois volta. Animação sutil (scale 0.98 → 1). |

## Métricas de sucesso

- Conversão "clicar em copiar PIX" ≥ 8% (métrica direta de intenção, mesmo que não vire doação de fato).
- CTR pro `/caofilhado` ≥ 15% (indicador de recorrente).
- Scroll depth ≥ 50% — se passa do PIX, há chance de converter em material ou apadrinhamento.

## Acessibilidade

- Botão "Copiar chave" é `<button>`, não div. Feedback "Copiado!" é anunciado via `aria-live="polite"`, não só visual.
- Chave PIX em `<input readonly>` com `aria-label="Chave PIX, clique no botão ao lado para copiar"`.
- Tiers de valor (R$ 30 / 80 / 150) são agrupados com `role="radiogroup"` se virarem sugestão selecionável, ou `<dl>` se forem apenas visuais.
- Lista de "não aceitamos" tem contraste AA mesmo sendo texto secundário — evita que doador envie item inútil e fique sem saber.
- Endereço do abrigo com `<address>` semântico + link pro Google Maps.

## Referências no Paper

- Artboard mobile: `/ajudar-mobile` (375px)
- Artboard desktop: `/ajudar-desktop` (Fase 3)
- Artboard legado (referência "antes"): `/ajudar` (WH-0)
