type casa = {
    id:number;
    nome:string;
}

const casa: casa = {
    id:1,
    nome:'sobrado'
};


interface robot  {
    readonly id: number,
    name: string;
    SayHello(): string;
}

// const robo:robot = {
//     id: 1,
//     name: 'Carlos'
// }

class Robozin implements robot {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    SayHello(): string {
        return "Hello";
    }
}


console.log(casa);
const p = new Robozin(1, 'Carlos');
console.log(p);
console.log(p.SayHello()); 