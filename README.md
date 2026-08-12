# Ache Você

Landing page da plataforma de reintegração de medicamentos, insumos e equipamentos entre instituições de saúde.

## Stack

- **Astro 7** — site estático, ilhas de hidratação
- **Tailwind v4** — tokens em `src/styles/global.css` (`@theme`), sem `tailwind.config`
- **React 19 + motion** — apenas nas ilhas de animação
- **Lenis** — scroll suave, desligado sob `prefers-reduced-motion`
- **Fraunces + Inter Tight** — via API de fontes nativa do Astro (self-hosted)

## Comandos

```sh
pnpm dev        # servidor de desenvolvimento em localhost:4321
pnpm build      # build de produção em ./dist
pnpm preview    # serve o build
pnpm check      # diagnóstico de tipos (astro check)
```

## Estrutura

```
src/
  data/content.ts        toda a copy da página, por seção
  lib/site.ts            metadados, links de navegação, CTA_URL
  lib/motion.ts          easings e variants compartilhados
  lib/lenis.ts           init/destroy do scroll suave
  styles/global.css      tokens de cor, tipografia, espaço e utilities
  layouts/Base.astro     shell HTML, SEO, fontes, boot do Lenis
  components/ui/         Button, Pill, IconChip, SectionHeading
  components/motion/     ilhas React (Reveal, LineReveal, HeroVisual)
  components/sections/   uma seção da página por arquivo
  pages/index.astro      composição da página
```

## Sistema de cores

Superfícies em creme e areia, texto em tinta quente. **O roxo é exclusivo de CTA real**: botão primário, CTA do menu e o painel final. Use sempre os aliases semânticos (`bg-cta`, `text-cta-fg`, `border-border`, `text-fg-muted`) em vez das rampas cruas — é isso que mantém a regra visível no código.

Acentos de significado (`clay` para perda/desperdício, `moss` para ganho/sustentabilidade) nunca são interativos.

## Marca

`src/components/ui/Logo.astro` é o logograma vetorizado a partir do logo original, sem texto — a palavra "Ache Você" é composta ao lado em Fraunces. O mesmo caminho alimenta `public/favicon.svg`, `public/apple-touch-icon.png` e `public/og.png`.

O gradiente da marca (`#6BC629` → `#7226BC`) vive **apenas** no logo e nos ícones. Ele não é linguagem de superfície: nada de fundo, borda ou texto em gradiente.

## Telas da plataforma

`src/assets/screens/` guarda as capturas reais do app, já recortadas (sem barra de rolagem nem overlays de desenvolvimento). Aparecem sempre via `ui/Screenshot.astro`, otimizadas pelo `<Image>` do Astro para webp. Ao substituir uma tela, mantenha a proporção 1586×765 e atualize o `alt` correspondente em `src/data/content.ts`.

## Pendências

- As telas são de ambiente de teste (hospitais e dados fictícios). Vale trocar por capturas de produção antes de divulgar.
