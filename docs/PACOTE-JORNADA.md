# Pacote de Design: a jornada completa da BREA

Escrito antes da construção, no formato da skill site-de-10k. Cada linha de
texto abaixo embarca ao pé da letra. Os intervalos são pontos de partida,
validados depois pelo teste de flick. Formato aprovado pelo cliente:
jornada de capítulos entre as fotos, com página de ação assentada no fim.

## 1. A premissa da marca

Uma palavra: escuta. A BREA vende estética avançada que começa por ouvir,
e cada capítulo da jornada mostra um pedaço disso: o espaço recebe, a
profissional escuta, as técnicas respondem, os resultados provam, e o
convite final é uma conversa, não um carrinho.

## 2. Paleta e fontes

Já definidas e em produção: terracota 9C544B, vinho 6B3931 e 4C2721,
marfim FAF6F1, rosé F3E7E0 e D3A69B. Italiana para a marca, Cormorant
para títulos, Montserrat para texto. Nada muda.

## 3. O mapa de capítulos (a jornada, cerca de 1100vh)

| Cap | Intervalo | Foto (arquivo esperado em assets/img/) | Texto ao pé da letra | Entrada |
|---|---|---|---|---|
| 1 Marca | 0.00 a 0.10 | ja-01-parede.webp (temos: hero-j1) | "Estética que começa por ouvir você." | subida palavra a palavra |
| 2 Espaço | 0.12 a 0.22 | ja-02-recepcao.webp (nova) | "Um espaço pensado para você chegar, respirar e se cuidar." | desfoque para nítido |
| 3 Quem cuida | 0.24 a 0.34 | ja-03-bruna-retrato.webp (nova) | "Conduzida por Bruna Ramos." + sub: "[trajetória real, 1 frase, a preencher]" | subida palavra a palavra |
| 4 Harmonização | 0.36 a 0.47 | ja-04-facial.webp (nova) | "Harmonização facial. Equilíbrio e naturalidade, nunca um rosto pronto." + lista curta da frente | deriva para baixo |
| 5 Corporal | 0.49 a 0.60 | ja-05-corporal.webp (nova) | "Estética corporal. Metas reais, combinadas com você." + lista curta | deriva para baixo |
| 6 Tecnologias | 0.62 a 0.72 | ja-06-tecnologia.webp (nova) | "Tecnologias que aceleram e sustentam o resultado." + lista curta | aproximação da profundidade |
| 7 Produtos | 0.74 a 0.83 | ja-07-produtos.webp (temos: flat-lay, ou nova) | "Bioestimuladores e injetáveis de referência. Indicados só depois da avaliação." | alinhamento em grade |
| 8 Resultados | 0.85 a 0.94 | os antes e depois que já temos, em par sobre a cena | "Resultados reais, do nosso Instagram." | soco de palavra |
| 9 Chegada | 0.96 a 1.00 | ja-03 ou ja-01 em repouso | "Sua avaliação é o começo de tudo." + botão Agendar avaliação | subida em etapas |

Regras de composição: cada foto define onde o texto senta (o lado calmo),
decidido na inspeção de cada foto recebida. Scrim global + scrim por faixa,
sombra de texto, auditoria de pior quadro em 3.5 para 1.

## 4. A página de ação assentada (depois do capítulo 9)

Em ordem, com o conteúdo que já existe no site atual, reaproveitado:

1. Antes de agendar (o FAQ atual, 4 perguntas)
2. Contato: WhatsApp em destaque, formulário e dados
3. Rodapé completo

O funil inteiro aponta para UMA ação: agendar pelo WhatsApp.

## 5. Páginas internas

Tratamentos, A clínica e Contato continuam existindo como páginas próprias
(links diretos e SEO), com o conteúdo atual. A home vira a jornada.
O menu na home rola para os capítulos; nas internas, navega normal.

## 6. Celular e movimento reduzido

Os cinco portões continuam. Nesses casos a home mostra o site em seções
empilhadas normais (o layout atual), que já é bonito e completo. Nenhum
visitante perde informação, só o filme.

## 7. Engenharia

O motor journey.js atual escala: N cenas e N faixas por data-attributes,
mesmo loop com dt normalizado, escritas por delta, portões vivos,
teste de flick por capítulo (5 flicks de 120px por faixa, nada pulável
em 360px). Âncoras de capítulo para o menu. Imagens lazy além das duas
primeiras. Peso alvo das fotos da jornada: até 60 KB cada em WebP.

## 8. A lista de fotos a receber (subir em assets/img/ ou na raiz do repositório)

Todas deitadas (horizontais), boa luz, na maior qualidade possível:

1. Recepção ou entrada da clínica
2. Um segundo ângulo do espaço (opcional, enriquece o capítulo 2)
3. Retrato da Dra. Bruna olhando para a câmera
4. Procedimento facial em aplicação (paciente pode aparecer de lado ou recortada)
5. Procedimento corporal ou a maca preparada
6. O equipamento de tecnologia em destaque ou em uso
7. Produtos na bancada (opcional, o flat-lay atual já cobre)

Nomes de arquivo livres; eu renomeio, recorto e otimizo na integração.

## 9. O gate de texto

Todo texto acima e qualquer novo texto passa o gate: zero travessões,
zero palavras de estoque, voz da marca, frases curtas.
