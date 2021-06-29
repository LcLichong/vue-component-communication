<template>
  <div class="container">
    <h3>我是F组件</h3>
    <ul>
      <li v-for="(item, index) in array" :key="item">
        {{ item }}
        <button @click="passIndex(index)">子组件通过event-bus的方式，传值给顶层组件</button>
      </li>
    </ul>
  </div>
</template>

<script>
import EventBus from '../event-bus/index'

export default {
  name: 'ChildF',
  mounted: function () {
    EventBus.$on('initIgArray2', data => {
      this.array = data.array
    })
  },
  destroyed () {
    EventBus.$off('igPassIndex')
  },
  data: function () {
    return {
      array: []
    }
  },
  methods: {
    passIndex (index) {
      EventBus.$emit('igPassIndex', {
        name: this.$options.name,
        index
      })
    }
  }
}
</script>

<style scoped>
</style>
