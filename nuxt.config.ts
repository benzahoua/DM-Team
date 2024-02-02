// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    baseURL: process.env.API_BASE_URL,
    apiVehiclesUrl: process.env.API_VEHICLES_URL,
    apiPopularVehiclesUrl: process.env.API_POPULAR_VEHICLES_URL,
    apiSingleVehicleUrl: process.env.API_SINGLE_VEHICLE_URL,
  },
  modules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/tailwindcss",
    "nuxt-svgo",
    "@nuxt/image",
    ["@pinia/nuxt", { autoImports: ["defineStore"] }],
  ],
  css: ["~/assets/sass/main.scss"],
  imports: {
    dirs: ["types/**/*.ts", "stores"],
  },
  svgo: {
    autoImportPath: "./assets/icons/",
    componentPrefix: "i",
  },
  devtools: { enabled: true },
});
