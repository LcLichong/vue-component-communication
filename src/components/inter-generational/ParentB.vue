<template>
  <div class="container">
    <h2>隔代组件通信方式2:$attrs和$listeners</h2>
    <ChildC :array="array" @getIndex="getIndex"></ChildC>
    <button @click="add">添加一条数据，看看是否是响应式</button>
  </div>
</template>

<script>
import ChildC from './ChildC.vue'

export default {
  name: 'Parent',
  components: {
    ChildC
  },
  created () {

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
