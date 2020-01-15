<template>
  <div>
    <p>{{ name }}</p>
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
