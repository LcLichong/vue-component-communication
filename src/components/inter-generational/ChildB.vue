<template>
  <div class="container">
    <h3>我是B组件</h3>
    <ul>
      <li v-for="(item, index) in igArray1" :key="item">
        {{ item }}
        <button @click="passIndex(index)">子组件通过inject的方式，传值给顶层组件</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ChildB',
  components: {

  },
  inject: {
    parent: {
      default: () => ({})
    }
  },
  computed: {
    igArray1 () {
      // 这里存储从store里获取的顶层组件的igArray1
      return this.$store.state.igArray1
    }
  },
  methods: {
    passIndex (index) {
      let data = {
        index,
        name: this.$options.name
      }
      this.parent.getIndex(data)
    }
  }
}
</script>

<style scoped>
</style>
