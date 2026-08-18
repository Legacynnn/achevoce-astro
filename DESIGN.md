# Design

## Visual Theme

Enterprise SaaS de produto: quase-branco frio dominante, tinta roxa profunda nas duas pontas da página (o bloco de abertura `Hero` + `Circula` e o painel do CTA final) e o produto reconstruído em HTML dentro de molduras roxas. A prova é a tela, não a foto.

São três faixas de tinta ao todo: o bloco de abertura (`Hero` + `Circula`), o `Console` no miolo e o painel do CTA final. As três são marcadas `data-ink` e alimentam o estado do header.

Estratégia de cor: **Committed**. O roxo carrega as superfícies de marca e toda ação. O verde é sinal, nunca superfície: aparece no logotipo e em estados de estoque (compatível, validado, reintegrado) dentro dos widgets. Nunca em botão, título, borda ou faixa.

Modo claro apenas. A cena é alguém decidindo sobre estoque no meio do expediente, em sala clara. As faixas escuras são acento de composição, não tema.

**Não existe gradiente roxo→azul.** Todo gradiente é roxo→roxo (`violet-500 → violet-800`). Essa é a regra que separa o resultado da anti-referência de template SaaS listada na `PRODUCT.md`.

## Color

Tokens em `src/styles/global.css`, dentro de `@theme`, todos em OKLCH. Componentes usam **apenas os aliases semânticos**.

### Rampa roxa

`--color-violet-50` … `--color-violet-950`, hue 302–304. Âncora da marca é `violet-700` (`oklch(0.452 0.228 304)`), o roxo do logotipo. `violet-600` é o CTA, `violet-700` o hover.

### Neutros

`--color-slate-0` … `--color-slate-950`, todos tingidos para hue 302 com croma 0.003–0.026. Nenhum cinza puro na página.

| Alias | Token | Uso |
|---|---|---|
| `--color-bg` | slate-0 | fundo da página |
| `--color-bg-subtle` | slate-50 | faixa alternada |
| `--color-bg-panel` | slate-100 | painel encaixado |
| `--color-bg-ink` | `oklch(0.168 0.048 304)` | hero, footer, painel do CTA |
| `--color-bg-ink-deep` | `oklch(0.122 0.036 304)` | faixa do `Console`, um degrau abaixo de `bg-ink` |
| `--color-fg` | slate-900 | títulos |
| `--color-fg-muted` | slate-700 | corpo |
| `--color-fg-subtle` | slate-500 | legendas, micro-rótulos |
| `--color-border` | slate-200 | filetes |

### Valores medidos, não escolhidos

Três tokens têm valor derivado de medição de contraste e **não devem ser clareados sem remedir**:

- `--color-slate-500` (`0.532`) — em `0.582` reprovava em 4.21:1 sobre o branco da página, e ele é o token de mais de 60 nós de texto (micro-rótulos dos widgets, legendas, coluna "como acontece hoje").
- `--color-leaf-600` (`0.512`) — em `0.552` ficava em 4.47:1, logo abaixo do limite.
- `--color-fg-on-ink-subtle` (`0.782`) — em `0.688` reprovava sobre as faixas escuras.

### Espectro do logotipo (só a faixa `Circula`)

`--spectrum-1` … `--spectrum-6` em `:root`, hues 145 / 168 / 196 / 248 / 280 / 302, todos em L≈0.78–0.81. São as cores do gradiente da marca levantadas para funcionar sobre tinta. **Existem em um lugar só:** os ícones das categorias da faixa "O que circula na rede", onde a varredura verde→roxo restata o logotipo. Fora dali a página continua Committed em roxo, e o verde continua sendo sinal.

Cada chip recebe `--tone` inline; o ícone usa `color: var(--tone)`, a moldura usa `color-mix` a 20% (fundo) e 32% (anel).

**Esses tokens moram em `:root`, não em `@theme`.** O Tailwind v4 remove variável de `@theme` que nenhuma utility referencia, e `--tone` só é lida por `style=""` inline. Declarados em `@theme`, os seis tokens sumiam do CSS, `var(--tone)` ficava inválido e os ícones renderizavam brancos.

### Verde (sinal)

`--color-leaf-600` (texto sobre claro), `leaf-500` (ponto), `leaf-400` (sobre tinta). Só estado. Sempre acompanhado de texto, nunca sozinho como significado.

### Vermelho (perda)

`--color-rust-600` / `rust-400` para validade curta. Mesma regra: nunca só cor.

## Typography

Três famílias, papéis separados, carregadas pela API de fontes do Astro (self-hosted, display e corpo com preload).

