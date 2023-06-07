import { resolve } from "path";
export default defineNuxtConfig({
    app: {
        head: {
            title: "General Nuxt Typescript Tailwind Starter",

        },
    },
    alias: {
        "@": resolve(__dirname, "/"),
    },
    css: [
        "~/assets/main.scss"
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: [
        '@vueuse/nuxt',
        '@nuxt/content',
        '@pinia/nuxt'
    ],
    devtools: {
        enabled: true
    },
    typescript: {
        strict: true,
        typeCheck: true
    },
    runtimeConfig: {
        apiSecretOverride: '',
        apiSecret: process.env.API_SECRET_ENV,
    },
})
