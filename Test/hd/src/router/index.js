import home from '../pages/App.vue';
const Agreement = r => require.ensure([], () => r(require('../pages/Agreement')), 'Agreement');
const Make = r => require.ensure([], () => r(require('../pages/Make')), 'Make');
const Examine = r => require.ensure([], () => r(require('../pages/Examine')), 'Examine');
const Submit = r => require.ensure([], () => r(require('../pages/submit')), 'Submit');
const choiceChest = r => require.ensure([], () => r(require('../pages/choiceChest')), 'choiceChest');
const allCity = r => require.ensure([], () => r(require('../pages/allCity')), 'allCity');
const Details = r => require.ensure([], () => r(require('../pages/details')), 'Details');
Vue.use(VueRouter)
export default new VueRouter({
    routes: [{
        path: '/',
        name: 'index',
        component: home
    }, {
        path: '/agreement',
        name: 'Agreement',
        component: Agreement
    }, {
        path: '/examine',
        name: 'Examine',
        component: Examine
    }, {
        path: '/make',
        name: 'Make',
        component: Make
    }, {
        path: '/submit',
        name: 'Submit',
        component: Submit
    }, {
        path: '/choicechest',
        name: 'choiceChest',
        component: choiceChest
    }, {
        path: '/allcity',
        name: 'allCity',
        component: allCity
    }, {
        path: '/details',
        name: 'Details',
        component: Details
    }]
})