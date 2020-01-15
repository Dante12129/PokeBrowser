<template>
  <div id="app">
    <PokemonList :pokemon="pokemon"/>
  </div>
</template>

<script>
import PokemonList from "@/components/PokemonList";
import API from "@/js/api";
import Constants from "@/js/contants";

export default {
  name: 'app',
  components: {
    PokemonList
  },
  data: function() {
    return {
      pokemon: []
    };
  },
  methods: {
    async loadAllPokemon() {
      let promises = [];

      for (let i = Constants.POKEMON_MIN; i < Constants.POKEMON_MAX; ++i) {
        promises.push(new Promise((resolve) => {
          API.getPokemon(i).then(poke => {
            this.pokemon.push(poke);
            resolve();
          });
        }));
      }

      Promise.all(promises).then(() => this.pokemon.sort((a, b) => {
        return a.id < b.id ? -1 : 1;
      }));
    }
  },
  async mounted() {
    setTimeout(this.loadAllPokemon, 1500);
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Major+Mono+Display&display=swap');

#app {
  font-family: 'Major Mono Display', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
