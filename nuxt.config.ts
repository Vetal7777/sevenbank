export default defineNuxtConfig({
    css: ['~/assets/main.scss'],
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