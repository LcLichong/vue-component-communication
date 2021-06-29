<template>
  <div class="container">
    <Parent></Parent>
  </div>
</template>

<script>
import Parent from '../../components/inter-generational/ParentB.vue'

export default {
  name: 'ViewB',
  components: {
    Parent
  }
}
</script>

<style scoped>
</style>
