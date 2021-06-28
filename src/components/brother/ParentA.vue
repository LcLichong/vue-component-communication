<template>
  <div class="container">
    <h2>兄弟组件通信方式1:vuex</h2>
    <ChildA></ChildA>
    <ChildB></ChildB>
  </div>
</template>

<script>
import ChildA from './ChildA.vue'
import ChildB from './ChildB.vue'

export default {
  name: 'Parent',
  components: {
    ChildA,
    ChildB
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
