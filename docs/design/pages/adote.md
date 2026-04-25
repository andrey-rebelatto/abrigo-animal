# Spec — Adote (`/adote`)

## Objetivo

Em uma frase: o visitante filtra rapidamente por "porte e espécie que cabem na minha vida", vê os animais disponíveis com informação honesta (idade, tempo esperando, se já é castrado), e abre a ficha de pelo menos um deles.

## Persona-alvo

- **Primária**: adotante já decidido, com perfil mais ou menos definido ("quero um cachorro pequeno pra apartamento"). Precisa de filtro utilitário, não de emoção.
- **Secundária**: adotante exploratório, ainda sem perfil — conforto ver grade inteira, ler cards curtos.

## CTA primário / secundário

- **Primário** (por card): `Conhecer {nome}` → `/adote/{slug}`
- **Secundário** (topo da página, quando grade vazia ou filtros muito restritivos): `Avisar quando chegar um` → `/contato?assunto=alerta-adocao`

Hierarquia: a página é o CTA. Não precisa de bloco de ação — cada card É a ação.

## Motivação

O que o site atual erra:

- Não existe catálogo. A página "Adote seu melhor amigo" tem texto corrido e direciona pro Instagram (que está com feed quebrado, problema #9 da auditoria).
- Não há filtros — adotante que quer "gato pequeno" precisa rolar o Instagram infinito.
- Sem indicação de status (adotado, em tratamento, disponível), o que frustra quem se apega a uma foto antiga.

O que o novo design corrige:

- Catálogo real com `content collection` (`src/content/animals`), schema já tipado em `src/content.config.ts`.
- Filtros no topo: espécie, porte, sexo, "pronto pra ir" (`neutered && vaccinated`). Chips, não dropdown — mobile-first.
- Status visível em cada card (badge). Animais adotados saem da listagem; apadrinhados aparecem com rótulo separado.
- Estado vazio educativo (nenhum animal com os filtros) vira chance de cadastro na lista de alerta, não dead-end.

## Conteúdo obrigatório

- [ ] Hero curto: título ("Quem está esperando"), 1 parágrafo, contador dinâmico ("58 animais disponíveis").
- [ ] Barra de filtros: chips horizontais com scroll. Ordem: Todos · Cachorros · Gatos · Filhotes · Adultos · Pequeno · Médio · Grande · Pronto pra ir.
- [ ] Grade 2 colunas em mobile, cada card com: foto, nome, 2-3 badges (espécie, sexo, idade), indicador "esperando há X meses".
- [ ] Bloco "Como funciona a adoção" (3 passos: conhecer, conversar, visita) no meio ou no fim da página.
- [ ] FAQ curto da adoção (2-3 itens específicos: "posso levar pra teste?", "cobram taxa?", "como funciona pós-adoção").
- [ ] Footer institucional.

## Estados de interface

| Estado | Quando aparece | Comportamento |
|---|---|---|
| Vazio | Nenhum animal com os filtros ativos | Card ilustrado + "Nenhum animal com esses filtros agora. Quer ser avisado?" + CTA de alerta. Nunca tela branca. |
| Vazio total | Nenhum animal `available` no CMS | Mensagem + foto dos últimos adotados + CTA pra apadrinhar. |
| Carregando | Filtro em transição (se virar SPA) | Skeleton dos cards com `bg-warm-white` animado. No build estático, não aplicável. |
| Erro | Foto de um animal falha | Fallback: inicial do nome sobre warm gradient. Nunca quebra o card. |
| Sucesso | Default | Grade com todos os animais. |

## Métricas de sucesso

- CTR médio por card ≥ 25% (adotante clica no card, não só rola).
- Scroll depth mediano ≥ 60% (passa da primeira dobra de cards).
- % visitantes que usam filtro ≥ 35% (sinal de intenção concreta).
- Taxa de conversão visita → formulário de interesse ≥ 4%.

## Acessibilidade

- Filtros são `<button role="switch" aria-pressed>`, não divs com onClick. Estado ativo tem contraste 4,5:1 e não depende só de cor.
- Cards de animal são `<a>` envolvendo o conteúdo inteiro. Alvo de toque mínimo 44×44 px.
- Badges de espécie/porte/sexo têm `aria-label` completo ("cachorro, macho, médio"), não só letra isolada.
- `alt` de cada foto segue o campo `photoAlt` do schema (obrigatório no CMS — nunca vazio).
- Contador "esperando há X meses" usa `<time>` com `datetime` no formato ISO (leitores de tela leem a data absoluta).

## Referências no Paper

- Artboard mobile: `/adote-mobile` (375px)
- Artboard desktop: `/adote-desktop` (Fase 3)
- Artboard legado (referência "antes"): `/adote-seu-melhor-amigo` (GS-0)
