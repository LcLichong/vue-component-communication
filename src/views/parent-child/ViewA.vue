<template>
  <div class="container">
    <Parent></Parent>
  </div>
</template>

<script>
import Parent from '../../components/parent-child/ParentA.vue'

export default {
  name: 'ViewA',
  components: {
    Parent
  }
}
</script>

<style scoped>
</style>
