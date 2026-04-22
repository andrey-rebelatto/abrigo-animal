# Design System — Abrigo Animal

Inspirado no design do Claude (Anthropic): tipografia serifada calorosa, paleta quente (pergaminho, terracota, coral), cantos arredondados generosos e hierarquia tipográfica clara.

O objetivo é um site **que pareça acolhedor** — combina com a missão do abrigo — sem parecer corporativo ou infantilizado.

---

## Princípios

1. **Quente, não frio** — paleta off-white (pergaminho) substitui o branco puro. Cinza frio fica de fora.
2. **Serifa para emoção, sans para informação** — Fraunces nos títulos, Inter no corpo.
3. **Cantos generosos** — `rounded-xl` / `rounded-2xl` como padrão. Evitar cantos retos em cards, botões e inputs.
4. **Contraste alto no texto** — texto de corpo precisa passar AA/AAA sem concessão.
5. **Fotos dos animais são o herói** — o design fica a serviço das fotos, não compete com elas.

---

## Tokens

Os tokens ficam em `src/styles/global.css` via `@theme` (Tailwind 4). Este arquivo é a fonte da verdade; o CSS espelha.

### Cores

| Token                | Valor     | Uso                                    |
| -------------------- | --------- | -------------------------------------- |
| `--color-parchment`  | `#F6F1E7` | Background principal (off-white quente)|
| `--color-cream`      | `#FBF7EE` | Background de cards, áreas elevadas    |
| `--color-terracotta` | `#C66B3D` | Ação primária (botões, links)          |
| `--color-coral`      | `#E89575` | Hover / destaque secundário            |
| `--color-clay`       | `#8A4B2B` | Texto de títulos, emphasis             |
| `--color-ink`        | `#2E2A26` | Texto de corpo                         |
| `--color-moss`       | `#6B7A4E` | Sucesso, badges positivas              |
| `--color-rust`       | `#A8432A` | Erro, alertas                          |

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
- Background `terracotta`, texto `cream`
- `rounded-md`, `px-6 py-3`
- Hover: troca para `coral`
- Transição suave (`transition-colors duration-200`)

### Card de animal
- Background `cream`, borda sutil `clay/10`
- `rounded-lg`, sombra `shadow-sm`
- Foto ocupa topo em `rounded-t-lg`
- Nome em `font-display text-2xl`, metadata em `font-body text-sm`

### Link em texto corrido
- Cor `terracotta`, sublinhado com `underline-offset-4`
- Hover: cor `clay`

---

## O que **não** fazer

- Não usar branco puro (`#fff`) como background de página
- Não usar cinza frio (ex.: `slate-*`, `gray-*` Tailwind defaults) — preferir os tons quentes
- Não usar múltiplas famílias de fonte além de Fraunces + Inter
- Não usar cantos retos em elementos interativos
- Não usar sombras duras (box-shadow com blur baixo) — preferir sombras difusas e sutis
