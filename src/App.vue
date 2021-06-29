<template>
  <div id="app">
    <div id="nav">
      <router-link to="/ParentChildViewA">父子组件通信1</router-link>
      <router-link to="/ParentChildViewB">父子组件通信2</router-link>
      <router-link to="/ParentChildViewC">父子组件通信3</router-link>
      <router-link to="/ParentChildViewD">父子组件通信4</router-link>
      <router-link to="/ParentChildViewE">父子组件通信5</router-link>
    </div>
    <div id="nav">
      <router-link to="/BrotherViewA">兄弟组件通信1</router-link>
      <router-link to="/BrotherViewB">兄弟组件通信2</router-link>
    </div>
    <div id="nav">
      <router-link to="/IgViewA">隔代组件通信1</router-link>
      <router-link to="/IgViewB">隔代组件通信2</router-link>
      <router-link to="/IgViewC">隔代组件通信3</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

button {
  color: #42b983;
  background-color: #fff;
  outline: none;
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
}

button:hover {
  cursor: pointer;
}

ul {
  list-style: none;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
}

li {
  line-height: 50px;
}

.container {
  line-height: 50px;
}
</style>
