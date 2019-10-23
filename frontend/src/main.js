import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLodash from 'vue-lodash'
import config from './config'

Vue.config.productionTip = false

Vue.use(VueLodash);

Vue.prototype.$config = config;

// Vue.prototype.$api = new ApiService(config, );

import '@/assets/global.css'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
