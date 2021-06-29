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
    console.log('c-attrs', this.$attrs)
    console.log('c-listeners', this.$listeners)
  },
  methods: {

  }
}
</script>

<style scoped>
</style>
