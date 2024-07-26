// KATA: Fizz Buzz. Cada vez que haya un múltiplo de 3 debe imprimir Fizz. Cada vez que haya un múltiplo de 5, debe imprimir Buzz y cada vez que sea múltiplo de 3 y 5, debe imprimir Fizz-Buzz. En 100 números

// 3 6 9 12 ... fizz
// 5 10 15 20 ... buzz
// 15 30 45 ... fizzbuzz

/*
Noooooo
for (let i = 1; i <= 100 ; i++) {
    if (i % 3 === 0){
        console.log(`${i} fizz`)
    } else if (i % 5 === 0){
        console.log(`${i} buzz`)
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} fizz buzz!!!`)
    }
}

*/

for (let i = 1; i <= 100 ; i++) {
    if (i % 3 === 0 && i % 5 === 0){
        console.log(`${i} fizz buzz!!!`)
    } else if (i % 3 === 0){
        console.log(`${i} fizz`)
    } else if (i % 5 === 0) {
        console.log(`${i} buzz`)
    } else {
        console.log(`${i}`)
    }
}