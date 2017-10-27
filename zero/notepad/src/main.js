import Vue from 'vue';
import App from './App';
import Vuex from 'vuex';
import store from './store/index';
import VueToast from 'vue2-toast';
import 'vue2-toast/lib/toast.css';

Vue.use(VueToast, {
    defaultType: 'center'
})
Vue.use(Vuex);

new Vue({
    el: '#app',
    store: store,
    template: '<App/>',
    components: {
        App
    }
})