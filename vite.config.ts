import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import Unocss from 'unocss/vite'
import { presetMini, presetWind4, presetAttributify } from 'unocss'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [presetMini(), presetWind4(), presetAttributify()],
    }),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
