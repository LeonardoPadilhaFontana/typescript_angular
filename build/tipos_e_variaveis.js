"use strict";
// tipos primitivos: boolean, number, string
let booleano = false;
let numero = 1;
let numeroQuebrado = 1.9;
let texto = 'teste';
//tipos especiais: null / undefined
let nulo = null; //so pode receber nulo
let indefinido = undefined; // so recebe undefined
//tipos abrangentes  any / void
let qualquerCoisa = 'qualquer dos tipos anteriormentes apontados';
let vazio; // usado em funcoes principalmente para que nao retornem nada
// objeto sem previsibilidade
let produto = { nome: 'Produto teste',
    valor: 10.92
};
let meuProduto = {
    nomeProd: 'Tenis',
    preco: 100,
    unidade: 'caixa'
};
// Declaracao de arrays
let dados = ['Leonardo', 'Fabio', 'antonio'];
let dados2 = ['Leonardo', 'Fabio', 'antonio'];
// arrays de multitypes aceitam tipagens declaradas
let infos = ['Leonardo', 28];
// tupla - array com ordem definida das tipagens
let boleto = ['Agua conta', 100.90, 30];
// datas
let aniver = new Date('2022-12-01 05:00');
console.log(aniver);
