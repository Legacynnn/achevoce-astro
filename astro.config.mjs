// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://achevoce.com.br',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap(), icon({ include: { hugeicons: ['*'] } })],

  fonts: [
    {
      name: 'Gabarito',
      cssVariable: '--font-gabarito',
      provider: fontProviders.google(),
      weights: ['400 700'],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['system-ui', 'sans-serif']
    },
    {
      name: 'Schibsted Grotesk',
      cssVariable: '--font-schibsted',
      provider: fontProviders.google(),
      weights: ['400 700'],
      styles: ['normal', 'italic'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['system-ui', 'sans-serif']
    },
    {
      name: 'Spline Sans Mono',
      cssVariable: '--font-spline-mono',
      provider: fontProviders.google(),
      weights: ['400 600'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['ui-monospace', 'monospace']
    }
  ]
});
