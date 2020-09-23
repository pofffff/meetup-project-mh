import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"

// möjligtvis ta bort default headers i alla calls eftersom den sätts här
const token = localStorage.getItem('token')
if (token) {
  axios.defaults.headers.common['Authorization'] = token
  store.state.isAuthenticated = true;
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
