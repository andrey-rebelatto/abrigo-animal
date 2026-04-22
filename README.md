# Abrigo Animal

Site institucional do abrigo — com cadastro de animais para adoção, fluxo de doação, apadrinhamento (Cãofilhado) e voluntariado.

Stack: **Astro 6** + **Tailwind 4** + **TypeScript (strict)** + deploy automático na **Vercel**.

---

## Setup no localhost

### Pré-requisitos
- Node.js **22.12+** (LTS)
- npm 10+
- Git

### Passo a passo

```bash
git clone https://github.com/andrey-rebelatto/abrigo-animal.git
cd abrigo-animal
npm install
npm run dev
```

Abrir [http://localhost:4321](http://localhost:4321).

### Scripts disponíveis

| Comando           | Descrição                                     |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Sobe o servidor de desenvolvimento            |
| `npm run build`   | Gera o build de produção em `./dist`          |
| `npm run preview` | Serve o build localmente (sanity check)       |
| `npm run check`   | Roda `astro check` (TS + templates)           |

---

## Padrão de criação de feature

Toda alteração de código segue o fluxo abaixo. **Nunca commita direto na `main`.**

1. **Criar branch a partir da `main` atualizada**

   ```bash
   git checkout main
   git pull origin main
   git checkout -b feat/{nome-da-feature}
   ```

   Use prefixos consistentes:
   - `feat/` — nova funcionalidade
   - `fix/`  — correção de bug
   - `docs/` — só documentação
   - `chore/` — build, config, ferramentas

2. **Commits pequenos e descritivos**

   Preferir [Conventional Commits](https://www.conventionalcommits.org/):
   ```
   feat: adiciona card de animal na listagem
   fix: corrige link quebrado no footer
   ```

3. **Abrir Pull Request**

   ```bash
   git push -u origin feat/{nome-da-feature}
   gh pr create --fill
   ```

   O CI vai rodar `astro check` e `astro build` automaticamente.
   A Vercel vai gerar um **preview deploy** para cada PR.

4. **Code review → merge**

   Merge só depois de CI verde e aprovação de pelo menos 1 pessoa.
   Squash & merge para manter o histórico da `main` limpo.

---

## Estrutura do projeto

```
abrigo-animal/
├── .github/workflows/   # CI (build + check)
├── public/              # Assets estáticos
├── src/
│   ├── content/         # Content Collections (animais, páginas)
│   ├── layouts/         # Layouts compartilhados
│   ├── pages/           # Rotas (file-based routing)
│   └── styles/          # CSS global + tokens Tailwind
├── DESIGN.md            # Sistema de design (tokens, paleta, tipografia)
└── astro.config.mjs     # Configuração do Astro
```

---

## Deploy

- **Produção**: qualquer push na `main` dispara deploy na Vercel
- **Preview**: cada PR ganha uma URL de preview automaticamente

---

## Referências

- [Documentação do Astro](https://docs.astro.build/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [DESIGN.md](./DESIGN.md) — tokens e princípios visuais
