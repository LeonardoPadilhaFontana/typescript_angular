"use strict";
const casa = {
    id: 1,
    nome: 'sobrado'
};
// const robo:robot = {
//     id: 1,
//     name: 'Carlos'
// }
class Robozin {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    SayHello() {
        return "Hello";
    }
}
console.log(casa);
const p = new Robozin(1, 'Carlos');
console.log(p);
console.log(p.SayHello());
