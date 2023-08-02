import {defineConfig} from "@unocss/vite";

import presetUno from "@unocss/preset-uno";


export default defineConfig({
  theme: {},
  shortcuts: {},
  safelist: [],
  presets: [presetUno({dark: 'class'})],
  transformers: []
})