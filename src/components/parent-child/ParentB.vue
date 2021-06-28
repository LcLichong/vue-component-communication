<template>
  <div class="container">
    <h2>父子组件通信方式2:$parent和$children</h2>
    <Child ref="Child1"></Child>
    <Child ref="Child2"></Child>
    <div>
      <button @click="add">添加一条数据，看看是否是响应式</button>
    </div>
    <div>
      <button @click="getChildren">通过$children直接获取子组件属性，如data和methods</button>
    </div>
  </div>
</template>

<script>
import Child from './ChildB.vue'

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
    },
    getChildren () {
      const childrens = this.$children
      for (let c of childrens) {
        alert(`组件的ref值为：${c.$vnode.data.ref}`)
        // 这里我们只获取Child1组件
        if (c.$vnode.data.ref === 'Child1') {
          alert(`我是${c.$vnode.data.ref}子组件，array值是：${c.array}，passIndex方法是${c.passIndex}`)
          break
        }
      }
    }
  }
}
</script>

<style scoped>
</style>
