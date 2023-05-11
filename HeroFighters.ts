class Weapon {
    name: string;

    constructor(argname: string) {
        this.name = argname;
    }
}

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

class HeroAxe extends Hero {
    weapon: Weapon;

    constructor(name: string,power: number, life: number) {
        super(name,power,life);
        this.weapon = new Weapon("axe");
    }

    attackaxe(opponent: Hero) {
        if (opponent instanceof HeroSword) {
            this.power = this.power * 2;
            super.attack(opponent);
            this.power = this.power / 2;
            return opponent.isAlive();
            //return opponent.life;
        } else {
            super.attack(opponent);
            //return opponent.life;
            return opponent.isAlive();
        }
    }

}

class HeroSword extends Hero {
    weapon: Weapon;

    constructor(name: string,power: number, life: number) {
        super(name,power,life);
        this.weapon = new Weapon("sword");
    }

    attacksword(opponent: Hero) {
        if (opponent instanceof HeroSpear) {
            this.power = this.power * 2;
            super.attack(opponent);
            this.power = this.power / 2;
            return opponent.isAlive();
            //return opponent.life;
        } else {
            super.attack(opponent);
            //return opponent.life;
            return opponent.isAlive();
        }
    }    
}

class HeroSpear extends Hero {
    weapon: Weapon;

    constructor(name: string,power: number, life: number) {
        super(name,power,life);
        this.weapon = new Weapon("spear");
    }

    attackspear(opponent: Hero) {
        if (opponent instanceof HeroAxe) {
            this.power = this.power * 2;
            super.attack(opponent);
            this.power = this.power / 2;
            return opponent.isAlive();
            //return opponent.life;
        } else {
            super.attack(opponent);
            //return opponent.life;
            return opponent.isAlive();
        }
    }    
}


let firsthero = new Hero("bob",20,6)
let secondhero = new Hero("henri",5,20)
let thirdhero = new HeroAxe("gael",10,10)
let fourthhero = new HeroSword("calvin",20,20)
let fifthhero = new Hero("basile", 20, 20);


// exercice1
// console.log(`------`);
// console.log(firsthero.isAlive())
// console.log(`------`);
// console.log(secondhero.attack(firsthero))
// console.log(`------`);
// console.log(firsthero.attack(secondhero))
// console.log(`------`);
// console.log(secondhero.attack(firsthero))

// exercice 2
console.log(`------`);
console.log(thirdhero.attackaxe(fourthhero));
console.log(`------`);
console.log(thirdhero.attackaxe(fifthhero));
console.log(`------`);
console.log(firsthero.attack(fifthhero));
console.log(`------`);
console.log(fourthhero.isAlive());
console.log(`------`);
