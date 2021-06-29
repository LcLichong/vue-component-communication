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
const BrotherViewA = () =>
    import ('../views/brother/ViewA.vue')
const BrotherViewB = () =>
    import ('../views/brother/ViewB.vue')
const IgViewA = () =>
    import ('../views/inter-generational/ViewA.vue')
const IgViewB = () =>
    import ('../views/inter-generational/ViewB.vue')
const IgViewC = () =>
    import ('../views/inter-generational/ViewC.vue')

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
        path: '/BrotherViewA',
        name: 'BrotherViewA',
        component: BrotherViewA
    },
    {
        path: '/BrotherViewB',
        name: 'BrotherViewB',
        component: BrotherViewB
    },
    {
        path: '/IgViewA',
        name: 'IgViewA',
        component: IgViewA
    },
    {
        path: '/IgViewB',
        name: 'IgViewB',
        component: IgViewB
    },
    {
        path: '/IgViewC',
        name: 'IgViewC',
        component: IgViewC
    }
]

const router = new VueRouter({
    routes
})

export default router