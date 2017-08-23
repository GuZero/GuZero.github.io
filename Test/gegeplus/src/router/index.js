// import Login from '../pages/Login.vue';
import Finish from '../pages/Finish.vue';
const Payment = r => require.ensure([], () => r(require('../pages/Pay')), 'Payment');
const Order = r => require.ensure([], () => r(require('../pages/Order')), 'Order');
const Login = r => require.ensure([], () => r(require('../pages/Login')), 'Login');
const OrderList = r => require.ensure([], () => r(require('../pages/OrderList')), 'OrderList');
const Success = r => require.ensure([], () => r(require('../pages/paySuccess')), 'Success');
Vue.use(VueRouter)
    // http://m.dev.aimoge.com/ncshop/door/open
    // http://m.dev.aimoge.com/ncshop/door/open?&terminal_code=0025150416&access_toke
    // n=56a5e1bebaf614b56fa9bff946a78dd39770aea8

export default new VueRouter({
    // saveScrollPosition: true,
    // transitionOnLoad: true,
    // hashbang: true,
    // mode: 'history',
    routes: [{
        path: '/door/open',
        name: 'open',
        component: require('../pages/Finish')
    }, {
        path: '/pay',
        name: 'Payment',
        component: Payment
    }, {
        path: '/order',
        name: 'Order',
        component: Order
    }, {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            requiresAuth: false
        }
    }, {
        path: '/order/list',
        name: 'OrderList',
        component: OrderList
    }, {
        path: '/pay/success',
        name: 'Success',
        component: Success
    }],

})