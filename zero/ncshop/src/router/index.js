import Finish from '../pages/Finish.vue';
const Payment = r => require.ensure([], () => r(require('../pages/Pay')), 'Payment');
const Order = r => require.ensure([], () => r(require('../pages/Order')), 'Order');
const Login = r => require.ensure([], () => r(require('../pages/Login')), 'Login');
const OrderList = r => require.ensure([], () => r(require('../pages/OrderList')), 'OrderList');
const Success = r => require.ensure([], () => r(require('../pages/paySuccess')), 'Success');
const Shelf = r => require.ensure([], () => r(require('../pages/Shelf')), 'Shelf');
const ShelfPay = r => require.ensure([], () => r(require('../pages/shelfPay')), 'ShelfPay');
const ShelfOrder = r => require.ensure([], () => r(require('../pages/shelfOrder')), 'shelfOrder');
const ShelfList = r => require.ensure([], () => r(require('../pages/shelfList')), 'shelfList');
const PaySuccess = r => require.ensure([], () => r(require('../pages/shelfPaySuceess')), 'PaySuccess');
const EquipmentPay = r => require.ensure([], () => r(require('../pages/EquipmentPay')), 'EquipmentPay');
const EquipmentPaySuccess = r => require.ensure([], () => r(require('../pages/EquipmentPaySuccess')), 'EquipmentPaySuccess');
const Equipment = r => require.ensure([], () => r(require('../pages/equipment/index')), 'Equipment');
const EquipmentExtraction = r => require.ensure([], () => r(require('../pages/equipment/extractionMethod')), 'EquipmentExtraction');
const EquipmentOrder = r => require.ensure([], () => r(require('../pages/equipment/order')), 'EquipmentOrder');
const EquipmentExchange = r => require.ensure([], () => r(require('../pages/equipment/exchange')), 'EquipmentExchange ');
const EquipmentRefund = r => require.ensure([], () => r(require('../pages/equipment/refund')), 'EquipmentRefund ');
const EquipmentStorePaySuccess = r => require.ensure([], () => r(require('../pages/equipment/paySuccess')), 'EquipmentStorePaySuccess');
Vue.use(VueRouter);
export default new VueRouter({
    mode: 'history',
    routes: [{
        path: '/ncshop/door/open',
        name: 'open',
        component: Finish
    }, {
        path: '/ncshop/pay',
        name: 'Payment',
        component: Payment
    }, {
        path: '/ncshop/order',
        name: 'Order',
        component: Order
    }, {
        path: '/ncshop/login',
        name: 'Login',
        component: Login,
        meta: {
            requiresAuth: false
        }
    }, {
        path: '/ncshop/order/:order_id',
        name: 'OrderList',
        component: OrderList
    }, {
        path: '/ncshop/pay/success',
        name: 'Success',
        component: Success
    }, { //格格+货架
        path: '/ncshop/shelf',
        name: 'Shelf',
        component: Shelf,
        meta: {
            requiresAuth: false
        }
    }, {
        path: '/ncshop/shelf/pay',
        name: 'ShelfPay',
        component: ShelfPay
    }, {
        path: '/ncshop/shelf/order',
        name: 'ShelfOrder',
        component: ShelfOrder
    }, {
        path: '/ncshop/shelf/order/:order_id',
        name: 'ShelfList',
        component: ShelfList
    }, {
        path: '/ncshop/shelf/pay/success',
        name: 'PaySuccess',
        component: PaySuccess
    }, {
        path: '/ncshop/equipmentpay',
        name: 'EquipmentPay',
        component: EquipmentPay
    }, {
        path: '/ncshop/equipment/pay/success',
        name: 'EquipmentPaySuccess',
        component: EquipmentPaySuccess
    }, { //咖啡机商城
        path: '/ncshop/equipment',
        name: 'Equipment',
        component: Equipment,
        meta: {
            requiresAuth: false
        }
    }, {
        path: '/ncshop/equipment/extraction',
        name: 'EquipmentExtraction',
        component: EquipmentExtraction
    }, {
        path: '/ncshop/equipment/order',
        name: 'EquipmentOrder',
        component: EquipmentOrder
    }, {
        path: '/ncshop/equipment/exchange',
        name: 'EquipmentExchange',
        component: EquipmentExchange
    }, {
        path: '/ncshop/equipment/refund',
        name: 'EquipmentRefund',
        component: EquipmentRefund
    }, {
        path: '/ncshop/equipment/store/paysuccess',
        name: 'EquipmentStorePaySuccess',
        component: EquipmentStorePaySuccess
    }],
})