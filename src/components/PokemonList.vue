<template>
  <div>
    <h1>Pokemon</h1>
    <ul>
      <li v-for="p in pokemon" :key="p.id" @click="setPokemon(p.id)">{{ p.name }} ({{ p.id }})</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PokemonList",
  props: {
    pokemon: Array
  },
  methods: {
    setPokemon(id) {
      this.$store.commit('setCurrent', id);
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
