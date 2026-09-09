# BREA — Bruna Ramos Estética Avançada · Estratégia do site

> Documento de discovery, estratégia e design system que fundamenta a implementação.
>
> Identidade visual confirmada por material enviado pelo cliente (logo, selo,
> bio.site e foto de conteúdo): wordmark serifada fina "BREA" em terracota/marsala,
> selo circular "Bruna Ramos — Estética Avançada", base branca/mármore com toques
> de rosé. Posicionamento declarado no bio.site: **Harmonização facial | Corporal |
> Tecnologias**. Bioestimulador de colágeno (Sculptra) presente no conteúdo.

## 1. Diagnóstico e posicionamento

- Marca: BREA, conduzida por Bruna Ramos — estética avançada (harmonização,
  corporal, tecnologias). Público majoritariamente feminino, 25–55 anos.
- Canal principal de aquisição hoje: Instagram → bio.site → WhatsApp.
- Posicionamento adotado no site: **estética avançada com avaliação individual** —
  contraponto direto ao mercado de "pacotes de prateleira" e promessas de anúncio.
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

- **Cores (da identidade real):** branco quente `#FAF6F1` (fundo, remete ao mármore),
  terracota/marsala `#9C544B` (cor do wordmark — CTAs, acentos, itálicos),
  vinho `#6B3931`/`#4C2721` (seções escuras e footer), rosé `#F3E7E0` (superfícies)
  e `#D3A69B` (detalhes sobre fundo escuro). Tokens em `assets/css/styles.css`.
- **Tipografia:** Fraunces (display serif de alto contraste, ecoa a serifada fina
  do wordmark; itálico real para os acentos) + Instrument Sans (texto).
  O lockup "BREA + Bruna Ramos · Estética Avançada" reproduz a hierarquia do logo.
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

## 6. Refinamentos pendentes com o cliente

1. Logo vetorial oficial (SVG/alta resolução) para substituir o wordmark tipográfico
   do header/footer e gerar o favicon definitivo a partir do selo circular.
2. Portfólio completo: procedimentos de cada frente (apenas "bioestimulador de
   colágeno" está confirmado pelo material recebido).
3. Links de TikTok e Facebook (presentes no bio.site) para o footer.
4. Fotos reais: substituir todos os placeholders `.ph` (ver `docs/CONTEUDO-PENDENTE.md`).
