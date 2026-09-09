# Clínica Brea — Estratégia do site

> Documento de discovery, estratégia e design system que fundamenta a implementação.
>
> **Limitação importante do discovery:** o Instagram (@clinicabrea) e o bio.site
> estavam inacessíveis a partir do ambiente de desenvolvimento (bloqueio de rede),
> e a marca não possui presença indexada em buscadores. A análise visual da
> identidade real, portanto, **não pôde ser feita**. As decisões abaixo seguem uma
> direção premium defensável para clínicas de estética no Brasil e foram
> estruturadas para serem **facilmente recalibradas** (tokens centralizados em
> `assets/css/styles.css`) assim que o material real da marca for analisado.
> Ver seção "O que validar com o Instagram" ao final.

## 1. Diagnóstico e posicionamento assumido

- Segmento: clínica de estética / saúde e bem-estar, público majoritariamente feminino, 25–55 anos.
- Canal principal de aquisição hoje: Instagram → bio.site → WhatsApp.
- Posicionamento adotado no site: **estética com avaliação individual** — contraponto
  direto ao mercado de "pacotes de prateleira" e promessas de anúncio. É um
  posicionamento honesto, difícil de copiar e que sustenta preço premium.
- Fio narrativo de toda a copy: *avaliação → plano claro → acompanhamento*.

## 2. Estratégia de conversão

- **Conversão primária:** clique no WhatsApp com mensagem pré-preenchida
  (padrão dominante de agendamento de clínicas no Brasil — menor fricção possível).
- **Conversão secundária:** formulário de contato (para quem não quer abrir conversa imediata).
- CTA "Agendar avaliação" persistente no header; repetido ao fim de cada bloco
  narrativo (método, tratamentos, FAQ) — nunca dois CTAs primários disputando na mesma dobra.
- Tratamento de objeções via FAQ: "preciso saber o que quero?", "sou obrigada a fechar?",
  "quantas sessões?" — as três objeções clássicas de avaliação.
- Sem urgência artificial, sem números inventados, sem depoimentos fictícios
  (a seção de depoimentos está documentada no HTML e só entra com material real autorizado).

## 3. Arquitetura

| Página | Papel na jornada |
|---|---|
| `index.html` | Narrativa completa: promessa → forma de trabalhar → tratamentos → método → prova (futura) → objeções → ação |
| `tratamentos.html` | Aprofundamento das 4 frentes, cada uma com CTA contextualizado (mensagem de WhatsApp específica) |
| `sobre.html` | Confiança: história (placeholder), princípios, espaço |
| `contato.html` | Conversão: WhatsApp em destaque + formulário + dados práticos |

Sem blog e sem páginas de preenchimento nesta fase. A estrutura de âncoras em
`tratamentos.html` permite promover qualquer frente a página própria no futuro sem
quebrar links (manter redirects).

## 4. Design system

- **Cores:** marfim quente `#FBF8F2` (fundo), verde botânico profundo `#2E3B32`
  (primária/CTA/seções escuras), bronze `#A5793F` (acento, kickers, detalhes),
  superfícies `#F3EDE2`. Deliberadamente longe do "gradiente roxo/azul de IA".
- **Tipografia:** Fraunces (display serif, personalidade editorial) +
  Instrument Sans (texto, neutra sem ser genérica).
- **Formas:** raios pequenos (3–10px), linhas de 1px como elemento gráfico
  recorrente (kickers, listas, steps) — linguagem editorial, não "cards com sombra".
- **Layout:** ritmo alternado — hero assimétrico 7/5, declaração editorial em
  superfície, lista numerada em linhas (não grid de cards), seção escura de método,
  splits alternando lado da imagem.
- **Movimento:** reveal on scroll com stagger (IntersectionObserver), transições
  cross-document via View Transitions API (progressive enhancement), microinterações
  em botões/links/menu. Tudo desativado sob `prefers-reduced-motion`; sem JS o site
  é 100% funcional.

## 5. Tecnologia

HTML/CSS/JS puros, sem build e sem dependências (apenas Google Fonts).
Justificativa: 4 páginas de conteúdo estático, performance máxima (Core Web Vitals),
hospedagem em qualquer servidor/CDN, manutenção trivial pela agência.
Se o site crescer (blog, páginas por tratamento), migrar para Astro mantendo o CSS.

## 6. O que validar com o Instagram real (recalibração)

1. Paleta: extrair 2–3 cores dominantes do feed e substituir os tokens
   `--green`, `--bronze`, `--bg` em `styles.css` (tudo deriva deles).
2. Tipografia: se a marca usa serifada própria/logotipo, alinhar a `--font-display`.
3. Tom de voz: ajustar a copy se o Instagram for mais descontraído ou mais clínico
   que o tom adotado (próximo, direto, sem promessas).
4. Portfólio real de tratamentos: nomes das 4 frentes e listas de procedimentos.
5. Fotos reais: substituir todos os placeholders `.ph` (ver `docs/CONTEUDO-PENDENTE.md`).
