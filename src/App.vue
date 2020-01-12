<template>
  <div id="app">
    <Pokemon :name="name" :id="id" />
  </div>
</template>

<script>
import Pokemon from "@/components/Pokemon";
import Utils from "@/js/Utils.js";

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
  created: function() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${Utils.randomInt(1, 807)}/`).then(response => response.json()).then(json => {
      console.log(json);
      this.name = json['name'];
      this.id = json['id'];
    });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
