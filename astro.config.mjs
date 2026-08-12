// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://achevoce.com.br',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), sitemap(), icon({ include: { lucide: ['*'] } })],

  fonts: [
    {
      name: 'Fraunces',
      cssVariable: '--font-fraunces',
      provider: fontProviders.google(),
      weights: ['300 900'],
      styles: ['normal', 'italic'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['Georgia', 'serif']
    },
    {
      name: 'Inter Tight',
      cssVariable: '--font-inter-tight',
      provider: fontProviders.google(),
      weights: ['400 700'],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['system-ui', 'sans-serif']
    }
  ]
});
