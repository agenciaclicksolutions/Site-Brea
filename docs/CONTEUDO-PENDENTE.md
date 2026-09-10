# Conteúdo pendente antes da publicação

Checklist de tudo que está como placeholder e precisa do dado real.
Nada nesta lista foi inventado — o site não deve ir ao ar antes de resolver os itens marcados como **bloqueante**.

## Bloqueantes

- [ ] **Número do WhatsApp** — substituir `5500000000000` em TODOS os links `wa.me`
      (buscar por `5500000000000` no projeto; aparece em todas as páginas).
- [ ] **Domínio definitivo** — o projeto assume `https://www.clinicabrea.com.br/`.
      Ajustar em: `<link rel="canonical">` e metas OG de cada página, `sitemap.xml`, `robots.txt`, JSON-LD do `index.html`.
- [ ] **Endereço e horário de atendimento** — footer de todas as páginas + `contato.html`.
- [ ] **Trajetória de Bruna Ramos** (formação, especializações, registro profissional) — bloco "Nossa história" em `sobre.html`.
- [ ] **Portfólio real de tratamentos** — nomes, descrições e listas de procedimentos
      em `tratamentos.html` e na lista da home (marcados com `TODO` no HTML).
- [ ] **Envio do formulário** — `contato.html` precisa de um `action` real
      (Formspree, Web3Forms ou endpoint próprio).
- [ ] **CNPJ e responsável técnico** — footer de todas as páginas.

## Fotografias (substituir os placeholders `.ph`)

> **Como enviar:** ver `assets/img/README.md` — nomes de arquivo definidos e
> instruções de upload (GitHub → `assets/img/` na branch de trabalho).

- [x] Hero da home — `home-hero.webp` (flat-lay recebido; substituível por foto profissional depois).
- [ ] Home, seção "A clínica": foto do espaço, 4:5.
- [ ] Sobre: foto ampla do espaço (16:11) e retrato da(s) profissional(is) (4:5).
- [ ] Tratamentos: uma foto por frente (harmonização, corporal, tecnologias), 4:5.
- [ ] Open Graph: imagem 1200×630 para compartilhamento (todas as páginas).
- [ ] Contato: embed do Google Maps quando o endereço for definido.
- [x] Resultados (Home): antes/depois de Botox e Preenchimento labial — recortados
      e publicados. **Pendente: confirmar autorização por escrito das pacientes
      para uso no site.**

Recomendação: fotos reais da clínica com tratamento consistente (luz clara,
mármore/tons neutros da identidade). Exportar em WebP/AVIF, `loading="lazy"` fora da
primeira dobra, `width`/`height` declarados e `alt` descritivo.

## Identidade e redes

- [x] Logo aplicado (header, footer e favicon) a partir dos PNGs recebidos.
      Quando existir o **vetor (SVG/AI)**, substituir `logo-horizontal*.png` e
      `selo.png` para nitidez perfeita em qualquer tamanho.
- [ ] **Cidade** — aparece no hero da home e em `sobre.html` (`[Cidade — preencher]`).
- [ ] **Links de TikTok e Facebook** (existem no bio.site) — adicionar ao footer.
- [ ] Conferir os tons exatos da paleta contra o manual da marca, se existir
      (tokens no topo de `assets/css/styles.css`).

## Quando existirem (não inventar antes)

- [ ] Depoimentos reais com autorização por escrito → reativar a seção
      documentada em comentário no `index.html`.
- [ ] Certificações/formação da equipe → adicionar em `sobre.html`.
- [ ] Política de privacidade (LGPD) → criar página e linkar no footer e no formulário.

## Registro

- O arquivo `Protocolo - 13026.docx` (orçamento com dados pessoais de cliente)
  subiu junto com as fotos por engano e foi removido do projeto. Ele ainda
  existe no histórico do git (commit `3268c6f`); se quiser eliminá-lo do
  histórico também, pedir a limpeza antes de tornar o repositório público.
- Possível cidade da clínica: Uberlândia – MG (inferida de documento interno).
  **Confirmar antes de preencher** no hero e no rodapé.
