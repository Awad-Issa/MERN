class Ninja {

    constructor(name, health = 90, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName = () => console.log(this.name);

    showStats = () => console.log(`name: ${this.name}\nhealth:${this.health}\nspeed: ${this.speed}\nhealth: ${this.health}`);

    drinkSake = () => {

        this.health += 10;
        console.log("in thahabta llb7r tarat !!");
    };
}

class Sensei extends Ninja{

    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {

        super(name, health, speed , strength);
        this.wisdom = wisdom;
    }

    speakWisdom = () => {

        this.drinkSake();

        console.log("RKH IGF IEFO EGOFIG UOEGFOG")

    }

}

