export default class Pokemon {
  static emptyPokemon = {name:"Select A Pokemon", id: 0, primaryType:"None"};

  constructor(json) {
    this.name = json['name'];
    this.id = json['id'];
    if (json.types.length === 1)
      this.primaryType = json['types'][0]['type']['name'];
    else if(json.types.length === 2) {
      this.primaryType = json['types'][1]['type']['name'];
      this.secondaryType = json['types'][0]['type']['name'];
    }
  }

}
