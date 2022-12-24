export default class Character {
  constructor(name) {
    if (typeof name !== 'string') {
      throw new Error('Тип имени не является строкой');
    }
    if (name.length < 2 || name.length > 10) {
      throw new Error('Минимальная длина имени 2 символа, макимальная до 10');
    }

    this.name = name;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Нельзя повысить уровень трупа');
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
