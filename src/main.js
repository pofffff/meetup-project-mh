import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"

const token = localStorage.getItem('token')
if (token) {
  axios.defaults.headers.common['Authorization'] = token
  store.state.isAuthenticated = true;
  console.log(store.state.isAuthenticated)
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
