// FizzBuzz
// Divisivel por 3 => 'Fizz'
// Divisivel por 5 => 'Buzz'
// Divisivel por 3 e 5 => 'FizzBuzz'
// Se não for número => 'Não é um número'
// Se não for divisivel nem por 3 e nem 5 => Entrada

let resultado = fizzbuzz(11);
console.log(resultado)

function fizzbuzz(entrada) {
    if (typeof entrada !== 'number')
        return 'Não é um número'
    if ((entrada % 3 === 0) && (entrada % 5 === 0))
        return 'FizzBuzz'
    if ((entrada % 3 === 0))
        return 'Fizz'
    if ((entrada % 5 === 0))
        return 'Buzz'
    return entrada
}
