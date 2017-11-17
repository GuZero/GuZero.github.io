import Order from '../pages/Order'
//按需加载
const Login = r => require.ensure([], () => r(require('../pages/Login')), 'Login');
const Search = r => require.ensure([], () => r(require('../pages/Search')), 'Search');
const Mine = r => require.ensure([], () => r(require('../pages/Mine')), 'Mine');
const OrderInfo = r => require.ensure([], () => r(require('../pages/OrderInfo')), 'OrderInfo');
const OrderCreate = r => require.ensure([], () => r(require('../pages/OrderCreate')), 'OrderCreate');
const OrderClose = r => require.ensure([], () => r(require('../pages/OrderClose')), 'OrderClose');
const OrderFollow = r => require.ensure([], () => r(require('../pages/OrderFollow')), 'OrderFollow');
const OrderType = r => require.ensure([], () => r(require('../pages/OrderType')), 'OrderType');
const OrderTerminal = r => require.ensure([], () => r(require('../pages/OrderTerminal')), 'OrderTerminal');
const OrderMainTain = r => require.ensure([], () => r(require('../pages/OrderMainTain')), 'OrderMainTain');
const OrderOperation = r => require.ensure([], () => r(require('../pages/OrderOperation')), 'OrderOperation');
const OrderInstall = r => require.ensure([], () => r(require('../pages/OrderInstall')), 'OrderInstall');
const OrderCooperate = r => require.ensure([], () => r(require('../pages/OrderCooperate')), 'OrderCooperate');
const EditPassword = r => require.ensure([], () => r(require('../pages/EditPassword')), 'EditPassword');
const Transmit = r => require.ensure([], () => r(require('../pages/Transmit')), 'Transmit');
const Terminal = r => require.ensure([], () => r(require('../pages/Terminal')), 'Terminal');
const Message = r => require.ensure([], () => r(require('../pages/Message')), 'Message');
const AdInfo = r => require.ensure([], () => r(require('../pages/AdInfo')), 'AdInfo');
const EquipmentInfo = r => require.ensure([], () => r(require('../pages/EquipmentInfo')), 'EquipmentInfo');
const Journal = r => require.ensure([], () => r(require('../pages/Journal')), 'Journal');
const BasicInfo = r => require.ensure([], () => r(require('../pages/BasicInfo')), 'BasicInfo');
const SearchTerminal = r => require.ensure([], () => r(require('../pages/SearchTerminal')), 'SearchTerminal');
const Allocation = r => require.ensure([], () => r(require('../pages/Allocation')), 'Allocation');
const EditEquipment = r => require.ensure([], () => r(require('../pages/EditEquipment')), 'EditEquipment');
const Test = r => require.ensure([], () => r(require('../pages/test')), 'Test');

Vue.use(VueRouter)

export default new VueRouter({
    // mode: 'history',
    routes: [{
            path: '/',
            name: 'Order',
            component: Order
        }, {
            path: '/search',
            name: 'Search',
            component: Search
        }, {
            path: '/message',
            name: 'Message',
            component: Message
        }, {
            path: '/order/edit',
            name: 'OrderCreate',
            component: OrderCreate
        }, {
            path: '/order/close',
            name: 'OrderClose',
            component: OrderClose
        }, {
            path: '/order/follow',
            name: 'OrderFollow',
            component: OrderFollow
        }, {
            path: '/order/type',
            name: 'OrderType',
            component: OrderType
        }, {
            path: '/order/forward',
            name: 'OrderTerminal',
            component: OrderTerminal
        }, {
            path: '/order/maintain',
            name: 'OrderMainTain',
            component: OrderMainTain
        }, {
            path: '/order/operation',
            name: 'OrderOperation',
            component: OrderOperation
        }, {
            path: '/order/install',
            name: 'OrderInstall',
            component: OrderInstall
        }, {
            path: '/order/cooperate',
            name: 'OrderCooperate',
            component: OrderCooperate
        }, {
            path: '/order/:id',
            name: 'OrderInfo',
            component: OrderInfo
        }, {
            path: '/transmit',
            name: 'Transmit',
            component: Transmit
        }, {
            path: '/terminal',
            name: 'Terminal',
            component: Terminal
        }, {
            path: '/terminal/:code',
            name: 'BasicInfo',
            component: BasicInfo
        }, {
            path: '/terminal/:code/equipmentinfo',
            name: 'EquipmentInfo',
            component: EquipmentInfo
        }, {
            path: '/terminal/:code/journal',
            name: 'Journal',
            component: Journal
        }, {
            path: '/terminal/:code/adinfo',
            name: 'AdInfo',
            component: AdInfo
        }, {
            path: '/terminal/:code/allocation',
            name: 'Allocation',
            component: Allocation
        }, {
            path: '/terminal/:code/equipmentinfo/edit',
            name: 'EditEquipment',
            component: EditEquipment
        }, {
            path: '/mine',
            name: 'Mine',
            component: Mine
        }, {
            path: '/mine/password',
            name: 'EditPassword',
            component: EditPassword
        }, {
            path: '/login',
            name: 'Login',
            component: Login,
            meta: {
                requiresAuth: false
            }
        }, {
            path: '/searchterminal',
            name: 'SearchTerminal',
            component: SearchTerminal
        },
        {
            path: '/test',
            name: 'Test',
            component: Test
        }

    ]
})