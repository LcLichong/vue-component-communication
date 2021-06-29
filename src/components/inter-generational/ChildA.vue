<template>
  <div class="container">
    <h3>我是A组件</h3>
    <ChildB></ChildB>
  </div>
</template>

<script>
import ChildB from './ChildB.vue'

export default {
  name: 'ChildA',
  components: {
    ChildB
  },
  methods: {

  }
}
</script>

<style scoped>
</style>
