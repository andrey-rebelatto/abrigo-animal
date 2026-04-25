# Spec — Home (`/`)

## Objetivo

Em uma frase: o visitante entende que é um abrigo real de Joinville, sente que os animais são indivíduos (não estoque), e escolhe entre adotar, ajudar ou apadrinhar sem precisar rolar procurando o caminho.

## Persona-alvo

- **Primária**: adotante (80% do tráfego segundo a auditoria). Chega buscando "adotar cachorro Joinville" e precisa ver imediatamente que existem animais disponíveis.
- **Secundária**: doador de passagem — geralmente vem do Instagram depois de um post específico, quer um CTA claro de doação sem fricção.

## CTA primário / secundário

- **Primário**: `Conheça os animais` → `/adote`
- **Secundário**: `Ajudar de outra forma` → `/ajudar`

Hierarquia: adoção resolve o problema do abrigo (menos animais = menos custo). Doação é suporte, vem depois na rolagem.

## Motivação

O que o site atual erra:

- Hero carrossel com frases abstratas ("Transforme uma vida"), sem nome de animal, sem foto real clicável.
- CTA "Clique aqui" (problema #8 da auditoria — link genérico, acessibilidade).
- LCP 7,3 s porque o hero é uma imagem 1024×1024 servida por CDN com erro CORS (problema #1, #9).
- Feed do Instagram quebrado (404s) ocupa toda a metade inferior sem fallback.
- Sem hierarquia: botão Adote, Apadrinhe e "Clique aqui" com o mesmo peso visual e contraste 2,39:1 (problema #5).

O que o novo design corrige:

- Hero leva **um único animal específico** com nome, tempo esperando e foto otimizada (WebP, dimensões corretas). Concreto vence abstrato — princípio "História sobre estoque" do `DESIGN.md`.
- Contraste mínimo 4,5:1 em todos os botões, com estados foco visíveis.
- 4 caminhos ("Adotar · Apadrinhar · Doar · Voluntariar") em cards equivalentes, um por ação. Adoção mantém peso maior no hero; os outros dividem atenção abaixo.
- Zero feed externo que possa quebrar. Histórias de adoção são internas (content collection).

## Conteúdo obrigatório

- [ ] Hero com 1 animal em destaque: foto, nome, idade, tempo no abrigo, frase curta, CTA primário.
- [ ] Faixa de estatísticas vivas: adotados, esperando, apadrinhados — 3 números, sem gráficos.
- [ ] Seção "Como você pode ajudar": 4 cards (Adotar, Apadrinhar, Doar PIX, Voluntariar), cada um com ícone, frase de 1 linha e link.
- [ ] "Quem já encontrou um lar": carrossel horizontal mobile-first com 3–6 histórias curtas (foto antes/depois + frase da família).
- [ ] Bloco "Quem somos" resumido: 1 parágrafo + foto + link para `/sobre`.
- [ ] FAQ rápido: 3 perguntas mais comuns ("Posso visitar?", "Como adoto?", "Vocês atendem fora de Joinville?") com expand/collapse.
- [ ] Footer institucional (spec no Foundation).

## Estados de interface

| Estado | Quando aparece | Comportamento |
|---|---|---|
| Vazio | Sem animais `available` no CMS | Hero troca para ilustração + CTA vira "Cadastre-se para saber quando tiver animal". Evita página vazia quebrada. |
| Carregando | Build estático — não aplicável em produção | Em dev, skeleton da foto do hero com `bg-warm-white` animado. |
| Erro | Collection falha no build | Build quebra (falha explícita > página viva mentindo). |
| Sucesso | Default | Hero renderiza com o animal de maior `intakeDate` (mais antigo) entre `available`. |

## Métricas de sucesso

- CTR do CTA primário do hero ≥ 18% (benchmark: ONGs de adoção em landing pages focadas).
- Scroll depth mediano passa da seção de estatísticas (≥ 40% da página).
- LCP < 2,0 s no mobile 4G (auditoria atual: 7,3 s — alvo é reduzir 3,5×).
- Bounce rate do Instagram < 60% (usuário que veio do IG não sai sem ver pelo menos 1 caminho de ajuda).

## Acessibilidade

- Hero: ordem de leitura foto → nome → história → CTA. Foto tem `alt` descritivo (nome + espécie + uma característica concreta, não "foto de cachorro").
- FAQ: expand/collapse usa `<details>/<summary>` semânticos, não `onClick` em div.
- Carrossel de histórias: navegação por teclado (arrow keys), `aria-label` na região, snap points CSS (não JS) para preservar rolagem em leitores de tela.
- Cards de "Como ajudar": cada card é `<a>` envolvendo o bloco todo, não ícone clicável isolado — alvo de toque ≥ 44×44 px.
- Faixa de estatísticas: números com `aria-label` completo ("234 animais adotados"), não depender só do "234" que sem contexto é ruído.

## Referências no Paper

- Artboard mobile: `/home-mobile` (375px)
- Artboard desktop: `/home-desktop` (Fase 3, 1440px)
- Artboard legado (referência "antes"): `/` (1JR-0 do canvas original)
