// clasess

/*
    Data modifiers
    public
    private
    protected
*/
class Personagem {
    private name?: string;
    strenght: number;
    skill: number;

    constructor(name: string, strenght: number, skill: number) {
        this.name = name;
        this.strenght = strenght;
        this.skill = skill;
    }
    atack() {
        console.log(`${this.name} atack with ${this.strenght} points of damage!`);
    }
}


class PersonagemMago extends Personagem {
    public mana: number;

    constructor(name: string, strenght: number, skill: number, mana: number) {
        super(name, strenght, skill);
        this.mana = mana;
    }

    atack() {
        console.log(`atack with ${this.mana} points of damage!`);
    }
}


const char = new Personagem('Otavio', 10, 10);
const charMago = new PersonagemMago('Otavio', 10, 10, 100);
char.atack();
charMago.atack();