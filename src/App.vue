<template>
  <div id="app">
    <Pokemon :name="name" :id="id" />
    <button @click="fetchNew">Find A Pokemon</button>
  </div>
</template>

<script>
import Pokemon from "@/components/Pokemon";
import Utils from "@/js/utils.js";
import Constants from "@/js/contants.js"

export default {
  name: 'app',
  components: {
    Pokemon
  },
  data: function() {
    return {
      name: 'None',
      id: 0
    };
  },
  methods: {
    fetchNew: function () {
      fetch(`https://pokeapi.co/api/v2/pokemon/${Utils.randomInt(Constants.POKEMON_MIN, Constants.POKEMON_MAX)}/`).then(response => response.json()).then(json => {
        console.log(json);
        this.name = json['name'];
        this.id = json['id'];
      });
    }
  },
  created: function() {
    this.fetchNew()
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
