<template>
  <div class="container">
    <h2>兄弟组件通信方式2:event-bus</h2>
    <ChildC></ChildC>
    <ChildD></ChildD>
  </div>
</template>

<script>
import ChildC from './ChildC.vue'
import ChildD from './ChildD.vue'

export default {
  name: 'Parent',
  components: {
    ChildC,
    ChildD
  },
  methods: {

  }
}
</script>

<style scoped>
.container {
  line-height: 30px;
}
</style>
