<template>
  <div id="app">
    <PokemonList id="left" :pokemon="pokemon" :loaded="loaded"/>
    <PokemonDetail id="right"/>
  </div>
</template>

<script>
import {mapState} from "vuex";

import PokemonList from "@/components/PokemonList";
import PokemonDetail from "@/components/PokemonDetail";
import API from "@/js/api";
import Constants from "@/js/contants";

export default {
  name: 'app',
  components: {
    PokemonDetail,
    PokemonList
  },
  computed: mapState(['pokemon']),
  data: function() {
    return {
      loaded: false
    };
  },
  methods: {
    async loadAllPokemon() {
      let promises = [];

      this.$store.commit('clear');
      for (let i = Constants.POKEMON_MIN; i < Constants.POKEMON_MAX; ++i) {
        promises.push(new Promise((resolve) => {
          API.getPokemon(i).then(p => {
            this.$store.commit('insertPokemon', p);
            resolve();
          });
        }));
      }

      Promise.all(promises).then(() => {
        this.$store.commit('sort');
        this.loaded = true;
      });
    }
  },
  async mounted() {
    setTimeout(this.loadAllPokemon, 1500);
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=VT323&display=swap');

#app {
  font-family: 'VT323', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  display: flex;
  justify-content: space-evenly;
}

#left {
  width: 15%;
}
#right {
  width: 80%;
}
</style>
