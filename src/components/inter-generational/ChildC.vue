<template>
  <div class="container">
    <h3>我是C组件</h3>
    <ChildD v-bind="$attrs" @getIndex="$listeners.getIndex"></ChildD>
  </div>
</template>

<script>
import ChildD from './ChildD.vue'

export default {
  name: 'ChildC',
  components: {
    ChildD
  },
  created: function () {

  },
  methods: {

  }
}
</script>

<style scoped>
</style>
