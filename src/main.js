import { createApp } from 'vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { createNotivue } from 'notivue'
import VueApexCharts from 'vue3-apexcharts'
import VueScan from 'z-vue-scan'
import veProgress from 'vue-ellipse-progress'

import App from '@/app.vue'
import router from '@/router'
import store from '@/stores'

import '@/styles/styles.sass'
import '@/styles/styles.css'
import 'notivue/notifications.css'
import 'notivue/animations.css'

const notivueConfig = {
  position: 'bottom-right',
  limit: 4,
  enqueue: true
}

const notivue = createNotivue(notivueConfig)

const app = createApp(App)

app.use(router)
app.use(store)
app.use(autoAnimatePlugin)
app.use(notivue)
app.use(VueApexCharts)
app.use(VueScan)
app.use(veProgress)

app.mount('#app')
