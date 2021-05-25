export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "shop",
        htmlAttrs: {
            lang: "en"
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            { hid: "description", name: "description", content: "" }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["@assets/scss/colors.scss"],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ["@plugins/v-mask.js"],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        "@nuxtjs/fontawesome",
        [
            "@nuxtjs/vuetify",
            {
                theme: {
                    themes: {
                        light: {
                            primary: "#F7931F",
                            secondary: "#b0bec5",
                            anchor: "#8c9eff"
                        }
                    }
                }
            }
        ]
    ],
    fontawesome: {
        component: "fa",
        icons: {
            solid: true,
            brands: true
        }
    },
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        "@nuxtjs/axios",
        "@nuxtjs/style-resources",
        "bootstrap-vue/nuxt"
    ],

    styleResources: {
        scss: ["@/assets/scss/*.scss"]
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: ["vuetify-mask"]
    }
};
