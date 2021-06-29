<template>
  <div class="container">
    <h2>隔代组件通信方式1:vuex、provide、inject</h2>
    <ChildA></ChildA>
    <button @click="add">添加一条数据，看看是否是响应式</button>
  </div>
</template>

<script>
import ChildA from './ChildA.vue'
import Vue from 'vue'

export default {
  name: 'Parent',
  components: {
    ChildA
  },
  created () {
    this.$store.commit('initIgArray1', {
      array: this.array
    })
  },
  provide () {
    let parent = Vue.observable({
      getIndex: this.getIndex
    })
    return {
      parent
    }
  },
  data: function () {
    return {
      array: ['我是顶层组件传递的值1', '我是顶层组件传递的值2']
    }
  },
  methods: {
    getIndex (data) {
      alert(`这是${data.name}组件传过来的下标：${data.index}`)
    },
    add () {
      this.array.push(`我是顶层组件传递的值${this.array.length + 1}`)
    }
  }
}
</script>

<style scoped>
</style>
