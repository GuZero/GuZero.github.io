import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import './assets/css/global.css'

Axios.defaults.baseURL = '';
Axios.defaults.withCredentials = true;
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

Vue.prototype.axios = Axios
Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
