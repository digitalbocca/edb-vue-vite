import { createApp } from 'vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { notivue } from 'notivue'

import App from '@/app.vue'
import router from '@/router'
import store from '@/stores'

import '@/sass/styles.sass'
import 'notivue/notifications.css'
import 'notivue/animations.css'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(autoAnimatePlugin)
app.use(notivue, { position: 'bottom-right' })

app.mount('#app')
