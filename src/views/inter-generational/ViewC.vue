<template>
  <div class="container">
    <Parent></Parent>
  </div>
</template>

<script>
import Parent from '../../components/inter-generational/ParentC.vue'

export default {
  name: 'ViewC',
  components: {
    Parent
  }
}
</script>

<style scoped>
</style>
