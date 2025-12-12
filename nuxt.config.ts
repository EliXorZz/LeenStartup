// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  ssr: false,
  icon: {
    customCollections: [
      {
        prefix: 'custom',
        dir: './app/assets/icons',
        recursive: true
      },
    ],
  },
  vite: {
    plugins: [ tailwindcss() ],
  },
  colorMode: {
    preference: 'light',
  },
  app: {
    baseURL: '/LeenStartup/'
  },
})