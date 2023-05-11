class Hero {
    name: string;
    power: number;
    life: number;
    weapon: Weapon;

    constructor(argname: string,argpower: number,arglife: number) {
        this.name = argname;
        this.power = argpower;
        this.life = arglife;
    }

    isAlive() {
        if (this.life > 0) {
            //return `${this.name} is alive`;
            return true
        } else {
            //return `${this.name} is dead`;
            return false
        }
    }

    attack(opponent: Hero) {
        if (this.isAlive()) {
            console.log(`${this.name} did ${this.power} damage to ${opponent.name} that had ${opponent.life} life `);
            opponent.life -= this.power;
            console.log(`${opponent.name} now has ${opponent.life} life `);
            return opponent.isAlive();
        } else {
            return `dead people can't attack`;  
        }            
    }


}

let firsthero = new Hero("bob",20,6)
let secondhero = new Hero("henri",5,20)

// exercice1
console.log(`------`);
console.log(firsthero.isAlive())
console.log(`------`);
console.log(secondhero.attack(firsthero))
console.log(`------`);
console.log(firsthero.attack(secondhero))
console.log(`------`);
console.log(secondhero.attack(firsthero))
