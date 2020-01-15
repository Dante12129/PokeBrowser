import Pokemon from "@/js/pokemon";

export default {
  async getPokemon(id) {
    let json = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)).json();
    // console.log(json);
    return new Pokemon(json);
  }
}
