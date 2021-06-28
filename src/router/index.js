import Vue from 'vue'
import VueRouter from 'vue-router'
const ParentChildViewA = () =>
    import ('../views/parent-child/ViewA.vue')
const ParentChildViewB = () =>
    import ('../views/parent-child/ViewB.vue')
const ParentChildViewC = () =>
    import ('../views/parent-child/ViewC.vue')
const ParentChildViewD = () =>
    import ('../views/parent-child/ViewD.vue')

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        redirect: '/ParentChildViewA'
    },
    {
        path: '/ParentChildViewA',
        name: 'ParentChildViewA',
        component: ParentChildViewA
    },
    {
        path: '/ParentChildViewB',
        name: 'ParentChildViewB',
        component: ParentChildViewB
    },
    {
        path: '/ParentChildViewC',
        name: 'ParentChildViewC',
        component: ParentChildViewC
    },
    {
        path: '/ParentChildViewD',
        name: 'ParentChildViewD',
        component: ParentChildViewD
    }
]

const router = new VueRouter({
    routes
})

export default router