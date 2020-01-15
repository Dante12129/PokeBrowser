<template>
  <div>
    <h1>{{ name.charAt(0).toUpperCase() + name.slice(1) }}</h1>
    <p>{{ id }}</p>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "PokemonDetail",
  computed: mapGetters(['name', 'id']),
}
</script>

<style scoped>

</style>
