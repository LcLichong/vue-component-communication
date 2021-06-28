<template>
  <div class="container">
    <ul>
      <li v-for="(item, index) in array" :key="item">
        {{ item }}
        <button @click="passIndex(index)">子组件通过$parent事件的方式，传值给父组件</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Child',
  created: function () {
  },
  data: function () {
    return {
      array: [],
      index: ''
    }
  },
  methods: {
    passIndex (index) {
      this.$parent.getIndex(index)
    }
  }
}
</script>

<style scoped>
</style>
