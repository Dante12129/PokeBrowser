export default class Pokemon {
  constructor(json) {
    this.name = json['name'];
    this.id = json['id'];
  }

}
