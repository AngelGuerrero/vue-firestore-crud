<template>
  <div id="app">
    <img alt="Vue logo" width="100px" height="100px" src="./assets/logo.png" />
    <TodoComponent />
  </div>
</template>

<script>
import TodoComponent from "./components/TodoComponent.vue";

export default {
  name: "App",

  components: {
    TodoComponent
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
