<template>
  <div class="container">
    <ul>
      <li v-for="(item, index) in array" :key="item">
        {{ item }}
        <button @click="passIndex(index)">子组件{{ $vnode.data.ref }}通过$parent事件的方式，传值给父组件</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Child',
  created: function () {
    console.log(this.$vnode.data.ref)
  },
  data: function () {
    return {
      array: this.$parent.array,
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
