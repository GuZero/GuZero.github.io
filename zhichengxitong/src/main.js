import router from './router'
router.beforeEach((to, from, next) => {
    if (to.matched.some(to => {
            return to.meta.requiresAuth == undefined ? true : to.meta.requiresAuth
        })) {
        axios.get(ajaxUrls.isLogin)
            .then(function (rsp) {
                if (rsp.data.status != 0) {
                    window.is_logged = false;
                    next({
                        path: '/login',
                        query: {
                            next_url: decodeURIComponent(to.path)
                        }
                    });
                } else {
                    next();
                }
            });
    } else {
        next();
    }
});

//Vue.config.productionTip = true
//Vue.config.debug = true;
Vue.config.devtools = true;

//url handle
Vue.prototype.goback = function (origin) {
    if (origin == "terminal") {
        this.$router.push({
            path: '/terminal',
            query:{}
        });
    }else{
        window.history.back();
    }
};

Vue.prototype.url = function (path, query) {
    this.$router.push({
        path: path,
        query: query ? query : {}
    });
};

Vue.prototype.replaceUrl = function (path, query) {
    this.$router.replace({
        path: path,
        query: query ? query : {}
    });
};

Vue.prototype.emptyJson = function (json) {
    let flag = true;
    if (Object.keys(json).length) flag = false;
    return flag;
};


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
    },
    mounted() {
        _util.addLinkTouchEvent()
    }
})
