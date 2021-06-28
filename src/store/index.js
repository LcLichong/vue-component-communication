import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 初始化ChildA和ChildB组件的数据，等待获取
        AMsg: '',
        BMsg: ''
    },
    mutations: {
        receiveAMsg(state, payload) {
            // 将A组件的数据存放于state
            state.AMsg = payload.AMsg
        },
        receiveBMsg(state, payload) {
            // 将B组件的数据存放于state
            state.BMsg = payload.BMsg
        }
    },
    actions: {},
    modules: {}
})