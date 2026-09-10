# Fotos do site — onde colocar cada arquivo

Coloque os arquivos **nesta pasta** (`assets/img/`) com os nomes exatos abaixo.
Depois de adicionados, trocar cada bloco `div.ph` correspondente por uma tag
`<img>` com `alt` descritivo (os blocos estão marcados com o nome do arquivo
esperado ou comentários `substituir`).

Formato recomendado: WebP (ou JPG), qualidade ~80. `loading="lazy"` em tudo
que estiver fora da primeira dobra; declarar `width`/`height`.

## Identidade — RECEBIDAS e aplicadas (originais em `src/`)

| Arquivo | Uso | Especificação |
|---|---|---|
| `logo-horizontal.png` / `logo-horizontal-cream.png` | Header / footer (aplicados) | Trocar por SVG quando houver vetor |
| `selo.png` | Favicon (aplicado) | Trocar por vetor quando houver |

## Conteúdo

| Arquivo | Uso | Proporção |
|---|---|---|
| `home-hero.webp` | RECEBIDA e aplicada (foto profissional: parede BREA + preparação) | 16:10 |
| `home-espaco.webp` | APLICADA (sala de atendimento) | 4:3 |
| `sobre-espaco-amplo.webp` | APLICADA (atendimento no consultório, panorâmica) | 21:9 |
| `sobre-bruna.webp` | APLICADA (retrato profissional) | 3:4 |
| `trat-harmonizacao.webp` | APLICADA (cliente com resultados no tablet) | 4:3 |
| `trat-corporal.webp` | Tratamentos, frente 02 | 4:3, ≥1200px |
| `trat-tecnologias.webp` | Tratamentos, frente 03 | 4:3, ≥1200px |
| `og-image.jpg` | APLICADA (parede BREA) | 1200×630 |

## Resultados (antes/depois — posts do Instagram)

| Arquivo | Uso | Proporção |
|---|---|---|
| `resultado-botox-antes.webp` / `resultado-botox-depois.webp` | Home, seção Resultados | 3:4 cada |
| `resultado-labial-antes.webp` / `resultado-labial-depois.webp` | Home, seção Resultados | 3:4 cada |

> **Atenção (resultados):** confirmar que as pacientes autorizaram por escrito o
> uso das imagens também no site (a autorização do Instagram pode não cobrir).
> Recortar as imagens dos posts SEM a moldura/logo do template do Instagram.

## Como fazer os arquivos chegarem ao projeto

Imagens coladas no chat não chegam como arquivo neste ambiente. Duas opções:

1. **Upload direto no GitHub** (recomendado): no repositório
   `agenciaclicksolutions/Site-Brea`, branch `claude/adoring-carson-d9dpqc`,
   entrar em `assets/img/` → "Add file" → "Upload files". Avisar no chat que
   subiu, que a integração (troca dos placeholders por `<img>`) é feita em seguida.
2. **Link direto para download** (Drive/Dropbox público etc.) colado no chat —
   sujeito ao bloqueio de rede do ambiente; o GitHub sempre funciona.
