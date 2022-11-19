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
        {
          rel: "shortcut icon",
          href: "/assets/images/logo.svg",
          type: "image/x-icon",
        },
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
});
