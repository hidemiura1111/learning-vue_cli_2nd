<template>
  <div id="app">
    Users<br>
    <a href="index.html">Index Page</a><br>
    <a href="users.html">Users Page</a><br>
    <a href="posts.html">Posts Page</a><br>

    <multiselect v-model="value" :options="options"></multiselect>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  components: { Multiselect },
    data () {
      return {
        value: null,
        options: ['user1', 'user2', 'user3']
      }
    }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>

</style>