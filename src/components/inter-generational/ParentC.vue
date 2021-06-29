<template>
  <div class="container">
    <h2>隔代组件通信方式3:event-bus</h2>
    <ChildE></ChildE>
    <button @click="add">添加一条数据，看看是否是响应式</button>
  </div>
</template>

<script>
import ChildE from './ChildE.vue'
import EventBus from '../event-bus/index'

export default {
  name: 'Parent',
  components: {
    ChildE
  },
  mounted () {
    EventBus.$emit('initArray', {
      array: this.array
    })
    EventBus.$on('passIndex', data => {
      this.getIndex(data)
    })
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
