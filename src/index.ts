type hero = {
    name:  string;
    vulgo: string;
};

function printaObject(pessoa: hero) {
    console.log(pessoa)
}

printaObject({name: 'Bruce',
    vulgo: 'Batman'
})