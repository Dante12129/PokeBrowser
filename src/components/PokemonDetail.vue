<template>
  <div>
    <h1>{{ name }}</h1>
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
