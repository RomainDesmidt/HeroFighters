export class Weapon {
    name: string;
    damage: number;

    constructor(argname: string, dmg: number) {
        this.name = argname;
        this.damage = dmg;
    }
}

export class Hero {
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
        // if (this.isAlive()) {
            console.log(`${this.name} did ${this.power} damage to ${opponent.name} that had ${opponent.life} life `);
            if (typeof this.weapon !== 'undefined') {
                opponent.life -= (this.power + this.weapon.damage) ;
            } else {
                opponent.life -= this.power;   
            }
            console.log(`${opponent.name} now has ${opponent.life} life `);
            return opponent.isAlive();
        // } else {
        //     return `dead people can't attack`;  
        // }            
    }


}

export class HeroAxe extends Hero {
    weapon: Weapon;

    constructor(name: string,power: number, life: number) {
        super(name,power,life);
        this.weapon = new Weapon("axe",5);
    }

    attack(opponent: Hero) {
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

export class HeroSword extends Hero {
    weapon: Weapon;

    constructor(name: string,power: number, life: number) {
        super(name,power,life);
        this.weapon = new Weapon("sword",5);
    }

    attack(opponent: Hero) {
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

export class HeroSpear extends Hero {
    weapon: Weapon;

    constructor(name: string,power: number, life: number) {
        super(name,power,life);
        this.weapon = new Weapon("spear",5);
    }

    attacks(opponent: Hero) {
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

export class Arena {
    firsthero: Hero;
    secondhero: Hero;

    constructor(heroone: Hero, herotwo: Hero) {
        this.firsthero = heroone;
        this.secondhero = herotwo;
    }
    bothAlive() {
        if (this.firsthero.life > 0 && this.secondhero.life > 0) {
            return true;
        }
        return false;
    }
    
    bothDead() {
        if (this.firsthero.life <= 0 && this.secondhero.life <= 0) {
            return true;
        }
        return false;
    }
    
    thereCanOnlyBeOne() {
        while(this.bothAlive()) {
            this.firsthero.attack(this.secondhero);
            this.secondhero.attack(this.firsthero);
        }
        if (this.bothDead()) {
            return "No Winner"
        } else {
            if (this.firsthero.life > 0) {
                return `${this.firsthero.name} wins`
            } else {
                return `${this.secondhero.name} wins`
            }
        }
    }


}
