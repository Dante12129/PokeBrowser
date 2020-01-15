<template>
  <ul>
    <li v-for="p in pokemon" :key="p.id">{{ p.name }} ({{ p.id }})</li>
  </ul>
</template>

<script>
  export default {
    name: "PokemonList",
    props: {
      pokemon: Array
    }
  }
</script>

<style scoped>

</style>
