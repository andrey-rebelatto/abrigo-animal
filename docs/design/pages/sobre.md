# Spec — Sobre (`/sobre`)

## Objetivo

Em uma frase: o visitante termina a página sabendo que o abrigo é real, que o dinheiro dele vai pra comida e veterinário (e sabe exatamente quanto), e que pode confiar o suficiente pra dar o próximo passo (adotar, doar ou voluntariar).

## Persona-alvo

- **Primária**: doador recorrente em potencial — pessoa que já deu PIX uma vez e quer entender "pra onde foi meu dinheiro" antes de assinar um valor mensal.
- **Secundária**: adotante em etapa final de decisão, pesquisando se o abrigo é sério antes de marcar visita.

## CTA primário / secundário

- **Primário**: `Ver como ajudar` → `/ajudar`
- **Secundário**: `Falar com a gente` → `/contato`

Hierarquia: quem termina o "Sobre" convicto é candidato a doar. Adoção já tem CTA próprio no header. Contato é escape pra dúvida residual.

## Motivação

O que o site atual erra:

- Página de texto corrido, sem hierarquia. 6 parágrafos sem fotos, sem números, sem destaque do CNPJ.
- Zero prestação de contas. Nada sobre como o dinheiro é gasto — o que mata conversão de doação recorrente.
- Equipe anônima. Não tem nome nem foto do veterinário ou coordenação — "anônimo" = "desconfio".
- `<h5>` no rodapé sem `<h2>/<h3>/<h4>` antes (problema #6 da auditoria) — página longa com hierarquia quebrada.

O que o novo design corrige:

- Abre com um número-âncora concreto ("Desde 1998. 234 adoções.") — princípio "Concreto antes de abstrato" do `DESIGN.md`.
- Seção **dedicada** a transparência financeira com breakdown (ração, veterinário, manutenção) — não um documento enterrado.
- Foto + nome + função de cada pessoa-chave. Rosto humano gera confiança.
- Hierarquia h1 → h2 → h3 respeitada, leitura linear do topo pro fim.

## Conteúdo obrigatório

- [ ] Hero com número-âncora: "28 anos. 234 famílias. 58 animais agora."
- [ ] Nossa história: 2 parágrafos curtos + foto de arquivo (primeiros anos).
- [ ] Missão em uma frase destacada.
- [ ] Três valores (ex.: "Adoção responsável, não rápida", "Transparência radical", "Bem-estar antes de volume") com 1 linha cada.
- [ ] Bloco de transparência financeira: breakdown dos últimos 12 meses em 3-4 categorias (ração, veterinário, manutenção, outros) com valores absolutos.
- [ ] Equipe: 4-6 cards (foto + nome + função) — mínimo veterinário e coordenação.
- [ ] Documentos/CNPJ: link pro estatuto, último balanço, CNPJ visível.
- [ ] CTA final: "Agora que você nos conhece" → cards pra adotar / doar / voluntariar.

## Estados de interface

| Estado | Quando aparece | Comportamento |
|---|---|---|
| Vazio | Sem dados de transparência no CMS | Bloco oculta-se + nota discreta "prestação de contas em atualização". Preferível a números vazios. |
| Carregando | Build estático — não aplicável | — |
| Erro | Imagens da equipe faltando | Fallback: iniciais sobre fundo sage-muted (primeira letra em Fraunces, tom deep-moss). Não deixa buraco visual. |
| Sucesso | Default | Tudo renderiza com dados do CMS. |

## Métricas de sucesso

- Scroll depth mediano ≥ 75% — se o usuário não chega no bloco de transparência, a página falhou no objetivo.
- CTR do CTA primário ("Ver como ajudar") ≥ 12% — benchmark de página institucional com intenção de conversão.
- Tempo na página ≥ 90s — leitura efetiva, não bounce.

## Acessibilidade

- Hierarquia h1 ("Sobre o Abrigo") → h2 por seção (História, Missão, Transparência, Equipe) → h3 em nomes da equipe. Corrige o problema #6 da auditoria.
- Fotos da equipe com `alt` no formato "Nome — Função" (não "Foto de pessoa sorrindo").
- Números grandes (234, 58, R$ 12.400) usam `font-variant-numeric: tabular-nums` e têm `aria-label` completo ("234 animais adotados desde 1998").
- Links pra estatuto/balanço com texto descritivo ("Baixar estatuto em PDF — 240 KB"), não "Clique aqui" (problema #8 da auditoria).

## Referências no Paper

- Artboard mobile: `/sobre-mobile` (375px)
- Artboard desktop: `/sobre-desktop` (Fase 3)
- Artboard legado (referência "antes"): `/quem-somos` (N7-0)