- **Gabarito** (`--font-display`) — geométrica de terminais arredondados, **peso 500, nunca 700**. Títulos, numerais grandes, wordmark.
- **Schibsted Grotesk** (`--font-sans`) — corpo, UI, rótulos, botões.
- **Spline Sans Mono** (`--font-mono`) — **exclusivo da seção `Console`**. Depois da reescrita de 2026 ele ficou na marca de dia de cada evento, onde a largura fixa mantém a coluna alinhada, e na linha de valores abaixo do evento. Fora dali não aparece.

Fraunces e Inter Tight foram removidos na reescrita de 2026. A troca foi pedida explicitamente: a serifa fazia a página ler como editorial, e o alvo agora é ferramenta de trabalho.

### Escala

| Token | Valor | Tracking | Leading |
|---|---|---|---|
| `--text-hero` | `clamp(2.75rem, 6.2vw, 4.9rem)` | `-0.042em` | **0.88** |
| `--text-display` | `clamp(2.25rem, 4.4vw, 3.5rem)` | `-0.036em` | 0.94 |
| `--text-h2` | `clamp(2rem, 3.6vw, 3rem)` | `-0.034em` | 1.0 |
| `--text-h3` | `clamp(1.375rem, 1.9vw, 1.75rem)` | `-0.026em` | 1.1 |
| `--text-stat` | `clamp(2.5rem, 4.6vw, 3.75rem)` | `-0.035em` | 0.92 |
| `--text-lead` | `clamp(1.0625rem, 1.25vw, 1.25rem)` | `-0.011em` | 1.55 |
| `--text-micro` | `0.6875rem` | `+0.09em`, caixa alta | 1.4 |

O aperto de 2026 é de ajuste, não de troca: a família continua Gabarito 500. O ganho de acabamento veio de tracking mais fechado nos títulos, entrelinha um passo abaixo e micro-rótulos mais espaçados, não de uma fonte nova.

O tracking do micro tem **uma fonte só**: `.micro` lê `var(--text-micro--letter-spacing)`. Antes o valor estava escrito duas vezes, `0.09em` na utility e `0.11em` no token, e a utility ganhava — a segunda cópia nunca chegou à tela. A utility `text-micro` do Tailwind não é usada em lugar nenhum; tudo passa por `.micro`.

**Entrelinha menor que o corpo da fonte é metade da identidade.** Os títulos empilham como bloco. Subir `line-height` acima de 1 no hero desfaz o efeito.

Títulos de várias linhas são compostos com um `<span class="line-mask">` por linha, e a quebra é decidida no `content.ts`, não pelo navegador. Trocar a copy de um título exige reconferir a quebra: uma linha longa demais quebra dentro da máscara e a animação passa a levantar duas linhas como uma.

## Layout

- Container: `--page-w: 75rem` (`.container-page`), padding lateral `--page-pad` (1.25 / 1.5 / 2.5rem).
- **O header tem trilho próprio e mais largo:** `--header-w: 86rem` (`.container-header`), 11rem além do conteúdo. A barra passa por fora do texto da página de propósito; ela não alinha com o título do hero.
- Ritmo vertical: `--spacing-section: clamp(5rem, 9.5vw, 8.75rem)`.
- Raios: `--radius-card: 24px`, `--radius-inner: 16px`, `--radius-field: 12px`, `--radius-pill: 999px`.
- Linhas de feature alternam lado (`i % 2` inverte a ordem no `lg:`). O widget nunca fica do mesmo lado duas vezes.
- `overflow-x: clip` mora no **`html`**, nunca no `body`.

### Alvos de toque

Todo controle da barra e do rodapé tem **44px de altura**: o CTA e o botão de menu do header, os links de navegação, o "Entrar" e os links das colunas do rodapé (`min-h-11` no `<a>`, com o `gap` da lista removido em troca). Links de texto podem ter largura menor que 44px — é a altura que se cobra deles.

**O wordmark "Ache Você" só aparece a partir de `26rem`.** Abaixo disso a barra não comporta marca, wordmark, CTA e botão de menu ao mesmo tempo sem espremer o CTA, e o CTA é o objetivo único da página. Fica a marca sozinha, que é o que a maioria dos aplicativos faz nessa largura.

### Itens de grade precisam de `min-w-0`

O grid do hero quebrou o mobile na primeira versão: item de grid tem `min-width: auto`, então a coluna não encolhia abaixo do min-content do `<h1>` e a página inteira vazava 44px para a direita. Todo item de grid que contém título grande, widget ou tabela leva `min-w-0`. Sintoma: o texto sangra para fora e o `scrollWidth` passa do `clientWidth`.

