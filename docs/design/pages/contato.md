# Spec — Contato (`/contato`)

## Objetivo

Em uma frase: o visitante encontra em 10 segundos o canal certo pra sua dúvida (adoção, doação, voluntariado, imprensa) e resolve direto — sem passar por formulário genérico que ninguém sabe quem responde.

## Persona-alvo

- **Primária**: alguém com pergunta específica que não foi respondida pelas FAQs das outras páginas. Pode ser adotante, doador, voluntário em potencial ou imprensa — cada um tem canal diferente.
- **Secundária**: quem quer visitar o abrigo e precisa confirmar horário/endereço.

## CTA primário / secundário

- **Primário** (contextual por canal): `Abrir WhatsApp` (adoção / voluntariado) ou `Enviar e-mail` (imprensa / administrativo).
- **Secundário**: `Formulário geral` (fallback pra quem não se encaixa nos canais acima).

Hierarquia: canal específico > formulário genérico. O formulário existe como rede de segurança, não como primeira opção.

## Motivação

O que o site atual erra:

- Uma única "página de contato" com formulário genérico que cai num e-mail que ninguém monitora de verdade.
- Sem segmentação de canal — pessoa pedindo adoção é respondida no mesmo fila de alguém pedindo release pra imprensa, e as duas esperam dias.
- Horário de atendimento e endereço enterrados no rodapé.

O que o novo design corrige:

- Três canais claros no topo: **Adoção/voluntariado** (WhatsApp), **Doação e transparência** (e-mail específico), **Imprensa** (e-mail específico).
- Mapa e endereço com link direto pro Google Maps.
- Formulário geral fica depois, com o aviso "resposta em até 3 dias úteis".
- FAQ no final, pra resolver dúvidas comuns sem escalar pra contato.

## Conteúdo obrigatório

- [ ] Hero curto: "Como prefere falar com a gente?"
- [ ] Cards de canais (3-4): cada um com ícone, título, descrição curta, canal (WhatsApp/email/tel) e CTA direto.
- [ ] Endereço + horário de funcionamento + mapa estático (placeholder — mapa real só se vier dentro do escopo).
- [ ] Formulário geral com campos: nome, e-mail, assunto (select), mensagem.
- [ ] Nota de privacidade (LGPD).
- [ ] FAQ curto (3 itens diferentes dos outros FAQs).
- [ ] Footer institucional.

## Estados de interface

| Estado | Quando aparece | Comportamento |
|---|---|---|
| Vazio | — | Não aplicável. |
| Carregando | Submit do formulário | Botão "Enviar" vira "Enviando…" com spinner, campos desabilitam. |
| Erro | Falha no envio ou validação | Mensagens inline por campo. Topo do form tem resumo acessível. |
| Sucesso | Default + pós-submit | Pós-submit: tela com "mensagem recebida, respondemos em até 3 dias úteis. Dúvida urgente? [WhatsApp]". |

## Métricas de sucesso

- % de visitantes que usam canal direto (WhatsApp/email) ≥ 70% (indica que a segmentação funciona).
- Formulário geral recebe ≤ 30% do volume de contato.
- Tempo médio na página ≤ 45s (não é página de permanência, é página de escolha).

## Acessibilidade

- Cards de canais são `<a>`s com `href="https://wa.me/..."` ou `mailto:`, não abrem modal intermediário.
- Números de telefone com `href="tel:..."` e formatação com `aria-label` completo ("(47) 9 9999-9999, clique para ligar").
- Formulário com `<label>` visível pra cada campo, `required` real no HTML (não só JS).
- Mapa com `alt` descritivo no placeholder ("Localização do abrigo no bairro Saguaçu, Joinville") e link alternativo em texto pro Google Maps.
- Endereço com `<address>` semântico.

## Referências no Paper

- Artboard mobile: `/contato-mobile` (375px)
- Artboard desktop: `/contato-desktop` (Fase 3)
- Artboard legado (referência "antes"): `/contato` (1AM-0)
