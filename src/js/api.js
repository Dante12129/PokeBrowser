export default {
  async getPokemon(id) {
    let json = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)).json();
    // console.log(json);
    return { name:json['name'], id:json['id'] };
  }
}
