<template>
  <div>
    <h1>{{ p.name.charAt(0).toUpperCase() + p.name.slice(1) }}</h1>
    <p>ID: {{ p.id }}</p>
    <p>Primary Type: <span :class="p.primaryType">{{ p.primaryType.charAt(0).toUpperCase() + p.primaryType.slice(1) }}</span></p>
    <p v-if="p.secondaryType">Secondary Type: <span :class="p.secondaryType">{{ p.secondaryType.charAt(0).toUpperCase() + p.secondaryType.slice(1) }}</span></p>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "PokemonDetail",
  computed: mapGetters(['p'])
}
</script>

<style scoped>

</style>
