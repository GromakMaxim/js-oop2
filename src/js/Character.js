export default class Character {
  constructor(name) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('name length must be 2-10 symbols');
    }
    this.name = name;
    this.health = 100;
    this.level = 1;
  }

  lvlUp(){
    if (this.health <=0) throw new Error ('Cant set lvl to dead character');
    this.level+=1;
    this.attack += (this.attack * 20) / 100;
    this.defence += (this.defence * 20) / 100;
    this.health=100;
  }

  getDamage(points){
    if (this.health <=0) throw new Error ('Cant set damage: character has already died');
    this.health -= points * (1 - this.defence / 100);
  }
}
