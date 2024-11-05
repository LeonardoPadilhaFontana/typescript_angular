"use strict";
// generics
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 4], [2]);
const stringArray = concatArray(['a', 'b'], ['c']);
console.log(numArray);
console.log(stringArray);
