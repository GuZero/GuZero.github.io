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
const CleanTerminal = r => require.ensure([], () => r(require('../pages/CleanTerminal')), 'CleanTerminal');
const ManageBox = r => require.ensure([], () => r(require('../pages/ManageBox')), 'ManageBox');
const ManageBoxDetail = r => require.ensure([], () => r(require('../pages/ManageBoxDetail')), 'ManageBoxDetail');
const RecvBox = r => require.ensure([], () => r(require('../pages/RecvBox')), 'RecvBox');
const EditRecvBox = r => require.ensure([], () => r(require('../pages/EditRecvBox')), 'EditRecvBox');
const EndRecvBox = r => require.ensure([], () => r(require('../pages/EndRecvBox')), 'EndRecvBox');
const DetailsOrder = r => require.ensure([], () => r(require('../pages/DetailsOrder')), 'DetailsOrder');
const CourierSearch = r => require.ensure([], () => r(require('../pages/CourierSearch')), 'CourierSearch');
const CourierDetails = r => require.ensure([], () => r(require('../pages/CourierDetails')), 'CourierDetails');
const CourierRecord = r => require.ensure([], () => r(require('../pages/CourierRecord')), 'CourierRecord');
const EquipmentBoxType = r => require.ensure([], () => r(require('../pages/EquipmentBoxType')), 'EquipmentBoxType');
const DepositRecord = r => require.ensure([], () => r(require('../pages/DepositRecord')), 'DepositRecord');


Vue.use(VueRouter)

export default new VueRouter({
    // mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Order',
            component: Order,
            meta: {
                keepAlive: true
            }
        }
        , {
            path: '/search',
            name: 'Search',
            component: Search,
            meta: {
                keepAlive: true
            }
        }
        , {
            path: '/message',
            name: 'Message',
            component: Message,
            meta: {
                keepAlive: true
            }
        }
        , {
            path: '/order/edit',
            name: 'OrderCreate',
            component: OrderCreate,
            meta: {
                keepAlive: true
            }
        }
        , {
            path: '/order/close',
            name: 'OrderClose',
            component: OrderClose,
            meta: {
                keepAlive: true
            }
        }
        , {
            path: '/order/follow',
            name: 'OrderFollow',
            component: OrderFollow,
            meta: {
                keepAlive: true
            }
        }
        , {
            path: '/order/type',
            name: 'OrderType',
            component: OrderType,
            meta: {
                keepAlive: false
            }
        }
        , {
            path: '/order/forward',
            name: 'OrderTerminal',
            component: OrderTerminal,
            meta: {
                keepAlive: true
            }
        }
        , {
            path: '/order/maintain',
            name: 'OrderMainTain',
            component: OrderMainTain,
            meta: {
                keepAlive: true
            }
        }
        , {
            path: '/order/operation',
            name: 'OrderOperation',
            component: OrderOperation,
            meta: {
                keepAlive: true
            }
        }
        , {
            path: '/order/install',
            name: 'OrderInstall',
            component: OrderInstall,
            meta: {
                keepAlive: true
            }
        }
        , {
            path: '/order/cooperate',
            name: 'OrderCooperate',
            component: OrderCooperate,
            meta: {
                keepAlive: true
            }
        }
        , {
            path: '/order/:id',
            name: 'OrderInfo',
            component: OrderInfo,
            meta: {
                keepAlive: true
            }
        }
        , {
            path: '/transmit',
            name: 'Transmit',
            component: Transmit,
            meta: {
                keepAlive: true
            }
        }
        , {
            path: '/terminal',
            name: 'Terminal',
            component: Terminal,
            meta: {
                keepAlive: true
            }
        }
        , {
            path: '/terminal/:code',
            name: 'BasicInfo',
            component: BasicInfo,
            meta: {
                keepAlive: false
            }
        }
        , {
            path: '/terminal/:code/equipmentinfo',
            name: 'EquipmentInfo',
            component: EquipmentInfo,
            meta: {
                keepAlive: false
            }
        }
        , {
            path: '/terminal/:code/journal',
            name: 'Journal',
            component: Journal,
            meta: {
                keepAlive: true
            }
        }
        , {
            path: '/terminal/:code/adinfo',
            name: 'AdInfo',
            component: AdInfo,
            meta: {
                keepAlive: true
            }
        }
        , {
            path: '/terminal/:code/allocation',
            name: 'Allocation',
            component: Allocation,
            meta: {
                keepAlive: false
            }
        }
        , {
            path: '/mine',
            name: 'Mine',
            component: Mine,
            meta: {
                keepAlive: true
            }
        }
        , {
            path: '/mine/password',
            name: 'EditPassword',
            component: EditPassword,
            meta: {
                keepAlive: true
            }
        }
        , {
            path: '/login',
            name: 'Login',
            component: Login,
            meta: {
                requiresAuth: false,
                keepAlive: true

            }
        }
        , {
            path: '/searchterminal',
            name: 'SearchTerminal',
            component: SearchTerminal,
            meta: {
                keepAlive: false
            }
        }, {
            path: '/search/:code/details',
            name: 'DetailsOrder',
            component: DetailsOrder,
            meta: {
                keepAlive: false
            }
        }, {
            path: '/search/courier',
            name: 'CourierSearch',
            component: CourierSearch,
            meta: {
                keepAlive: false
            }
        }, {
            path: '/couires/record/:code',
            name: 'CourierRecord',
            component: CourierRecord,
            meta: {
                keepAlive: false
            }
        }, {
            path: '/couires/details/:code',
            name: 'CourierDetails',
            component: CourierDetails,
            meta: {
                keepAlive: false
            }
        }
        , {
            path: '/deposit',
            name: 'DepositRecord',
            component: DepositRecord,
            meta: {
                keepAlive: true
            }
        }
        ,{
            path: '/terminal/:code/clean',
            name: 'CleanTerminal',
            component: CleanTerminal,
            meta: {
                keepAlive: false
            }
        }
        ,{
            path: '/terminal/:code/manage',
            name: 'ManageBox',
            component: ManageBox,
            meta: {
                keepAlive: false
            }
        }
        ,{
            path: '/terminal/:code/manage/:id',
            name: 'ManageBoxDetail',
            component: ManageBoxDetail,
            meta: {
                keepAlive: false
            }
        }

        , {
            path: '/recvbox',
            name: 'RecvBox',
            component: RecvBox,
            meta: {
                keepAlive: false
            }
        }
        , {
            path: '/recvbox/edit',
            name: 'EditRecvBox',
            component: EditRecvBox,
            meta: {
                keepAlive: false
            }
        }
        , {
            path: '/recvbox/end',
            name: 'EndRecvBox',
            component: EndRecvBox,
            meta: {
                keepAlive: false
            }
        }       
        , {
            path: '/terminal/:code/equipmentinfo/:rackid',
            name: 'EquipmentBoxType',
            component: EquipmentBoxType,
            meta: {
                keepAlive: false
            }
        }
        , {
            path: '/terminal/:code/equipmentinfo/edit',
            name: 'EditEquipment',
            component: EditEquipment,
            meta: {
                keepAlive: false
            }
        }

    ]
})