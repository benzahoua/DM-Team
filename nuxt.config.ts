// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/eslint-module", "@nuxtjs/tailwindcss", "nuxt-svgo", "@nuxt/image"],
  svgo: {
    autoImportPath: "./assets/icons/",
    componentPrefix: "i",
  },
  devtools: { enabled: true },
});
