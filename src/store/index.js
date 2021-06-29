import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 初始化ChildA和ChildB组件的数据，等待获取
        AMsg: '',
        BMsg: '',
        igArray1: []
    },
    mutations: {
        receiveAMsg(state, data) {
            // 将A组件的数据存放于state
            state.AMsg = data.AMsg
        },
        receiveBMsg(state, data) {
            // 将B组件的数据存放于state
            state.BMsg = data.BMsg
        },
        initIgArray1(state, data) {
            state.igArray1 = data.array
        }
    },
    actions: {},
    modules: {}
})