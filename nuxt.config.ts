export default defineNuxtConfig({
  app: {
    head: {
      title: "Ditto Dolls",

      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css",
        },
        // { rel: "icon", type: "image", href: "@/assets/images/logo.svg" },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js",
        },
      ],
      mode: "spa",
      plugin: ["~/plugin/firebase.js"],

      
      modules: [
        "@nuxtjs/axios",
        "@nuxtjs/pwa",
        [
          "@nuxtjs/firebase",
          {
            config: {
              apiKey: "AIzaSyDJ7cVeohUlWMegCAWEF5MXj-ESR78T1y0",
              authDomain: "ditto-dolls.firebaseapp.com",
              projectId: "ditto-dolls",
              storageBucket: "ditto-dolls.appspot.com",
              messagingSenderId: "501056572331",
              appId: "1:501056572331:web:651a09c4ca901eee46a0ee",
              measurementId: "G-85LHP742X0",
            },
            services: {
              firestore: true,
              auth: {
                persistence: "local",
                initialize: {
                  onAuthStateChangedMutation: "ON_AUTH_STATE_CHANGED_MUTATION",
                },
                ssr: false,
              }, // Just as example. Can be any other service.
            },
          },
        ],
      ],
    },
  },

  vite: {
    define: { "process.env.DEBUG": false },
  },
});
