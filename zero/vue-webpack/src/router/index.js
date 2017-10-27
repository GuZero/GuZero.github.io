import HelloWorld from '../components/HelloWorld'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
        path: '/',
        name: 'Hello',
        component: HelloWorld
    }]
})