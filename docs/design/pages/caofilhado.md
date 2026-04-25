# Spec — Projeto Cãofilhado (`/caofilhado`)

## Objetivo

Em uma frase: o visitante entende em 20 segundos o que é o projeto Cãofilhado (apadrinhamento de cães idosos/especiais que não serão adotados), conhece um animal específico, e decide se quer virar padrinho — sem precisar ligar ou mandar e-mail pra alguém do abrigo.

## Persona-alvo

- **Primária**: doador já convertido em doação única que está considerando compromisso recorrente. Vem da `/ajudar` procurando entender o que exatamente é "apadrinhar".
- **Secundária**: pessoa que não pode adotar (mora em apartamento pequeno, trabalha muito, alérgico) mas quer o vínculo emocional — apadrinhamento resolve essa dor.

## CTA primário / secundário

- **Primário**: `Quero apadrinhar {nome}` → abre formulário inline/modal com nome, email, plano, forma de pagamento.
- **Secundário**: `Como funciona` → âncora pra FAQ/processo na mesma página.

Hierarquia: o projeto é específico e pequeno (poucos animais). O CTA é por animal, não genérico — isso é o que diferencia Cãofilhado de uma doação recorrente normal.

## Motivação

O que o site atual erra:

- Página existe mas é basicamente um texto sem foto nem nome dos animais. Impossível se apegar a um nome abstrato.
- Sem formulário de inscrição — direciona pra WhatsApp (atrito).
- Não explica o que o padrinho recebe em troca (updates mensais, foto, visita).

O que o novo design corrige:

- Abre com um animal específico em destaque ("Esse é o Hércules, 14 anos, não vai ser adotado") — princípio "Concreto antes de abstrato" do `DESIGN.md`.
- Grade dos 4-6 animais disponíveis pra apadrinhar, cada um com história curta + CTA individual.
- Bloco "o que você recebe": relatório mensal com foto, visita semestral, seu nome no mural do abrigo (opcional).
- Três planos claros (R$ 30 / 80 / 150) com diferenças explícitas.

## Conteúdo obrigatório

- [ ] Hero explicando o projeto: diferença entre adoção e apadrinhamento, quem são os animais que entram no programa.
- [ ] Featured animal: 1 cão em destaque (geralmente o mais antigo) com foto, nome, idade, condição, história de 2 linhas.
- [ ] Grade de outros 4-5 cães no programa.
- [ ] "O que você recebe" — 3-4 itens concretos (foto mensal, visita trimestral, recibo, nome no mural).
- [ ] 3 planos (R$ 30 / 80 / 150) — reusar padrão do `/ajudar` mas com contexto específico.
- [ ] Formulário de inscrição (nome, e-mail, plano, forma de pagamento, animal escolhido).
- [ ] Footer institucional.

## Estados de interface

| Estado | Quando aparece | Comportamento |
|---|---|---|
| Vazio | Nenhum animal com `sponsorshipOpen: true` no CMS | Bloco de destaque muda pra "vagas de padrinho temporariamente fechadas" + CTA alternativo ("avise-me"). |
| Carregando | Submit do formulário | Botão "Quero apadrinhar" vira "Enviando…" com spinner, campo desabilita. |
| Erro | Falha no envio do formulário | Mensagem inline no topo do formulário, sem perder os dados digitados. |
| Sucesso | Default + pós-submit | Sucesso: tela de confirmação com próximos passos ("em até 2 dias útil entramos em contato"). |

## Métricas de sucesso

- Conversão visita → envio de formulário ≥ 5% (benchmark pra signup de programa recorrente).
- Scroll até o bloco "o que você recebe" ≥ 50% (é o que quebra a objeção).
- Retenção de padrinho após 3 meses ≥ 80% (métrica pós-projeto, não da página em si — mas a página deve atrair os certos).

## Acessibilidade

- Formulário com labels visíveis (não só placeholder). Cada campo tem `aria-describedby` apontando pra helper text.
- Radio de planos agrupados com `<fieldset>` + `<legend>` ("Escolha o plano mensal").
- Animal featured tem hierarquia semântica (h1 da página é "Cãofilhado", h2 do featured é nome do cão).
- Erros de validação do formulário com `aria-live="polite"` e borda + ícone, não só cor vermelha.
- Cards dos outros animais são `<a>`s envolvendo o card inteiro.

## Referências no Paper

- Artboard mobile: `/caofilhado-mobile` (375px)
- Artboard desktop: `/caofilhado-desktop` (Fase 3)
- Artboard legado (referência "antes"): `/projeto-caofilhado` (152-0)
