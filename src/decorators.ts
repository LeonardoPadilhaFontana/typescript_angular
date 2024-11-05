// decorators - gatilhos de acao
function ExibirNome(target: any) {
    console.log(target);
}


@ExibirNome
class Funcionario {
    constructor(public nome: string) { }
}

@ExibirNome
class Jorge {}

