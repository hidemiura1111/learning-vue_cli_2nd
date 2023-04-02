<template>
  <div class="border__blue">
    <h1>{{ msg }}</h1>
    <div class="background__primary">
      Global Sass
    </div>
  </div>
</template>

<script>
export default {
  name: 'SassTest',
  data() {
    return {
      msg: 'SassTest'
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
.background {
  &__primary {
    background-color: $color-primary;
  }
}
</style>