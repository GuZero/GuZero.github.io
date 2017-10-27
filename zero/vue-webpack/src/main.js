import App from "./App";
import router from "./router";
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
Vue.config.devtools = true;
new Vue({
    el: "#app",
    router,
    template: "<App/>",
    components: { App }
});