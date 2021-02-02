class Hero {
  constructor(name, type, health) {
    this.name = name;
    this.type = type;
    this.health = health;
  }

  attack() {
    console.log('Attack!');
  }

  jump() {
    console.log('Jump!');
  }
}

// Inheritance with method overriding
class Genji extends Hero {
  attack() {
    console.log('Shuriken!');
  }
  jump() {
    console.log('Double Jump!');
  }
}

class Pharah extends Hero {
  attack() {
    console.log('Rocket Launcher!');
  }
  jump() {
    console.log('Jump Jet!');
  }
}

// Demonstrate Object.assign
const newHero = { name: 'heronName', type: 'unknown', health: 0 };
const dpsHero = { name: 'Genji', type: 'Damage', health: 200 };

console.log('newHero before assign', newHero);

Object.assign(newHero, dpsHero);

console.log('newHero after assign', newHero);

const hero = new Hero();
const blade = new Genji();
const rocket = new Pharah();

hero.attack();
blade.attack();
rocket.attack();
