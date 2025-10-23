// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      apiUrl: process.env.PUBLIC_API_URL || "http://localhost:3001",
    },
  },
});
