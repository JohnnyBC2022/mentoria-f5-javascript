// KATA: Fizz Buzz. Cada vez que haya un múltiplo de 3 debe imprimir Fizz. Cada vez que haya un múltiplo de 5, debe imprimir Buzz y cada vez que sea múltiplo de 3 y 5, debe imprimir Fizz-Buzz. En 100 números

for (let i = 1; i <= 100; i++) {
    
    if(i%3 == 0 && i%5==0) {
        console.log('Fizz-Buzz')
    }else if(i%5 == 0){
        console.log('Buzz')
    } else if(i%3 == 0){
        console.log('Fizz')
    } else {
        console.log(i)
    }

}