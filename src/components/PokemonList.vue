<template>
  <div>
    <h1>Pokemon</h1>
    <p v-if="!loaded">Loading...</p>
    <ul v-if="loaded">
      <li v-for="p in pokemon.slice(1)" :key="p.id" @click="setPokemon(p.id)" :class="p.primaryType">{{ p.name.charAt(0).toUpperCase() + p.name.slice(1, p.name.length / 2) }}<span :class="p.secondaryType">{{ p.name.slice(p.name.length / 2) }}</span></li></ul>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "PokemonList",
  props: {
    pokemon: Array,
    loaded: Boolean
  },
  computed: {
    ...mapGetters(['p'])
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