O mesmo defeito voltou pela `Plataforma`, e custou caro para achar porque **o sintoma aponta para o lugar errado**. As duas colunas de cada linha de feature estavam sem `min-w-0`, então a coluna do widget travava em 368px e a página vazava até 414px de viewport. O elemento mais largo que o inspetor mostrava era o `header`: sendo `position: fixed`, ele se dimensiona pelo bloco contentor inicial, que cresce junto com o `scrollWidth` do documento. **Header largo demais é consequência, nunca causa.** Procure a origem no fluxo normal, ignorando todo elemento com ancestral que corta em `overflow-x`.

Verificado em 320 / 360 / 390 / 414 / 768 / 1024 / 1280 / 1440 / 1920 / 2560: `scrollWidth === clientWidth` nos dez.

### Grades de filete

Matrizes usam `gap: 1px` sobre `bg-border` com as células na cor da faixa. **Sem `rounded` no container** — o raio deixa o `bg-border` aparecer nos cantos como quatro arcos soltos. Use `border-y` reto.

## Componentes

- `bg/Mesh.astro`, `bg/Beams.astro`, `bg/Grain.astro` — camadas de fundo, zero JS, `aria-hidden`, `pointer-events-none`. Recebem nomes de token (`'color-violet-500'`), não valores, e compõem via `color-mix`. Poses e fases são determinísticas (hash do índice), nunca `Math.random()`.
- `ui/WidgetFrame.astro` — moldura roxa dos widgets: gradiente roxo→roxo, `--shadow-lg`, halo desfocado, `rotateY(±6deg)` a partir de `md` que endireita no hover.
- `ui/Button.astro` — `cta`, `ghost`, `ghost-ink`, `quiet`. Seta desliza no hover.
- `ui/Logo.astro` — **a base é `block w-auto`, sem `h-auto`.** Com `h-auto` na base, um `h-6` no call site perde na ordenação do Tailwind e o logotipo renderiza em tamanho intrínseco.
- `widgets/` — o produto reconstruído em HTML/CSS: `Fluxo` (hero, roteiro automático), `Esteira`, `Validade`, `Alertas`, `Ficha`. Nenhum screenshot na página; `src/assets/screens/` foi removido.
- `lib/seq.ts` — contador de módulo que numera os `id` de SVG (`Logo`, `HospitalMark`, `Grain`). Existe porque `Math.random()` fazia cada build gerar um HTML diferente, e um `id` constante repetido em três instâncias produzia `id` duplicado. Verificado: dois builds seguidos dão o mesmo sha256.
- `ui/ItemThumb.astro` — miniatura de um item (48px na busca, 40px nos alertas). Procura `assets/photos/items/<art>.jpg` por `import.meta.glob`; **se o arquivo não existe, cai no ícone hugeicons do item** em tile violeta. É o que permite publicar a estrutura antes da arte existir. Foto recebe `saturate(0.7)` mais véu `violet-800/22`, igual à regra das outras.
- `ui/HospitalMark.astro` — marca da instituição de demonstração: quadrado arredondado com gradiente roxo→roxo, cruz em negativo e um anel tracejado que gira lento. É desenho próprio e fictício de propósito: a `PRODUCT.md` proíbe insinuar cliente real, então não entra logotipo de hospital existente. O `id` do gradiente é constante, nunca `Math.random()`.
- `sections/Circula.astro` — faixa editorial dirigida por rolagem, reescrita em 2026. Não é mais marquee por temporizador.

### A faixa `Circula`

**Toda categoria tem foto.** São quinze células, cada uma com o seu arquivo em `photos/circula/<slug>.jpg`, carregado por `import.meta.glob` (`lib/circulaArt.ts`). A célula é retrato, com a foto em cima e legenda embaixo. A partir de `lg` a trilha tem altura fixa e as células usam `items-stretch`, então as fotos formam uma linha superior e as legendas uma linha inferior. Sem isso as células flutuavam soltas e a faixa lia como colagem.

### A cadeia de fallback da faixa

Cada célula tem `slug` e `fallback` no `content.ts`, e a resolução é `circulaArt[slug] ?? circulaArt[fallback]`:

1. **`slug`** — a foto própria da categoria. Quando existe, é usada e o `alt` descritivo do `content.ts` entra junto.
2. **`fallback`** — uma das fotos já existentes, emprestada até a própria ser gerada. Aqui o `alt` é `""`: descrever "bolsas de solução parenteral" numa foto de bancada de laboratório seria mentir para o leitor de tela, e a legenda ao lado já nomeia a categoria.
3. Sem nenhuma das duas, a célula cai na versão de tipo (ícone do espectro, categoria em Gabarito grande, filete).

Os `fallback` são escolhidos à mão para que **duas células vizinhas nunca repitam a mesma imagem** — repetição adjacente é o que denuncia o improviso. Trocar a ordem das células exige reconferir essa sequência.

