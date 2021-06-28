<template>
  <div class="container">
    <h3>我是B组件</h3>
    <button @click="transform">点我让A组件接收到数据</button>
    <p>因为你点了A，所以我的信息发生了变化：{{ AMessage }}</p>
  </div>
</template>

<script>
export default {
  name: 'ChildB',
  props: {},
  data: function () {
    return {
      BMessage: 'Hello，A组件，我是B组件'
    }
  },
  computed: {
    AMessage () {
      // 这里存储从store里获取的B组件的数据
      return this.$store.state.AMsg
    }
  },
  methods: {
    transform () {
      // 触发receiveAMsg，将A组件的数据存放到store里去
      this.$store.commit('receiveBMsg', {
        BMsg: this.BMessage
      })
    }
  }
}
</script>

<style scoped>
</style>
