import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useIntersectionObserver } from '@vueuse/core';
import { lazyPlugin } from "@/directives";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)


app.mount('#app')
