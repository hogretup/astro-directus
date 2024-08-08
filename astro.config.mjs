import { defineConfig } from 'astro/config';
import solidjs from "@astrojs/solid-js";
import react from "@astrojs/react";


// https://astro.build/config
export default defineConfig({
  integrations: [react()]
});