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
  created: function() {
    for (let i = Constants.POKEMON_MIN; i < Constants.POKEMON_MAX; ++i) {
      API.getPokemon(i).then(poke => {
        this.pokemon.push(poke)
      });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Major Mono Display', monospace;
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #83b7e9;*/
}
</style>