Esse arranjo também é o motivo de a faixa ser barata: quinze células, quatro arquivos distintos. O navegador baixa cada um uma vez.

### O ícone continua na foto

O espectro do logotipo mora só aqui (ver seção de cor), e ele desapareceria se toda célula virasse foto. Por isso o ícone tingido em `--tone` passou para dentro da foto, no canto superior esquerdo, sobre o véu. O índice foi para o canto direito. A moldura que ele tinha (fundo, anel e `backdrop-blur`) caiu depois: sobre o véu roxo o glifo solto já se lê, e o tile só disputava atenção com a foto.

### Peso e recorte

As fotos de origem são **recortadas em 3:4 antes de entrar no repositório**, no máximo em 720×960. Fonte 16:9 dentro de caixa retrato perde mais da metade dos pixels no `object-cover`: o recorte prévio corrige nitidez e peso de uma vez. `widths={[240, 360, 480, 720]}` com `sizes="(min-width: 64rem) 16vw, 11rem"`.

Medido no build de produção: a faixa inteira custa **77 KB no mobile** e **111 KB no desktop** (4 arquivos, DPR 2). O `src` de fallback do `<img>` nunca é buscado por navegador com `srcset`.

### Efeito só onde há cursor

Hover de célula, zoom da foto e apagamento das vizinhas vivem todos dentro de `@media (hover: hover) and (width >= 64rem)`. No toque nada disso é acessível. `will-change: transform` fica em `.band-track`, e também só no desktop.

O segundo e último `will-change` da página é o `.parallax-layer` do hero, e ele é declarado dentro de `@media (hover: hover) and (pointer: fine)` e zerado em `prefers-reduced-motion`. O motivo é o mesmo: no toque o Lenis nem carrega, então a camada nunca se move e promovê-la só custa memória de composição.

**Um transform por frame, não dezesseis.** O parallax vertical por célula (`--k`) foi removido: ele promovia quinze camadas de composição, cada uma com uma foto filtrada, e recalculava quinze `transform` a cada escrita de `--p`. Sobrou a translação da trilha.

**A borda esfumada não é `mask-image`.** A máscara envolvia uma subárvore transformada e composta, e obrigava o navegador a rasterizar a faixa inteira fora da tela a cada frame — era a maior parte do travamento. No lugar dela, `.band-wrap` recebe dois `<span>` estáticos (`.fade-l` / `.fade-r`) com gradiente de `--color-bg-ink` a transparente. Pinta uma vez.

**O hover só anima `opacity`.** A transição de `filter: saturate()` em quinze células repintava as fotos a cada frame do fade. A dessaturação saiu; o apagamento (`opacity: 0.42`) ficou.

A assimetria vem de `drop` no `content.ts`, que aplica `position: relative; top`. Como `top` não ocupa espaço no layout, `.band-track` carrega um `padding-block-end` do mesmo tamanho — senão a última linha da célula deslocada é cortada pelo `overflow` do scroller no mobile.

O deslocamento horizontal é `translate3d(calc(var(--p) * -34vw), 0, 0)`: a faixa anda com a página, não com um relógio. Abaixo de `lg` o transform sai e `.band` vira `overflow-x: auto` com scroll-snap, porque no toque a rolagem manual é melhor que a automática.

Hover apaga as células vizinhas (`opacity: 0.42`), destacando a que está sob o cursor. Desligado no mobile.

**O título dessa seção não usa `line-mask`.** Ele é curto e quebra em duas linhas no mobile; a máscara de uma linha só cortava a segunda. Usa `.reveal`.

## Motion

**Nada de GSAP, nada de Framer Motion, nenhuma ilha de framework.** A página roda em CSS mais scripts vanilla (revelação, estado do header, busca do hero, scroll). O React foi removido das dependências.

### Lenis, e o portão que ele exige

O Lenis foi removido em `dfafbaf` por ser a causa medida do travamento de rolagem, e voltou em 2026 a pedido. **Ele só volta com o portão:** carregado por `import()` dinâmico e desligado em `prefers-reduced-motion` e em `pointer: coarse` — o toque era onde travava. Sem os dois testes, o problema volta.

O que ele alimenta é deliberadamente pequeno: `--scroll-p` no `documentElement` (só reescrito quando muda mais de 0.002), um `translate3d` em `[data-parallax]` — hoje um elemento só, o widget do hero, a 0.05 — e `--p` por seção em `[data-track]`. Nada de leitura de layout por frame; a posição vem do valor de scroll do próprio Lenis. Foi a leitura por frame que custou caro da primeira vez.

### `--p`: progresso por seção

