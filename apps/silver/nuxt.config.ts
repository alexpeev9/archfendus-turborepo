import { createResolver } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      apiUrl: process.env.PUBLIC_API_URL || "http://localhost:3001",
    },
  },

  // app config
  app: {
    // global transition
    pageTransition: { name: "page", mode: "out-in" },
  },

  css: ["styles", resolve("./assets/styles/app.scss")],
});
