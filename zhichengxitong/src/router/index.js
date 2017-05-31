import Order from '../pages/Order'
//按需加载
const Login = r => require.ensure([], () => r(require('../pages/Login')), 'Login');
const Search = r => require.ensure([], () => r(require('../pages/Search')), 'Search');
const Mine = r => require.ensure([], () => r(require('../pages/Mine')), 'Mine');
const OrderInfo = r => require.ensure([], () => r(require('../pages/OrderInfo')), 'OrderInfo');
const OrderCreate = r => require.ensure([], () => r(require('../pages/OrderCreate')), 'OrderCreate');
const OrderClose = r => require.ensure([], () => r(require('../pages/OrderClose')), 'OrderClose');
const EditPassword = r => require.ensure([], () => r(require('../pages/EditPassword')), 'EditPassword');
const Transmit = r => require.ensure([], () => r(require('../pages/Transmit')), 'Transmit');
const Terminal = r => require.ensure([], () => r(require('../pages/Terminal')), 'Terminal');
const TerminalInfo = r => require.ensure([], () => r(require('../pages/TerminalInfo')), 'TerminalInfo');
const Message = r => require.ensure([], () => r(require('../pages/Message')), 'Message');
const AdInfo = r => require.ensure([], () => r(require('../pages/AdInfo')), 'AdInfo');
const EquipmentInfo = r => require.ensure([], () => r(require('../pages/EquipmentInfo')), 'EquipmentInfo');
const Journal = r => require.ensure([], () => r(require('../pages/Journal')), 'Journal');
const BasicInfo = r => require.ensure([], () => r(require('../pages/BasicInfo')), 'BasicInfo');
const SearchTerminal = r => require.ensure([], () => r(require('../pages/SearchTerminal')), 'SearchTerminal');

Vue.use(VueRouter)

export default new VueRouter({
    //    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Order',
            component: Order
        }
        , {
            path: '/search',
            name: 'Search',
            component: Search
        }
        , {
            path: '/message',
            name: 'Message',
            component: Message
        }
        , {
            path: '/order/edit',
            name: 'OrderCreate',
            component: OrderCreate
        }
        , {
            path: '/order/close',
            name: 'OrderClose',
            component: OrderClose
        }
        , {
            path: '/order/:id',
            name: 'OrderInfo',
            component: OrderInfo
        }
        , {
            path: '/transmit',
            name: 'Transmit',
            component: Transmit
        }
        , {
            path: '/terminal',
            name: 'Terminal',
            component: Terminal
        }
        , {
            path: '/terminal/:code',
            name: 'TerminalInfo',
            component: TerminalInfo,
            children: [
                {
                    path: '',
                    component: BasicInfo,
                },
                {
                    path: 'equipmentinfo',
                    component: EquipmentInfo
                },
                {
                    path: 'journal',
                    component: Journal
                },
                {
                    path: 'adinfo',
                    component: AdInfo
                },
            ]
        }
        , {
            path: '/mine',
            name: 'Mine',
            component: Mine
        }
        , {
            path: '/mine/password',
            name: 'EditPassword',
            component: EditPassword
        }
        , {
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
        }

    ]
})
