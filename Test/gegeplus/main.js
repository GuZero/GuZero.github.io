import router from './router'
router.beforeEach((to, from, next) => {
    if (to.matched.some(to => {
            return to.meta.requiresAuth == undefined ? true : to.meta.requiresAuth
        })) {

        if (!window.uid || !window.is_logged) {
            next({ path: '/ncshop/login', query: { page_url: to.fullPath } })
        } else {
            next();
        }
    } else {
        next();
    }
});

router.afterEach(route => {
    if (_util.isWeixin()) {
        window.configShare(window.share_config);
    }
});

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