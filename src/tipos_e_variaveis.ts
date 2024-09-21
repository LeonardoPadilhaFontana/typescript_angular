// tipos primitivos: boolean, number, string
let booleano:boolean = false;
let numero:number = 1;
let numeroQuebrado:number = 1.9;
let texto:string = 'teste';


//tipos especiais: null / undefined
let nulo: null = null;//so pode receber nulo
let indefinido: undefined = undefined; // so recebe undefined

//tipos abrangentes  any / void
let qualquerCoisa: any = 'qualquer dos tipos anteriormentes apontados';
let vazio: void; // usado em funcoes principalmente para que nao retornem nada

// objeto sem previsibilidade
let produto: object = {nome:'Produto teste',
    valor: 10.92
    };

//objeto tipado com previsibilidade
type ProdutoLoja = {
nomeProd: string;
preco: number;
unidade: string;

}

let meuProduto: ProdutoLoja = {
nomeProd:'Tenis',
preco: 100,
unidade: 'caixa'
}

// Declaracao de arrays

let dados: string[] = ['Leonardo', 'Fabio', 'antonio']

let dados2: Array<string> = ['Leonardo', 'Fabio', 'antonio']


// arrays de multitypes aceitam tipagens declaradas
let infos: (string | number)[] = ['Leonardo',28]
// tupla - array com ordem definida das tipagens

let boleto:[string, number, number] = ['Agua conta', 100.90, 30]
// datas
let aniver: Date = new Date('2022-12-01 05:00')
console.log(aniver)