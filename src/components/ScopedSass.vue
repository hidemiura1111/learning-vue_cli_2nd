<template>
  <div class="border__blue">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'TestComponent',
  data() {
    return {
      msg: 'Scoped Sass'
    }
  }
}
</script>

<style scpoed lang="scss">
.border {
  &__blue {
    border: 1px solid blue;
  }
}
</style>