// generics com any e inseguro pois podemos passar qualquer tipagem nas
// arrays com T e possivel passar a tipagem esperada do retorno
function concatArray<T>(...itens: T[]): T[] {
    return new Array().concat(...itens); 
}
const numArray = concatArray<number[]>([1, 4], [2]);
const stringArray = concatArray<string[]>(['a', 'b'], ['c']);
console.log(numArray);
console.log(stringArray);