import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import prefetch from '@astrojs/prefetch';
import { astroImageTools } from 'astro-imagetools';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://salsa.dev',
  // Enable server-side rendering for dynamic features if needed
  output: 'static',
  integrations: [
    tailwind(),
    sitemap(),
    prefetch(),
    astroImageTools,
    icon({
      include: {
        ph: ["star-duotone", "lightning-duotone", "globe-duotone"]
      }
    }),
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  experimental: {
    // Enable Astro 5.7's new experimental fonts API
    fonts: [{
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-inter'
    }],
  },
});
