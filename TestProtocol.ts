import {Arena,Weapon,Hero,HeroAxe,HeroSword,HeroSpear} from './HeroFighters';

let firsthero = new Hero("bob",20,6);
let secondhero = new Hero("henri",5,20);
let thirdhero = new HeroAxe("gael",10,20);
let fourthhero = new HeroSword("calvin",10,20);
let fifthhero = new Hero("basile", 20, 20);
let myarenawater = new Arena(thirdhero,fourthhero)
let myarenafire = new Arena(firsthero,secondhero)




/* // exercice1
// console.log(`------`);
// console.log(firsthero.isAlive())
// console.log(`------`);
// console.log(secondhero.attack(firsthero))
// console.log(`------`);
// console.log(firsthero.attack(secondhero))
// console.log(`------`);
// console.log(secondhero.attack(firsthero))
*/

/* // exercice 2
// console.log(`1------`);
// console.log(`${thirdhero.name} attack ${fourthhero.name} :`)
// console.log(`${fourthhero.name} is alive : ${thirdhero.attackaxe(fourthhero)}`);
// console.log(`2------`);
// console.log(`${thirdhero.name} attack ${fifthhero.name} :`)
// console.log(`${fifthhero.name} is alive : ${thirdhero.attackaxe(fifthhero)}`);
// console.log(`3------`);
// console.log(`${firsthero.name} attack ${fifthhero.name} :`)
// console.log(`${fifthhero.name} is alive : ${firsthero.attack(fifthhero)}`);
// console.log(`4------`);
// console.log(`${firsthero.name} is alive : ${firsthero.isAlive()}`);
// console.log(`${secondhero.name} is alive : ${secondhero.isAlive()}`);
// console.log(`${thirdhero.name} is alive : ${thirdhero.isAlive()}`);
// console.log(`${fourthhero.name} is alive : ${fourthhero.isAlive()}`);
// console.log(`${fifthhero.name} is alive : ${fifthhero.isAlive()}`); */

/* // exercice3
// console.log(`1------`);
// console.log(myarenawater.thereCanOnlyBeOne());
// console.log(`2------`);
// console.log(myarenafire.thereCanOnlyBeOne()); */