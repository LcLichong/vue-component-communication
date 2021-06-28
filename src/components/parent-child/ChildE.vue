<template>
  <div class="container">
    <ul>
      <li v-for="(item, index) in $attrs.array" :key="item">
        {{ item }}
        <button @click="passIndex(index)">子组件通过$listeners的方式，传值给父组件</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Child',
  created: function () {
    console.log(this.$attrs)
    console.log(this.$listeners)
  },
  methods: {
    passIndex (index) {
      this.$listeners.getIndex(index)
    }
  }
}
</script>

<style scoped>
</style>
