<template>
  <div class="container">
    <h3>我是E组件</h3>
    <ChildF></ChildF>
  </div>
</template>

<script>
import ChildF from './ChildF.vue'

export default {
  name: 'ChildE',
  components: {
    ChildF
  },
  created: function () {

  },
  methods: {

  }
}
</script>

<style scoped>
</style>
