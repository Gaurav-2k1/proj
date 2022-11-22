// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Ditto Dolls",

      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css",
        },
        // { rel: "icon", type: "svg+xml", href: "@/assets/images/logo.svg" },
        // { rel: "icon", type: "image/x-icon", href: "/images/logo.svg" },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js",
        },
      ],
    },
  },

  vite: {
    define: { "process.env.DEBUG": false },
  },
  // publicRuntimeConfig: {
  //   FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
  // },
  // privateRuntimeConfig: {
  //   FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
  // },
});
