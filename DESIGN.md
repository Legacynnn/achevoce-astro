# Design

## Visual Theme

Papel com uma fonte de luz. Superfícies em creme e areia com filetes finos fazendo a separação; sombra é rara e quente. Tipografia serifada com personalidade no display, grotesca neutra no corpo. Uma única cor saturada na página inteira — roxo — e ela só aparece onde existe ação real.

Estratégia de cor: **Restrained**, com dois momentos declarados de exceção. Neutros tingidos para o quente, um acento abaixo de 10% da superfície. As exceções são o painel final (único bloco chapado de roxo) e a aurora do hero (única aparição do gradiente da marca fora do logotipo).

Modo claro apenas. Não existe tema escuro e não deve existir: a cena é alguém lendo isto no meio do expediente, em sala clara, decidindo se leva o assunto adiante.

## Color

Tokens em `src/styles/global.css`, dentro de `@theme`. Componentes usam **apenas os aliases semânticos** — é isso que mantém a regra do roxo legível no código.

### Superfícies

| Token | Valor | Uso |
|---|---|---|
| `--color-cream-50` | `#FFFDF8` | cards elevados |
| `--color-cream-100` | `#FAF6EF` | fundo da página |
| `--color-sand-200` | `#F2EADC` | faixa alternada de seção |
| `--color-sand-300` | `#E8DCC8` | painel encaixado, faixa profunda |
| `--color-sand-400` | `#E0D3BC` | bordas, divisores |
| `--color-sand-500` | `#C9B899` | borda forte, numerais fantasma |

### Tinta

| Token | Valor | Uso |
|---|---|---|
| `--color-ink-900` | `#191713` | títulos |
| `--color-ink-700` | `#4A443C` | corpo |
| `--color-ink-500` | `#675E54` | legendas, eyebrows, texto de apoio |
| `--color-ghost` | `#93805C` | numerais fantasma (`01`, `02`…) |

`--color-ink-500` e `--color-ghost` têm valor medido, não escolhido: são os tons mais claros que ainda passam AA sobre a faixa mais escura em que aparecem (`--color-bg-deep`, `#E8DCC8`). O valor anterior de `ink-500` (`#7C7368`) reprovava em 4,32:1 sobre creme. Não clarear sem remedir.

`--color-border-strong` (`#C9B899`) continua sendo só borda. Não usar em texto: reprova por larga margem.

### Roxo (restrito)

| Token | Valor | Uso |
|---|---|---|
| `--color-purple-600` | `#6027D0` | preenchimento do botão primário, painel final |
| `--color-purple-700` | `#4A1CA8` | hover/active, roxo sobre creme |
| `--color-purple-300` | `#B79CF5` | acentos sobre roxo |
| `--color-purple-100` | `#EDE4FF` | tinte raro dentro de contexto de CTA |

**Regra do roxo.** `--color-cta*` só pode aparecer em: (1) botão primário, (2) CTA do menu, (3) painel do CTA final. Nunca em ícone, título, link, borda ou número.

### Acentos de significado

Nunca interativos, sempre acompanhados de texto.

| Token | Valor | Uso |
|---|---|---|
| `--color-clay-600` | `#B4552E` | perda, desperdício, validade vencendo |
| `--color-moss-600` | `#4F6B4A` | ganho, disponibilidade, sustentabilidade |

### Marca

`#6BC629` → `#34AE52` → `#16997F` → `#2E76B2` → `#5644BE` → `#7226BC`

O gradiente da marca aparece em exatamente **três lugares**, e a lista é fechada:

1. **Logotipo e favicon.**
2. **A aurora do hero** (`@utility aurora`) — quatro radiais suaves em OKLCH com alfa baixo sobre o creme, mascaradas para nada antes da dobra. Lê como luz saindo da tela do produto, não como fundo pintado. Deriva lenta de 26s, desligada em `prefers-reduced-motion`.
3. **O glow sob a moldura do hero** (`@utility screen-glow`) — desbota conforme a tela endireita no scroll.

Fora daí o gradiente não existe: nem em borda, nem em texto, nem em ícone, nem em faixa de seção. A aurora é o único ponto de cor de marca da página e não se repete abaixo da dobra.

O equilíbrio dos quatro pontos é deliberado: verde e teal carregam o peso (46% / 40%), azul e violeta ficam baixos (26% / 24%). Subir os dois últimos empurra a página direto para o gradiente roxo-azul de template que a `PRODUCT.md` lista como anti-referência.

