// import App from "./App";
// import router from "./router";
import Counter from './components/Counter'
import store from "./store/index"
Vue.prototype.goback = function() {
    this.$router.go(-1);
};
Vue.prototype.url = function(path, query, replace) {
    if (replace) {
        this.$router.replace({
            path: path,
            query: query ? query : {}
        });
    } else {
        this.$router.push({
            path: path,
            query: query ? query : {}
        });
    }
};
Vue.use(Vuex);
new Vue({
    el: "#app",
    store,
    render: h => (Counter)
});