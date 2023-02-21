export default defineNuxtConfig({
    modules: [
        '@pinia/nuxt',
    ],
    css: ['~/assets/main.scss'],
    runtimeConfig: {
        public: { baseUrlUsers: '' }
    },
    styleResources: {
        scss: ['./assets/variables/*.scss']
    },
    build: {
        loaders: {
            scss: {
                additionalData: "@import './assets/variables/_colors.scss';"
            }
        }
    }
})