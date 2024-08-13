import { defineConfig } from 'astro/config';
//import solidjs from "@astrojs/solid-js";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";


// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
        noExternal: ['@govtechsg/sgds-react']
    }
},
  site: 'http://localhost:4321',
  integrations: [react(), sitemap()]
});