export default class Character {
  constructor(name) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('name length must be 2-10 symbols');
    }
    this.name = name;
    this.health = 100;
    this.level = 1;
  }
}
