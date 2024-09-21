// funcoes
function addNumber(x:number,y:number): number {


    return x+y;
}

function CallToPhone(phone: number | string): number | string {
    return phone;
}

let soma: number = addNumber(4,3);
console.log(soma)

console.log(CallToPhone('1199943939'))


// funcoes assincronas

async function getDatabase(id:number): Promise<string> {
    return 'Leonardo';
}