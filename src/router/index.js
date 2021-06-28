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
const ParentChildViewE = () =>
    import ('../views/parent-child/ViewE.vue')
const ParentChildViewF = () =>
    import ('../views/brother/ViewA.vue')
const ParentChildViewG = () =>
    import ('../views/brother/ViewB.vue')

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
    },
    {
        path: '/ParentChildViewE',
        name: 'ParentChildViewE',
        component: ParentChildViewE
    },
    {
        path: '/ParentChildViewF',
        name: 'ParentChildViewF',
        component: ParentChildViewF
    },
    {
        path: '/ParentChildViewG',
        name: 'ParentChildViewG',
        component: ParentChildViewG
    }
]

const router = new VueRouter({
    routes
})

export default router