import { createApp } from 'vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { createNotivue } from 'notivue'

import App from '@/app.vue'
import router from '@/router'
import store from '@/stores'

import '@/sass/styles.sass'
import 'notivue/notifications.css'
import 'notivue/animations.css'

const notivueConfig = {
  position: 'bottom-right',
  limit: 4,
  enqueue: true
}

const app = createApp(App)

app.use(router)
app.use(store)
app.use(autoAnimatePlugin)

createNotivue(app, notivueConfig)

app.mount('#app')
