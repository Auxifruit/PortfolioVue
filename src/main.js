import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes.js'
import { createI18n } from 'vue-i18n'

import fr from './locales/fr.json'
import en from './locales/en.json'

const router = createRouter({
    history: createWebHistory(),
    routes
});

const i18n = createI18n({
    legacy: false,
    locale: "fr",
    fallbackLocale: "fr",
    messages: {fr, en}
})

const app = createApp(App)

app.use(router)
app.use((i18n))

app.mount('#app')
