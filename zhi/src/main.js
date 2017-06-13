import router from './router'
router.beforeEach((to, from, next) => {
    if (to.matched.some(to => {
            return to.meta.requiresAuth == undefined ? true : to.meta.requiresAuth
        })) {
        axios.get(ajaxUrls.isLogin)
            .then(function (rsp) {
                if (rsp.data.status !==0) {
                    window.is_logged = false;
                    if (_util.isApp()) {
                        window.location.href ="gegemis:///Login";
                    }else{
                        next({
                            path: '/login',
                            query: {
                                next_url: decodeURIComponent(to.path)
                            }
                        });
                    }
                } else{
                    next();
                }
            })
            .catch(function(){
                next();
            })
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
//设置缓存
window.setStore = function (storeName,urlKey,data,headers,version){
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

window.checkStore = function (storeName,urlKey,version,free_ts,overdue_ts){
    let cacheObj = window.localStorage[storeName]?JSON.parse(window.localStorage[storeName]):null,
        now_ts = (new Date()).getTime();
    if (cacheObj) {
        if (cacheObj[urlKey]) {
            if ( now_ts - cacheObj[urlKey].ts > overdue_ts || cacheObj[urlKey].v !== version ) {
                cacheObj[urlKey] = null;
                window.localStorage.setItem(storeName,JSON.stringify(cacheObj));                
                return {"rsp": null,"canUseCache": false,"isUseAjax": true}; //此向数据作废，若没有网络，则提示断开网络
            }else if ((now_ts - cacheObj[urlKey].ts < overdue_ts )&&(now_ts - cacheObj[urlKey].ts > free_ts )){
                return {"rsp": cacheObj[urlKey],"canUseCache": true,"isUseAjax": true};//若没有网络，则填充缓存里的内容,若有网络，更替缓存内容，直接使用网络返回值进行内容填充。
            }else if (now_ts - cacheObj[urlKey].ts < free_ts ){
                return {"rsp": cacheObj[urlKey],"canUseCache": true,"isUseAjax": false};//相差free_ts分钟内，不用使用ajax请求，直接使用缓存。
            }
        }
    }
    return {"rsp": null,"canUseCache": false,"isUseAjax": true};//当缓存中没有内容时,若没有网络，则提示断开网络
};

//storeName：缓存名称；url：请求链接；version:版本号；free_ts：免请求 时间；overdue_ts：过期时间。
window.getAjaxRequest = function (storeName,url,version,free_ts,overdue_ts,success_callback,error_callback) {
    let stroeInfo = {};
    stroeInfo = checkStore(storeName,url,version,free_ts,overdue_ts);
    if (!stroeInfo.isUseAjax) {
        return (success_callback?success_callback(stroeInfo.rsp.data):null);
    }
    axios.get(url)
        .then(function(rsp) {
            setStore(storeName,url,rsp.data,rsp.headers,version);
            return (success_callback?success_callback(rsp.data):null);
        })
        .catch(function (error) {
            if (stroeInfo.canUseCache) {
                return (success_callback?success_callback(stroeInfo.rsp.data):null);
            }else{
                return (error_callback ? error_callback(error): null);
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
        let that = this;
        _util.addLinkTouchEvent();
        window.canGoBack = false; //是否可以回退
        window.origin = null; //此页面的来源

        
        window.goBack = function () {
            if (window.canGoBack) {
                that.goback(window.origin);
            }
        }
        window.canBack = function () {
            return window.canGoBack;
        }
        window.tellWebNotiContent = function (content) {
            let conArr = content.split('//');
            let url = conArr[conArr.length-1];
            that.url(url);
        }
    }
})
