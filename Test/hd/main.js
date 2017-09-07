import router from './router'
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
/* 实例化一个vue */
new Vue({
    el: '#app',
    router,
    template: `<div id="app">
                    <keep-alive>
                        <router-view class="view"></router-view>
                    </keep-alive>
                </div>`,
    beforeCreate() {
        _util.initDomEvents();
    }
})