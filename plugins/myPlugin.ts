export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide: {
            helloPlugin: (msg: string)=> `Hello from plugin: ${msg}`,
        }
    }
});