`[data-track]` recebe `--p` de 0 a 1 conforme o elemento atravessa a viewport (0 quando o topo dele encosta na base da tela, 1 quando a base sai por cima). Hoje usam `Circula` (a trilha) e o `Console` (a `<ol>` do registro).

As medidas (`top`, `height`) são tiradas **uma vez** e recalculadas em `resize`, `load` e `document.fonts.ready` — nunca por frame. A escrita é filtrada em 0.003, igual ao `--scroll-p`.

`--p` é registrado com `@property { syntax: '<number>' }` em `global.css`. Sem o registro ele seria substituído como texto e as contas (`clamp(0, (var(--p) - 0.1) * 1.7, 1)`) ficariam frágeis conforme o valor.

**O registro é `inherits: false`, e `data-track` mora no elemento que lê a variável** — `.band-track` e a `<ol>` do `Console`, nunca a seção. Herdando, cada escrita por frame invalidava o estilo de toda a subárvore da faixa (quinze células, fotos, legendas: centenas de nós). Sem herança, a invalidação para no elemento. Um novo consumidor de `--p` precisa receber `data-track` ele mesmo.

Em movimento reduzido e em `pointer: coarse` o listener passivo continua alimentando `--p`, então rail e faixa ainda refletem a posição — o que some é a interpolação do Lenis, não a informação. As animações **derivadas** de `--p` (a translação da faixa) são desligadas em `prefers-reduced-motion`.

Sem Lenis (toque ou movimento reduzido), um listener de scroll passivo com `requestAnimationFrame` mantém `--scroll-p` vivo e o parallax fica zerado.

Âncoras internas passam por `lenis.scrollTo` com deslocamento medido na altura real da barra; o `scroll-behavior: smooth` do CSS é desligado por `html.lenis`.

- Curvas: `--ease-out: cubic-bezier(0.16, 1, 0.3, 1)` e `--ease-inout`. Sem bounce.
- Revelação: um `IntersectionObserver` em `layouts/Base.astro` marca `data-inview` em `[data-reveal]`. As utilities `.reveal` e `.line-mask` animam a partir disso; `--i` dá o stagger.
- **O estado inicial escondido é condicionado a `html[data-js]`**, escrito por um script inline no `<head>`. Sem isso, quem não tem JS vê a página em branco.
- `.play-inview` pausa animações de loop fora da tela, incluindo descendentes (`animation-play-state` não é herdado — a utility resolve isso com `& *`).
- Elementos com `data-loop` continuam observados e voltam a pausar ao sair; o resto sofre `unobserve` na primeira entrada.
- Contadores: `data-count` mais `data-suffix`, animados por `requestAnimationFrame` no observador. Em `prefers-reduced-motion` imprimem o valor final.
- `prefers-reduced-motion` congela mesh, beams e grain **sem escondê-los**, e força estado final em revelações e contadores. Medido: 0 elementos invisíveis nesse modo e também com JS desligado.
- Só `transform`, `opacity` e `filter` animam.

### Header, três estados

`data-state` no `#site-nav`:

| Estado | Quando | Aparência |
|---|---|---|
| `hero` | topo absoluto, sobre a tinta | sem fundo, sem borda, sem sombra. Texto claro, CTA branco com texto tinta. O header é parte do hero. |
| `ink` | rolado (>40px, histerese em 8px) e ainda sobre a tinta | pílula de vidro escura, `bg-bg-ink/64` + blur. Texto continua claro. |
| `float` | passado o bloco de tinta | pílula de vidro clara, `bg-bg/88` + blur, borda e sombra. Texto tinta, CTA roxo. |

O estado escuro/claro vem de um `IntersectionObserver` sobre os blocos marcados `data-ink` (Hero e Circula), com `rootMargin` recortando uma faixa de 2px na linha de baixo do header — é assim que ele sabe se está sobre tinta, em vez de chutar por altura de seção. O observer é reconstruído no `resize`. O estado `hero`/`ink` vem de um listener de scroll com `requestAnimationFrame`.

O terceiro estado não é enfeite: sem ele, o header transparente atropela o conteúdo do hero assim que a página rola.

A pílula é o **único** blur da página. Não baixar as opacidades: sobre o painel roxo final os links caem abaixo de AA.

### O registro do `Console`

**O que a seção mostra é um caso, não um mecanismo:** um item publicado, com data em cada marco, do cadastro à baixa.

A seção é uma faixa de tinta (`bg-ink-deep`) marcada `data-ink`, e o registro é dirigido por rolagem. Duas coisas precisam continuar resolvidas:

