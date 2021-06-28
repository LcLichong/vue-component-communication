<template>
  <div class="container">
    <h2>父子组件通信方式1:props和$emit</h2>
    <Child :array="array" @getIndex="getIndex"></Child>
    <button @click="add">添加一条数据，看看是否是响应式</button>
  </div>
</template>

<script>
import Child from './ChildA.vue'

export default {
  name: 'Parent',
  components: {
    Child
  },
  data: function () {
    return {
      array: ['我是父组件传递的值1', '我是父组件传递的值2']
    }
  },
  methods: {
    getIndex (index) {
      alert(`这是子组件传过来的下标：${index}`)
    },
    add () {
      this.array.push(`我是父组件传递的值${this.array.length + 1}`)
    }
  }
}
</script>

<style scoped>
</style>
