# Site — Clínica Brea

Site institucional estático, orientado à conversão via WhatsApp.

## Stack

HTML + CSS + JavaScript puros, sem build e sem dependências (apenas Google Fonts).
Hospeda em qualquer servidor estático (Hostinger, Netlify, Vercel, Cloudflare Pages…).

## Estrutura

```
index.html          Home (narrativa completa + CTAs)
tratamentos.html    Frentes de tratamento (âncoras: #facial #corporal #pele #protocolos)
sobre.html          A clínica (história, princípios)
contato.html        WhatsApp + formulário + dados
404.html            Página de erro
assets/css/styles.css   Design system completo (tokens no topo)
assets/js/main.js       Menu mobile, header sticky, reveal on scroll
docs/ESTRATEGIA.md      Discovery, posicionamento, CRO e design system
docs/CONTEUDO-PENDENTE.md  Checklist do que preencher antes de publicar
```

## Rodar localmente

Qualquer servidor estático. Ex.: `python3 -m http.server 8000` na raiz e abrir
`http://localhost:8000`. (Abrir o arquivo direto no navegador quebra os caminhos
absolutos `/assets/...`.)

## Antes de publicar

Leia `docs/CONTEUDO-PENDENTE.md` — há itens **bloqueantes** (número de WhatsApp,
domínio, endereço, portfólio real de tratamentos, envio do formulário).

## Identidade visual

Toda a paleta e tipografia estão em variáveis CSS no topo de
`assets/css/styles.css`. Para calibrar com a identidade real do Instagram
(@clinicabrea), basta trocar os tokens — ver `docs/ESTRATEGIA.md`, seção 6.
