<template>
  <div class="container">
    <h3>我是D组件</h3>
    <button @click="transform">点我让C组件接收到数据</button>
    <p>因为你点了C，所以我的信息发生了变化：{{ AMessage }}</p>
  </div>
</template>

<script>
import EventBug from '../event-bus/index'

export default {
  name: 'ChildD',
  props: {},
  mounted () {
    EventBug.$on('receiveAMsg', data => {
      this.AMessage = data.AMsg
    })
  },
  data: function () {
    return {
      AMessage: '',
      BMessage: 'Hello，C组件，我是D组件'
    }
  },
  methods: {
    transform () {
      EventBug.$emit('receiveBMsg', {
        BMsg: this.BMessage
      })
    }
  }
}
</script>

<style scoped>
</style>
