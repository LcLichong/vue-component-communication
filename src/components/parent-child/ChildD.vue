<template>
  <div class="container">
    <ul>
      <li v-for="(item, index) in this.parent.array" :key="item">
        {{ item }}
        <button @click="passIndex(index)">子组件通过inject的方式，传值给父组件</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Child',
  created: function () {
    console.log(this.parent)
  },
  inject: {
    parent: {
      default: () => ({})
    }
  },
  methods: {
    passIndex (index) {
      this.parent.getIndex(index)
    }
  }
}
</script>

<style scoped>
</style>
