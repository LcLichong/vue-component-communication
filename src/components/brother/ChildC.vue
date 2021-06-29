<template>
  <div class="container">
    <h3>我是C组件</h3>
    <button @click="transform">点我让D组件接收到数据</button>
    <p>因为你点了D，所以我的信息发生了变化：{{ BMessage }}</p>
  </div>
</template>

<script>
import EventBus from '../event-bus/index'

export default {
  name: 'ChildC',
  props: {},
  mounted () {
    EventBus.$on('receiveBMsg', data => {
      this.BMessage = data.BMsg
    })
  },
  destroyed () {
    EventBus.$off('receiveAMsg')
  },
  data: function () {
    return {
      AMessage: 'Hello，D组件，我是C组件',
      BMessage: ''
    }
  },
  methods: {
    transform () {
      EventBus.$emit('receiveAMsg', {
        AMsg: this.AMessage
      })
    }
  }
}
</script>

<style scoped>
</style>
