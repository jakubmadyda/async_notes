// function *magic() {
//     console.log(1);
//     yield 2;
//     console.log(3);
//     yield 4;
//     console.log(5);
// }
//
// const gen = magic();
//
// console.log(gen)
//
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

function *infinity() {
    let id = 1
    while(true){
        yield id;
        id++;
    }
}

const genNumbers = infinity();
//
// console.log(genNumbers.next().value)
// console.log(genNumbers.next().value)
// console.log(genNumbers.next().value)
// console.log(genNumbers.next().value)
// console.log(genNumbers.next().value)

function *coroMagic() {
    let a = 10;
    let b = yield 15 + a;
    yield b;
}

const c = coroMagic();

// console.log(c.next())
// console.log(c.next(45))

function *getData() {
    const response = yield fetch('http://api.nbp.pl/api/exchangerates/rates/a/chf/')
    console.log(response);
}

const gen = getData();
gen.next().value.then((response) => gen.next(response));