- **Ela não repete a `Plataforma`.** A `Plataforma` responde "o que a plataforma faz" em quatro capacidades. O `Console` responde "como ficou o registro de um item" com dias e valores. Se a copy do `Console` voltar a descrever capacidade, as duas seções colidem de novo e esta é a que sobra.
- **A faixa conta como tinta para o header.** Sendo `data-ink`, ela entra no `IntersectionObserver` do header junto com Hero e Circula. Tirar o `data-ink` deixa a pílula clara sobre fundo escuro.

**O eixo é o tempo real do caso, e é isso que dita a composição.** Os cinco eventos caem em `dia 0, 0, 1, 2, 6`, e o espaço entre eles é proporcional a essa distância: `margin-top: calc(2rem + var(--u) * var(--g))`, com `--g = Δdias ^ 0.62` calculado no frontmatter. Os dois marcos do dia 0 ficam colados, e entre `Contato` e `Reintegração` abre um vazio de quatro dias, anotado na régua ("4 dias — negociação, conferência e transporte, no tempo das duas instituições").

O expoente `0.62` existe para o vazio ser visível sem ser absurdo: linear, quatro dias custariam quatro vezes a altura de um dia e a seção esticaria meia tela por causa de um intervalo em que a plataforma não faz nada.

**Cinco colunas iguais estavam mentindo sobre o dado.** Uma versão em kanban de cinco colunas foi construída e descartada: além de recair na grade de cards idênticos que a `PRODUCT.md` proíbe e de colidir com a `Plataforma` outra vez, ela dava o mesmo peso a intervalos de zero e de quatro dias, e prometia um arrastar-e-soltar que o produto não tem. O quadro só faria sentido com muitos itens e com estágios que alguém move à mão; aqui há um item e cinco carimbos de data.

**Sem painel e sem moldura.** O registro assenta direto na faixa de tinta, em duas colunas a partir de `lg`, sem caixa em volta. A moldura anterior tinha `backdrop-filter: blur(14px)` e disputava com a regra de que a pílula do header é o único blur da página.

A `<ol>` leva `data-track` (é ela que lê `--p`, e `--p` é `inherits: false`) e deriva `--fill`. A régua tem duas camadas: a base tracejada, que é o tempo ainda não percorrido, e a sobreposta sólida em gradiente roxo, com `height: calc((100% - 1.4rem) * var(--fill))`. Cada evento carrega `--at`, a própria posição normalizada no eixo, e acende quando a régua passa por ele: `--on: clamp(0, (var(--fill) - var(--at)) * 26, 1)`. A interação é a rolagem de quem lê, não um temporizador nem um controle falso — mesma razão pela qual o widget do hero não é operável.

**O piso de opacidade dos eventos ainda não alcançados é `0.66`, e é um valor medido.** Em `0.42` a marca de dia ficava em 2.58:1 e o rótulo em 3.83:1 sobre a tinta — os dois reprovando em AA enquanto o leitor estava justamente lendo a seção. Não voltar a baixar sem remedir.

À esquerda o objeto: miniatura de 88px, nome, apresentação e validade, os dois hospitais ligados por um filete tracejado, e o total de seis dias com o rótulo de demonstração logo abaixo. À direita o registro. A marca de dia é mono com largura fixa de `3.25rem` e sai para a margem a partir de `40rem`, senão "dia 0" e "dia 6" desalinham a coluna de texto; abaixo disso ela volta para cima do rótulo do evento.

**O piso de `0.66` continua sendo o piso.** `opacity: calc(0.66 + 0.34 * var(--on))` nunca desce abaixo do valor medido, e sem JS ou em `prefers-reduced-motion` a régua vai a `--fill: 1` e todos os eventos ficam em opacidade cheia.

**Os números daqui são de demonstração e o rótulo é obrigatório.** Seis dias, 1.400 unidades e 51 dias de validade são dados de uma tela de exemplo, não métrica da rede. É o que a `PRODUCT.md` permite: número dentro de painel de produto, rotulado. Um desses valores promovido a título vira métrica de marketing e quebra o princípio.

### O widget do hero

A `<dl>` de três fatos que ficava embaixo do título saiu: com o eyebrow, o título, o lead, dois botões e o painel, o primeiro dobra já dizia tudo três vezes, e a faixa de filetes fechava o hero em vez de deixá-lo respirar. O que ela dizia ("publicar leva minutos", "buscar por validade e região", "negociar direto entre as partes") já está no lead e volta inteiro na `Plataforma`.

`Fluxo` é uma **demonstração assistida, não um widget operável**. Ele não tem nenhum elemento focável, é `aria-hidden="true"` e `select-none`: o que ele mostra é um roteiro que roda sozinho — busca "dipirona", escolhe o resultado, envia o interesse e percorre os estados até a reintegração.

