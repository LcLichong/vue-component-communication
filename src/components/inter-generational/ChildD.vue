<template>
  <div class="container">
    <h3>我是D组件</h3>
    <ul>
      <li v-for="(item, index) in $attrs.array" :key="item">
        {{ item }}
        <button @click="passIndex(index)">子组件通过$listeners的方式，传值给顶层组件</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ChildD',
  created: function () {
    console.log(this.$attrs)
    console.log(this.$listeners)
  },
  methods: {
    passIndex (index) {
      let data = {
        index,
        name: this.$options.name
      }
      this.$listeners.getIndex(data)
    }
  }
}
</script>

<style scoped>
</style>
