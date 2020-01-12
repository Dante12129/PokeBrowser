<template>
  <div>
    <p>{{ name }}</p>
    <p>{{ id }}</p>
  </div>
</template>

<script>
  export default {
    name: "Pokemon",
    props: {
      name: String,
      id: Number
    }
  }
</script>

<style scoped>

</style>
