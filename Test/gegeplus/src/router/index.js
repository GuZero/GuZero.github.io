// import Login from '../pages/Login.vue';
import Finish from '../pages/Finish.vue';
const Payment = r => require.ensure([], () => r(require('../pages/Pay')), 'Payment');
const Order = r => require.ensure([], () => r(require('../pages/Order')), 'Order');
const Login = r => require.ensure([], () => r(require('../pages/Login')), 'Login');
const OrderList = r => require.ensure([], () => r(require('../pages/OrderList')), 'OrderList');
const Success = r => require.ensure([], () => r(require('../pages/paySuccess')), 'Success');
Vue.use(VueRouter)
export default new VueRouter({
    routes: [{
        path: '/',
        name: 'index',
        component: Finish
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
        component: Login
    }, {
        path: '/order/list',
        name: 'OrderList',
        component: OrderList
    }, {
        path: '/pay/success',
        name: 'Success',
        component: Success
    }]
})