A escolha é deliberada. Um painel que se opera de verdade exige teclado, foco e `aria-live` corretos para valer alguma coisa; um painel que só se assiste é mais honesto marcado como decoração, e o conteúdo que ele ilustra já está em texto no lead ao lado. Quem usa leitor de tela não perde informação, e ninguém fica preso num campo que não busca nada.

Regras que sustentam isso:

- **`aria-hidden="true"` no elemento raiz**, e nenhum `<button>`, `<a>` ou `<input>` dentro. Se algum dia um controle real entrar aqui, o `aria-hidden` tem de sair junto — `aria-hidden` sobre coisa focável é um dos piores defeitos de acessibilidade que existem.
- **O roteiro só roda em vista** (`IntersectionObserver`, limiar 0.25) e para quando a seção sai da tela, com um contador de sessão que invalida a execução anterior.
- **`prefers-reduced-motion` cancela o roteiro inteiro**, não o encurta: o painel renderiza o estado final da busca, parado e legível.

### O gráfico de `Validade`

O anel de rosca saiu. No lugar, um gráfico próprio: nove colunas de dez dias cada, cor por proximidade (`rust-600` até 30 dias, `violet-600` até 60, `violet-400` até 90), faixas de fundo tingidas com a mesma lógica, quatro filetes de grade, eixo `hoje / 30 / 60 / 90` e legenda com contagem. Cada coluna tem tooltip no hover.

Um polyline de tendência foi tentado e removido: passando exatamente pelo topo das barras, ficava atrás delas e não aparecia. Não readicionar sem tirá-lo do plano das barras.

O bloco inteiro leva `play-inview` e um `data-reveal` no wrapper — as barras usam `animation: grow-y ... both`, então sem o portão elas cresceriam fora da tela.

### Bloco de tinta

Hero e Circula são uma faixa escura contínua. O hero termina com um gradiente para `--color-bg-ink` que apaga o mesh antes da emenda, e a faixa inteira corta seco para o claro no fim de Circula. Sem esfumado de saída: a versão com fade para branco virava uma névoa cinza de 96px.

## Accessibility

Contraste é verificado por **medição de pixel**, nunca por estimativa. O procedimento:

1. Coletar cada nó de texto com posição, tamanho e cor computada.
2. Resolver a cor via `canvas.fillStyle` — `getComputedStyle().color` devolve `oklch(...)` no Chrome moderno, e ler esses três números como RGB produz resultado sem sentido (foi o que aconteceu na primeira medição: 78 falsas reprovações).
3. Pintar tudo com `color: transparent` (mantém fundos), amostrar o pixel atrás de cada nó e comparar.
4. Ignorar nós atrás do header fixo e rodar duas vezes: regiões animadas (mesh em deriva, lista da busca em fade) produzem reprovações que não se repetem.

Duas armadilhas de medição, ambas já custaram uma rodada inteira de falso positivo:

- **Não pausar animação para medir.** Congelar `animation-play-state` deixa entradas com `both` presas em opacidade 0, e a amostra cai no fundo da seção em vez do painel. Espere as entradas terminarem.
- **Medir o retângulo do nó de texto, não do elemento.** Com o retângulo do elemento, a amostra de um chip cai no ícone ou na foto ao lado. Use `Range.getBoundingClientRect()` e descarte nó cujo centro caia fora de um ancestral que corta (lista rolável do widget).
- **Descartar as bordas da viewport, com folga de 40px.** Nó encostado no topo ou na base ainda está no meio da revelação (`translateY`), e entre a leitura do retângulo e a captura da tela ele se move o bastante para a amostra cair na seção de trás. Foi assim que `text-fg-muted` sobre `bg-bg` — o par de corpo usado na página inteira — apareceu como reprovação de 1.78:1 em uma medição a 390px. Com a folga, some nas duas rodadas.
- **Resolver a cor pintando no canvas, não lendo `fillStyle` de volta.** `c.fillStyle = 'oklch(...)'; c.fillStyle` devolve a mesma string oklch no Chrome, e tratar esses três números como RGB gera reprovação em massa (144 falsas em uma rodada). Pinte 1×1 com `fillRect` e leia `getImageData`.

Estado atual: **0 reprovações** — 261 nós medidos a 1440×900 (duas rodadas) e 244 a 390×844. As duas últimas correções vieram dessa medição: o índice das células da `Circula` e o piso de opacidade dos eventos do `Console`.

**O índice da `Circula` precisa do véu superior.** Ele fica no canto de cima da foto, onde o véu da célula é mais claro, e em `text-white/50` caía para 2.54:1 sobre as fotos mais claras. A correção não foi só subir a opacidade para `/75`: a célula ganhou um segundo gradiente de 6rem no topo (`violet-950` a 62% → transparente) que dá chão fixo ao índice e ao ícone. Sem ele a legibilidade volta a depender de qual foto entrou na célula.

