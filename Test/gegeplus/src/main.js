import router from './router'
// router.beforeEach((to, from, next) => {
//     if (to.matched.some(to => {
//             return to.meta.requiresAuth == undefined ? true : to.meta.requiresAuth
//         })) {
//         if (!window.uid || !window.is_login) {
//             next({ path: '/login' })
//         } else {
//             next();
//         }
//     } else {
//         next();
//     }
// })

Vue.prototype.goback = function() {
    this.$router.go(-1);
};
Vue.prototype.url = function(path, query) {
    this.$router.push({
        path: path,
        query: query ? query : {}
    });
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