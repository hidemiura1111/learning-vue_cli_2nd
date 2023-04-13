<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <TestComponent/>
    <SassTest/>
    <a href="users.html">Users Page</a><br>
    <a href="posts.html">Posts Page</a><br>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TestComponent from './components/TestComponent.vue'
import SassTest from './components/SassTest.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TestComponent,
    SassTest
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