Contraste sobre a aurora foi medido, não estimado: pior caso de `ink-700` em 7,69:1, `ink-900` em 14,31:1.

## Typography

Carregadas pela API de fontes nativa do Astro (`fontProviders.google()`), self-hosted, com preload.

- **Fraunces** (`--font-display`) — variável, eixos `wght` 300–900 mais `SOFT` e `WONK`. Títulos, frases de destaque, numerais. `font-variation-settings: "SOFT" 26, "WONK" 1, "opsz" 96` no padrão; `"SOFT" 0, "WONK" 0, "opsz" 120` na utility `.numeral`.
- **Inter Tight** (`--font-sans`) — corpo, UI, rótulos, botões.

Fraunces e Inter estão na lista de reflexo do register brand, mas a escolha é anterior e é identidade do projeto — preservação de identidade vence. Não trocar sem pedido explícito.

### Escala

| Token | Valor | Tracking |
|---|---|---|
| `--text-display` | `clamp(2.5rem, 5vw, 4rem)` | `-0.035em`, lh 1.02 |
| `--text-h2` | `clamp(1.875rem, 3.2vw, 2.875rem)` | `-0.025em`, lh 1.08 |
| `--text-h3` | `clamp(1.375rem, 1.9vw, 1.75rem)` | `-0.015em` |
| `--text-lead` | `clamp(1.0625rem, 1.4vw, 1.3125rem)` | lh 1.55 |
| `--text-eyebrow` | `0.8125rem` | `0.12em`, caixa alta |

Corpo em `1rem/1.65`. Itálico de Fraunces é recurso de ênfase editorial, usado em segunda linha de título e em frases de fecho.

## Layout

- Container: `max-width: 76rem`, padding lateral `1.5rem` / `2.5rem` a partir de 48rem (`.container-page`).
- Ritmo vertical: `--spacing-section: clamp(5rem, 10vw, 9rem)` (`.section`).
- Altura do header em `--header-h` (`4.5rem`, `5rem` a partir de 48rem). É a fonte única: `scroll-padding-top`, offset do Lenis e o `top` dos elementos sticky derivam dela.
- Faixas: `bg` → `bg-muted` → `bg` → `bg-muted` → `bg` → `bg-muted` → `bg` → `bg-deep` (Impacto) → `bg` → painel roxo. Nunca duas faixas iguais seguidas.
- Raios: `--radius-card: 20px`, `--radius-field: 12px`, `--radius-frame: 26px`, `--radius-pill: 999px`.
- Sombras: `--shadow-soft`, `--shadow-lift` e `--shadow-frame`, todas quentes (`rgb(40 30 10 / …)`). Filete de 1px em `--color-border` faz a maior parte da separação.
- `overflow-x: clip` mora no **`html`**, nunca no `body`. No `body` ele propaga para o viewport e o próprio `body` deixa de recortar, o que expande o viewport de layout no mobile e desalinha a página inteira.

### Grades de filete

Para matrizes (Benefícios), a grade usa `gap: 1px` sobre `bg-border` com as células pintadas na cor da faixa. Dá filetes perfeitos em qualquer contagem de colunas, sem malabarismo de `border-l` por breakpoint, e sem devolver a página ao grid de cards que a `PRODUCT.md` proíbe.

## Components

- `ui/Button.astro` — variantes `cta` (roxo), `ghost` (borda), `quiet` (sublinhado). Seta que desliza no hover. **A base já traz `inline-flex`**: para esconder por breakpoint use `max-sm:hidden` (variante, ordena depois), nunca `hidden sm:inline-flex` — o `hidden` sem variante perde na ordenação do Tailwind e o botão aparece no mobile.
- `ui/Pill.astro`, `ui/SectionHeading.astro` (eyebrow com filete + h2 + slot `lead`).
- `ui/Logo.astro` — logograma em SVG com o gradiente da marca. Sem texto: a palavra "Ache Você" é composta em Fraunces ao lado, nunca desenhada.
- `ui/Screenshot.astro` — moldura de janela para telas de seção: filete, raio 20px, barra superior com três pontos em areia, `--shadow-lift`. Sempre com `alt` descritivo.
- `ui/ProductFrame.astro` — moldura maior do hero: `--radius-frame`, `--shadow-frame`, recorte `aspect-square` no mobile e `1586/630` a partir de `sm`. O zoom do mobile é `transform: scale()`, **nunca `min-width`**: largura intrínseca vaza para o viewport de layout mesmo dentro de `overflow-hidden`; transform é só pintura.
- `motion/Reveal.tsx`, `motion/LineReveal.tsx`, `motion/HeroScreen.tsx` — ilhas React com `motion`, hidratação `client:visible` (o hero usa `client:load`).

