<template>
  <div>
    <h1>Pokemon</h1>
    <p v-if="!loaded">loading...</p>
    <ul v-if="loaded">
      <li v-for="p in pokemon" :key="p.id" @click="setPokemon(p.id)">{{ p.name }}</li>
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
  ul {
    list-style: none;
    /*display: inline;*/
    display: inline-block;

    height: 75vh;
    overflow-y: scroll;
  }

  li:hover {
    background: #eeeeee;
  }
</style>
