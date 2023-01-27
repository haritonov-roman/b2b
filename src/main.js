import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Cds from '@central-design-system/components'
import '@central-design-system/components/dist/cds.css'

Vue.use(Cds)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