## Motion

- Curva única: `cubic-bezier(0.22, 1, 0.36, 1)` (`--ease-out-expo`). Sem bounce, sem elastic.
- Entrada do hero é CSS puro (`.rise`), sem JS acima da dobra.
- Abaixo da dobra: fade + subida de 24px, `once: true`, stagger de 60–100ms.
- Lenis para scroll suave, com `anchors.offset: -104` (alinhado a `--header-h` + `1.5rem`).
- `prefers-reduced-motion` desliga o Lenis, para a deriva da aurora e força estado final em todas as ilhas — incluindo a tela do hero, que renderiza reta e sem escala.
- Em revelações com máscara (`overflow-hidden`), o observador precisa ficar no elemento **externo**: o elemento interno transladado tem interseção zero e nunca dispara.

### Header, dois estados

`hero` (topo) e `float` (a partir de 24px de scroll, com histerese de volta em 8px para não piscar no limiar). O estado é um `data-state` no `#site-nav`, escrito por um listener de scroll com `requestAnimationFrame`.

A transição anima **só `transform` e `opacity`**: a pílula entra de `scale(1.06)` com fade, os grupos laterais deslizam 6px para dentro, o CTA reduz para `scale(0.94)`. A altura do header é fixa, então nada reflui.

A pílula é o **único** blur da página, e é o blur permitido: o header fica sobre conteúdo em movimento. Opacidade em 84% do creme (92% sem `backdrop-filter`) — não baixar. Abaixo disso o header fica ilegível quando passa sobre o painel roxo final: os links caem para ~2,9:1.

### Tela do hero

A moldura entra inclinada (`rotateX(11deg)`, `scale(0.92)`) e endireita conforme o scroll avança até 620px, com o glow desbotando junto. É a recompensa do gesto que a página inteira pede.

O bloco de texto do hero tem `min-height: max(30rem, 72svh)` para que a moldura seja cortada pela dobra: 47% visível a 900px de altura, 58% a 1080px. O fator `72svh` é o que amarra isso — mexer nele muda quanto da tela aparece.

### Sticky de "Como funciona"

As duas colunas ficam `sticky` no mesmo `top`, com a linha em `min-height: 100svh`. Fixar só o texto abre um vazio embaixo da imagem; fixar as duas mantém o par junto e a troca acontece na virada da linha. O `top` é `max(header + 4rem, 50svh - 9.5rem)` para centrar o par verticalmente em telas altas em vez de deixá-lo grudado no topo.

## Accessibility

O contraste é verificado por medição de pixel, não por estimativa: capturar a página com `color: transparent` em tudo (mantém fundos, gradientes e preenchimentos), amostrar o pixel atrás de cada nó de texto e comparar com a cor computada. Amostrar sem apagar o texto lê o próprio glifo; esconder os elementos lê o fundo errado. O estado atual é 115 nós, todos em AA.

O menu mobile é um `<dialog>` com `showModal()`: trap de foco, `Esc` e inert do resto vêm de graça do browser. Ele para o Lenis ao abrir e religa no evento `close`.

## Imagery

Screenshots reais da plataforma são o principal recurso visual da página, e não são opcionais — o público precisa ver a tela. Ficam em `src/assets/screens/`, otimizados pelo `<Image>` do Astro, dentro de `ui/Screenshot.astro` (seções) ou `ui/ProductFrame.astro` (hero). Nada de mockup de laptop 3D, nada de foto de banco de imagens com médico.

**Pendência:** o hero usa `favoritos.png` como provisório. É a tela mais próxima de um catálogo entre as que existem, mas mostra um card só e subvende a rede. Quando houver um print do marketplace, salvar como `src/assets/screens/marketplace.png` e trocar o import em `sections/Hero.astro` — o recorte de `ProductFrame` já está dimensionado para 1586×765.
