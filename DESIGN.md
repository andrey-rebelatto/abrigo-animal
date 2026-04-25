# Design System — Abrigo Animal

Paleta ancorada na logomarca do abrigo (o círculo verde sálvia com "ABRIGO ANIMAL · JOINVILLE"). Evita deliberadamente o eixo pergaminho+terracota típico de interfaces Claude/Anthropic.

Sensação buscada: **verde-lar + mel** — acolhedor e claramente não-corporativo, sem cair em marrom-café.

---

## Princípios

1. **Sage lidera, honey acolhe** — o verde sálvia da logo é a cor-âncora; mostarda-mel é o caloroso que substitui terracotta.
2. **Fundo linen, não pergaminho** — off-white frio, sem amarelo-cream. Separa visualmente de outros sites "quentes".
3. **Serifa para emoção, sans para informação** — Fraunces nos títulos, Inter no corpo.
4. **Cantos generosos** — `rounded-xl` / `rounded-2xl` como padrão. Evitar cantos retos em cards, botões e inputs.
5. **Contraste alto no texto** — corpo passa AA sem concessão. Honey é decorativo; não usar como texto sobre fundo claro (usar `--color-honey-ink`).
6. **Fotos dos animais são o herói** — o design fica a serviço das fotos, não compete com elas.

---

## Tokens

Os tokens ficam em `src/styles/global.css` via `@theme` (Tailwind 4). Este arquivo é a fonte da verdade; o CSS espelha.

### Cores

| Token                 | Valor     | Uso                                              |
| --------------------- | --------- | ------------------------------------------------ |
| `--color-linen`       | `#F2EFE8` | Background principal da página                   |
| `--color-warm-white`  | `#FCFAF3` | Cards, áreas elevadas, superfícies               |
| `--color-sage`        | `#6F8B5A` | Primária — CTAs, links, accent da marca          |
| `--color-sage-muted`  | `#B5C4A6` | Hover sutil, chips secundários, bg decorativo    |
| `--color-deep-moss`   | `#3A4A34` | Seções escuras, stats secundários, outline forte |
| `--color-ink`         | `#2A332F` | Texto de corpo e títulos (preto-floresta)        |
| `--color-honey`       | `#D1A24C` | Accent caloroso — badges, destaques numéricos    |
| `--color-honey-ink`   | `#8E6F24` | Versão AA do honey pra texto sobre fundo claro   |

**Mapeamento vs. paleta antiga** (para migração de componentes legados):

| Antigo (removido) | Novo equivalente         |
| ----------------- | ------------------------ |
| `parchment`       | `linen`                  |
| `cream`           | `warm-white`             |
| `terracotta`      | `sage` (CTAs)            |
| `coral`           | `sage-muted`             |
| `clay`            | `deep-moss`              |
| `ink` (#2E2A26)   | `ink` (#2A332F, mais verde) |
| `moss`            | `sage` (unificado)       |
| `rust`            | `honey` ou `deep-moss`   |

### Tipografia

| Token                   | Valor                              |
| ----------------------- | ---------------------------------- |
| `--font-display`        | `Fraunces, Georgia, serif`         |
| `--font-body`           | `Inter, system-ui, sans-serif`     |

Escala (tailwind defaults + extensões):
- `text-sm` (0.875rem) — legendas, metadata
- `text-base` (1rem) — corpo
- `text-xl` (1.25rem) — subtítulos de seção
- `text-3xl` (1.875rem) — título de cards grandes
- `text-5xl` (3rem) — hero / título de página
- `text-7xl` (4.5rem) — hero principal da home

### Radii

| Token           | Valor      | Uso                            |
| --------------- | ---------- | ------------------------------ |
| `--radius-sm`   | `0.5rem`   | Inputs pequenos, chips         |
| `--radius-md`   | `0.75rem`  | Botões                         |
| `--radius-lg`   | `1rem`     | Cards                          |
| `--radius-xl`   | `1.5rem`   | Seções / containers grandes    |

### Espaçamento e layout

Segue escala padrão do Tailwind (`4px` steps). Nada custom por padrão.

Containers:
- `max-w-2xl` — texto corrido (leitura confortável)
- `max-w-5xl` — grids de conteúdo
- `max-w-7xl` — layout geral da página

---

## Componentes básicos

### Botão primário
- Background `sage`, texto `warm-white`
- `rounded-full` (pílula) no mobile, `rounded-md` em formulários
- Hover: escurece para `deep-moss`
- Transição suave (`transition-colors duration-200`)

### Botão secundário (outline)
- Border `deep-moss` 1.5px, texto `deep-moss`, bg transparente
- Hover: bg `sage-muted` com alpha 20%

### Badge / destaque numérico
- Background `honey`, texto `ink`
- Uso: estatísticas de destaque, "NOVO", contador
- **Nunca** usar honey como cor de texto longo sobre linen/warm-white — usa `honey-ink` nesse caso

### Card de animal
- Background `warm-white`, borda sutil `ink/8`
- `rounded-2xl`, sombra `shadow-sm`
- Foto ocupa topo em `rounded-t-2xl`
- Nome em `font-display text-2xl`, metadata em `font-body text-sm`

### Link em texto corrido
- Cor `sage`, sublinhado com `underline-offset-4`
- Hover: cor `deep-moss`

### Seções de CTA (closing)
- Background `sage` (primária) ou `deep-moss` (dramática)
- Texto `warm-white`, título em `font-display`
- Botão interno: bg `warm-white`, texto `ink`

---

## O que **não** fazer

- Não usar branco puro (`#fff`) como background de página — usar `linen`
- Não usar cinza frio (ex.: `slate-*`, `gray-*` Tailwind defaults) — preferir sage + ink
- Não usar terracotta / laranja terroso — paleta intencionalmente evita essa família
- Não usar `honey` como cor de texto sobre fundo claro (falha AA) — usar `honey-ink`
- Não usar múltiplas famílias de fonte além de Fraunces + Inter
- Não usar cantos retos em elementos interativos
- Não usar sombras duras (box-shadow com blur baixo) — preferir sombras difusas e sutis

---

## Prototipagem visual

Protótipos hi-fi em Paper (`file 01KPVE3P8JA2C89JGF7MKWPSVR`):
- `/Foundation — Design System` (artboard `1JR-0`) — paleta canônica, tipografia, componentes
- 6 artboards mobile (375px): `/home-mobile`, `/sobre-mobile`, `/adote-mobile`, `/ajudar-mobile`, `/caofilhado-mobile`, `/contato-mobile`
- Specs por página em `docs/design/pages/*.md`

## Marca

- **Asset oficial**: `src/assets/logo-abrigo-animal.png` (300×300 PNG, RGBA com cantos transparentes). Importado via `astro:assets` em `Header` e `Footer` para servir variantes WebP otimizadas em `srcset` (1x e 2x).
- **Favicon**: `public/favicon.png` (300×300, mesma fonte). Referenciado em `Layout.astro` como `<link rel="icon" type="image/png">`.
- **Padrão de uso**: logo + wordmark lado a lado (logo em `rounded-full`, wordmark em Fraunces). A tipografia interna da logo é decorativa — não substitui o wordmark em tamanhos pequenos (≤ 48px).
- **Referência Paper**: nó `NH-0` no protótipo — clone via `<x-paper-clone node-id="NH-0" />` se for replicar em novos artboards.