Demais garantias: `<dialog>` com `showModal()` no menu mobile (foco, `Esc` e inert de graça), tablist completo por teclado (setas, Home, End), skip link, foco visível em tinta.

## Imagery

**Nenhum screenshot de produto.** Essa regra não mudou: o produto continua reconstruído em HTML dentro de `WidgetFrame`, e o widget do hero é interativo de verdade (busca sem acento, filtro por tipo, contagem em `aria-live`, estado vazio).

O que mudou é que a página passou a ter **fotografia real**, em dois lugares e sob regra:

1. **Faixa `Circula`** — uma foto por categoria, quinze no total, em `photos/circula/<slug>.jpg`. É o único lugar onde a foto responde à pergunta que a seção faz: o que circula é isto. `alt` descritivo quando a foto é da própria categoria, `alt=""` quando é emprestada.
2. **`Publico`** — uma foto de farmácia hospitalar acima da lista de perfis, só a partir de `lg`. Fica na raiz de `photos/`.
3. **Miniaturas de item** — `BuscaRede` e `Alertas`, em `photos/items/<art>.jpg` via `ui/ItemThumb.astro`, com fallback de ícone. Decorativas (`alt=""`): o nome do item está ao lado.

Prompts de geração para os três conjuntos em `photos/MIDJOURNEY.md`, com a tabela de o que já existe e o que falta. Origem e licença em `photos/CREDITS.md`.

**A arte é toda gerada para o projeto** a partir de 2026; o banco só sobrou em `farmaceutico.jpg`. Os arquivos são substituíveis: mantenha nome e proporção e nada no código muda.

Regras de tratamento, sem exceção:

- `saturate(0.7–0.72)` mais véu roxo por cima (`violet-800/35` na faixa, gradiente `violet-950 → violet-700` na seção). Foto sem véu briga com a estratégia Committed e reintroduz o azul hospitalar da anti-referência.
- Nada de médico sorridente com prancheta, nada de aperto de mão, nada de close em rosto. O assunto é a caixa, o frasco, a prateleira, o equipamento — e, na única foto com pessoa, alguém trabalhando de perfil.
- Foto é decorativa na faixa (`alt=""`, o rótulo ao lado já diz o item) e informativa em `Publico` (`alt` descritivo + `figcaption`).

Arquivos em `src/assets/photos/`, origem e licença em `photos/CREDITS.md`. São substituíveis: manter nome e proporção troca a arte sem tocar em componente.

Os dados dos widgets continuam de demonstração e rotulados como tal. Nomes de instituição real nunca entram.

## Ícones

`astro-icon` com `@iconify-json/hugeicons` (`include: { hugeicons: ['*'] }`, o Astro só embute os usados). Traço 1.5, herdando `currentColor`. O conjunto Lucide saiu — não havia nenhuma chamada.

Nome sempre `hugeicons:<slug>`; slug inexistente quebra o build, que é o comportamento desejado.

- **Todo eyebrow leva ícone.** `ui/Eyebrow.astro` aceita `icon`, e `SectionHeading` repassa por `eyebrowIcon`. O slug mora no `content.ts`, ao lado do texto, nunca no componente de seção. Sem `icon` o pill volta ao padding simétrico, então o componente segue válido sem ele.
- **No `Comparativo` o ícone é do par, não da coluna.** As duas colunas usam o mesmo slug na mesma linha, mudando só a cor (`violet-600` de um lado, `border-strong` do outro). É o que sustenta a tese da seção: mesmo assunto, duas respostas. Ícone diferente por coluna desfaz a leitura de par.
- **Estado de validade é SVG desenhado à mão, não ícone de biblioteca.** São três estados de um eixo só e precisam ler como família: relógio (validade curta, em `rust-600`), círculo com check (com folga) e círculo com traço (sem validade). Os dois últimos ficam em `fg-subtle` de propósito, porque o verde é reservado a estado de estoque e promover "validade longa" a verde infla o sinal.
- **Chips de filtro e pill de tipo compartilham o mesmo mapa** (`medicine-bottle-01`, `package`, `cardiogram-01`). Mudou um, muda o outro: senão o mesmo conceito aparece com dois desenhos dentro do mesmo widget.
- **Na faixa `Circula` o ícone da categoria não tem moldura.** O tile com fundo, anel e `backdrop-blur` competia com a foto atrás dele. Ficou o glifo solto em `var(--tone)`, que já se sustenta sobre o véu roxo da célula.

Rótulos de demonstração ("demonstração", "Hospital de demonstração", "Dados de demonstração") ficam onde estão: implicar clientes que a rede ainda não tem é o risco que eles cobrem.
