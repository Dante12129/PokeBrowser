<template>
  <div>
    <h1>Pokemon</h1>
    <ul>
      <li v-for="p in pokemon" :key="p.id" @click="console.log(p.name)">{{ p.name }} ({{ p.id }})</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "PokemonList",
    props: {
      pokemon: Array
    },
    data: function () {
      return {
        console: console
      }
    }
  }
</script>

<style scoped>
  ul {
    list-style: none;
  }

  li:hover {
    background: #eeeeee;
  }
</style>
