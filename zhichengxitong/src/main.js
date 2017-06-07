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
        this.$router.go(-1);
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
Vue.prototype.setStore = function (storeName,urlKey,data,headers,version){
    let now_ts = (new Date()).getTime();
    let storeValue = window.localStorage[storeName] ? JSON.parse(window.localStorage[storeName] || null) : {};
    storeValue[urlKey] = {
                            "v":version,
                            "headers":headers,
                            "data": data,
                            "ts": now_ts
                        };
    window.localStorage.setItem(storeName,JSON.stringify(storeValue));                
};

Vue.prototype.checkStore = function (storeName,urlKey,version){
    let cacheObj = window.localStorage[storeName]?JSON.parse(window.localStorage[storeName]):null,
        now_ts = (new Date()).getTime();
    if (cacheObj && !this.emptyJson(cacheObj)) {
        if (cacheObj[urlKey]) {
            if ( now_ts - cacheObj[urlKey].ts > 6 * 60 * 60 * 1000 || cacheObj[urlKey].v !== version ) {
                cacheObj[urlKey] = null;
                window.localStorage.setItem(storeName,JSON.stringify(cacheObj));                
                return {"rsp": null,"canUseCache": false,"isUseAjax": true}; //此向数据作废，若没有网络，则提示断开网络
            }else if ((now_ts - cacheObj[urlKey].ts < 6 * 60 * 60 * 1000 )&&(now_ts - cacheObj[urlKey].ts > 2 * 60 * 1000 )){
                return {"rsp": cacheObj[urlKey],"canUseCache": true,"isUseAjax": true};//若没有网络，则填充缓存里的内容,若有网络，更替缓存内容，直接使用网络返回值进行内容填充。
            }else if (now_ts - cacheObj[urlKey].ts < 2 * 60 * 1000 ){
                return {"rsp": cacheObj[urlKey],"canUseCache": true,"isUseAjax": false};//相差2分钟内，不用使用ajax请求，直接使用缓存。
            }
        }
    }
    return {"urlItem": null,"canUseCache": false,"isUseAjax": true};//当缓存中没有内容时,若没有网络，则提示断开网络
};

Vue.prototype.getAjaxRequest = function (storeName,url,version,success_callback,error_callback) {
    let that = this,
        stroeInfo = {};
    stroeInfo = that.checkStore(storeName,url,version);
    if (!stroeInfo.isUseAjax) {
        return success_callback(stroeInfo.rsp.data);
    }
    axios.get(url)
        .then(function(rsp) {
            that.setStore(storeName,url,rsp.data,rsp.headers,version);
            return success_callback(rsp.data);
        })
        .catch(function (error) {
            if (stroeInfo.canUseCache) {
                return success_callback(stroeInfo.urlItem);
            }else{
                return error_callback(error);
            }
        });
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
