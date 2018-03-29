import router from "./router";

function setTitle() {
    var url = window.location.href,
        title = "";
    if (url.indexOf("shelf") > -1) {
        title = (window.ncshop_config && window.ncshop_config.ncshelf_name) || "格格+便利中心";
    } else if (url.indexOf('equipment')) {
        title = '趣点咖啡';
    } else {
        title = (window.ncshop_config && window.ncshop_config.ncshop_name) || "格格+便利中心";
    }
    $("title").html(title);
}

router.beforeEach((to, from, next) => {
    window.anonymous_uid = '5a7429666803fa3e2b8b4567';
    setTimeout(anonymousSignin, 2 * 1000);

    function anonymousSignin() {
        if (window.anonymous_uid != window.uid) {
            return;
        }

        axios.post('/user/anonymous/signin', {})
            .then(function(res) {
                if (res.data.status != 0) {
                    window.uid = undefined;
                    window.is_logged = !!window.uid;
                } else {
                    setTimeout(anonymousSignin, 5 * 60 * 1000);
                }
            })
            .catch(function() {
                setTimeout(anonymousSignin, 5 * 60 * 1000);
            });
    }

    function anonymousLogin() {
        axios.post('/user/anonymous/login', {})
            .then(function(res) {
                if (res.data.status == 0) {
                    window.anonymous_uid = res.data.data._id;
                    window.uid = res.data.data._id;
                    window.is_logged = !!window.uid;
                    setTimeout(anonymousSignin, 5 * 60 * 1000);
                    return next();
                }
                return next({ path: "/ncshop/login", query: { page_url: to.fullPath } });
            })
            .catch(function() {
                return next({ path: "/ncshop/login", query: { page_url: to.fullPath } });
            });
    }

    function loadConfig() {
        axios.get("/ncshop/config/dot?dot_id=" + window.dot_id)
            .then(function(res) {
                if (res.data.status == 0) {
                    res.data.data.dot_id = window.dot_id;
                    res.data.data.ts = new Date().getTime();
                    localStorage.ncshop_config = JSON.stringify(res.data.data);
                    window.ncshop_config = res.data.data;
                    loadRouter();
                    setTitle();
                } else {
                    _util.showErrorTip('您的网络可能出了点问题:(');
                }
            })
            .catch(function(err) {
                _util.showErrorTip('您的网络可能出了点问题:(');
            });
    }

    function loadRouter() {
        if (
            to.matched.some(to => {
                return to.meta.requiresAuth == undefined ? true : to.meta.requiresAuth;
            })
        ) {
            if (!window.uid || !window.is_logged || (!to.meta.anonymousAuth && window.anonymous_uid == window.uid)) {
                var prefix = 'shop';
                if ((to.fullPath || "").indexOf("shelf") > 0) {
                    prefix = "shelf";
                } else if ((to.fullPath || "").indexOf("equipment") > 0) {
                    prefix = "equipment";
                }
                if (to.meta.anonymousAuth && (window.ncshop_config[prefix + '_anonymous'] || window.ncshop_config.anonymous)) {
                    anonymousLogin();
                } else {
                    next({ path: "/ncshop/login", query: { page_url: to.fullPath } });
                }
            } else {
                next();
            }
        } else {
            next();
        }
    }

    if (window.ncshop_config) {
        loadRouter();
        setTitle();
    } else if (window.dot_id && window.dot_id > 0) {
        window.ncshop_config = JSON.parse(localStorage.ncshop_config || "{}");
        if (window.ncshop_config.dot_id != window.dot_id || new Date().getTime() - window.ncshop_config.ts > 7 * 24 * 60 * 60 * 1000) {
            loadConfig();
        } else {
            loadConfig();
            loadRouter();
            setTitle();
        }
    } else {
        window.ncshop_config = {};
        loadRouter();
        setTitle();
    }
});

router.afterEach(route => {
    if (_util.isWeixin()) {
        setTimeout(function() {
            window.configShare(window.share_config);
        }, 16);
    }
});

Vue.prototype.goback = function() {
    this.$router.go(-1);
};
Vue.prototype.url = function(path, query, replace) {
    if (window.dot_id && (!query || !query.dot_id)) {
        query = query || {};
        query.dot_id = window.dot_id || 0;
    }

    if (_util.isWeixin() && path == "/ncshop/shelf/pay") {
        query = query || {};
        query.wxid = window.wxid || '';
        return window.location.href = path + "?" + _util.urlencode(query);
    }

    if (_util.isWeixin() && path == "/ncshop/equipmentCoffeePay") {
        query = query || {};
        query.wxid = window.wxid || '';
        return window.location.href = path + "?" + _util.urlencode(query);
    }

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
    template: `<div id="app">
                <router-view class="view"></router-view>
             </div>`,
    beforeCreate() {
        _util.initDomEvents();
    }
});