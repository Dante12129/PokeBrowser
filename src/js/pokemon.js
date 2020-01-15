export default class Pokemon {
  constructor(json) {
    this.name = json['name'];
    this.id = json['id'];
    if (json.types)
      this.type = json['types'][0]['type']['name'];
    else
      this.type = "none";
  }

}
