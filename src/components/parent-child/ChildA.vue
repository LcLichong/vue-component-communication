<template>
  <div class="container">
    <ul>
      <li v-for="(item, index) in array" :key="item">
        {{ item }}
        <button @click="passIndex(index)">子组件通过$emit事件的方式，传值给父组件</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Child',
  props: {
    array: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    passIndex (index) {
      this.$emit('getIndex', index)
    }
  }
}
</script>

<style scoped>
</style>
