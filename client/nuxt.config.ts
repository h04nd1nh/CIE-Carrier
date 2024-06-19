import { createResolver } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  devtools: { enabled: true },

  modules: [
    "@pinia/nuxt",
    '@nuxtjs/tailwindcss',
    '@ant-design-vue/nuxt',
    "nuxt-lodash",
  ],

  css: [
    '@/assets/main.scss',
    '@/assets/ant/main.less',
  ],
  
  alias: {
    "@": resolve(__dirname, "./"),
  },

  vite: {
    resolve: {
      alias: {
        'ant-design-vue/dist': 'ant-design-vue/dist',
        'ant-design-vue/es': 'ant-design-vue/es',
        'ant-design-vue/lib': 'ant-design-vue/es',
        'ant-design-vue': 'ant-design-vue/es',
      },
    },

    css: {
      preprocessorOptions: {
          less: {
              javascriptEnabled: true
          }
      }
    }
  },
})
