<template>
  <div>
    <h1>Pokemon</h1>
    <p v-if="!loaded">Loading...</p>
    <ul v-if="loaded">
      <li v-for="p in pokemon" :key="p.id" @click="setPokemon(p.id)" :class="p.type">{{ p.name.charAt(0).toUpperCase() + p.name.slice(1) }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PokemonList",
  props: {
    pokemon: Array,
    loaded: Boolean
  },
  methods: {
    setPokemon(id) {
      this.$store.commit('setCurrent', id);
    }
  }
}
</script>

<style scoped>
  @import "../assets/types.css";

ul {
  list-style: none;
  padding: 0;

  height: 80vh;
  overflow-y: scroll;
}

li:hover {
  background: #eeeeee;
}
</style>
